/**
 * 3D Monitor Mesh Hero Showcase with Render-to-Texture (RTT)
 * Dynamically renders the Hero Banner & Percentage Boot Loader onto the 3D Monitor Screen Mesh Material
 * Developer: Ycker Bandola Ponio (ybponio)
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { getPortfolioHTML, renderPortfolioHTMLToCanvas, initPortfolioInteractivity, isScreenButtonClick } from './portfolio-html.js';

let scene, camera, renderer, controls;
let monitorMeshGroup, screenGroup, standGroup, displayMesh;
let rttCanvas, rttContext, screenCanvasTexture;
let isExpanded = false;
let isAnimatingTransition = false;
let raycaster, mouse;
let dragOccurred = false;
let mouseDownTime = 0;
let loaderTimer = null;
let currentProgress = 0;
let overlayEl = null;

let transitionStartTime = 0;
let startCamPos = new THREE.Vector3();
let startTargetPos = new THREE.Vector3();
let startRot = new THREE.Euler();

export function init3DMonitorShowcase(containerEl) {
  if (!containerEl) return;

  // 1. Scene setup (Pure White Studio Environment)
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // 2. Camera setup - Calibrated for initial ~300px model width
  const width = containerEl.clientWidth || window.innerWidth;
  const height = containerEl.clientHeight || window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0.1, 6.8);

  // 3. WebGL Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 1); // Solid white background
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  
  // Clear container and add renderer canvas
  containerEl.replaceChildren(renderer.domElement);

  // Initialize Interactive Screen Overlay
  createInteractiveOverlay(containerEl);

  // 4. Studio Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
  mainLight.position.set(5, 8, 5);
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xe2e8f0, 1.8);
  fillLight.position.set(-5, -2, -4);
  scene.add(fillLight);

  const topRimLight = new THREE.DirectionalLight(0xffffff, 1.3);
  topRimLight.position.set(0, 5, 2);
  scene.add(topRimLight);

  // Soft Ground Shadow Ring beneath Monitor Base
  const shadowGeo = new THREE.PlaneGeometry(3.2, 3.2);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 256;
  shadowCanvas.height = 256;
  const sCtx = shadowCanvas.getContext('2d');
  const sGrad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
  sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.22)');
  sGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.08)');
  sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = sGrad;
  sCtx.fillRect(0, 0, 256, 256);

  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    opacity: 0.85,
    depthWrite: false
  });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.set(0, -1.15, 0);
  scene.add(shadowMesh);


  // 5. Orbit Controls (Mouse Drag rotation allowed, Mouse Zoom disabled)
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 1.8;
  controls.minPolarAngle = Math.PI / 4;
  controls.enableZoom = false;
  controls.target.set(0, 0, 0);

  // 6. Initialize Render-to-Texture (RTT) Offscreen Canvas
  initRenderToTexture();

  // 7. Construct 3D Monitor Model Components
  monitorMeshGroup = new THREE.Group();
  scene.add(monitorMeshGroup);
  build3DMonitorMeshParts(monitorMeshGroup);

  // 8. Click & Pointer Raycaster setup (CENTER BUTTON-ONLY EXPANSION)
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  let pointerDownPos = { x: 0, y: 0 };
  let currentCursor = 'default';

  renderer.domElement.addEventListener('pointerdown', (e) => {
    pointerDownPos = { x: e.clientX, y: e.clientY };
  });

  renderer.domElement.addEventListener('pointermove', (e) => {
    if (isAnimatingTransition || isExpanded || !displayMesh) {
      if (currentCursor !== 'default') {
        currentCursor = 'default';
        renderer.domElement.style.cursor = 'default';
      }
      return;
    }

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(displayMesh, false);

    const isHover = intersects.length > 0 && isScreenButtonClick(intersects[0].uv);
    const targetCursor = isHover ? 'pointer' : 'default';

    if (currentCursor !== targetCursor) {
      currentCursor = targetCursor;
      renderer.domElement.style.cursor = targetCursor;
    }
  });


  renderer.domElement.addEventListener('pointerup', (e) => {
    if (isAnimatingTransition || isExpanded || !displayMesh) return;

    // Ignore drag movements > 10px
    const moveDist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
    if (moveDist > 10) return;

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(displayMesh, false);

    // Trigger expansion if clicking the center button on displayMesh
    if (intersects.length > 0 && isScreenButtonClick(intersects[0].uv)) {
      triggerScreenMeshExpansion();
    }
  });


  // ESC Key listener to exit full screen view
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isExpanded && !isAnimatingTransition) {
      triggerScreenMeshExpansion();
    }
  });


  // Window Resize Listener
  window.addEventListener('resize', () => {
    if (!renderer || !camera || !containerEl) return;
    const w = containerEl.clientWidth || window.innerWidth;
    const h = containerEl.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    if (controls) controls.update();

    // 3D Camera Expansion Zoom Animation
    if (isAnimatingTransition) {
      const targetCamZ = isExpanded ? 2.45 : 6.8;
      const targetCamY = isExpanded ? 0.38 : 0.1;
      const targetFocusY = isExpanded ? 0.38 : 0;

      const elapsed = Date.now() - transitionStartTime;
      const rawProgress = Math.min(elapsed / 550, 1.0);
      const ease = rawProgress * rawProgress * (3 - 2 * rawProgress);

      camera.position.x = startCamPos.x + (0 - startCamPos.x) * ease;
      camera.position.y = startCamPos.y + (targetCamY - startCamPos.y) * ease;
      camera.position.z = startCamPos.z + (targetCamZ - startCamPos.z) * ease;

      controls.target.x = startTargetPos.x + (0 - startTargetPos.x) * ease;
      controls.target.y = startTargetPos.y + (targetFocusY - startTargetPos.y) * ease;
      controls.target.z = startTargetPos.z + (0 - startTargetPos.z) * ease;

      monitorMeshGroup.rotation.x = startRot.x * (1 - ease);
      monitorMeshGroup.rotation.y = startRot.y * (1 - ease);
      monitorMeshGroup.rotation.z = startRot.z * (1 - ease);

      if (rawProgress >= 1.0) {
        camera.position.set(0, targetCamY, targetCamZ);
        controls.target.set(0, targetFocusY, 0);
        monitorMeshGroup.rotation.set(0, 0, 0);
        isAnimatingTransition = false;

        if (controls) {
          controls.enableRotate = !isExpanded;
          controls.update();
        }

        // Reveal Portfolio HTML Showcase ONLY after expanding animation completes
        if (isExpanded) {
          showInteractiveOverlay();
        }
      }
    }

    renderer.render(scene, camera);
  }

  animate();
}

let expandLoaderTimeout = null;

/**
 * Create Interactive HTML Screen Overlay taking full screen display
 */
