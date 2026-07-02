// ==========================================
// CENTRAL CLOUD GATEWAY CONFIGURATION
// ==========================================
const BACKEND_URL = "https://smartpilgrim-backend.onrender.com";

// Application State Variables
let globalTemplesRegistry = [];
let globalFamousList = [];
let activeTrackingIntervalId = null;

// Global Form Variables
let selectedDate = "30th July 2026";
let selectedTimeSlotText = "Morning Quota (06:00 AM - 12:00 PM)";
let selectedTempleObject = { id: "tirupati", name: "Tirumala Venkateswara Temple", state: "Andhra Pradesh", ticketPrice: 300, dressCode: "Dhoti/Vesti or Kurta for Gents. Saree or Chudidar with Dupatta for Ladies." };

// Initial Bootstrapping
document.addEventListener('DOMContentLoaded', () => {
    SmartPilgrimApp.initializeApplicationCore();
    SmartPilgrimApp.setupTabNavigation();
});

// ==========================================
// MAIN APPLICATION ENGINE INTERFACE
// ==========================================
const SmartPilgrimApp = {

    // 1. Fetch Primary Temple Array Registries
    initializeApplicationCore: () => {
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
                
                // Populate default Quick Menu in search dropdown
                SmartPilgrimApp.renderDropdownStack(globalFamousList);
                
                // Spin up live status metric engine loop for default temple (Tirupati)
                SmartPilgrimApp.startTelemetrySyncLoop("tirupati");
            })
            .catch(error => {
                console.error("Critical Connection Failure to database registries:", error);
                const ticker = document.getElementById("live-ticker-banner");
                if (ticker) ticker.innerText = "Cloud Connection Error. Unable to fetch temple array metrics.";
            });
    },

    // 2. Real-Time Telemetry Background Sync Loops
    startTelemetrySyncLoop: (templeId) => {
        if (activeTrackingIntervalId) {
            clearInterval(activeTrackingIntervalId);
        }
        
        SmartPilgrimApp.fetchLiveMetrics(templeId);
        
        activeTrackingIntervalId = setInterval(() => {
            SmartPilgrimApp.fetchLiveMetrics(templeId);
        }, 3500);
    },

    fetchLiveMetrics: (templeId) => {
        fetch(`${BACKEND_URL}/api/live-status?templeId=${templeId}`)
            .then(response => {
                if (!response.ok) throw new Error("Endpoint returned invalid routing response.");
                return response.json();
            })
            .then(metrics => {
                SmartPilgrimApp.updateDashboardMetricsUi(metrics);
            })
            .catch(error => {
                console.warn("Server disconnected or timed out during telemetry sync loops processing.", error);
            });
    },

    // 3. Update Dashboard Elements
    updateDashboardMetricsUi: (metrics) => {
        const crowdCountEl = document.getElementById("live-crowd-count");
        const waitTimeEl = document.getElementById("live-wait-time");
        const tokenProcessingEl = document.getElementById("live-token-processing");
        const crowdBadge = document.getElementById("crowd-badge");
        
        if (crowdCountEl) crowdCountEl.innerText = metrics.crowdCount.toLocaleString();
        if (waitTimeEl) waitTimeEl.innerText = metrics.waitTime;
        if (tokenProcessingEl) tokenProcessingEl.innerText = metrics.crowdStatus;
        
        if (crowdBadge) {
            crowdBadge.innerText = metrics.crowdStatus === "Heavy Crowds" ? "🔴 Heavy Crowd Density" : "🟢 Normal Flow";
            crowdBadge.className = metrics.crowdStatus === "Heavy Crowds" ? "status-pill state-heavy" : "status-pill state-moving";
        }

        // Zone Fill Bars
        const barFill1 = document.getElementById("bar-fill-1");
        const barFill2 = document.getElementById("bar-fill-2");
        const barVal1 = document.getElementById("bar-val-1");
        const barVal2 = document.getElementById("bar-val-2");

        if (barFill1 && barVal1) {
            barFill1.style.width = `${metrics.zones.zone1}%`;
            barVal1.innerText = `${metrics.zones.zone1}%`;
        }
        if (barFill2 && barVal2) {
            barFill2.style.width = `${metrics.zones.zone2}%`;
            barVal2.innerText = `${metrics.zones.zone2}%`;
        }

        // Quota Slot Numbers
        const quotaS1 = document.getElementById("quota-s1");
        const quotaS2 = document.getElementById("quota-s2");
        if (quotaS1) quotaS1.innerText = `${metrics.slots.morning} Slots Left`;
        if (quotaS2) quotaS2.innerText = `${metrics.slots.afternoon} Slots Left`;
    },

    // ==========================================
    // INTERACTIVE LIVE SEARCH COMPONENT LOGIC
    // ==========================================
    showSearchDropdown: () => {
        const dropdown = document.getElementById("search-dropdown-menu");
        if (dropdown) dropdown.classList.remove("hidden");
    },

    hideSearchDropdown: () => {
        // Delayed slightly so clicks on items register before menu vanishes
        setTimeout(() => {
            const dropdown = document.getElementById("search-dropdown-menu");
            if (dropdown) dropdown.classList.add("hidden");
        }, 250);
    },

    processSearchQuery: () => {
        const searchInput = document.getElementById("global-temple-search");
        const menuTitle = document.getElementById("dropdown-menu-title");
        
        if (!searchInput) return;
        const queryStr = searchInput.value.toLowerCase().trim();

        if (queryStr === "") {
            if (menuTitle) menuTitle.innerText = "20 Famous Indian Temples (Quick Menu)";
            SmartPilgrimApp.renderDropdownStack(globalFamousList);
            return;
        }

        if (menuTitle) menuTitle.innerText = "Search Results Matrix";
        
        const filteredShrines = globalTemplesRegistry.filter(temple => 
            temple.name.toLowerCase().includes(queryStr) || 
            temple.state.toLowerCase().includes(queryStr)
        );

        SmartPilgrimApp.renderDropdownStack(filteredShrines);
    },

    renderDropdownStack: (listArray) => {
        const container = document.getElementById("dropdown-results-container");
        if (!container) return;

        container.innerHTML = "";

        if (listArray.length === 0) {
            container.innerHTML = `<div style="padding: 12px; color: #888; font-size: 0.9rem;">No matching shrines found in directory tree data.</div>`;
            return;
        }

        listArray.slice(0, 10).forEach(temple => {
            const rowItem = document.createElement("div");
            rowItem.style.padding = "10px 15px";
            rowItem.style.cursor = "pointer";
            rowItem.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
            rowItem.style.fontSize = "0.9rem";
            rowItem.style.color = "#fff";
            rowItem.innerHTML = `<strong>${temple.name}</strong> <span style="font-size:0.75rem; color:#b08d57; float:right;">${temple.state}</span>`;
            
            rowItem.onmousedown = () => {
                SmartPilgrimApp.selectTempleDestination(temple);
            };

            container.appendChild(rowItem);
        });
    },

    selectTempleDestination: (temple) => {
        selectedTempleObject = temple;
        
        // Update Search Bar Context
        const searchInput = document.getElementById("global-temple-search");
        if (searchInput) searchInput.value = temple.name;

        // Update Dashboard Main Display Titles
        const displayTitle = document.getElementById("display-temple-title");
        const displayState = document.getElementById("display-temple-state");
        const advDress = document.getElementById("adv-dress");
        const marqueeTicker = document.getElementById("live-ticker-banner");

        if (displayTitle) displayTitle.innerText = temple.name;
        if (displayState) displayState.innerText = temple.state;
        if (advDress) advDress.innerText = temple.dressCode || "Traditional Indian clothing parameters apply across checkout gates.";
        if (marqueeTicker) marqueeTicker.innerText = `Data Streams Active for ${temple.name} (${temple.state}). Verification channels are fully armed.`;

        // Update Booking Section Receipts
        const displayBookingPrice = document.getElementById("display-booking-price");
        const receiptTemple = document.getElementById("receipt-temple");
        const receiptPrice = document.getElementById("receipt-price");

        if (displayBookingPrice) displayBookingPrice.innerText = `₹${temple.ticketPrice}`;
        if (receiptTemple) receiptTemple.innerText = temple.name;
        if (receiptPrice) receiptPrice.innerText = `₹${temple.ticketPrice}.00`;

        // Re-align tracking interval network links
        SmartPilgrimApp.startTelemetrySyncLoop(temple.id);
        SmartPilgrimApp.showToastNotification(`Switched grid to ${temple.name}`);
    },

    // ==========================================
    // SLOT SELECTION AND FORM SUBMISSION ENGINE
    // ==========================================
    selectBookingDate: (dayNum) => {
        const monthYearStr = dayNum > 10 ? "th July 2026" : "st August 2026";
        selectedDate = `${dayNum < 10 ? '0' + dayNum : dayNum}${monthYearStr}`;
        
        const receiptDate = document.getElementById("receipt-date");
        if (receiptDate) receiptDate.innerText = selectedDate;

        // Toggle visual active tiles
        const days = document.querySelectorAll(".calendar-day");
        days.forEach(d => d.classList.remove("active"));
        event.currentTarget.classList.add("active");
    },

    selectTimeSlot: (element, slotString) => {
        selectedTimeSlotText = slotString;
        const receiptTime = document.getElementById("receipt-time");
        if (receiptTime) receiptTime.innerText = slotString.split(' ')[0] + " Quota";

        const tiles = document.querySelectorAll(".slot-tile");
        tiles.forEach(t => t.classList.remove("selected"));
        element.classList.add("selected");
    },

    executeLiveServerBooking: () => {
        const pilgrimInput = document.getElementById("pilgrim-id");
        if (!pilgrimInput) return;

        const idValue = pilgrimInput.value.replace(/\s+/g, '').trim();

        if (idValue.length < 12) {
            alert("Security Check Failed: Verification identifier must be at least 12 digits.");
            return;
        }

        const bookingPayload = {
            templeId: selectedTempleObject.id,
            aadhaar: idValue, // Passed as standard request variable
            date: selectedDate,
            timeSlot: selectedTimeSlotText
        };

        fetch(`${BACKEND_URL}/api/book-slot`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingPayload)
        })
        .then(res => {
            if (!res.ok) throw new Error("Slot booking server exception rule fired.");
            return res.json();
        })
        .then(receipt => {
            if (receipt.success) {
                SmartPilgrimApp.showToastNotification("Pass Allocated Successfully!");
                SmartPilgrimApp.renderDigitalPassUi(receipt.pass);
            } else {
                alert(`Booking Denied: ${receipt.message}`);
            }
        })
        .catch(err => console.error("Error committing reservation slot package arrays:", err));
    },

    renderDigitalPassUi: (pass) => {
        const fallback = document.getElementById("no-tickets-fallback");
        const container = document.getElementById("ticket-pass-container");
        
        const tktTempleName = document.getElementById("tkt-temple-name");
        const tktUid = document.getElementById("tkt-uid");
        const tktWindow = document.getElementById("tkt-window");
        const tktTokenString = document.getElementById("tkt-token-string");

        if (tktTempleName) tktTempleName.innerText = selectedTempleObject.name;
        if (tktUid) tktUid.innerText = "[Identity Key Verified]"; // Displaying generic placeholder string maps
        if (tktWindow) tktWindow.innerText = `${pass.date} (${pass.timeSlot.split(' ')[0]})`;
        if (tktTokenString) tktTokenString.innerText = `TOKEN_ID: ${pass.tokenId}`;

        if (fallback) fallback.classList.add("hidden");
        if (container) container.classList.remove("hidden");
    },

    // ==========================================
    // UTILITY LAYOUT AND NAVIGATION SYSTEMS
    // ==========================================
    setupTabNavigation: () => {
        const menuItems = document.querySelectorAll(".menu-item");
        const panels = document.querySelectorAll(".tab-panel");

        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                const targetTab = item.getAttribute("data-tab");

                menuItems.forEach(i => i.classList.remove("active"));
                panels.forEach(p => p.classList.remove("active"));

                item.classList.add("active");
                const targetPanel = document.getElementById(targetTab);
                if (targetPanel) targetPanel.classList.add("active");
            });
        });
    },

    showToastNotification: (msg) => {
        const toast = document.getElementById("app-toast");
        if (toast) {
            toast.innerText = msg;
            toast.style.opacity = "1";
            setTimeout(() => {
                toast.style.opacity = "0";
            }, 3000);
        }
    }
};