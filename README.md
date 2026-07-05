# Smart Pilgrim App (SIH 2025 )

The **Smart Pilgrim App** is an integrated management solution designed to streamline temple visits, reduce overcrowding through real-time AI analytics, and digitize the darshan slot booking process. Developed for the Smart India Hackathon 2025, this project aims to enhance pilgrim experience and help temple authorities manage crowd flow efficiently.

---

## 🚀 Live Demo

Experience the live application deployment endpoints across the core infrastructure grid:

* **Frontend Interface (Vercel):** [https://smartpilgrim.vercel.app](https://smartpilgrim.vercel.app)
* **Backend Cloud Gateway (Render):** [https://smartpilgrim-backend.onrender.com](https://smartpilgrim-backend.onrender.com)

---

## 🌟 Key Features

* **Real-Time Crowd Analytics:** CCTV-integrated AI models detect crowd density and update live wait times.
* **Digital Darshan Booking:** Seamless slot reservation system with QR-based entry tokens.
* **Admin Dashboard:** Real-time monitoring of temple zones, occupancy alerts, and historical data visualization.
* **Pilgrim Mobile App:** Live navigation, queue status, and personalized notifications.
* **IoT Integration:** Real-time sensor data aggregation for precise crowd tracking.

---

## 🛠 Tech Stack

This project utilizes a **MERN-stack-heavy architecture** with specialized modules for AI and IoT analytics routing.

| Component | Technology |
| :--- | :--- |
| **Frontend (Mobile)** | React Native (Expo) |
| **Frontend (Web/Admin)** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Real-time Engine** | Socket.io |
| **Database** | MongoDB |
| **AI/ML (Crowd Detection)** | Python (Flask/FastAPI), YOLOv8, OpenCV |
| **Communication** | MQTT (Mosquitto Broker) |

---

## 📂 Project Structure

```text
smart-pilgrim-app/
├── client-app/          # React Native mobile app (Pilgrims)
├── admin-dashboard/     # React.js web dashboard (Authorities)
├── server/              # Node.js/Express REST API
│   ├── routes/          # Auth, Booking, Slot management
│   ├── models/          # MongoDB schemas
│   └── services/        # Socket.io & MQTT handlers
├── ai-engine/           # Python microservice (YOLO/OpenCV)
└── README.md
