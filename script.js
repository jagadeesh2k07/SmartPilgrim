// ==========================================
// SMARTPILGRIM — FULLY SELF-CONTAINED ENGINE
// ==========================================

const TEMPLE_DB = {
    "Andhra Pradesh": [
        { id:"tirupati", name:"Tirumala Venkateswara Temple", icon:"🛕", price:300, dress:"Dhoti/Kurta for men. Saree/Chudidar with dupatta for women." },
        { id:"srikalahasti", name:"Sri Kalahasti Temple", icon:"🕌", price:50, dress:"Traditional Indian attire mandatory." },
        { id:"simhachalam", name:"Simhachalam Temple", icon:"⛩️", price:50, dress:"Dhoti mandatory for men inside sanctum." },
        { id:"kanaka", name:"Kanaka Durga Temple", icon:"🛕", price:100, dress:"Saree mandatory for women. Dhoti for men." },
        { id:"annavaram", name:"Annavaram Satyanarayana Temple", icon:"🕌", price:0, dress:"Traditional dress required." },
        { id:"mahanandi", name:"Mahanandi Temple", icon:"⛩️", price:0, dress:"Conservative dress code enforced." },
        { id:"ahobilam", name:"Ahobilam Narasimha Temple", icon:"🛕", price:0, dress:"Traditional attire. Avoid western wear." },
        { id:"lepakshi", name:"Lepakshi Veerabhadra Temple", icon:"🕌", price:20, dress:"Indian traditional attire preferred." },
        { id:"dwaraka_ap", name:"Dwarka Tirumala Temple", icon:"⛩️", price:0, dress:"Traditional dress code applies." },
        { id:"srisailam", name:"Srisailam Mallikarjuna Temple", icon:"🛕", price:200, dress:"Dhoti/Saree mandatory inside Garbhagriha." }
    ],
    "Tamil Nadu": [
        { id:"meenakshi", name:"Meenakshi Amman Temple", icon:"🛕", price:100, dress:"Strict ethnic wear. Jeans/shorts banned." },
        { id:"rameswaram", name:"Ramanathaswamy Temple", icon:"🕌", price:0, dress:"Dhoti for men. Saree for women." },
        { id:"tiruvannamalai", name:"Arunachaleswara Temple", icon:"⛩️", price:0, dress:"Traditional attire. Footwear removed outside." },
        { id:"chidambaram", name:"Nataraja Temple Chidambaram", icon:"🛕", price:0, dress:"Conservative traditional wear." },
        { id:"kanchipuram", name:"Ekambareswarar Temple", icon:"🕌", price:0, dress:"Dhoti/Veshti for men mandatory." },
        { id:"murugan_pal", name:"Palani Murugan Temple", icon:"⛩️", price:50, dress:"No western wear. Ethnic dress only." },
        { id:"kumbakonam", name:"Sarangapani Temple Kumbakonam", icon:"🛕", price:0, dress:"Traditional Indian clothing required." },
        { id:"tirunelveli", name:"Nellaiappar Temple", icon:"🕌", price:0, dress:"Ethnic attire mandatory inside." },
        { id:"velankanni", name:"Velankanni Church Shrine", icon:"⛪", price:0, dress:"Modest clothing. No sleeveless." },
        { id:"madurai_kali", name:"Koodal Azhagar Temple", icon:"🛕", price:0, dress:"Traditional dress code applies." }
    ],
    "Uttar Pradesh": [
        { id:"kashi", name:"Kashi Vishwanath Temple", icon:"🛕", price:500, dress:"Traditional attire. Avoid leather items." },
        { id:"mathura", name:"Krishna Janmabhoomi Temple", icon:"🕌", price:0, dress:"Clean traditional Indian clothes." },
        { id:"vrindavan", name:"Banke Bihari Temple", icon:"⛩️", price:0, dress:"Conservative modest attire." },
        { id:"ayodhya", name:"Ram Janmabhoomi Mandir", icon:"🛕", price:0, dress:"Neat traditional dress. No shorts." },
        { id:"prayagraj", name:"Triveni Sangam Prayagraj", icon:"🕌", price:0, dress:"Traditional attire during darshan." },
        { id:"vindhyachal", name:"Vindhyavasini Temple", icon:"⛩️", price:0, dress:"Saree/Salwar for women. Dhoti for men." },
        { id:"duladeo", name:"Duladeo Temple Khajuraho", icon:"🛕", price:15, dress:"Modest clothing required." },
        { id:"naimisharanya", name:"Lalita Devi Temple Naimisharanya", icon:"🕌", price:0, dress:"Traditional dress code enforced." },
        { id:"gorakhnath", name:"Gorakhnath Temple", icon:"⛩️", price:0, dress:"Clean traditional attire." },
        { id:"chitrakoot", name:"Kamadgiri Temple Chitrakoot", icon:"🛕", price:0, dress:"Neat Indian traditional dress." }
    ],
    "Maharashtra": [
        { id:"sidhivinayak", name:"Siddhivinayak Temple Mumbai", icon:"🛕", price:150, dress:"Smart casuals or ethnic attire." },
        { id:"trimbakeshwar", name:"Trimbakeshwar Jyotirlinga", icon:"🕌", price:200, dress:"Dhoti for men inside sanctum." },
        { id:"shirdi", name:"Sai Baba Temple Shirdi", icon:"⛩️", price:0, dress:"Modest clean attire. Head cover available." },
        { id:"pandharpur", name:"Vitthal Rukmini Temple", icon:"🛕", price:0, dress:"Traditional dress. No western casuals." },
        { id:"kolhapur", name:"Mahalakshmi Temple Kolhapur", icon:"🕌", price:0, dress:"Saree/salwar for women. Dhoti preferred." },
        { id:"jejuri", name:"Khandoba Temple Jejuri", icon:"⛩️", price:0, dress:"Yellow/saffron attire preferred by tradition." },
        { id:"ashtavinayak", name:"Moreshwar Temple Morgaon", icon:"🛕", price:0, dress:"Clean neat attire mandatory." },
        { id:"nashik_rama", name:"Rama Temple Nashik Panchavati", icon:"🕌", price:0, dress:"Traditional attire preferred." },
        { id:"gangapur", name:"Dattatreya Temple Gangapur", icon:"⛩️", price:0, dress:"Conservative traditional wear." },
        { id:"bhimashankar", name:"Bhimashankar Jyotirlinga", icon:"🛕", price:100, dress:"Dhoti/traditional dress mandatory." }
    ],
    "Rajasthan": [
        { id:"pushkar", name:"Brahma Temple Pushkar", icon:"🛕", price:0, dress:"Traditional attire. Head cover inside." },
        { id:"nathdwara", name:"Shrinathji Temple Nathdwara", icon:"🕌", price:0, dress:"Traditional ethnic wear. No jeans." },
        { id:"ajmer", name:"Dargah Khwaja Ajmer", icon:"🕌", price:0, dress:"Head covering mandatory for all." },
        { id:"jeen_mata", name:"Jeen Mata Temple Sikar", icon:"⛩️", price:0, dress:"Traditional dress code." },
        { id:"karni_mata", name:"Karni Mata Temple Deshnok", icon:"🛕", price:0, dress:"Footwear removed outside. Traditional wear." },
        { id:"eklingji", name:"Eklingji Temple Udaipur", icon:"🕌", price:0, dress:"Traditional dress. Cameras not allowed." },
        { id:"ranakpur", name:"Ranakpur Jain Temple", icon:"⛩️", price:100, dress:"Clean modest attire. Leather items banned." },
        { id:"galwar", name:"Galtaji Temple Jaipur", icon:"🛕", price:0, dress:"Traditional attire preferred." },
        { id:"achalgarh", name:"Achaleshwar Temple Mount Abu", icon:"🕌", price:0, dress:"Neat traditional wear." },
        { id:"dilwara", name:"Dilwara Jain Temples", icon:"⛩️", price:0, dress:"Non-leather items only. Clean dress." }
    ],
    "Gujarat": [
        { id:"somnath", name:"Somnath Jyotirlinga", icon:"🛕", price:200, dress:"Traditional dress. Dhotis provided." },
        { id:"dwarka", name:"Dwarkadhish Temple", icon:"🕌", price:0, dress:"Dhoti for men. Saree for women." },
        { id:"ambaji", name:"Ambaji Shakti Peetha", icon:"⛩️", price:0, dress:"Clean traditional attire." },
        { id:"pavagadh", name:"Mahakali Temple Pavagadh", icon:"🛕", price:50, dress:"Traditional dress mandatory." },
        { id:"palitana", name:"Palitana Jain Temples", icon:"🕌", price:0, dress:"White/light clothes preferred." },
        { id:"akshar_bhuj", name:"Swaminarayan Temple Bhuj", icon:"⛩️", price:0, dress:"Clean modest attire." },
        { id:"bhadkeshwar", name:"Bhadkeshwar Mahadev Temple", icon:"🛕", price:0, dress:"Traditional attire near sea temple." },
        { id:"ranchhodrai", name:"Ranchhodrai Temple Dakor", icon:"🕌", price:0, dress:"Traditional Indian attire." },
        { id:"hatkeshwar", name:"Hatkeshwar Mahadev Vadodara", icon:"⛩️", price:0, dress:"Traditional attire." },
        { id:"swaminarayan_ahm", name:"Swaminarayan Temple Ahmedabad", icon:"🛕", price:0, dress:"Neat modest clothing." }
    ],
    "Uttarakhand": [
        { id:"kedarnath", name:"Kedarnath Alpine Shrine", icon:"🛕", price:0, dress:"Warm woolens. Traditional inner wear." },
        { id:"badrinath", name:"Badrinath Vishnu Temple", icon:"🕌", price:0, dress:"Dhoti/kurta preferred." },
        { id:"gangotri", name:"Gangotri Devi Temple", icon:"⛩️", price:0, dress:"Traditional attire. Clean clothes." },
        { id:"yamunotri", name:"Yamunotri Devi Temple", icon:"🛕", price:0, dress:"Comfortable traditional wear." },
        { id:"haridwar", name:"Har Ki Pauri Haridwar", icon:"🕌", price:0, dress:"Neat traditional attire for ghat." },
        { id:"rishikesh", name:"Neelkanth Mahadev Temple", icon:"⛩️", price:0, dress:"Traditional Indian clothing." },
        { id:"tungnath", name:"Tungnath Mahadev Temple", icon:"🛕", price:0, dress:"Warm woolens + traditional inner." },
        { id:"chandrabadni", name:"Chandrabadni Temple", icon:"🕌", price:0, dress:"Traditional attire." },
        { id:"surkanda", name:"Surkanda Devi Temple", icon:"⛩️", price:0, dress:"Traditional dress." },
        { id:"kartik_swami", name:"Kartik Swami Temple", icon:"🛕", price:0, dress:"Comfortable traditional wear." }
    ],
    "Odisha": [
        { id:"jagannath", name:"Puri Jagannath Temple", icon:"🛕", price:0, dress:"Only Hindus with traditional dress inside." },
        { id:"konark", name:"Konark Sun Temple", icon:"🕌", price:40, dress:"Modest attire. Heritage site rules." },
        { id:"lingaraj", name:"Lingaraj Temple Bhubaneswar", icon:"⛩️", price:0, dress:"Traditional Indian dress. Only Hindus." },
        { id:"mukteswar", name:"Mukteswar Temple Bhubaneswar", icon:"🛕", price:0, dress:"Traditional attire." },
        { id:"taratarini", name:"Taratarini Shakti Peetha", icon:"🕌", price:0, dress:"Traditional dress mandatory." },
        { id:"samaleswari", name:"Samaleswari Temple Sambalpur", icon:"⛩️", price:0, dress:"Traditional attire." },
        { id:"biraja", name:"Biraja Temple Jajpur", icon:"🛕", price:0, dress:"Clean traditional wear." },
        { id:"sakhigopal", name:"Sakhigopal Temple", icon:"🕌", price:0, dress:"Traditional Indian attire." },
        { id:"chausathi", name:"Chausathi Yogini Temple", icon:"⛩️", price:5, dress:"Modest attire." },
        { id:"alarnath", name:"Alarnath Temple Brahmagiri", icon:"🛕", price:0, dress:"Traditional dress." }
    ],
    "Punjab": [
        { id:"goldentemple", name:"Harmandir Sahib (Golden Temple)", icon:"🕌", price:0, dress:"Head covering mandatory. Modest wear." },
        { id:"anandpur", name:"Anandpur Sahib Gurudwara", icon:"⛩️", price:0, dress:"Head cover. Modest clothing." },
        { id:"hemkund", name:"Hemkund Sahib", icon:"🕌", price:0, dress:"Warm clothes + head cover." },
        { id:"manikaran", name:"Manikaran Gurudwara", icon:"⛩️", price:0, dress:"Head cover. Modest attire." },
        { id:"fatehgarh", name:"Fatehgarh Sahib Gurudwara", icon:"🕌", price:0, dress:"Head cover mandatory." },
        { id:"tarn_taran", name:"Tarn Taran Sahib", icon:"⛩️", price:0, dress:"Head cover. Neat clean attire." },
        { id:"damdama", name:"Damdama Sahib Bathinda", icon:"🕌", price:0, dress:"Head cover mandatory." },
        { id:"patna_sahib", name:"Patna Sahib Gurudwara", icon:"⛩️", price:0, dress:"Head cover. Modest clean clothes." },
        { id:"baba_bakala", name:"Baba Bakala Gurudwara", icon:"🕌", price:0, dress:"Head cover. Modest attire." },
        { id:"keshgarh", name:"Keshgarh Sahib Anandpur", icon:"⛩️", price:0, dress:"Head cover mandatory." }
    ],
    "Kerala": [
        { id:"sabarimala", name:"Sabarimala Ayyappa Temple", icon:"🛕", price:0, dress:"Black/blue saffron dhoti mandatory." },
        { id:"guruvayur", name:"Guruvayur Sri Krishna Temple", icon:"🕌", price:0, dress:"Dhoti for men. Saree for women. Strict." },
        { id:"padmanabha", name:"Padmanabhaswamy Temple TVM", icon:"⛩️", price:0, dress:"Dhoti/Mundu for men. Saree mandatory women." },
        { id:"attukal", name:"Attukal Bhagavathy Temple", icon:"🛕", price:0, dress:"Traditional Kerala attire." },
        { id:"chottanikkara", name:"Chottanikkara Bhagavathy Temple", icon:"🕌", price:0, dress:"Traditional dress. Strict code." },
        { id:"ettumanoor", name:"Ettumanoor Mahadeva Temple", icon:"⛩️", price:0, dress:"Mundu/Dhoti for men. Saree for women." },
        { id:"vaikom", name:"Vaikom Mahadeva Temple", icon:"🛕", price:0, dress:"Traditional Kerala attire." },
        { id:"thrissur", name:"Vadakkunnathan Temple Thrissur", icon:"🕌", price:0, dress:"Mundu/Saree mandatory inside." },
        { id:"mannarasala", name:"Mannarasala Sarpakavu Temple", icon:"⛩️", price:0, dress:"Traditional attire." },
        { id:"parassinikkadavu", name:"Parassinikadavu Temple", icon:"🛕", price:0, dress:"Traditional dress code." }
    ]
};

