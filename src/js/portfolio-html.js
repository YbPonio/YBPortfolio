/**
 * LGPSM — Future Forward Fashion & Web Portfolio
 * Hero Banner using Developer's Images (img2.png base & img1.png reveal layer)
 * Guided by pure-white minimal futuristic aesthetic, fluid clamps, and side drawers.
 */

import myImgUrl from '../images/img2.png';
import layerImgUrl from '../images/img1.png';
import { Icons } from './icons.js';
import { cartState, openDrawer, closeDrawer } from './drawers.js';

// Preload hero banner images immediately so img2.png displays instantaneously
if (typeof window !== 'undefined') {
  const p2 = new Image();
  p2.src = myImgUrl;
  const p1 = new Image();
  p1.src = layerImgUrl;
}

export function getPortfolioHTML() {
  const cartCount = cartState.count();

  return `
    <div id="lgpsm-portfolio-root" class="relative w-full h-full min-h-screen bg-white text-black font-jakarta flex flex-col justify-between overflow-hidden select-none">
      
      <!-- Subtle SVG Parallax Grid Overlay (opacity: 0.10, stroke: #64748b, strokeWidth: 0.6) -->
      <svg id="hero-parallax-grid" class="absolute inset-0 w-full h-full pointer-events-none z-0" style="opacity: 0.10;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse" x="0" y="0">
            <path id="hero-grid-pattern-path" d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" stroke-width="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid-pattern)"/>
      </svg>

      <!-- Giant Creator Watermark in Background behind photo -->
      <div class="absolute bottom-2 left-0 right-0 z-[1] pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.08]">
        <span class="font-orbitron font-black text-[clamp(4.5rem,15vw,22rem)] tracking-tighter leading-none select-none text-black">
          YBPONIO
        </span>
      </div>

      <!-- Developer Hero Portrait Layers (Base & Spotlight Reveal) -->
      <div class="absolute inset-0 z-[4] pointer-events-none flex items-center justify-center">
        <!-- Base Layer (img2.png) - Always visible by default -->
        <div class="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat z-[5]"
             style="background-image: url('${myImgUrl}');"></div>

        <!-- Reveal Layer (img1.png) - Hidden by default, only visible inside cursor spotlight when hovering -->
        <div id="hero-reveal-img" class="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat pointer-events-none z-[7] opacity-0 transition-opacity duration-300"
             style="background-image: url('${layerImgUrl}'); mask-size: 100% 100%; -webkit-mask-size: 100% 100%; -webkit-mask-image: radial-gradient(circle 0px at -9999px -9999px, transparent, transparent); mask-image: radial-gradient(circle 0px at -9999px -9999px, transparent, transparent);"></div>
      </div>

      <!-- HEADER (z-20) -->
      <header class="relative z-20 flex items-center justify-between w-full"
              style="padding-inline: var(--pad-x); padding-top: var(--header-pt); padding-bottom: var(--section-gap);">
        
        <!-- Logo (Left) -->
        <a href="#" id="portfolio-site-logo" class="font-orbitron font-black text-black tracking-[0.15em] flex items-center hover:opacity-80 transition-opacity select-none cursor-pointer"
           style="font-size: var(--logo);">
          <span>YBPONIO</span>
          <span class="font-bold -mt-0.5 ml-0.5 select-none" style="font-size: var(--logo-deg);">˚</span>
        </a>
      </header>

      <!-- MAIN HERO COMPOSITION (flex-1, z-10) -->
      <main class="relative z-10 flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-center w-full pointer-events-none"
            style="padding-inline: var(--pad-x); padding-block: var(--main-py);">
        
        <!-- Left Hero Block (Vertically Centered) -->
        <div class="flex flex-col items-start gap-4 max-w-xl pointer-events-auto">
          
          <!-- Top-Left L-Corner Bracket -->
          <div class="text-black mb-1">
            ${Icons.CornerTL('var(--corner)', 1.5)}
          </div>

          <!-- Main Three-Line Headline in Orbitron -->
          <h1 class="font-orbitron font-extrabold uppercase text-black select-none tracking-[0.08em]"
              style="font-size: var(--headline); line-height: 1.05;">
            <div>PLEASE HIRE ME</div>
            <div>PLEEASSSEEE HUHU</div>
            <div class="flex items-center flex-wrap">
              <span>IM BROKE</span>
              <!-- Inline Checkerboard Grid SVG -->
              ${Icons.Checkerboard()}
            </div>
          </h1>

          <!-- Bottom-Left L-Corner Bracket -->
          <div class="text-black mt-1 mb-2">
            ${Icons.CornerBL('var(--corner)', 1.5)}
          </div>
        </div>

        <!-- Right Lower Feature Block (Self-End, Bottom-Aligned on Desktop) -->
        <div class="mt-8 lg:mt-0 self-start lg:self-end pointer-events-auto">
          <div class="relative flex flex-col gap-4 text-black bg-white/70 backdrop-blur-xs lg:bg-transparent"
               style="min-width: var(--feature-min); padding: var(--feature-pad);">
            
            <!-- Corner Brackets (TL, TR, BL, BR) -->
            <div class="absolute top-0 left-0 text-black pointer-events-none">
              ${Icons.CornerTL('var(--corner)', 1.5)}
            </div>
            <div class="absolute top-0 right-0 text-black pointer-events-none">
              ${Icons.CornerTR('var(--corner)', 1.5)}
            </div>
            <div class="absolute bottom-0 left-0 text-black pointer-events-none">
              ${Icons.CornerBL('var(--corner)', 1.5)}
            </div>
            <div class="absolute bottom-0 right-0 text-black pointer-events-none">
              ${Icons.CornerBR('var(--corner)', 1.5)}
            </div>

            <!-- Wireframe Globe SVG -->
            <div class="text-black">
              ${Icons.WireframeGlobe()}
            </div>

            <!-- Tagline in Plus Jakarta Sans Semibold Tracking 0.18em -->
            <div class="font-jakarta font-semibold uppercase text-black tracking-[0.18em] leading-snug"
                 style="font-size: var(--body);">
              <div>BEYOND TRENDS.</div>
              <div>BUILT FOR TOMORROW.</div>
            </div>
          </div>
        </div>
      </main>

      <!-- Bottom Hint Bar -->
      <footer class="relative z-10 flex items-center justify-between w-full text-[var(--micro)] font-mono text-gray-400 uppercase tracking-widest pointer-events-none pb-3"
              style="padding-inline: var(--pad-x);">
        <span>YCKER BANDOLA PONIO • PORTFOLIO</span>
        <span>ESC TO RETURN TO 3D VIEW</span>
      </footer>

    </div>
  `;
}