function createInteractiveOverlay(containerEl) {
  overlayEl = document.createElement('div');
  overlayEl.id = 'monitor-interactive-screen-overlay';
  overlayEl.className = 'fixed inset-0 z-50 w-full h-full opacity-0 pointer-events-none hidden transition-opacity duration-300 ease-out bg-[#ffffff] overflow-hidden';

  overlayEl.innerHTML = `
    <!-- Floating Exit 3D View Button (Minimalist X Button, No Text) -->
    <button id="close-overlay-btn" aria-label="Exit 3D View" title="Exit 3D View (ESC)" class="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white shadow-xl backdrop-blur-md border border-slate-700/80 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Full-Screen Interactive Showcase Loader -->
    <div id="portfolio-expand-loader" class="absolute inset-0 z-40 bg-white flex flex-col items-center justify-center transition-opacity duration-300 ease-out opacity-100 pointer-events-auto select-none">
      <style>
        .loader {
          width: 60px;
          aspect-ratio: 2;
          --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
          background: 
            var(--_g) 0%   50%,
            var(--_g) 50%  50%,
            var(--_g) 100% 50%;
          background-size: calc(100%/3) 50%;
          animation: l3 1s infinite linear;
        }
        @keyframes l3 {
            20%{background-position:0%   0%, 50%  50%,100%  50%}
            40%{background-position:0% 100%, 50%   0%,100%  50%}
            60%{background-position:0%  50%, 50% 100%,100%   0%}
            80%{background-position:0%  50%, 50%  50%,100% 100%}
        }
      </style>
      <div class="loader"></div>
    </div>

    <!-- Full-Screen Interactive Showcase Page Container -->
    <div id="overlay-portfolio-content" class="w-full h-full overflow-hidden bg-[#ffffff] relative opacity-0 transition-opacity duration-300">
      ${getPortfolioHTML()}
    </div>
  `;

  document.body.appendChild(overlayEl);

  const contentEl = overlayEl.querySelector('#overlay-portfolio-content');
  if (contentEl) {
    initPortfolioInteractivity(contentEl);
  }

  // Close button event listener
  const closeBtn = overlayEl.querySelector('#close-overlay-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isExpanded && !isAnimatingTransition) {
        triggerScreenMeshExpansion();
      }
    });
  }
}

