# 🛕 SmartPilgrim — Unified Devotional Engine

**SmartPilgrim** is a temple visit management web app prototype built for **Smart India Hackathon 2025**. It brings live crowd information, darshan slot booking, digital passes, deity/temple background, and temple guidelines into a single dashboard — designed especially for pilgrims travelling from rural areas who may not have easy access to on-site counters, local guides, or real-time updates.

This README describes **exactly what is built and working right now** in this repository — not a roadmap dressed up as a finished product.

---

## 🚀 Live Demo

- **Frontend:** [https://smartpilgrim.vercel.app](https://smartpilgrim.vercel.app)
- **Backend (deployed, but not currently called by the frontend):** [https://smartpilgrim-backend.onrender.com](https://smartpilgrim-backend.onrender.com)


---

## ✅ What This Project Actually Does (Current State)

Everything below is implemented and functional in the current codebase:

### 1. Welcome / Landing Screen
- On load, no temple is pre-selected. The user sees a full-page welcome message explaining the app's purpose for rural pilgrims, with four feature highlights and a "Search & Select a Temple to Begin" call-to-action.
- The live dashboard only appears after a temple is chosen.

### 2. Temple Search
- A searchable database of **100 temples across 10 Indian states** (Andhra Pradesh, Tamil Nadu, Uttar Pradesh, Maharashtra, Rajasthan, Gujarat, Uttarakhand, Odisha, Punjab, Kerala) is hardcoded into `script.js`.
- The search panel supports browsing by state, a "Popular Temples" grid, live text search-as-you-type, and a "View All Temples" option to see the full list.

### 3. Live Metrics Hub (simulated, not real sensor data)
- Once a temple is selected, a dashboard shows: current footfall count, estimated queue wait time, gate status, two zone-density bars (Main Entry & Inner Sanctorum), morning/afternoon slot counts, and a scrolling ticker.
- These numbers are **generated locally by JavaScript** — they update every 1–3.5 seconds using randomized fluctuation logic to *simulate* what a real live-monitoring dashboard would look like. **They are not connected to any actual camera, sensor, or live government feed.**
- A density-based alert badge and a notification bell reflect this simulated data (e.g. "High Density Alert" appears when the simulated crowd number crosses a threshold).

### 4. Darshan & Pooja Slot Booking
- A mock date/time-slot selection flow (calendar mock, morning/afternoon slot tiles), a pilgrim details form with Aadhaar number formatting and 12-digit validation, and a booking summary sidebar.
- "Confirm & Generate Pass" simulates a short loading delay and then generates a pass — **no real payment or government booking system is involved.**

### 5. Digital Passes
- Each completed booking generates a pass card with a token ID, masked Aadhaar, date/time, and a QR-style icon placeholder.
- Passes exist only in the browser's memory for that session (no backend, no database — refreshing the page clears them).

### 6. About the Deity
- A dedicated tab (before Temple Guidelines) showing the presiding deity and a short, factually-researched write-up on each temple's history/significance, for all 100 temples.
- Uses an icon-based visual (deity symbol on the left, temple icon on the right) rather than real photographs, to avoid copyright issues from hotlinking unlicensed images.

### 7. Temple Guidelines
- Static guidance cards covering dress code (dynamic per temple), prohibited items, required documents, code of conduct, prasadam/food rules, and accessibility — dress code text is temple-specific, the rest are general guidelines.

### 8. Navigation Behaviour
- Every tab except "Live Metrics Hub" requires a temple to be selected first; clicking one before that shows a toast and reopens the search box automatically.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, Flexbox, Grid) |
| Logic | Vanilla JavaScript (ES6+), no frameworks |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Playfair Display, Montserrat, Inter) |
| (Unused scaffold) | Node.js + Express |

No build step, no API keys, and no framework installation is required to run the app.

---

## 📂 Project Structure

```
SmartPilgrim/
├── index.html      # App structure & markup
├── style.css       # All styling, layout, and responsive rules
├── script.js       # App logic, temple database, simulated live metrics
├── server.js       # Unused Express scaffold (not wired into the frontend)
├── package.json
└── README.md
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/jagadeesh2007/SmartPilgrim.git
   cd SmartPilgrim
   ```
2. Open `index.html` directly in a browser, or serve it locally (recommended):
   ```bash
   npx serve .
   ```
   or use the VS Code "Live Server" extension.
3. Search for a temple, watch the simulated live dashboard, book a slot, and generate a digital pass.

No `npm install` or environment variables are needed to run the frontend demo.

---

## 🔭 Planned / Future Work (Not Yet Built)

These are genuinely unimplemented and would need real engineering effort before they exist:

- A real backend and database to replace the static in-browser temple dataset.
- Actual **CCTV/computer-vision-based crowd density estimation** at temple entry points, replacing the simulated numbers.
- A real payment gateway for slot booking fees.
- Government/Devasthanam board API integration for authoritative live data, quotas, and pricing.
- SMS and multilingual support for wider accessibility among rural pilgrims.
- Persistent storage for bookings and passes (currently lost on page refresh).
- Actually wiring the deployed frontend to the deployed backend, once there's real data or logic worth serving from it.

---

## 👤 Author

Built by **Jagadeesh** for Smart India Hackathon 2025.

## 📄 License

ISC
