/**
 * Vite Main Entry Point — 3D Monitor Showcase & Interactive Portfolio
 * Developer: Ycker Bandola Ponio (ybponio) / LGPSM
 */

import './style.css';
import { init3DMonitorShowcase } from './js/monitor-3d.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Initializing LGPSM 3D Showcase & Portfolio for YBPONIO...");

  const container = document.getElementById('monitor-canvas-container');
  if (container) {
    init3DMonitorShowcase(container);
  } else {
    console.error("3D Monitor Container '#monitor-canvas-container' not found in DOM.");
  }
});