function showInteractiveOverlay() {
  if (overlayEl) {
    if (expandLoaderTimeout) {
      clearTimeout(expandLoaderTimeout);
      expandLoaderTimeout = null;
    }

    const loaderEl = overlayEl.querySelector('#portfolio-expand-loader');
    const contentEl = overlayEl.querySelector('#overlay-portfolio-content');

    if (contentEl) {
      contentEl.innerHTML = getPortfolioHTML();
      initPortfolioInteractivity(contentEl);
      contentEl.classList.remove('opacity-100');
      contentEl.classList.add('opacity-0');
    }

    if (loaderEl) {
      loaderEl.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
      loaderEl.classList.add('flex', 'opacity-100', 'pointer-events-auto');
    }

    overlayEl.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
    overlayEl.classList.add('block', 'opacity-100', 'pointer-events-auto');

    expandLoaderTimeout = setTimeout(() => {
      if (loaderEl) {
        loaderEl.classList.remove('opacity-100', 'pointer-events-auto');
        loaderEl.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
          loaderEl.classList.add('hidden');
        }, 300);
      }
      if (contentEl) {
        contentEl.classList.remove('opacity-0');
        contentEl.classList.add('opacity-100');
      }
    }, 1000);
  }
}

function hideInteractiveOverlay() {
  if (expandLoaderTimeout) {
    clearTimeout(expandLoaderTimeout);
    expandLoaderTimeout = null;
  }
  if (overlayEl) {
    overlayEl.classList.remove('opacity-100', 'pointer-events-auto');
    overlayEl.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      if (!isExpanded && overlayEl) {
        overlayEl.classList.remove('block', 'flex');
        overlayEl.classList.add('hidden');
      }
    }, 300);
  }
}





/**
 * ---------------------------------------------------------
 * RENDER-TO-TEXTURE (RTT) ENGINE
 * Renders dynamic 2D canvas content directly onto 3D screen texture
 * ---------------------------------------------------------
 */
function initRenderToTexture() {
  rttCanvas = document.createElement('canvas');
  rttCanvas.width = 1024;
  rttCanvas.height = 680;
  rttContext = rttCanvas.getContext('2d');

  screenCanvasTexture = new THREE.CanvasTexture(rttCanvas);
  screenCanvasTexture.minFilter = THREE.LinearFilter;
  screenCanvasTexture.magFilter = THREE.LinearFilter;
  screenCanvasTexture.generateMipmaps = false;

  drawHeroBannerTexture();
}

/**
 * Draw Light & Modern Boot Loader Sequence on 3D Monitor Screen Texture
 */
function drawBootLoaderTexture(progress, logText) {
  if (!rttContext) return;
  const w = rttCanvas.width;
  const h = rttCanvas.height;

  // Background - Light Modern Theme
  rttContext.fillStyle = '#f8fafc';
  rttContext.fillRect(0, 0, w, h);

  // 1. Top Navigation Bar
  drawTopWindowBar('INITIALIZING WORKSPACE');

  // 2. Center Content Container
  const centerX = w / 2;
  const centerY = h / 2 - 20;

  // Tag Badge
  drawPillBadge('INITIALIZING WORKSPACE', centerX, centerY - 80, '#e2e8f0', '#334155');

  // Section Title
  rttContext.fillStyle = '#0f172a';
  rttContext.font = '700 32px Inter, sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('SYSTEM INIT - YB-OS', centerX, centerY - 25);

  // 3. Progress Bar Track & Fill
  const barW = 480;
  const barH = 16;
  const barX = centerX - barW / 2;
  const barY = centerY + 20;

  // Log Message
  rttContext.fillStyle = '#64748b';
  rttContext.font = '500 15px "Fira Code", monospace';
  rttContext.textAlign = 'left';
  rttContext.fillText(logText, barX, barY - 12);

  // Percentage Counter Text
  rttContext.fillStyle = '#0f172a';
  rttContext.font = '700 16px "Fira Code", monospace';
  rttContext.textAlign = 'right';
  rttContext.fillText(`${progress}%`, barX + barW, barY - 12);

  // Track Background
  rttContext.fillStyle = '#e2e8f0';
  drawRoundedRect(rttContext, barX, barY, barW, barH, 8);
  rttContext.fill();

  // Progress Bar Dark Fill
  if (progress > 0) {
    const currentBarW = Math.max(16, (barW * progress) / 100);
    rttContext.fillStyle = '#0f172a';
    drawRoundedRect(rttContext, barX, barY, currentBarW, barH, 8);
    rttContext.fill();
  }

  // Footer Subtext
  rttContext.fillStyle = '#191919';
  rttContext.font = '800 13px "Fira Code", monospace';
  rttContext.textAlign = 'center';
  rttContext.fillText('PLEASE WAIT • SYNCHRONIZING REALTIME DATASETS', centerX, barY + 55);

  // 4. Bottom Footer Bar
  drawBottomFooterBar();

  screenCanvasTexture.needsUpdate = true;
}