const ALL_TEMPLES = Object.entries(TEMPLE_DB).flatMap(([state, temples]) =>
    temples.map(t => ({ ...t, state }))
);

const STATE_LIST = Object.keys(TEMPLE_DB);

let activeState = STATE_LIST[0];
let activeTrackingIntervalId = null;
let footfallTickIntervalId = null;
let allBookedPasses = [];
let selectedDate = "30th July 2026";
let selectedTimeSlotText = "Morning Quota (06:00 AM – 12:00 PM)";
let selectedTempleObject = null; // no default temple — user must pick one
let searchPanelOpen = false;
let metricsDb = {};

ALL_TEMPLES.forEach(t => {
    metricsDb[t.id] = {
        pilgrims: Math.floor(Math.random() * 8000) + 2000,
        zone1: Math.floor(Math.random() * 60) + 20,
        zone2: Math.floor(Math.random() * 50) + 15,
        morningSlots: Math.floor(Math.random() * 400) + 100,
        afternoonSlots: Math.floor(Math.random() * 600) + 200
    };
});

setInterval(() => {
    Object.keys(metricsDb).forEach(id => {
        const d = metricsDb[id];
        d.pilgrims = Math.max(500, d.pilgrims + Math.floor(Math.random() * 60) - 30);
        d.zone1 = Math.min(100, Math.max(10, d.zone1 + Math.floor(Math.random() * 6) - 3));
        d.zone2 = Math.min(100, Math.max(10, d.zone2 + Math.floor(Math.random() * 6) - 3));
    });
}, 3500);

