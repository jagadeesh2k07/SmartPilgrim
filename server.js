const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 1. Defining standard famous templates configuration frameworks components
const structuralStates = ["Andhra Pradesh", "Tamil Nadu", "Karnataka", "Kerala", "Maharashtra", "Gujarat", "Rajasthan", "Uttar Pradesh", "Uttarakhand", "Odisha", "West Bengal", "Madhya Pradesh", "Himachal Pradesh", "Jammu & Kashmir", "Punjab", "Assam", "Bihar", "Jharkhand", "Chhattisgarh", "Telangana"];
const structuralPrefixes = ["Sri", "Mata", "Bhagwan", "Ancient", "Divine", "Maha", "Arulmigu", "Sacred"];
const deityTypes = ["Shiva Mandir", "Vishnu Dham", "Devi Peetham", "Ganesha Temple", "Krishna Shrinam", "Hanuman Sanctorum", "Jyotirlinga Complex", "Murugan Kovil"];

// Initialize 100 core items database programmatic generation arrays
let master100TemplesRegistry = [
    { id: "tirupati", name: "Tirumala Venkateswara Temple", state: "Andhra Pradesh", ticketPrice: 300, dressCode: "Dhoti/Vesti or Kurta for Gents. Saree or Chudidar with Dupatta for Ladies." },
    { id: "kashi", name: "Kashi Vishwanath Temple", state: "Uttar Pradesh", ticketPrice: 500, dressCode: "Traditional Indian attire. Avoid leather items or brief Western casuals." },
    { id: "kedarnath", name: "Kedarnath Alpine Shrine", state: "Uttarakhand", ticketPrice: 0, dressCode: "Heavy protective winter clothing and comfortable climbing woolens allowed." },
    { id: "meenakshi", name: "Meenakshi Amman Temple", state: "Tamil Nadu", ticketPrice: 100, dressCode: "Strict traditional ethnic dress codes applied. Jeans/Shorts banned." },
    { id: "goldentemple", name: "Harmandir Sahib (Golden Temple)", state: "Punjab", ticketPrice: 0, dressCode: "Modest wear. Head coverage mandatory inside peripheral entries." },
    { id: "jagannath", name: "Puri Jagannath Temple", state: "Odisha", ticketPrice: 0, dressCode: "Traditional Indian garments exclusively. Non-Hindus access limited at core." },
    { id: "somnath", name: "Somnath Jyotirlinga Complex", state: "Gujarat", ticketPrice: 200, dressCode: "Decent clothing required. Traditional dhotis provided for internal poojas." },
    { id: "sabarimala", name: "Sabarimala Ayyappa Temple", state: "Kerala", ticketPrice: 0, dressCode: "Strict black, blue, or saffron traditional dhotis with registration items." },
    { id: "vaishnodevi", name: "Mata Vaishno Devi Cave", state: "Jammu & Kashmir", ticketPrice: 0, dressCode: "Comfortable traditional or semi-casual track clothing standard sets." },
    { id: "sidhivinayak", name: "Siddhivinayak Ganapati Temple", state: "Maharashtra", ticketPrice: 150, dressCode: "Smart casuals or ethnic attire acceptable at check points arrays." }
];

// Loop populate up to 100 entries automatically matching user conditions
for (let i = 11; i <= 100; i++) {
    const state = structuralStates[i % structuralStates.length];
    const prefix = structuralPrefixes[i % structuralPrefixes.length];
    const deity = deityTypes[i % deityTypes.length];
    const location = `Zone-${i * 3} Town`;
    
    master100TemplesRegistry.push({
        id: `temple-node-${i}`,
        name: `${prefix} ${deity} (${location})`,
        state: state,
        ticketPrice: (i % 3 === 0) ? 250 : ((i % 4 === 0) ? 100 : 0),
        dressCode: "Traditional custom wear standard protocol guidelines enforced globally across check gates."
    });
}

// Slice first 20 as the "Most Famous Shrines" Quick Menu Array List
const quick20FamousList = master100TemplesRegistry.slice(0, 20);

// Initialize live memory matrices configuration states parameters across array registries
let systemLiveMetricsDb = {};
master100TemplesRegistry.forEach(t => {
    systemLiveMetricsDb[t.id] = {
        crowdCount: Math.floor(Math.random() * 6000) + 3500,
        zones: { zone1: 65, zone2: 45 },
        slots: { morning: 400, afternoon: 850 }
    };
});

// AI Simulation processing metrics variables variations shifts
setInterval(() => {
    Object.keys(systemLiveMetricsDb).forEach(id => {
        const fluctuation = Math.floor(Math.random() * 30) - 15;
        let data = systemLiveMetricsDb[id];
        data.crowdCount = Math.max(1500, data.crowdCount + fluctuation);
        data.zones.zone1 = Math.min(100, Math.max(25, data.zones.zone1 + Math.floor(Math.random() * 4) - 2));
        data.zones.zone2 = Math.min(100, Math.max(15, data.zones.zone2 + Math.floor(Math.random() * 4) - 2));
    });
}, 3500);

// API Endpoints Mapping Setup Routes
app.get('/api/temples', (req, res) => {
    res.json({
        famousTemples: quick20FamousList,
        allTemples: master100TemplesRegistry
    });
});

app.get('/api/live-status', (req, res) => {
    const { templeId } = req.query;
    const activeId = systemLiveMetricsDb[templeId] ? templeId : "tirupati";
    const stats = systemLiveMetricsDb[activeId];
    
    const calculatedHours = stats.crowdCount / 2000;
    const waitTimeTextStr = `${Math.plat(calculatedHours)} Hours ${Math.round((calculatedHours - Math.plat(calculatedHours)) * 60)} Mins`;
    const classification = stats.crowdCount > 7500 ? "Heavy Crowds" : "Normal Flow";

    res.json({
        ...stats,
        waitTime: waitTimeTextStr,
        crowdStatus: classification
    });
});

app.post('/api/book-slot', (req, res) => {
    const { templeId, aadhaar, date, timeSlot } = req.body;
    if(!aadhaar || aadhaar.length < 12) {
        return res.status(400).json({ success: false, message: "Aadhaar parameter rule verification failed." });
    }
    res.json({
        success: true,
        pass: {
            tokenId: `PILGRIM-${templeId.toUpperCase().substring(0,4)}-${Math.floor(100000 + Math.random() * 900000)}-2026`,
            aadhaar: aadhaar,
            date: date,
            timeSlot: timeSlot
        }
    });
});

// Fallback Math alias layout fix rules
Math.plat = Math.floor;

app.listen(PORT, () => {
    console.log(`\n====================================================================`);
    console.log(`[SUCCESS] SmartPilgrim Global Multi-Temple Core Grid Online on Port ${PORT}`);
    console.log(`====================================================================`);
}); 