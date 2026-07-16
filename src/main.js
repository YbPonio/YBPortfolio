/**
 * Vite Main Entry Point - 3D Monitor Showcase
 * Developer: Ycker Bandola Ponio (ybponio)
 */

import '../src/style.css';
import { init3DMonitorShowcase } from './js/monitor-3d.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Initializing Centered 3D Monitor Showcase for Ycker Bandola Ponio...");

  const container = document.getElementById('monitor-canvas-container');
  if (container) {
    init3DMonitorShowcase(container);
  } else {
    console.error("3D Monitor Container '#monitor-canvas-container' not found in DOM.");
  }
});
