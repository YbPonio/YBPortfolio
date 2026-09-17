/**
 * 3D Monitor Showcase & Interactive RTT Screen Engine
 * Optimized Three.js 3D Monitor Model with on-demand rendering (0% idle GPU),
 * high-performance materials, and smooth bidirectional camera zoom transition.
 * Developer: Ycker Bandola Ponio (ybponio) / LGPSM
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { getPortfolioHTML, initPortfolioInteractivity } from './portfolio-html.js';
import { closeDrawer } from './drawers.js';

let scene, camera, renderer, controls;
let monitorMeshGroup, screenGroup, standGroup, displayMesh;
let rttCanvas, rttContext, screenCanvasTexture;
let isExpanded = false;
let isAnimatingTransition = false;
let raycaster, mouse;
let isInitialized = false;
let renderRequested = false;
let animFrameId = null;

let transitionStartTime = 0;
let startCamPos = new THREE.Vector3();
let startTargetPos = new THREE.Vector3();
let startRot = new THREE.Euler();

let overlayEl = null;
let expandLoaderTimeout = null;
let portfolioCleanup = null;

/**
 * On-Demand Render Trigger
 */
export function requestRender() {
  if (!renderRequested) {
    renderRequested = true;
    animFrameId = requestAnimationFrame(renderFrame);
  }
}

function renderFrame() {
  renderRequested = false;
  if (!renderer || !scene || !camera) return;

  // Update controls damping
  let controlsNeedUpdate = false;
  if (controls) {
    controlsNeedUpdate = controls.update();
  }

  // Camera Zoom Transition Animation (Smooth 500ms cubic bezier)
  if (isAnimatingTransition) {
    const targetCamZ = isExpanded ? 2.45 : 6.8;
    const targetCamY = isExpanded ? 0.38 : 0.1;
    const targetFocusY = isExpanded ? 0.38 : 0;

    const elapsed = Date.now() - transitionStartTime;
    const rawProgress = Math.min(elapsed / 520, 1.0);
    // Smooth easeInOut cubic bezier
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

      if (isExpanded) {
        showInteractiveOverlay();
      }
    } else {
      requestRender();
    }
  }

  renderer.render(scene, camera);

  // If controls inertia damping is still moving, continue rendering
  if (controlsNeedUpdate) {
    requestRender();
  }
}

/**
 * Initialize 3D Monitor Showcase in Primary Container
 */
export function init3DMonitorShowcase(containerEl) {
  if (!containerEl) return;

  const width = containerEl.clientWidth || window.innerWidth;
  const height = containerEl.clientHeight || window.innerHeight;

  // 1. Scene (Pure White Minimal Studio)
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // 2. Camera
  camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 0.1, 6.8);

  // 3. WebGL Renderer (Optimized powerPreference and capped DPR)
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    precision: 'highp'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  containerEl.replaceChildren(renderer.domElement);

  // 4. Create Interactive Screen Overlay in DOM
  createInteractiveOverlay();

  // 5. Calibrated Studio Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.3);
  mainLight.position.set(4, 7, 5);
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0xf1f5f9, 1.4);
  fillLight.position.set(-4, 2, 4);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 1.1);
  rimLight.position.set(0, 6, -3);
  scene.add(rimLight);

  // 6. Optimized Contact Shadow
  createOptimizedGroundShadow();

  // 7. Orbit Controls with Damping (Zoom disabled, Rotation enabled)
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI / 1.85;
  controls.minPolarAngle = Math.PI / 4.2;
  controls.enableZoom = false;
  controls.target.set(0, 0, 0);

  controls.addEventListener('change', () => {
    requestRender();
  });

  // 8. Initialize RTT Screen Texture
  initRenderToTexture();

  // 9. Build 3D Monitor Model
  monitorMeshGroup = new THREE.Group();
  scene.add(monitorMeshGroup);
  buildOptimizedMonitor(monitorMeshGroup);

  // 10. Raycasting for Screen Button Hover & Click
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

    const moveDist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
    if (moveDist > 8) return; // ignore user drags

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(displayMesh, false);

    if (intersects.length > 0 && isScreenButtonClick(intersects[0].uv)) {
      triggerScreenMeshExpansion();
    }
  });

  // Global ESC Key Listener to Exit Fullscreen View
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isExpanded && !isAnimatingTransition) {
      triggerScreenMeshExpansion();
    }
  });

  // Resize Handler
  window.addEventListener('resize', () => {
    if (!renderer || !camera || !containerEl) return;
    const w = containerEl.clientWidth || window.innerWidth;
    const h = containerEl.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    requestRender();
  });

  isInitialized = true;
  requestRender();
}

