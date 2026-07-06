# 🛕 SmartPilgrim — Unified Devotional Engine

**SmartPilgrim** is a unified, all-India temple management prototype built for **Smart India Hackathon 2025**. It brings live crowd information, queue estimates, darshan slot booking, and temple guidelines into a single dashboard — designed especially for pilgrims travelling from rural areas who may not have easy access to on-site counters, local guides, or real-time updates.

---
## 🚀 Live Demo

Experience the live application deployment endpoints across the core infrastructure grid:

* **Frontend Interface (Vercel):** [https://smartpilgrim.vercel.app](https://smartpilgrim.vercel.app)
* **Backend Cloud Gateway (Render):** [https://smartpilgrim-backend.onrender.com](https://smartpilgrim-backend.onrender.com)
---

## ✨ Features

- **Live Metrics Hub** — real-time footfall count, estimated queue wait time, gate status, and zone-wise density indicators for the selected temple.
- **Darshan & Pooja Slot Booking** — pick a date and time slot, enter pilgrim details, and generate a digital pass instantly.
- **Digital Passes** — a scannable QR-style pass with a unique token ID, downloadable/shareable, no printing required.
- **About the Deity** — background on the presiding deity and the historical/spiritual significance of each temple.
- **Temple Guidelines** — dress code, prohibited items, required documents, and code of conduct.
- **All-India Temple Search** — browse by state or search across a database of 100 temples spanning 10 states.

---

## ⚠️ Current Status & Limitations

This build is a **frontend prototype/demo** created for hackathon presentation purposes. Please note honestly:

- **No live external API is connected.** All temple data (names, deities, prices, dress codes, significance write-ups) is stored locally in `script.js` as a static dataset.
- **No CCTV or camera-based crowd counting is implemented.** The "live" footfall, queue wait time, and zone density figures are **simulated** using randomized values that fluctuate every few seconds to demonstrate how a real-time dashboard would behave.
- **No backend/database is required to run the current version** — everything works client-side in the browser.
- A basic Express.js API scaffold (`server.js`) is included in the repo for reference/future use, but the deployed frontend does **not** currently call it.

These are intentional simplifications for the prototype stage — see [Future Scope](#-future-scope) below for what a production version would add.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, Flexbox, Grid) |
| Logic | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Playfair Display, Montserrat, Inter) |
| (Optional/unused) Backend scaffold | Node.js + Express |

No frameworks, no build step, no external API keys required to run the current version.

---

## 📂 Project Structure

```
SmartPilgrim/
├── index.html      # App structure & markup
├── style.css        # All styling, layout, and responsive rules
├── script.js         # App logic, temple database, simulated live metrics
├── server.js         # (Optional) Express API scaffold — not called by the current frontend
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Run the frontend only (no setup needed)
1. Clone the repository:
   ```bash
   git clone https://github.com/jagadeesh2007/SmartPilgrim.git
   cd SmartPilgrim
   ```
2. Open `index.html` directly in your browser, **or** serve it locally (recommended, avoids any file:// restrictions):
   ```bash
   npx serve .
   ```
   or use the VS Code "Live Server" extension.
3. Search for a temple to see the live dashboard, book a slot, and generate a digital pass.

### (Optional) Run the Express scaffold
```bash
npm install
npm start
```
This starts a basic API server on port `5000`, provided as a starting point for anyone who wants to wire the frontend to a real backend later. It is not required for the demo to function.

---

## 🔭 Future Scope

- Integrate a real backend/database for live temple data instead of the local static dataset.
- Replace simulated crowd metrics with actual **CCTV/camera-based crowd density estimation** (e.g. computer vision people-counting at entry gates).
- Add real payment gateway integration for slot booking fees.
- SMS/multilingual support for better accessibility among rural pilgrims.
- Government/Devasthanam board API integration for authoritative temple data and quota management.

---

## 👤 Author

Built by **Jagadeesh** for Smart India Hackathon 2025.

## 📄 License

ISC