const SmartPilgrimApp = {

    // ── METRICS ────────────────────────────────────────────────
    startMetricsLoop: () => {
        if (!selectedTempleObject) return;

        SmartPilgrimApp.pushMetrics();
        if (activeTrackingIntervalId) clearInterval(activeTrackingIntervalId);
        activeTrackingIntervalId = setInterval(SmartPilgrimApp.pushMetrics, 3500);

        if (footfallTickIntervalId) clearInterval(footfallTickIntervalId);
        footfallTickIntervalId = setInterval(SmartPilgrimApp.tickFootfall, 1000);
    },

    tickFootfall: () => {
        if (!selectedTempleObject) return;
        const d = metricsDb[selectedTempleObject.id];
        if (!d) return;
        d.pilgrims = Math.max(500, d.pilgrims + Math.floor(Math.random() * 20) - 9);
        const el = document.getElementById("live-crowd-count");
        if (el) el.innerText = d.pilgrims.toLocaleString();
    },

    pushMetrics: () => {
        if (!selectedTempleObject) return;
        const d = metricsDb[selectedTempleObject.id];
        if (!d) return;
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.innerText = v; };

        SmartPilgrimApp.animateNumber(document.getElementById("live-crowd-count"), d.pilgrims);
        set("live-morning-slots", d.morningSlots);
        set("qs-afternoon", d.afternoonSlots + " left");
        set("quota-s1", d.morningSlots + " Slots Left");
        set("quota-s2", d.afternoonSlots + " Slots Left");

        const hrs = d.pilgrims / 2000;
        const waitStr = `${Math.floor(hrs)} hr ${Math.round((hrs % 1) * 60)} min`;
        set("live-wait-time", waitStr);

        const badge = document.getElementById("crowd-badge");
        if (badge) {
            const isHeavy = d.pilgrims > 7500, isMod = d.pilgrims > 5000;
            badge.innerText = isHeavy ? "🔴 Very Busy" : isMod ? "🟡 Moderate" : "🟢 Comfortable";
            badge.className = isHeavy ? "status-pill state-heavy" : isMod ? "status-pill state-moderate" : "status-pill state-moving";
        }

        set("live-token-processing", d.pilgrims > 7500 ? "Slow Movement" : "Normal Flow");
        document.getElementById("crowd-alert")?.classList.toggle("hidden", d.pilgrims <= 7500);

        SmartPilgrimApp.updateZoneBar(1, d.zone1);
        SmartPilgrimApp.updateZoneBar(2, d.zone2);

        const highDensity = d.zone1 >= 80 || d.zone2 >= 80;
        const heavyCrowd = d.pilgrims > 7500;
        const hasAlert = highDensity || heavyCrowd;
        document.getElementById("notif-badge")?.classList.toggle("hidden", !hasAlert);
        SmartPilgrimApp._currentAlert = hasAlert
            ? (highDensity ? "⚠ High density detected in one or more zones. Consider a different time slot."
                            : "⚠ Very heavy footfall right now. Expect longer queue waits.")
            : null;

        const ticker = document.getElementById("live-ticker-banner");
        if (ticker) ticker.innerText = `${selectedTempleObject.name} (${selectedTempleObject.state}) — Pilgrims Now: ${d.pilgrims.toLocaleString()} | Est. Wait: ${waitStr} | Entry: ₹${selectedTempleObject.price || 0} | ${d.morningSlots} morning slots left`;

        set("last-updated-time", new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    },

    updateZoneBar: (num, pct) => {
        const fill = document.getElementById(`bar-fill-${num}`);
        const val = document.getElementById(`bar-val-${num}`);
        const status = document.getElementById(`zone-status-${num}`);
        if (!fill || !val) return;
        fill.style.width = pct + "%";
        val.innerText = pct + "%";
        fill.className = `bar-fill ${pct >= 80 ? "bg-critical" : pct >= 55 ? "bg-danger" : "bg-success"}`;
        if (status) {
            status.innerText = pct >= 80 ? "⛔ Critical — Entry restricted"
                : pct >= 55 ? "⚠ High — Proceed carefully"
                : pct >= 30 ? "✅ Moderate — Normal flow"
                : "✅ Low density — Smooth entry";
            status.style.color = pct >= 80 ? "#dc2626" : pct >= 55 ? "#b45309" : "#059669";
        }
    },

    animateNumber: (el, target) => {
        if (!el) return;
        const current = parseInt(el.innerText.replace(/,/g, "")) || 0;
        if (Math.abs(target - current) < 5) { el.innerText = target.toLocaleString(); return; }
        let val = current;
        const step = (target - current) / 14;
        const tick = setInterval(() => {
            val += step;
            const done = step > 0 ? val >= target : val <= target;
            el.innerText = (done ? target : Math.round(val)).toLocaleString();
            if (done) clearInterval(tick);
        }, 28);
    },

    // ── SEARCH PANEL ───────────────────────────────────────────
    buildStateTabs: () => {
        const container = document.getElementById("sp-state-tabs");
        if (!container) return;
        container.innerHTML = "";
        STATE_LIST.forEach(state => {
            const btn = document.createElement("button");
            btn.className = "sp-state-tab" + (state === activeState ? " active" : "");
            btn.innerText = state;
            btn.onclick = () => SmartPilgrimApp.switchState(state);
            container.appendChild(btn);
        });
    },

    switchState: (state) => {
        activeState = state;
        document.querySelectorAll(".sp-state-tab").forEach(t => {
            t.classList.toggle("active", t.innerText === state);
        });
        SmartPilgrimApp.renderTempleGrid(state);
    },

    renderTempleGrid: (state) => {
        const grid = document.getElementById("sp-temple-grid");
        if (!grid) return;
        const temples = TEMPLE_DB[state] || [];
        grid.innerHTML = "";
        temples.forEach((t, i) => {
            const isSelected = selectedTempleObject && t.id === selectedTempleObject.id;
            const card = document.createElement("button");
            card.className = "sp-temple-card" + (isSelected ? " selected" : "");
            card.style.animationDelay = (i * 0.04) + "s";
            card.innerHTML = `
                <div class="sp-temple-icon">${t.icon}</div>
                <div class="sp-temple-name">${t.name.split(" ").slice(0, 3).join(" ")}</div>
                <div class="sp-temple-fee">${t.price > 0 ? "₹" + t.price : "Free"}</div>
            `;
            card.onclick = () => SmartPilgrimApp.selectTemple({ ...t, state });
            grid.appendChild(card);
        });
    },

    showSearchDropdown: () => {
        const panel = document.getElementById("search-dropdown-menu");
        if (!panel) return;
        panel.classList.remove("hidden");
        document.getElementById("search-browse-view")?.classList.remove("hidden");
        document.getElementById("search-results-view")?.classList.add("hidden");
        document.querySelector(".search-input-frame")?.classList.add("active");
        searchPanelOpen = true;
    },

    hideSearchDropdown: () => {
        document.getElementById("search-dropdown-menu")?.classList.add("hidden");
        document.querySelector(".search-input-frame")?.classList.remove("active");
        searchPanelOpen = false;
    },

    forceCloseSearch: () => {
        SmartPilgrimApp.hideSearchDropdown();
        document.getElementById("global-temple-search")?.blur();
    },

    focusSearch: () => {
        document.getElementById("global-temple-search")?.focus();
        SmartPilgrimApp.showSearchDropdown();
    },

    setupClickOutside: () => {
        document.addEventListener("click", (e) => {
            const container = document.querySelector(".global-search-container");
            if (searchPanelOpen && container && !container.contains(e.target)) {
                SmartPilgrimApp.hideSearchDropdown();
            }
        });
    },

    clearSearch: () => {
        const input = document.getElementById("global-temple-search");
        if (input) input.value = "";
        document.getElementById("search-clear")?.classList.add("hidden");
        document.getElementById("search-browse-view")?.classList.remove("hidden");
        document.getElementById("search-results-view")?.classList.add("hidden");
    },

    processSearchQuery: () => {
        const input = document.getElementById("global-temple-search");
        if (!input) return;
        const q = input.value.trim().toLowerCase();
        document.getElementById("search-clear")?.classList.toggle("hidden", q === "");

        if (q === "") {
            document.getElementById("search-browse-view")?.classList.remove("hidden");
            document.getElementById("search-results-view")?.classList.add("hidden");
            return;
        }

        document.getElementById("search-browse-view")?.classList.add("hidden");
        document.getElementById("search-results-view")?.classList.remove("hidden");

        const results = ALL_TEMPLES.filter(t =>
            t.name.toLowerCase().includes(q) || t.state.toLowerCase().includes(q)
        );

        const label = document.getElementById("search-result-label");
        if (label) label.innerText = `${results.length} result${results.length !== 1 ? "s" : ""} found`;

        const container = document.getElementById("dropdown-results-container");
        if (!container) return;
        container.innerHTML = "";

        if (!results.length) {
            container.innerHTML = `<div class="sp-no-results"><i class="fa-solid fa-magnifying-glass" style="font-size:24px;margin-bottom:8px;display:block;color:#c4b5b5;"></i>No temples found for "<strong>${q}</strong>"</div>`;
            return;
        }

        results.slice(0, 12).forEach(t => {
            const isSelected = selectedTempleObject && t.id === selectedTempleObject.id;
            const item = document.createElement("div");
            item.className = "sp-result-item" + (isSelected ? " active-selection" : "");
            item.innerHTML = `
                <div class="sp-result-icon">${t.icon}</div>
                <div class="sp-result-meta">
                    <h4>${t.name}</h4>
                    <span>${t.state}</span>
                </div>
                <span class="sp-result-price">${t.price > 0 ? "₹" + t.price : "Free"}</span>
            `;
            item.onclick = () => SmartPilgrimApp.selectTemple(t);
            container.appendChild(item);
        });
    },

    detectLocation: () => {
        SmartPilgrimApp.showToast("Detecting location...", "default");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                () => SmartPilgrimApp.showToast("Location detected! Showing nearby temples.", "success"),
                () => SmartPilgrimApp.showToast("Location access denied. Please search manually.", "error")
            );
        } else {
            SmartPilgrimApp.showToast("Geolocation not supported on this device.", "error");
        }
    },

    viewAllTemples: () => {
        document.getElementById("search-browse-view")?.classList.add("hidden");
        document.getElementById("search-results-view")?.classList.remove("hidden");
        document.getElementById("search-clear")?.classList.remove("hidden");

        const label = document.getElementById("search-result-label");
        if (label) label.innerText = `All Temples (${ALL_TEMPLES.length})`;

        const container = document.getElementById("dropdown-results-container");
        if (!container) return;
        container.innerHTML = "";

        ALL_TEMPLES.forEach(t => {
            const isSelected = selectedTempleObject && t.id === selectedTempleObject.id;
            const item = document.createElement("div");
            item.className = "sp-result-item" + (isSelected ? " active-selection" : "");
            item.innerHTML = `
                <div class="sp-result-icon">${t.icon}</div>
                <div class="sp-result-meta">
                    <h4>${t.name}</h4>
                    <span>${t.state}</span>
                </div>
                <span class="sp-result-price">${t.price > 0 ? "₹" + t.price : "Free"}</span>
            `;
            item.onclick = () => SmartPilgrimApp.selectTemple(t);
            container.appendChild(item);
        });
    },

    // ── SELECT TEMPLE ──────────────────────────────────────────
    selectTemple: (temple) => {
        selectedTempleObject = temple;
        document.getElementById("search-dropdown-menu")?.classList.add("hidden");
        searchPanelOpen = false;
        const input = document.getElementById("global-temple-search");
        if (input) input.value = temple.name;
        document.getElementById("search-clear")?.classList.remove("hidden");

        // Switch from the welcome/description state to the live dashboard
        document.getElementById("no-temple-state")?.classList.add("hidden");
        document.getElementById("live-dashboard-content")?.classList.remove("hidden");

        SmartPilgrimApp.updateAllUI(temple);
        SmartPilgrimApp.startMetricsLoop();
        SmartPilgrimApp.showToast(`📍 Switched to ${temple.name}`, "success");

        SmartPilgrimApp.renderTempleGrid(temple.state);

        activeState = temple.state;
        document.querySelectorAll(".sp-state-tab").forEach(t => {
            t.classList.toggle("active", t.innerText === temple.state);
        });
    },

    updateAllUI: (temple) => {
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.innerText = v; };
        set("display-temple-title", temple.name);
        set("display-temple-state", temple.state);
        set("display-temple-desc", `Live tracking and crowd analytics for ${temple.name}, ${temple.state}. Real-time data refreshed every second.`);
        set("sidebar-temple-name", temple.name);
        set("display-booking-price", temple.price > 0 ? `₹${temple.price}` : "Free Entry");
        set("receipt-temple", temple.name);
        set("receipt-price", temple.price > 0 ? `₹${temple.price}.00` : "₹0.00 (Free)");
        set("advisory-temple-name", temple.name);
        set("advisory-temple-state", temple.state);
        set("adv-dress", temple.dress || "Traditional Indian attire mandatory.");
        set("qs-price", temple.price > 0 ? `₹${temple.price}` : "Free");
        set("qs-state", temple.state);
    },

    // ── BOOKING ────────────────────────────────────────────────
    selectBookingDate: (el, day, month) => {
        document.querySelectorAll(".calendar-day").forEach(d => d.classList.remove("active"));
        el.classList.add("active");
        const suffix = [,"st","nd","rd"][day] || "th";
        selectedDate = `${day}${suffix} ${month === "July" ? "July" : "August"} 2026`;
        const el2 = document.getElementById("receipt-date");
        if (el2) el2.innerText = selectedDate;
    },

    selectTimeSlot: (el, slotString) => {
        document.querySelectorAll(".slot-tile").forEach(t => t.classList.remove("selected"));
        el.classList.add("selected");
        selectedTimeSlotText = slotString;
        const el2 = document.getElementById("receipt-time");
        if (el2) el2.innerText = slotString.split("(")[0].trim();
    },

    formatAadhaar: (input) => {
        let val = input.value.replace(/\D/g, "").substring(0, 12);
        val = val.replace(/(\d{4})(?=\d)/g, "$1 ");
        input.value = val;
        const hint = document.getElementById("aadhaar-hint");
        const digits = val.replace(/\s/g, "").length;
        if (!hint) return;
        if (digits === 0) { hint.innerText = "Enter 12-digit Aadhaar number"; hint.style.color = ""; input.classList.remove("error"); }
        else if (digits < 12) { hint.innerText = `${digits}/12 digits entered`; hint.style.color = ""; input.classList.add("error"); }
        else { hint.innerText = "✓ Valid format"; hint.style.color = "#059669"; input.classList.remove("error"); }
    },

    executeLiveServerBooking: () => {
        if (!selectedTempleObject) {
            SmartPilgrimApp.showToast("Please select a temple first", "error");
            SmartPilgrimApp.focusSearch();
            return;
        }

        const aadhaarInput = document.getElementById("pilgrim-id");
        const nameInput = document.getElementById("pilgrim-name");
        const bookBtn = document.getElementById("book-btn");
        const overlay = document.getElementById("booking-overlay");

        const aadhaarDigits = aadhaarInput?.value.replace(/\s/g, "") || "";
        const pilgrimName = nameInput?.value.trim() || "Jagadeesh";

        if (aadhaarDigits.length < 12) {
            aadhaarInput?.classList.add("error");
            const hint = document.getElementById("aadhaar-hint");
            if (hint) { hint.innerText = "⚠ Enter a valid 12-digit Aadhaar number"; hint.style.color = "#dc2626"; }
            SmartPilgrimApp.showToast("Please enter a valid Aadhaar number", "error");
            aadhaarInput?.focus();
            return;
        }

        overlay?.classList.remove("hidden");
        if (bookBtn) bookBtn.disabled = true;

        setTimeout(() => {
            const tokenId = `PILGRIM-${selectedTempleObject.id.toUpperCase().substring(0,4)}-${Math.floor(100000 + Math.random() * 900000)}-2026`;
            overlay?.classList.add("hidden");
            if (bookBtn) bookBtn.disabled = false;

            SmartPilgrimApp.renderDigitalPassUi({
                tokenId, date: selectedDate,
                timeSlot: selectedTimeSlotText,
                aadhaar: aadhaarDigits
            }, pilgrimName);

            SmartPilgrimApp.showToast("✅ Pass generated successfully!", "success");
            SmartPilgrimApp.goToTokens();

            if (aadhaarInput) aadhaarInput.value = "";
            if (nameInput) nameInput.value = "";
            const hint = document.getElementById("aadhaar-hint");
            if (hint) { hint.innerText = "Enter 12-digit Aadhaar number"; hint.style.color = ""; }
        }, 1800);
    },

    // ── PASS ──────────────────────────────────────────────────
    renderDigitalPassUi: (pass, pilgrimName) => {
        const fallback = document.getElementById("no-tickets-fallback");
        const container = document.getElementById("ticket-pass-container");
        if (!container) return;

        allBookedPasses.push({ pass, pilgrimName, temple: { ...selectedTempleObject } });

        const badge = document.getElementById("pass-count-badge");
        if (badge) { badge.innerText = allBookedPasses.length; badge.classList.remove("hidden"); }

        const ticket = document.createElement("div");
        ticket.className = "ticket-wrapper";
        ticket.innerHTML = `
            <div class="ticket-left">
                <div class="ticket-badge">✦ OFFICIAL DARSHAN PASS</div>
                <h3>${selectedTempleObject.name}</h3>
                <div class="ticket-meta-grid">
                    <div class="meta-item"><span>Registered Pilgrim</span><strong>${pilgrimName}</strong></div>
                    <div class="meta-item"><span>Aadhaar (masked)</span><strong>XXXX XXXX ${pass.aadhaar?.slice(-4) || "XXXX"}</strong></div>
                    <div class="meta-item"><span>Date</span><strong>${pass.date}</strong></div>
                    <div class="meta-item"><span>Time Window</span><strong>${pass.timeSlot?.split("(")[0].trim()}</strong></div>
                    <div class="meta-item"><span>State</span><strong>${selectedTempleObject.state}</strong></div>
                    <div class="meta-item"><span>Fee Paid</span><strong class="gold-text">${selectedTempleObject.price > 0 ? "₹" + selectedTempleObject.price : "Free"}</strong></div>
                </div>
                <div class="ticket-actions">
                    <button class="ticket-btn download" onclick="SmartPilgrimApp.downloadPass(this)"><i class="fa-solid fa-download"></i> Save Pass</button>
                    <button class="ticket-btn share" onclick="SmartPilgrimApp.sharePass('${pass.tokenId}')"><i class="fa-solid fa-share-nodes"></i> Share</button>
                </div>
            </div>
            <div class="ticket-right">
                <div class="qr-box-mock">
                    <div class="qr-scanner-lines"><i class="fa-solid fa-qrcode"></i></div>
                    <span>SCAN AT GATE</span>
                </div>
                <p class="token-id-str">${pass.tokenId}</p>
                <div class="token-valid-badge"><i class="fa-solid fa-circle-check"></i> Valid Pass</div>
            </div>
        `;

        fallback?.classList.add("hidden");
        container.classList.remove("hidden");
        container.prepend(ticket);
    },

    downloadPass: (btn) => {
        const orig = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Saved!`;
        btn.style.background = "#059669";
        setTimeout(() => { btn.innerHTML = orig; btn.style.background = ""; }, 2200);
        SmartPilgrimApp.showToast("Screenshot this page to save your pass offline.", "success");
    },

    sharePass: (tokenId) => {
        if (navigator.share) {
            navigator.share({ title: "SmartPilgrim Pass", text: `My darshan pass: ${tokenId}`, url: window.location.href });
        } else {
            navigator.clipboard.writeText(tokenId).then(() => SmartPilgrimApp.showToast("Token ID copied!", "success"));
        }
    },

    // ── NAVIGATION ────────────────────────────────────────────
    setupTabNavigation: () => {
        document.querySelectorAll(".menu-item").forEach(item => {
            item.addEventListener("click", () => {
                const target = item.getAttribute("data-tab");

                // Every tab except the Live Metrics Hub requires a temple to be selected first
                if (target !== "live-status" && !selectedTempleObject) {
                    SmartPilgrimApp.showToast("Please select a temple first", "error");
                    SmartPilgrimApp.focusSearch();
                    return;
                }

                document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
                document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
                item.classList.add("active");
                document.getElementById(target)?.classList.add("active");
                if (window.innerWidth <= 900) SmartPilgrimApp.closeSidebar();
            });
        });
    },

    switchTab: (id) => {
        document.querySelectorAll(".menu-item").forEach(i => i.classList.toggle("active", i.getAttribute("data-tab") === id));
        document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === id));
    },

    goToBooking: () => {
        if (!selectedTempleObject) {
            SmartPilgrimApp.showToast("Please select a temple first", "error");
            SmartPilgrimApp.focusSearch();
            return;
        }
        SmartPilgrimApp.switchTab("slot-booking");
    },
    goToTokens: () => SmartPilgrimApp.switchTab("my-tokens"),
    goToAdvisory: () => {
        if (!selectedTempleObject) {
            SmartPilgrimApp.showToast("Please select a temple first", "error");
            SmartPilgrimApp.focusSearch();
            return;
        }
        SmartPilgrimApp.switchTab("travel-advisory");
    },

    // ── MOBILE SIDEBAR ────────────────────────────────────────
    setupMobileSidebar: () => {
        document.getElementById("hamburgerBtn")?.addEventListener("click", SmartPilgrimApp.openSidebar);
        document.getElementById("sidebarCloseBtn")?.addEventListener("click", SmartPilgrimApp.closeSidebar);
    },
    openSidebar: () => { document.getElementById("sidebar")?.classList.add("open"); document.getElementById("sidebarOverlay")?.classList.remove("hidden"); },
    closeSidebar: () => { document.getElementById("sidebar")?.classList.remove("open"); document.getElementById("sidebarOverlay")?.classList.add("hidden"); },

    // ── KEYBOARD SHORTCUT ─────────────────────────────────────
    setupKeyboardShortcut: () => {
        document.addEventListener("keydown", (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                document.getElementById("global-temple-search")?.focus();
                SmartPilgrimApp.showSearchDropdown();
            }
            if (e.key === "Escape") {
                SmartPilgrimApp.hideSearchDropdown();
                document.getElementById("global-temple-search")?.blur();
            }
        });
    },

    // ── NOTIFICATIONS ─────────────────────────────────────────
    showNotifications: () => {
        if (SmartPilgrimApp._currentAlert) {
            SmartPilgrimApp.showToast(SmartPilgrimApp._currentAlert, "error");
        } else {
            SmartPilgrimApp.showToast("No new alerts at this time.");
        }
    },

    // ── TOAST ─────────────────────────────────────────────────
    showToast: (msg, type = "default") => {
        const toast = document.getElementById("app-toast");
        const toastMsg = document.getElementById("toast-msg");
        const toastIcon = document.getElementById("toast-icon");
        if (!toast) return;
        toastMsg && (toastMsg.innerText = msg);
        toast.className = "toast-popup";
        if (type === "success") { toast.classList.add("success"); if (toastIcon) toastIcon.className = "fa-solid fa-circle-check"; }
        else if (type === "error") { toast.classList.add("error"); if (toastIcon) toastIcon.className = "fa-solid fa-circle-xmark"; }
        else { if (toastIcon) toastIcon.className = "fa-solid fa-bell"; }
        toast.classList.add("visible");
        clearTimeout(SmartPilgrimApp._toastTimer);
        SmartPilgrimApp._toastTimer = setTimeout(() => toast.classList.remove("visible"), 3400);
    },
    _toastTimer: null,
    _currentAlert: null
};

document.addEventListener('DOMContentLoaded', () => {
    SmartPilgrimApp.buildStateTabs();
    SmartPilgrimApp.renderTempleGrid(activeState);
    SmartPilgrimApp.setupTabNavigation();
    SmartPilgrimApp.setupMobileSidebar();
    SmartPilgrimApp.setupKeyboardShortcut();
    SmartPilgrimApp.setupClickOutside();
    // No temple pre-selected — the welcome/description state shows until the user picks one.
});