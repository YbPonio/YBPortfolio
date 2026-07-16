/**
 * 3D Monitor Mesh Hero Showcase with Render-to-Texture (RTT)
 * Dynamically renders the Hero Banner & Percentage Boot Loader onto the 3D Monitor Screen Mesh Material
 * Developer: Ycker Bandola Ponio (ybponio)
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

let transitionStartTime = 0;
let startCamPos = new THREE.Vector3();
let startTargetPos = new THREE.Vector3();
let startRot = new THREE.Euler();

export function init3DMonitorShowcase(containerEl) {
  if (!containerEl) return;

  // 1. Scene setup
  scene = new THREE.Scene();

  // 2. Camera setup - Calibrated for initial ~300px model width
  const width = containerEl.clientWidth || window.innerWidth;
  const height = containerEl.clientHeight || window.innerHeight;
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0.1, 6.8);

  // 3. WebGL Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 0); // Transparent background
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  containerEl.replaceChildren(renderer.domElement);

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

  // 8. Click & Pointer Raycaster setup
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  renderer.domElement.addEventListener('pointerdown', () => {
    dragOccurred = false;
    mouseDownTime = Date.now();
  });

  controls.addEventListener('change', () => {
    if (Date.now() - mouseDownTime > 150) {
      dragOccurred = true;
    }
  });

  renderer.domElement.addEventListener('pointerup', (e) => {
    if (dragOccurred || isAnimatingTransition) return;

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(monitorMeshGroup.children, true);

    if (intersects.length > 0 || !isExpanded) {
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

    // Smooth Camera Transition on Expand / Un-expand
    if (isAnimatingTransition) {
      const targetCamZ = isExpanded ? 2.45 : 6.8;
      const targetCamY = isExpanded ? 0.38 : 0.1;
      const targetFocusY = isExpanded ? 0.38 : 0;

      const elapsed = Date.now() - transitionStartTime;
      const rawProgress = Math.min(elapsed / 600, 1.0);
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

        if (isExpanded) {
          startBootLoaderSequence();
        }
      }
    }

    renderer.render(scene, camera);
  }

  animate();
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

  drawDefaultScreenTexture();
}

/**
 * Draw Glossy Default Off-Screen State on 3D Monitor
 */
function drawDefaultScreenTexture() {
  if (!rttContext) return;
  const w = rttCanvas.width;
  const h = rttCanvas.height;

  rttContext.fillStyle = '#060911';
  rttContext.fillRect(0, 0, w, h);

  // Subtle glass reflection glow
  const gradient = rttContext.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.0)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
  rttContext.fillStyle = gradient;
  rttContext.fillRect(0, 0, w, h);

  // Power status dot on texture
  rttContext.fillStyle = '#38bdf8';
  rttContext.beginPath();
  rttContext.arc(w - 40, h - 35, 6, 0, Math.PI * 2);
  rttContext.fill();

  screenCanvasTexture.needsUpdate = true;
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
 * Draw Light & Modern Hero Banner Layout Directly on 3D Monitor Screen Texture
 */
function drawHeroBannerTexture() {
  if (!rttContext) return;
  const w = rttCanvas.width;
  const h = rttCanvas.height;

  // Background - Light Modern Theme
  rttContext.fillStyle = '#f8fafc';
  rttContext.fillRect(0, 0, w, h);

  // 1. Top Navigation Bar
  drawTopWindowBar('ONLINE • PORTFOLIO ACTIVE');

  const centerX = w / 2;

  // 2. Showcase Category Pill (Zero Emojis!)
  drawPillBadge('PERSONAL PORTFOLIO SHOWCASE', centerX, 150, '#f1f5f9', '#475569');

  // 3. Name Heading
  rttContext.fillStyle = '#191919';
  rttContext.font = '800 52px Inter, sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('Ycker Ponio', centerX, 225);

  // 4. Minimalist Role Badges (Zero Emojis!)
  const badgeY = 275;
  const badges = ['BSIT Student', 'Web Developer', 'IT Support Technician'];
  drawBadgeGroup(badges, centerX, badgeY);

  // 5. Bio Summary Paragraph
  rttContext.fillStyle = '#191919';
  rttContext.font = '800 18px Inter, sans-serif';
  rttContext.textAlign = 'center';
  rttContext.fillText('Building full-stack web architectures, WebGL 3D model showcases,', centerX, 360);
  rttContext.fillText('and IT support operations. Welcome to your 3D interactive hero workspace.', centerX, 388);

  // 6. Action CTA Buttons
  drawCTAButton('Initiate Contact', centerX - 110, 440, '#0f172a', '#ffffff');
  drawCTAButton('View System Specs', centerX + 110, 440, '#ffffff', '#0f172a', '#cbd5e1');

  // 7. Bottom Footer Bar
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
 * Helper: Draw Role Badge Pills Group
 */
function drawBadgeGroup(badgeList, centerX, y) {
  rttContext.font = '500 14px Inter, sans-serif';
  let totalW = 0;
  const padding = 24;
  const widths = badgeList.map((text) => rttContext.measureText(text).width + padding);
  totalW = widths.reduce((a, b) => a + b, 0) + (badgeList.length - 1) * 12;

  let currentX = centerX - totalW / 2;

  badgeList.forEach((text, i) => {
    const badgeW = widths[i];
    const badgeH = 34;

    rttContext.fillStyle = '#ffffff';
    drawRoundedRect(rttContext, currentX, y, badgeW, badgeH, 17);
    rttContext.fill();

    rttContext.strokeStyle = '#e2e8f0';
    rttContext.lineWidth = 1;
    rttContext.stroke();

    rttContext.fillStyle = i === 1 ? '#0f172a' : '#475569';
    rttContext.font = i === 1 ? '700 14px Inter, sans-serif' : '500 14px Inter, sans-serif';
    rttContext.textAlign = 'center';
    rttContext.fillText(text, currentX + badgeW / 2, y + 22);

    currentX += badgeW + 12;
  });
}

/**
 * Helper: Draw Action CTA Button
 */
function drawCTAButton(text, centerX, y, bgColor, textColor, borderColor = null) {
  rttContext.font = '700 14px Inter, sans-serif';
  const buttonW = 180;
  const buttonH = 44;
  const buttonX = centerX - buttonW / 2;

  rttContext.fillStyle = bgColor;
  drawRoundedRect(rttContext, buttonX, y, buttonW, buttonH, 10);
  rttContext.fill();

  if (borderColor) {
    rttContext.strokeStyle = borderColor;
    rttContext.lineWidth = 1.5;
    rttContext.stroke();
  }

  rttContext.fillStyle = textColor;
  rttContext.textAlign = 'center';
  rttContext.fillText(text, centerX, y + 27);
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

      // Unveil Hero Banner Texture after boot loader completes
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
    controls.enableRotate = !isExpanded;
  }

  if (!isExpanded) {
    if (loaderTimer) clearInterval(loaderTimer);
    drawDefaultScreenTexture();
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