let activeSpotlightCleanup = null;

/**
 * Initialize Interactivity inside the Expanded Showcase Overlay
 */
export function initPortfolioInteractivity(rootEl) {
  if (!rootEl) return;

  if (activeSpotlightCleanup) {
    activeSpotlightCleanup();
    activeSpotlightCleanup = null;
  }

  // 1. Setup Navigation Drawer Triggers
  const drawerTriggers = rootEl.querySelectorAll('[data-nav-drawer]');
  drawerTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const type = e.currentTarget.getAttribute('data-nav-drawer');
      openDrawer(type);
    });
  });

  // 2. Logo click closes any open drawer
  const logo = rootEl.querySelector('#portfolio-site-logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }

  // 4. Update Cart Badge Listener
  const cartBadge = rootEl.querySelector('#cart-badge');
  const unsubscribeCart = cartState.subscribe((items) => {
    if (cartBadge) {
      const count = items.length;
      cartBadge.textContent = count.toString();
      if (count > 0) {
        cartBadge.classList.remove('hidden');
        cartBadge.classList.add('flex');
      } else {
        cartBadge.classList.remove('flex');
        cartBadge.classList.add('hidden');
      }
    }
  });

  // 5. Interactive Cursor Spotlight Reveal over the Developer's Portrait
  const revealImg = rootEl.querySelector('#hero-reveal-img');
  const pattern = rootEl.querySelector('#hero-grid-pattern');
  const patternPath = rootEl.querySelector('#hero-grid-pattern-path');

  let mouse = { x: -9999, y: -9999 };
  let smooth = { x: -9999, y: -9999 };
  let gridOffset = { x: 0, y: 0 };
  let isMouseActive = false;
  let animId = null;

  function updateGridPattern() {
    const cellSize = Math.round(Math.min(64, Math.max(36, window.innerWidth * 0.028)));
    if (pattern && patternPath) {
      pattern.setAttribute('width', cellSize.toString());
      pattern.setAttribute('height', cellSize.toString());
      patternPath.setAttribute('d', `M ${cellSize} 0 L 0 0 0 ${cellSize}`);
    }
  }
  updateGridPattern();

  const handleMouseMove = (e) => {
    const rect = rootEl.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;

    if (!isMouseActive) {
      smooth.x = mouse.x;
      smooth.y = mouse.y;
      isMouseActive = true;
      if (revealImg) {
        revealImg.classList.remove('opacity-0');
        revealImg.classList.add('opacity-100');
      }
    }
  };

  const handleMouseLeave = () => {
    if (revealImg) {
      revealImg.classList.remove('opacity-100');
      revealImg.classList.add('opacity-0');
    }
    isMouseActive = false;
  };

  const handleMouseEnter = (e) => {
    const rect = rootEl.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    smooth.x = mouse.x;
    smooth.y = mouse.y;
    isMouseActive = true;
    if (revealImg) {
      revealImg.classList.remove('opacity-0');
      revealImg.classList.add('opacity-100');
    }
  };

  const handleResize = () => {
    updateGridPattern();
  };

  rootEl.addEventListener('mousemove', handleMouseMove, { passive: true });
  rootEl.addEventListener('mouseleave', handleMouseLeave, { passive: true });
  rootEl.addEventListener('mouseenter', handleMouseEnter, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });

  function renderSpotlight() {
    if (isMouseActive && revealImg) {
      // Easing toward mouse with factor 0.1
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      // Fluid spotlight radius clamp(160, 16vw, 380)
      const radius = Math.round(Math.min(380, Math.max(160, window.innerWidth * 0.15)));

      // Exact gradient stops
      const maskStyle = `radial-gradient(circle ${radius}px at ${smooth.x.toFixed(1)}px ${smooth.y.toFixed(1)}px, ` +
        `rgba(255,255,255,1) 0%, ` +
        `rgba(255,255,255,1) 40%, ` +
        `rgba(255,255,255,0.75) 60%, ` +
        `rgba(255,255,255,0.4) 75%, ` +
        `rgba(255,255,255,0.12) 88%, ` +
        `rgba(255,255,255,0) 100%)`;

      revealImg.style.webkitMaskImage = maskStyle;
      revealImg.style.maskImage = maskStyle;

      // Parallax grid offset easing (0.06 factor)
      const cx = (smooth.x / window.innerWidth) - 0.5;
      const cy = (smooth.y / window.innerHeight) - 0.5;
      gridOffset.x += ((cx * 16) - gridOffset.x) * 0.06;
      gridOffset.y += ((cy * 16) - gridOffset.y) * 0.06;

      if (pattern) {
        pattern.setAttribute('x', gridOffset.x.toFixed(2));
        pattern.setAttribute('y', gridOffset.y.toFixed(2));
      }
    }

    animId = requestAnimationFrame(renderSpotlight);
  }

  animId = requestAnimationFrame(renderSpotlight);

  activeSpotlightCleanup = () => {
    rootEl.removeEventListener('mousemove', handleMouseMove);
    rootEl.removeEventListener('mouseleave', handleMouseLeave);
    rootEl.removeEventListener('mouseenter', handleMouseEnter);
    window.removeEventListener('resize', handleResize);
    if (animId) cancelAnimationFrame(animId);
    unsubscribeCart();
  };

  return activeSpotlightCleanup;
}