/**
 * Create Interactive Screen Overlay in DOM
 */
function createInteractiveOverlay() {
  overlayEl = document.createElement('div');
  overlayEl.id = 'monitor-interactive-screen-overlay';
  overlayEl.className = 'fixed inset-0 z-50 w-full h-full opacity-0 pointer-events-none hidden transition-opacity duration-300 ease-out bg-[#ffffff] overflow-hidden';

  overlayEl.innerHTML = `
    <!-- Floating Exit 3D View Button (Minimalist, Pure White / Black Aesthetic) -->
    <button id="close-overlay-btn" aria-label="Exit to 3D View" title="Exit to 3D View (ESC)"
            class="fixed top-4 right-4 sm:top-5 sm:right-6 z-[60] flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/90 hover:bg-black text-white shadow-lg backdrop-blur-md border border-gray-300 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Full-Screen Interactive Showcase Page Container -->
    <div id="overlay-portfolio-content" class="w-full h-full overflow-hidden bg-[#ffffff] relative opacity-0 transition-opacity duration-300">
      ${getPortfolioHTML()}
    </div>
  `;

  document.body.appendChild(overlayEl);

  const closeBtn = overlayEl.querySelector('#close-overlay-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
      if (isExpanded && !isAnimatingTransition) {
        triggerScreenMeshExpansion();
      }
    });
  }
}

function showInteractiveOverlay() {
  if (!overlayEl) return;

  const contentEl = overlayEl.querySelector('#overlay-portfolio-content');
  if (contentEl) {
    contentEl.innerHTML = getPortfolioHTML();
    portfolioCleanup = initPortfolioInteractivity(contentEl);
    contentEl.classList.remove('opacity-0');
    contentEl.classList.add('opacity-100');
  }

  overlayEl.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
  overlayEl.classList.add('block', 'opacity-100', 'pointer-events-auto');
}

function hideInteractiveOverlay() {
  if (!overlayEl) return;

  closeDrawer();
  if (portfolioCleanup) {
    portfolioCleanup();
    portfolioCleanup = null;
  }

  overlayEl.classList.remove('opacity-100', 'pointer-events-auto');
  overlayEl.classList.add('opacity-0', 'pointer-events-none');

  setTimeout(() => {
    if (!isExpanded && overlayEl) {
      overlayEl.classList.remove('block');
      overlayEl.classList.add('hidden');
    }
  }, 300);
}

/**
 * Trigger Camera Expansion / Collapse
 */
export function triggerScreenMeshExpansion() {
  if (isAnimatingTransition) return;

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
  }

  requestRender();
}

/**
 * Ground Shadow
 */
function createOptimizedGroundShadow() {
  const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128;
  shadowCanvas.height = 128;
  const sCtx = shadowCanvas.getContext('2d');
  const sGrad = sCtx.createRadialGradient(64, 64, 8, 64, 64, 60);
  sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.16)');
  sGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
  sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = sGrad;
  sCtx.fillRect(0, 0, 128, 128);

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
}

/**
 * Initialize Render-to-Texture (RTT) Offscreen Canvas
 */
function initRenderToTexture() {
  rttCanvas = document.createElement('canvas');
  rttCanvas.width = 1024;
  rttCanvas.height = 700;
  rttContext = rttCanvas.getContext('2d');

  screenCanvasTexture = new THREE.CanvasTexture(rttCanvas);
  screenCanvasTexture.minFilter = THREE.LinearFilter;
  screenCanvasTexture.magFilter = THREE.LinearFilter;
  screenCanvasTexture.generateMipmaps = false;

  drawFuturisticScreenTexture();
}

