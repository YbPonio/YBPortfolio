> **Summary:** Concrete project architecture and setup guide for a vanilla web portfolio utilizing HTML, Tailwind CSS, Vanilla JavaScript, Firebase, and Anime.js.

# **System Project: Personal Web Portfolio**

## 1. Project Overview
This repository contains the architecture, design plan, and setup instructions for the personal web portfolio of Ycker Bandola Ponio (ybponio). The system is built entirely without frontend or backend frameworks to maximize performance and demonstrate strong fundamental programming skills. 

The portfolio serves as a centralized hub to showcase full-stack technical expertise, 3D web design capabilities, and IT support administration experience.

---

## 2. Technology Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Markup & Structure** | HTML5 | Semantic foundation of the portfolio. |
| **Styling** | Tailwind CSS & CSS3 | Utility-first responsive design, complex gradients, and custom scrollbars. |
| **Logic & DOM** | Vanilla JavaScript (ES6+) | Core interaction, event handling, and data fetching without framework overhead. |
| **Animations** | Anime.js | Lightweight JavaScript animation engine for staggered project loading, smooth scrolling, and hero text reveals. |
| **Database & Backend** | Firebase (Cloud Firestore) | NoSQL database to store and retrieve dynamic content like project details and experience logs. |

---

## 3. Site Structure & UI Components

### A. Hero Section
*   **Visuals:** A clean, terminal-inspired introduction using Anime.js to draw SVG lines or stagger text reveals.
*   **Content:** Greeting, name, and current roles (BSIT Student | Web Developer | IT Support Technician).
*   **Call to Action (CTA):** "View Projects" and "Contact Me" buttons with smooth scroll event listeners.

### B. About Me
*   **Narrative:** Brief background focusing on the intersection of IT operations and software development.
*   **Highlights:** Experience managing hardware/software assets and encoding data at the Regional Training Center, transitioning into robust web architectures.

### C. Featured Projects (Dynamic via Firebase)
JavaScript will fetch the following records from Firestore and dynamically inject them into the HTML DOM:
*   **Records Management Information System (RMIS):** Showcasing database schemas and file streaming architecture.
*   **Fire Risk Reduction Game:** UI functionality and logic for a training simulation.
*   *Animation Protocol:* As the project cards are injected into the DOM, an Anime.js timeline will trigger a staggered fade-in and translate-up effect based on the user's scroll position.

### D. Contact Form
*   **Fields:** Name, Email, Subject, Message.
*   **Functionality:** Secured via Firebase to handle direct submissions without requiring a separate backend server. Includes an Anime.js success sequence upon successful database write.

---

## 4. Setup & Local Development Workflow

### Prerequisites
*   Node.js (strictly for the Tailwind CLI compiler).
*   Firebase CLI (`npm install -g firebase-tools`).

### Directory Structure
```text
/web-portfolio
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── css/
│   │   │   └── output.css
│   │   ├── js/
│   │   │   ├── main.js
│   │   │   ├── firebase-config.js
│   │   │   └── animations.js
│   │   └── images/
├── src/
│   └── input.css
├── tailwind.config.js
└── firebase.json