/**
 * Helper: Top Window Bar Render
 */
function drawTopWindowBar(statusText) {
  const w = rttCanvas.width;

  // Top Bar Divider Line
  rttContext.strokeStyle = '#e2e8f0';
  rttContext.lineWidth = 1.5;
  rttContext.beginPath();
  rttContext.moveTo(40, 60);
  rttContext.lineTo(w - 40, 60);
  rttContext.stroke();

  // Control Dots
  const dotY = 35;
  rttContext.fillStyle = '#cbd5e1';
  [50, 68, 86].forEach((x) => {
    rttContext.beginPath();
    rttContext.arc(x, dotY, 5, 0, Math.PI * 2);
    rttContext.fill();
  });

  // URL Domain Text
  rttContext.fillStyle = '#334155';
  rttContext.font = '600 14px Inter, sans-serif';
  rttContext.textAlign = 'left';
  rttContext.fillText('ybponio • portfolio', 110, 39);

  // Status Badge (Right aligned)
  rttContext.fillStyle = '#e2e8f0';
  drawRoundedRect(rttContext, w - 210, 23, 160, 26, 13);
  rttContext.fill();

  rttContext.fillStyle = '#334155';
  rttContext.font = '600 11px Inter, sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText(statusText, w - 130, 40);
}

/**
 * Helper: Bottom Footer Bar Render
 */
function drawBottomFooterBar() {
  const w = rttCanvas.width;
  const h = rttCanvas.height;

  rttContext.strokeStyle = '#e2e8f0';
  rttContext.lineWidth = 1.5;
  rttContext.beginPath();
  rttContext.moveTo(40, h - 55);
  rttContext.lineTo(w - 40, h - 55);
  rttContext.stroke();

  rttContext.fillStyle = '#94a3b8';
  rttContext.font = '500 13px Inter, sans-serif';
  rttContext.textAlign = 'left';
  rttContext.fillText('© 2026 Ycker Bandola Ponio (ybponio)', 50, h - 25);

  rttContext.textAlign = 'right';
  rttContext.fillText('Three.js Render-to-Texture (RTT)', w - 50, h - 25);
}

/**
 * Helper: Draw Pill Badge
 */
function drawPillBadge(text, centerX, y, bgColor, textColor) {
  rttContext.font = '600 12px Inter, sans-serif';
  const textWidth = rttContext.measureText(text).width;
  const pillW = textWidth + 30;
  const pillH = 28;
  const pillX = centerX - pillW / 2;

  rttContext.fillStyle = bgColor;
  drawRoundedRect(rttContext, pillX, y, pillW, pillH, 14);
  rttContext.fill();

  rttContext.fillStyle = textColor;
  rttContext.textAlign = 'center';
  rttContext.fillText(text, centerX, y + 18);
}

/**
 * Helper: Draw Rounded Rect Path
 */
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Draw Portfolio HTML directly onto 3D Monitor Screen Texture
 */
function drawHeroBannerTexture() {
  if (!rttContext || !rttCanvas) return;
  renderPortfolioHTMLToCanvas(rttContext, rttCanvas.width, rttCanvas.height, () => {
    if (screenCanvasTexture) {
      screenCanvasTexture.needsUpdate = true;
    }
  });
}

/**
 * Start Boot Loader Animation Sequence directly on RTT Screen Texture
 */