/**
 * Draw Pure-White Minimalist Screen Preview on RTT Canvas
 */
function drawFuturisticScreenTexture() {
  if (!rttContext || !rttCanvas) return;
  const w = rttCanvas.width;
  const h = rttCanvas.height;

  // 1. Pure White Clean Background
  rttContext.fillStyle = '#ffffff';
  rttContext.fillRect(0, 0, w, h);

  // Subtle grid lines
  rttContext.strokeStyle = 'rgba(100, 116, 139, 0.08)';
  rttContext.lineWidth = 1;
  for (let x = 0; x < w; x += 48) {
    rttContext.beginPath();
    rttContext.moveTo(x, 0);
    rttContext.lineTo(x, h);
    rttContext.stroke();
  }
  for (let y = 0; y < h; y += 48) {
    rttContext.beginPath();
    rttContext.moveTo(0, y);
    rttContext.lineTo(w, y);
    rttContext.stroke();
  }

  // 2. Top Window Navigation Bar
  rttContext.strokeStyle = '#e5e7eb';
  rttContext.lineWidth = 1.5;
  rttContext.beginPath();
  rttContext.moveTo(40, 56);
  rttContext.lineTo(w - 40, 56);
  rttContext.stroke();

  // Window control dots
  const dotY = 32;
  rttContext.fillStyle = '#94a3b8';
  [50, 68, 86].forEach((x) => {
    rttContext.beginPath();
    rttContext.arc(x, dotY, 4.5, 0, Math.PI * 2);
    rttContext.fill();
  });

  // Top Title
  rttContext.fillStyle = '#000000';
  rttContext.font = '700 14px "Orbitron", sans-serif';
  rttContext.textAlign = 'left';
  rttContext.fillText('YBPONIO ˚ — ARCHIVE 2026', 115, 37);

  // Right Status Pill
  rttContext.fillStyle = '#f3f4f6';
  drawRoundedRect(rttContext, w - 195, 20, 155, 24, 12);
  rttContext.fill();
  rttContext.fillStyle = '#4b5563';
  rttContext.font = '600 10px "Plus Jakarta Sans", sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('SYSTEM READY • 3D VIEW', w - 117, 36);

  // 3. Center Section: Futuristic Headline & Graphics
  const centerX = w / 2;
  const centerY = h / 2 - 25;

  // Category Tag
  rttContext.fillStyle = '#6b7280';
  rttContext.font = '600 12px "Plus Jakarta Sans", sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('PLEASE HIRE ME • HUHU IM BROKE', centerX, centerY - 65);

  // Main Headline in Orbitron
  rttContext.fillStyle = '#000000';
  rttContext.font = '800 36px "Orbitron", sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('BEYOND TRENDS', centerX, centerY - 20);

  rttContext.font = '500 14px "Plus Jakarta Sans", sans-serif';
  rttContext.fillStyle = '#4b5563';
  rttContext.fillText('ENGINEERED MINIMALISM • CYBER-TEX ARCHITECTURE', centerX, centerY + 12);

  // 4. Center Action Button ("EXPAND SHOWCASE  ↗")
  const btnW = 340;
  const btnH = 58;
  const btnX = centerX - btnW / 2;
  const btnY = centerY + 48;

  // Solid black pill button
  rttContext.fillStyle = '#000000';
  drawRoundedRect(rttContext, btnX, btnY, btnW, btnH, 8);
  rttContext.fill();

  // Button text
  rttContext.fillStyle = '#ffffff';
  rttContext.font = '700 13px "Plus Jakarta Sans", sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('EXPAND SHOWCASE  ↗', centerX, btnY + 34);

  // Subtext hint
  rttContext.fillStyle = '#9ca3af';
  rttContext.font = '500 11px "Plus Jakarta Sans", sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('CLICK SCREEN BUTTON TO EXPAND TO FULL EXPERIENCE', centerX, btnY + btnH + 30);

  // 5. Bottom Footer Line
  rttContext.strokeStyle = '#e5e7eb';
  rttContext.lineWidth = 1;
  rttContext.beginPath();
  rttContext.moveTo(40, h - 45);
  rttContext.lineTo(w - 40, h - 45);
  rttContext.stroke();

  rttContext.fillStyle = '#9ca3af';
  rttContext.font = '500 11px "Plus Jakarta Sans", sans-serif';
  rttContext.textAlign = 'left';
  rttContext.fillText('© 2026 YBPONIO • YCKER BANDOLA PONIO', 45, h - 22);

  rttContext.textAlign = 'right';
  rttContext.fillText('THREE.JS OPTIMIZED WebGL', w - 45, h - 22);

  screenCanvasTexture.needsUpdate = true;
  requestRender();
}

