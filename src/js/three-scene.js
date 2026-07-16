/**
 * Three.js WebGL 3D Showcase Module
 * Personal Portfolio - Ycker Bandola Ponio (ybponio)
 */

import * as THREE from 'three';

let heroScene, heroCamera, heroRenderer, heroModelGroup, heroParticles;
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

/**
 * Initialize 3D Hero Viewport
 */
export function initHero3DCanvas(containerEl) {
  if (!containerEl) return;

  const width = containerEl.clientWidth || 450;
  const height = containerEl.clientHeight || 450;

  // Scene
  heroScene = new THREE.Scene();

  // Camera
  heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  heroCamera.position.set(0, 0, 9);

  // Renderer
  heroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  heroRenderer.setSize(width, height);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  heroRenderer.toneMapping = THREE.ACESFilmicToneMapping;
  containerEl.replaceChildren(heroRenderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x0f172a, 2.5);
  heroScene.add(ambientLight);

  const cyanPointLight = new THREE.PointLight(0x00f2fe, 5, 20);
  cyanPointLight.position.set(3, 3, 4);
  heroScene.add(cyanPointLight);

  const purplePointLight = new THREE.PointLight(0x7f00ff, 4, 20);
  purplePointLight.position.set(-3, -3, 3);
  heroScene.add(purplePointLight);

  // Core Group
  heroModelGroup = new THREE.Group();

  // 1. Central Metallic Server Rack Base
  const chassisGeo = new THREE.BoxGeometry(2.2, 3.2, 1.4);
  const chassisMat = new THREE.MeshStandardMaterial({
    color: 0x0c1017,
    metalness: 0.85,
    roughness: 0.2
  });
  const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
  heroModelGroup.add(chassisMesh);

  // Wireframe Overlay
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const wireMesh = new THREE.Mesh(chassisGeo, wireMat);
  wireMesh.scale.set(1.02, 1.02, 1.02);
  heroModelGroup.add(wireMesh);

  // 2. Server Blades & Neon Status Cubes
  for (let i = 0; i < 5; i++) {
    const bladeGeo = new THREE.BoxGeometry(1.9, 0.4, 1.3);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.7,
      roughness: 0.3
    });
    const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
    bladeMesh.position.y = -1.2 + i * 0.6;
    heroModelGroup.add(bladeMesh);

    // Glowing Status Light
    const ledGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const ledMat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x00f2fe : 0x10b981 });
    const ledMesh = new THREE.Mesh(ledGeo, ledMat);
    ledMesh.position.set(0.7, -1.2 + i * 0.6, 0.68);
    heroModelGroup.add(ledMesh);
  }

  // 3. Orbital Hologram Rings
  const ring1Geo = new THREE.TorusGeometry(2.5, 0.02, 16, 100);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, wireframe: true, transparent: true, opacity: 0.6 });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3;
  heroModelGroup.add(ring1);

  const ring2Geo = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x7f00ff, wireframe: true, transparent: true, opacity: 0.5 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.y = Math.PI / 4;
  heroModelGroup.add(ring2);

  // 4. Floating Particles Field
  const particleCount = 200;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 12;
    particlePositions[i + 1] = (Math.random() - 0.5) * 12;
    particlePositions[i + 2] = (Math.random() - 0.5) * 12;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0x00f2fe,
    size: 0.05,
    transparent: true,
    opacity: 0.8
  });
  heroParticles = new THREE.Points(particleGeo, particleMat);
  heroScene.add(heroParticles);

  heroScene.add(heroModelGroup);

  // Mouse Move Event Listener for Camera Tilt
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - windowHalfX) * 0.0008;
    mouseY = (e.clientY - windowHalfY) * 0.0008;
  });

  // Window Resize Listener
  window.addEventListener('resize', () => {
    if (!containerEl) return;
    const w = containerEl.clientWidth;
    const h = containerEl.clientHeight;
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    heroCamera.aspect = w / h;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(w, h);
  });

  // Render Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Smooth lerp mouse parallax
    targetMouseX += (mouseX - targetMouseX) * 0.05;
    targetMouseY += (mouseY - targetMouseY) * 0.05;

    heroModelGroup.rotation.y = elapsedTime * 0.3 + targetMouseX * 1.5;
    heroModelGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.1 + targetMouseY * 1.5;

    ring1.rotation.z = elapsedTime * 0.4;
    ring2.rotation.z = -elapsedTime * 0.3;

    heroParticles.rotation.y = elapsedTime * 0.05;

    heroRenderer.render(heroScene, heroCamera);
  }

  animate();
}

/**
 * Render Interactive 3D Model in Project Specs Modal
 */
let modalRenderer, modalScene, modalCamera, modalMeshGroup;

export function renderModal3DModel(containerEl, projectId) {
  if (!containerEl) return;

  const width = containerEl.clientWidth || 500;
  const height = 220;

  modalScene = new THREE.Scene();
  modalCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  modalCamera.position.set(0, 0, 5.5);

  modalRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  modalRenderer.setSize(width, height);
  modalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  containerEl.replaceChildren(modalRenderer.domElement);

  const ambient = new THREE.AmbientLight(0xffffff, 1.2);
  modalScene.add(ambient);

  const pLight = new THREE.PointLight(0x00f2fe, 4, 15);
  pLight.position.set(2, 2, 4);
  modalScene.add(pLight);

  modalMeshGroup = new THREE.Group();

  if (projectId === 'rmis-01') {
    // 3D Data Cube Array
    const cubeGroup = new THREE.Group();
    for (let x = -0.6; x <= 0.6; x += 0.6) {
      for (let y = -0.6; y <= 0.6; y += 0.6) {
        for (let z = -0.6; z <= 0.6; z += 0.6) {
          const geo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
          const mat = new THREE.MeshStandardMaterial({
            color: 0x00f2fe,
            wireframe: true,
            transparent: true,
            opacity: 0.8
          });
          const m = new THREE.Mesh(geo, mat);
          m.position.set(x, y, z);
          cubeGroup.add(m);
        }
      }
    }
    modalMeshGroup.add(cubeGroup);
  } else if (projectId === 'frr-game-02') {
    // 3D Pyramidal Hazard Mesh
    const pyramidGeo = new THREE.ConeGeometry(1.4, 2, 4);
    const pyramidMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      wireframe: true,
      roughness: 0.1
    });
    const pyramidMesh = new THREE.Mesh(pyramidGeo, pyramidMat);
    modalMeshGroup.add(pyramidMesh);

    const innerGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    modalMeshGroup.add(innerMesh);
  } else {
    // IT Workstation / Cyber Matrix Sphere
    const sphereGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x7f00ff,
      wireframe: true,
      metalness: 0.9
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    modalMeshGroup.add(sphereMesh);
  }

  modalScene.add(modalMeshGroup);

  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  modalRenderer.domElement.addEventListener('mousedown', (e) => {
    isDragging = true;
  });

  modalRenderer.domElement.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    };

    modalMeshGroup.rotation.y += deltaMove.x * 0.01;
    modalMeshGroup.rotation.x += deltaMove.y * 0.01;

    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  function animateModal() {
    if (!modalRenderer) return;
    requestAnimationFrame(animateModal);

    if (!isDragging) {
      modalMeshGroup.rotation.y += 0.01;
      modalMeshGroup.rotation.x += 0.005;
    }

    modalRenderer.render(modalScene, modalCamera);
  }

  animateModal();
}
