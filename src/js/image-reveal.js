/**
 * Desktop Interactive Image Reveal Effect & Parallax SVG Grid
 * Implements smooth cursor spotlight reveal between BG_IMAGE_1 and BG_IMAGE_2
 */

export const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85";
export const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85";

export function getImageRevealBackgroundHTML() {
  return `
    <div id="image-reveal-bg" class="hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <!-- Base Layer (BG_IMAGE_1) full bleed -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style="background-image: url('${BG_IMAGE_1}');"></div>

      <!-- Reveal Layer (BG_IMAGE_2) full bleed, clipped by spotlight mask -->
      <div id="bg-reveal-layer" class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
           style="background-image: url('${BG_IMAGE_2}'); mask-size: 100% 100%; -webkit-mask-size: 100% 100%;"></div>

      <!-- Subtle SVG Parallax Grid Overlay (opacity: 0.10, stroke: #64748b, strokeWidth: 0.6) -->
      <svg id="parallax-grid-svg" class="absolute inset-0 w-full h-full pointer-events-none" style="opacity: 0.10;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse" x="0" y="0">
            <path id="grid-pattern-path" d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" stroke-width="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
      </svg>
    </div>
  `;
}

export function getMobileImageSectionHTML() {
  return `
    <div class="block lg:hidden w-full px-[var(--pad-x)] pb-[var(--pad-y)] pt-4 z-10">
      <div class="w-full aspect-[4/5] sm:aspect-[16/9] border border-gray-200 overflow-hidden rounded-sm bg-gray-50">
        <img src="${BG_IMAGE_1}" alt="LGPSM Future Forward Fashion" class="w-full h-full object-cover object-center" loading="eager" />
      </div>
    </div>
  `;
}

export function initImageRevealBackground(root = document) {
  const container = root.querySelector('#image-reveal-bg');
  const revealLayer = root.querySelector('#bg-reveal-layer');
  const pattern = root.querySelector('#grid-pattern');
  const patternPath = root.querySelector('#grid-pattern-path');

  if (!container || !revealLayer) return () => {};

  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let smooth = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let gridOffset = { x: 0, y: 0 };
  let isMouseActive = false;
  let animId = null;

  // Fluid cell size calculation: clamp(36, window.innerWidth * 0.028, 64)
  function updateGridSize() {
    const cellSize = Math.round(Math.min(64, Math.max(36, window.innerWidth * 0.028)));
    if (pattern && patternPath) {
      pattern.setAttribute('width', cellSize.toString());
      pattern.setAttribute('height', cellSize.toString());
      patternPath.setAttribute('d', `M ${cellSize} 0 L 0 0 0 ${cellSize}`);
    }
  }

  updateGridSize();

  const handleMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (!isMouseActive) {
      smooth.x = mouse.x;
      smooth.y = mouse.y;
      isMouseActive = true;
    }
  };

  const handleResize = () => {
    updateGridSize();
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });

  function renderLoop() {
    if (window.innerWidth >= 1024) {
      // Spotlight algorithm: smooth toward mouse with factor 0.1
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      // Spotlight radius (fluid): Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)))
      const radius = Math.round(Math.min(420, Math.max(160, window.innerWidth * 0.16)));

      // Exact gradient stops:
      // 0 -> rgba(255,255,255,1)
      // 0.4 -> rgba(255,255,255,1)
      // 0.6 -> rgba(255,255,255,0.75)
      // 0.75 -> rgba(255,255,255,0.4)
      // 0.88 -> rgba(255,255,255,0.12)
      // 1 -> rgba(255,255,255,0)
      const maskStyle = `radial-gradient(circle ${radius}px at ${smooth.x.toFixed(1)}px ${smooth.y.toFixed(1)}px, ` +
        `rgba(255,255,255,1) 0%, ` +
        `rgba(255,255,255,1) 40%, ` +
        `rgba(255,255,255,0.75) 60%, ` +
        `rgba(255,255,255,0.4) 75%, ` +
        `rgba(255,255,255,0.12) 88%, ` +
        `rgba(255,255,255,0) 100%)`;

      revealLayer.style.webkitMaskImage = maskStyle;
      revealLayer.style.maskImage = maskStyle;

      // Parallax grid:
      // normalize smoothed cursor to [-0.5, 0.5]
      const cx = (smooth.x / window.innerWidth) - 0.5;
      const cy = (smooth.y / window.innerHeight) - 0.5;

      // ease offset toward cx * 16 / cy * 16 with factor 0.06
      gridOffset.x += ((cx * 16) - gridOffset.x) * 0.06;
      gridOffset.y += ((cy * 16) - gridOffset.y) * 0.06;

      if (pattern) {
        pattern.setAttribute('x', gridOffset.x.toFixed(2));
        pattern.setAttribute('y', gridOffset.y.toFixed(2));
      }
    }

    animId = requestAnimationFrame(renderLoop);
  }

  animId = requestAnimationFrame(renderLoop);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    if (animId) cancelAnimationFrame(animId);
  };
}