/**
 * Check if UV coordinate lands on the center button on displayMesh
 */
export function isScreenButtonClick(uv) {
  if (!uv) return false;
  return uv.x >= 0.30 && uv.x <= 0.70 && uv.y >= 0.36 && uv.y <= 0.50;
}

/**
 * Build 3D Monitor Mesh Parts with Optimized Materials & Geometries
 */
function buildOptimizedMonitor(mainGroup) {
  // --- 1. SCREEN MESH GROUP ---
  screenGroup = new THREE.Group();
  screenGroup.position.set(0, 0.4, 0);

  // Outer Bezel Frame (Clean matte obsidian / titanium)
  const bezelGeo = new THREE.BoxGeometry(2.5, 1.75, 0.09);
  const bezelMat = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    metalness: 0.8,
    roughness: 0.25
  });
  const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
  screenGroup.add(bezelMesh);

  // Bezel Inner Trim
  const trimGeo = new THREE.BoxGeometry(2.42, 1.67, 0.1);
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0x09090b,
    metalness: 0.9,
    roughness: 0.15
  });
  const trimMesh = new THREE.Mesh(trimGeo, trimMat);
  screenGroup.add(trimMesh);

  // Display Screen Geometry (Lightweight MeshStandardMaterial)
  const displayGeo = new THREE.PlaneGeometry(2.36, 1.61);
  const displayMat = new THREE.MeshStandardMaterial({
    map: screenCanvasTexture,
    metalness: 0.05,
    roughness: 0.18
  });
  displayMesh = new THREE.Mesh(displayGeo, displayMat);
  displayMesh.position.z = 0.055;
  screenGroup.add(displayMesh);

  // Power LED Indicator Dot (Green micro status light)
  const ledGeo = new THREE.SphereGeometry(0.02, 12, 12);
  const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
  const ledMesh = new THREE.Mesh(ledGeo, ledMat);
  ledMesh.position.set(1.15, -0.8, 0.055);
  screenGroup.add(ledMesh);

  mainGroup.add(screenGroup);

  // --- 2. PHYSICAL STAND MESH GROUP ---
  standGroup = new THREE.Group();
  standGroup.position.set(0, -0.65, -0.08);

  const standMat = new THREE.MeshStandardMaterial({
    color: 0x27272a,
    metalness: 0.9,
    roughness: 0.2
  });

  // Hinge Assembly
  const hingeGeo = new THREE.BoxGeometry(0.3, 0.26, 0.16);
  const hingeMesh = new THREE.Mesh(hingeGeo, standMat);
  hingeMesh.position.set(0, 0.4, 0.02);
  standGroup.add(hingeMesh);

  // Vertical Column Neck
  const neckGeo = new THREE.CylinderGeometry(0.08, 0.11, 0.95, 24);
  const neckMesh = new THREE.Mesh(neckGeo, standMat);
  neckMesh.position.set(0, 0, 0);
  standGroup.add(neckMesh);

  // Heavy Base Plate
  const baseGeo = new THREE.CylinderGeometry(0.68, 0.78, 0.05, 28);
  const baseMesh = new THREE.Mesh(baseGeo, standMat);
  baseMesh.position.set(0, -0.45, 0);
  standGroup.add(baseMesh);

  mainGroup.add(standGroup);
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
 * Clean disposal of Three.js resources
 */
export function dispose3DShowcase() {
  if (animFrameId) cancelAnimationFrame(animFrameId);
  if (renderer) renderer.dispose();
  if (screenCanvasTexture) screenCanvasTexture.dispose();
  isInitialized = false;
}