function startBootLoaderSequence() {
  if (loaderTimer) clearInterval(loaderTimer);
  currentProgress = 0;

  const logs = [
    'Loading 3D Viewport Shaders...',
    'Loading Perspective Camera Matrix...',
    'Fetching Project Records...',
    'Initializing Hero Workspace...',
    'Boot Sequence Complete!'
  ];

  drawBootLoaderTexture(0, logs[0]);

  loaderTimer = setInterval(() => {
    currentProgress += Math.floor(Math.random() * 12) + 8;

    if (currentProgress >= 100) {
      currentProgress = 100;
      clearInterval(loaderTimer);

      drawBootLoaderTexture(100, logs[4]);

      // Unveil Hero Portfolio HTML Texture after boot loader completes
      setTimeout(() => {
        drawHeroBannerTexture();
      }, 250);
    } else {
      const logIdx = Math.min(Math.floor((currentProgress / 100) * 4), 3);
      drawBootLoaderTexture(currentProgress, logs[logIdx]);
    }
  }, 35);
}

/**
 * Trigger 3D Screen Expansion on Click
 */
function triggerScreenMeshExpansion() {
  isAnimatingTransition = true;
  isExpanded = !isExpanded;
  transitionStartTime = Date.now();

  startCamPos.copy(camera.position);
  startTargetPos.copy(controls.target);
  startRot.copy(monitorMeshGroup.rotation);

  if (controls) {
    controls.enableRotate = false;
  }

  if (!isExpanded) {
    hideInteractiveOverlay();
    drawHeroBannerTexture();
  }
}



/**
 * Build 3D Monitor Mesh Parts with RTT Material Mapping
 */
function build3DMonitorMeshParts(mainGroup) {
  // --- 1. SCREEN MESH GROUP (500x350 Initial Proportional Ratio: 2.50 x 1.75) ---
  screenGroup = new THREE.Group();
  screenGroup.position.set(0, 0.4, 0);

  // Outer Bezel Frame
  const bezelGeo = new THREE.BoxGeometry(2.5, 1.75, 0.1);
  const bezelMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    metalness: 0.85,
    roughness: 0.2
  });
  const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
  screenGroup.add(bezelMesh);

  // Bezel Inner Trim
  const trimGeo = new THREE.BoxGeometry(2.42, 1.67, 0.11);
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    metalness: 0.9,
    roughness: 0.1
  });
  const trimMesh = new THREE.Mesh(trimGeo, trimMat);
  screenGroup.add(trimMesh);

  // Display Screen Geometry mapped with Render-to-Texture (CanvasTexture)
  const displayGeo = new THREE.PlaneGeometry(2.36, 1.61);
  const displayMat = new THREE.MeshPhysicalMaterial({
    map: screenCanvasTexture,
    metalness: 0.1,
    roughness: 0.25,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1
  });
  displayMesh = new THREE.Mesh(displayGeo, displayMat);
  displayMesh.position.z = 0.06;
  screenGroup.add(displayMesh);

  // Power LED Indicator Dot
  const ledGeo = new THREE.SphereGeometry(0.025, 16, 16);
  const ledMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const ledMesh = new THREE.Mesh(ledGeo, ledMat);
  ledMesh.position.set(1.15, -0.8, 0.06);
  screenGroup.add(ledMesh);

  mainGroup.add(screenGroup);

  // --- 2. PHYSICAL STAND MESH GROUP (Column, Connector Hinge, Base Plate) ---
  standGroup = new THREE.Group();
  standGroup.position.set(0, -0.65, -0.1);

  const standMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    metalness: 0.95,
    roughness: 0.15
  });

  // Hinge Assembly
  const hingeGeo = new THREE.BoxGeometry(0.32, 0.28, 0.18);
  const hingeMesh = new THREE.Mesh(hingeGeo, standMat);
  hingeMesh.position.set(0, 0.4, 0.02);
  standGroup.add(hingeMesh);

  // Vertical Column Neck
  const neckGeo = new THREE.CylinderGeometry(0.09, 0.12, 0.95, 32);
  const neckMesh = new THREE.Mesh(neckGeo, standMat);
  neckMesh.position.set(0, 0, 0);
  standGroup.add(neckMesh);

  // Heavy Base Plate
  const baseGeo = new THREE.CylinderGeometry(0.7, 0.82, 0.06, 32);
  const baseMesh = new THREE.Mesh(baseGeo, standMat);
  baseMesh.position.set(0, -0.45, 0);
  standGroup.add(baseMesh);

  mainGroup.add(standGroup);
}
