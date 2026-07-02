const BACKEND_URL = "https://smartpilgrim-backend.onrender.com";

let globalTemplesRegistry = [];
let globalFamousList = [];
let activeTrackingIntervalId = null;
let currentSelectedTempleId = "tirupati";

document.addEventListener('DOMContentLoaded', () => {
    initializeApplicationCore();
    setupEventListeners();
});

function initializeApplicationCore() {
    console.log("Connecting to live multi-temple cloud infrastructure...");
    
    fetch(`${BACKEND_URL}/api/temples`)
        .then(response => {
            if (!response.ok) throw new Error("Database collection lookup failed.");
            return response.json();
        })
        .then(data => {
            globalTemplesRegistry = data.allTemples || [];
            globalFamousList = data.famousTemples || [];
            
            console.log(`Successfully mapped ${globalTemplesRegistry.length} shrines across cloud channels.`);
            
            startTelemetrySyncLoop("tirupati");
        })
        .catch(error => {
            console.error("Critical Connection Failure to database registries mapping arrays:", error);
            showUiConnectionError();
        });
}

function startTelemetrySyncLoop(templeId) {
    currentSelectedTempleId = templeId;
    
    if (activeTrackingIntervalId) {
        clearInterval(activeTrackingIntervalId);
    }
    
    fetchLiveMetrics(templeId);
    
    activeTrackingIntervalId = setInterval(() => {
        fetchLiveMetrics(currentSelectedTempleId);
    }, 3500);
}

function fetchLiveMetrics(templeId) {
    fetch(`${BACKEND_URL}/api/live-status?templeId=${templeId}`)
        .then(response => {
            if (!response.ok) throw new Error("Endpoint returned invalid routing response.");
            return response.json();
        })
        .then(metrics => {
            updateDashboardMetricsUi(metrics);
        })
        .catch(error => {
            console.warn("Server disconnected or timed out during telemetry sync loops processing.", error);
        });
}

function updateDashboardMetricsUi(metrics) {
    const footfallEl = document.getElementById("footfall-counter") || document.querySelector(".Live Active Footfall or search indicator elements");
    const waitTimeEl = document.getElementById("wait-time-counter") || document.querySelector(".Estimated Darshan Queue Wait elements");
    const flowStatusEl = document.getElementById("flow-status-text") || document.querySelector(".Token Counters Activity element flow status text");
    
    if(footfallEl) footfallEl.innerText = metrics.crowdCount.toLocaleString() + " Pilgrims";
    if(waitTimeEl) waitTimeEl.innerText = metrics.waitTime;
    if(flowStatusEl) {
        flowStatusEl.innerText = metrics.crowdStatus;
    }
    
    const zone1Bar = document.getElementById("zone1-saturation-bar");
    const zone2Bar = document.getElementById("zone2-saturation-bar");
    if(zone1Bar) zone1Bar.style.width = `${metrics.zones.zone1}%`;
    if(zone2Bar) zone2Bar.style.width = `${metrics.zones.zone2}%`;
}

function showUiConnectionError() {
    const ticker = document.querySelector(".matching-results-indicator or banner elements text content");
    if(ticker) ticker.innerText = "Cloud connection error. Running data pipelines offline fallback models.";
}

function submitDarshanSlotBooking(bookingPayload) {
    fetch(`${BACKEND_URL}/api/book-slot`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingPayload)
    })
    .then(res => res.json())
    .then(receipt => {
        if(receipt.success) {
            alert(`Booking Secured! Token Generated ID: ${receipt.pass.tokenId}`);
        } else {
            alert(`Booking Denied: ${receipt.message}`);
        }
    })
    .catch(err => console.error("Error committing reservation slot package arrays:", err));
}

function setupEventListeners() {
}