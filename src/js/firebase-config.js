/**
 * Firebase Config & Fallback Database Layer (ES Module for Vite)
 * Personal Portfolio - Ycker Bandola Ponio (ybponio)
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

// Placeholder Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "ybponio-portfolio.firebaseapp.com",
  projectId: "ybponio-portfolio",
  storageBucket: "ybponio-portfolio.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Seed Projects for Initial Render / Fallback Storage
export const SEED_PROJECTS = [
  {
    id: "rmis-01",
    title: "Records Management Information System (RMIS)",
    category: "Full-Stack Web App",
    description: "Architected a high-throughput digital records management system with structured relational database schemas, secure document indexing, streaming file management, and role-based access control.",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "REST API"],
    metrics: "Optimized indexing speed by 40% & automated 1,000+ document workflows.",
    githubUrl: "#",
    liveUrl: "#",
    badge: "Featured Core System",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "frr-game-02",
    title: "Fire Risk Reduction Simulation Game",
    category: "Interactive Simulation",
    description: "Developed an immersive web-based training simulation for emergency response strategy. Features real-time state management, interactive canvas elements, procedural hazard encounters, and scoring analytics.",
    technologies: ["Vanilla JS", "HTML5 Canvas", "Anime.js", "Web Audio API"],
    metrics: "Deployed for hazard awareness training with 100+ simulated scenarios.",
    githubUrl: "#",
    liveUrl: "#",
    badge: "Interactive Demo",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "it-asset-tracker-03",
    title: "Regional Center IT Asset & Inventory Suite",
    category: "IT Support Admin Tool",
    description: "Designed during IT operations service at Regional Training Center. Consolidates hardware serial logging, software license tracking, batch CSV exports, and automated device maintenance schedule alerts.",
    technologies: ["JavaScript ES6+", "Firestore / Local DB", "Tailwind CSS"],
    metrics: "Managed 350+ hardware assets with zero downtime and fast serial lookups.",
    githubUrl: "#",
    liveUrl: "#",
    badge: "Production Operational",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
  }
];

export class PortfolioDatabase {
  constructor() {
    this.isFirebaseReady = false;
    this.db = null;
    this.initFirebase();
  }

  initFirebase() {
    try {
      if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
        this.isFirebaseReady = true;
        console.log("🔥 [Firebase] Cloud Firestore initialized successfully.");
      } else {
        console.log("ℹ️ [Database] Utilizing local fallback store with seed projects & local state.");
      }
    } catch (e) {
      console.warn("⚠️ [Firebase] Setup error or offline mode. Fallback mode active.", e.message);
      this.isFirebaseReady = false;
    }
  }

  async getProjects() {
    if (this.isFirebaseReady && this.db) {
      try {
        const snapshot = await getDocs(collection(this.db, "projects"));
        if (!snapshot.empty) {
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }
      } catch (err) {
        console.warn("Firestore fetch failed, serving preloaded records:", err);
      }
    }
    return SEED_PROJECTS;
  }

  async saveContactSubmission(formData) {
    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    if (this.isFirebaseReady && this.db) {
      try {
        await addDoc(collection(this.db, "contact_submissions"), payload);
        return { success: true, mode: "firestore" };
      } catch (err) {
        console.warn("Firestore write failed, saving locally:", err);
      }
    }

    const existing = JSON.parse(localStorage.getItem("yb_portfolio_contacts") || "[]");
    existing.push(payload);
    localStorage.setItem("yb_portfolio_contacts", JSON.stringify(existing));
    
    await new Promise(resolve => setTimeout(resolve, 600));
    return { success: true, mode: "local_storage" };
  }
}

export const portfolioDB = new PortfolioDatabase();
