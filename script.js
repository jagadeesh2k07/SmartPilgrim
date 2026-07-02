/**
 * SmartPilgrim Interactive Core Engine Application Architecture Script File
 * Integrates Topbar Dropdown Menus and Dynamically populates results arrays
 */

const BACKEND_URL = "http://localhost:5000/api";

document.addEventListener('DOMContentLoaded', () => {
    SmartPilgrimApp.init();
});

const SmartPilgrimApp = {
    selectedDate: "30th July 2026",
    selectedTime: "Morning Quota (06:00 AM - 12:00 PM)",
    currentTempleId: "tirupati",
    allTemplesList: [],       // Holds full 100 master records
    famousTemplesList: [],    // Holds the top 20 quick options

    init: async function() {
        this.bindTabNavigationEvents();
        await this.loadMasterTempleData();
        
        // Connect system polling update arrays channels loops 
        this.fetchLiveServerTelemetry();
        setInterval(() => this.fetchLiveServerTelemetry(), 3000);
    },

    bindTabNavigationEvents: function() {
        const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
        const panels = document.querySelectorAll('.tab-panel');

        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                menuItems.forEach(mi => mi.classList.remove('active'));
                item.classList.add('active');

                const targetTab = item.getAttribute('data-tab');
                panels.forEach(panel => {
                    panel.classList.toggle('active', panel.id === targetTab);
                });
            });
        });
    },

    // Load massive 100-node matrix from server endpoints parameters
    loadMasterTempleData: async function() {
        try {
            const response = await fetch(`${BACKEND_URL}/temples`);
            const data = await response.json();
            
            this.allTemplesList = data.allTemples;
            this.famousTemplesList = data.famousTemples;

            // Initialize default startup view with Tirupathi configuration context parameters
            this.switchTempleDataContext("tirupati");
        } catch (err) {
            console.error("Critical Connection Failure to database registries mapping arrays:", err);
        }
    },

    // Interactive Core Dropdown Event Hooks Triggers
    showSearchDropdown: function() {
        const dropdown = document.getElementById('search-dropdown-menu');
        dropdown.classList.remove('hidden');
        
        // If input box is empty, render the 20 famous shrines list right away
        const searchInput = document.getElementById('global-temple-search').value.trim();
        if (searchInput === "") {
            this.renderDropdownNodes(this.famousTemplesList, "20 Famous Indian Temples (Quick Menu)");
        }
    },

    hideSearchDropdown: function() {
        // Delayed closure context so click triggers bubble down correctly to register selection events
        setTimeout(() => {
            document.getElementById('search-dropdown-menu').classList.add('hidden');
        }, 250);
    },

    processSearchQuery: function() {
        const queryStr = document.getElementById('global-temple-search').value.toLowerCase().trim();
        const menuTitle = document.getElementById('dropdown-menu-title');

        if (queryStr === "") {
            this.renderDropdownNodes(this.famousTemplesList, "20 Famous Indian Temples (Quick Menu)");
            return;
        }

        // Search algorithm checking match factors within 100 entries array database records
        const matchingResults = this.allTemplesList.filter(temple => 
            temple.name.toLowerCase().includes(queryStr) || 
            temple.state.toLowerCase().includes(queryStr)
        );

        this.renderDropdownNodes(matchingResults, `Matching Results (${matchingResults.length} Found)`);
    },

    renderDropdownNodes: function(dataset, headerTitleText) {
        document.getElementById('dropdown-menu-title').innerText = headerTitleText;
        const container = document.getElementById('dropdown-results-container');
        container.innerHTML = "";

        if (dataset.length === 0) {
            container.innerHTML = `<div style="padding:16px; font-size:12px; color:#8c8282; text-align:center;">No matching shrines found in database collection records indexing indices.</div>`;
            return;
        }

        dataset.forEach(temple => {
            const isActive = temple.id === this.currentTempleId ? "active-selection" : "";
            const elementHtml = `
                <div class="dropdown-temple-item ${isActive}" onclick="SmartPilgrimApp.selectTempleDropdownItem('${temple.id}')">
                    <div class="item-meta">
                        <h4>${temple.name}</h4>
                        <span>${temple.state}</span>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', elementHtml);
        });
    },

    selectTempleDropdownItem: function(id) {
        this.switchTempleDataContext(id);
        
        // Clear value strings out back down normal state configurations
        const selectedTemple = this.allTemplesList.find(t => t.id === id);
        if (selectedTemple) {
            document.getElementById('global-temple-search').value = selectedTemple.name;
        }
    },

    switchTempleDataContext: function(id) {
        this.currentTempleId = id;
        const target = this.allTemplesList.find(t => t.id === id);
        if (!target) return;

        // Reactive Dashboard Core Mapping UI text adjustments outputs
        document.getElementById('display-temple-title').innerText = target.name;
        document.getElementById('display-temple-state').innerText = target.state;
        document.getElementById('display-temple-desc').innerText = `Live edge analytics framework computing server parameters variables monitoring structures layout dynamically for ${target.name}. Check available quota patterns instantly below.`;
        document.getElementById('display-booking-price').innerText = `₹${target.ticketPrice}`;
        document.getElementById('live-ticker-banner').innerText = `ADVISORY COMPLIANCE MATRIX FOR ${target.name.toUpperCase()} -> GUIDELINES DIRECTIVE MANDATE: ${target.dressCode}`;
        
        document.getElementById('receipt-temple').innerText = target.name.split(' ')[0];
        document.getElementById('receipt-price').innerText = `₹${target.ticketPrice}.00`;
        document.getElementById('adv-dress').innerText = target.dressCode;

        this.fetchLiveServerTelemetry(); // Force immediate background context calculation redraw
    },

    fetchLiveServerTelemetry: async function() {
        try {
            const res = await fetch(`${BACKEND_URL}/live-status?templeId=${this.currentTempleId}`);
            const data = await res.json();

            document.getElementById('live-crowd-count').innerText = data.crowdCount.toLocaleString();
            document.getElementById('live-wait-time').innerText = data.waitTime;

            const badge = document.getElementById('crowd-badge');
            badge.innerText = data.crowdStatus;
            badge.className = `status-pill ${data.crowdStatus === 'Heavy Crowds' ? 'state-heavy' : 'state-moving'}`;

            this.updateLayoutBar("bar-fill-1", "bar-val-1", data.zones.zone1);
            this.updateLayoutBar("bar-fill-2", "bar-val-2", data.zones.zone2);

            document.getElementById('quota-s1').innerText = `${data.slots.morning} Slots Left`;
            document.getElementById('quota-s2').innerText = `${data.slots.afternoon} Slots Left`;
        } catch (e) {
            console.warn("Server disconnected or timed out during telemetry sync loops processing.");
        }
    },

    updateLayoutBar: function(id, textId, value) {
        const el = document.getElementById(id);
        if (el) { el.style.width = value + '%'; document.getElementById(textId).innerText = value + '%'; }
    },

    selectBookingDate: function(day) {
        this.selectedDate = `${day}th July 2026`;
        document.getElementById('receipt-date').innerText = this.selectedDate;
        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
        event.currentTarget.classList.add('active');
    },

    selectTimeSlot: function(el, str) {
        document.querySelectorAll('.slot-tile').forEach(t => t.classList.remove('selected'));
        el.classList.add('selected');
        this.selectedTime = str;
        document.getElementById('receipt-time').innerText = this.selectedTime.split(' (')[0];
    },

    executeLiveServerBooking: async function() {
        const adharNum = document.getElementById('pilgrim-id').value.trim();
        if (adharNum.length < 12) { this.showNotificationToast("Error: Validate 12-digit identification payload."); return; }

        const currentActiveTemple = this.allTemplesList.find(t => t.id === this.currentTempleId);

        const payload = {
            templeId: this.currentTempleId,
            aadhaar: adharNum,
            date: this.selectedDate,
            timeSlot: this.selectedTime
        };

        try {
            const res = await fetch(`${BACKEND_URL}/book-slot`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();

            if (data.success) {
                document.getElementById('tkt-badge-title').innerText = `${currentActiveTemple.name.toUpperCase()} ACCESS PASS`;
                document.getElementById('tkt-temple-name').innerText = currentActiveTemple.name;
                document.getElementById('tkt-uid').innerText = `Aadhaar (${data.pass.aadhaar})`;
                document.getElementById('tkt-window').innerText = `${data.pass.date} [${data.pass.timeSlot.split(' (')[0]}]`;
                document.getElementById('tkt-token-string').innerText = `TOKEN_ID: ${data.pass.tokenId}`;

                document.getElementById('no-tickets-fallback').classList.add('hidden');
                document.getElementById('ticket-pass-container').classList.remove('hidden');

                this.showNotificationToast("Pass Saved on Decentralized Server Stack Successfully!");
                setTimeout(() => document.querySelector('[data-tab="my-tokens"]').click(), 1000);
            }
        } catch (err) {
            this.showNotificationToast("Critical Connection Interface Fault.");
        }
    },

    showNotificationToast: function(msg) {
        const t = document.getElementById('app-toast'); t.innerText = msg; t.classList.add('visible');
        setTimeout(() => t.classList.remove('visible'), 3000);
    }
};