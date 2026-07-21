/**
 * Creative Studio Showcase HTML Template & Interactivity Engine
 * Designed for 3D Monitor Model Screen Display & Expanded Interactive View
 */

import myImgUrl from '../images/img2.png';
import layerImgUrl from '../images/img1.png';

export function getPortfolioHTML() {
  return `
    <div class="portfolio-screen-root relative w-full h-full min-h-full max-h-full bg-white text-[#F4F1E8] overflow-hidden font-sans flex flex-col">
      <style>
        .portfolio-screen-root *, .portfolio-screen-root *::before, .portfolio-screen-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .portfolio-screen-root { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }

        /* ===== SPLASH ===== */
        .splash { display: none !important; }

        .hero-image-animate { opacity: 1; transform: none; }
        .word-reveal { opacity: 1; display: inline-block; margin-right: 0.3em; }
        .cta-animate { opacity: 1; transform: none; }

        /* ===== CTA BUTTON ===== */
        .cta-btn { position: relative; overflow: hidden; display: flex; align-items: center; border: none; background: none; cursor: pointer; border-radius: 9999px; padding: 6px; gap: 10px; }
        .cta-btn-bg {
          position: absolute; top: 4px; bottom: 4px; left: 6px;
          width: calc(100% - 6px - 6px - 40px - 10px);
          border-radius: 9999px; background: white; z-index: 0;
          transition: width 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        @media (min-width: 768px) { .cta-btn-bg { width: calc(100% - 6px - 6px - 46px - 10px); } }
        .cta-btn:hover .cta-btn-bg { width: calc(100% - 12px); }
        .cta-btn-text { position: relative; z-index: 1; color: #111111; font-weight: 500; font-size: 14px; padding: 10px 24px; white-space: nowrap; }
        @media (min-width: 768px) { .cta-btn-text { font-size: 16px; padding: 12px 32px; } }
        .cta-btn-circle {
          position: relative; z-index: 1; display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 50%; background: #75C5DE; flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        @media (min-width: 768px) { .cta-btn-circle { width: 46px; height: 46px; } }
        .cta-btn:hover .cta-btn-circle { transform: translateX(-5px); }

        /* ===== MENU CTA (smaller) ===== */
        .menu-cta-btn { position: relative; overflow: hidden; display: flex; align-items: center; border: none; background: none; cursor: pointer; border-radius: 9999px; padding: 6px; gap: 8px; }
        .menu-cta-bg {
          position: absolute; top: 5px; bottom: 5px; left: 8px;
          width: calc(100% - 8px - 8px - 38px - 8px);
          border-radius: 9999px; background: white; z-index: 0;
          transition: width 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .menu-cta-btn:hover .menu-cta-bg { width: calc(100% - 12px); }
        .menu-cta-text { position: relative; z-index: 1; color: #111111; font-weight: 500; font-size: 14px; padding: 8px 40px; white-space: nowrap; }
        .menu-cta-circle {
          position: relative; z-index: 1; display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 50%; background: #75C5DE; flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .menu-cta-btn:hover .menu-cta-circle { transform: translateX(-4px); }

        /* ===== CREATOR TEXT ===== */
        .creator-text-animate { transform: none; opacity: 1; }


        /* ===== NAVIGATION ===== */
        .burger-wrapper {
          position: absolute; top: 12px; right: 0; width: 50%; z-index: 10;
          display: flex; justify-content: flex-end; align-items: center;
        }
        @media (min-width: 768px) { .burger-wrapper { top: 16px; } }
        .burger-wrapper .inner { padding-right: 20px; }
        @media (min-width: 768px) { .burger-wrapper .inner { padding-right: 32px; } }

        .burger-btn {
          width: 48px; height: 48px; border-radius: 50%; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 4px; align-items: center; justify-content: center;
          background: #F4F1E8; transition: background 0.4s ease;
        }
        .burger-btn:hover { background: #0B0B0B; }
        .burger-btn .bar {
          display: block; width: 20px; height: 2px; background: #111111;
          transition: all 0.3s ease;
        }
        .burger-btn:hover .bar { background: #F4F1E8; }
        .burger-btn.open { background: #0B0B0B; }
        .burger-btn.open .bar { background: #F4F1E8; }
        .burger-btn.open .bar:first-child { transform: rotate(45deg) translate(2px, 2px); }
        .burger-btn.open .bar:last-child { transform: rotate(-45deg) translate(2px, -2px); }

        /* ===== MENU PANEL ===== */
        .menu-panel {
          position: absolute; z-index: 9;
          left: 8px; right: 8px;
          border-radius: 20px;
          background: rgba(17,17,17,0.95);
          backdrop-filter: blur(26px); -webkit-backdrop-filter: blur(26px);
          padding: 80px 24px 24px 24px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: top 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease;
          top: -600px; opacity: 0; pointer-events: none;
        }
        @media (min-width: 768px) {
          .menu-panel { left: auto; right: 7px; width: 360px; padding: 48px 32px 32px 32px; }
        }
        .menu-panel.open { top: 0; opacity: 1; pointer-events: auto; }
        @media (min-width: 768px) { .menu-panel.open { top: 7px; } }

        .menu-panel nav { display: flex; flex-direction: column; gap: 8px; }
        .menu-panel nav a {
          color: #F4F1E8; font-size: 32px; font-weight: 500; text-decoration: none;
          line-height: 130%; transition: opacity 0.3s ease;
        }
        @media (min-width: 768px) { .menu-panel nav a { font-size: 36px; } }
        .menu-panel nav a:hover { opacity: 0.7; }

        .menu-contact { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
        .menu-email { color: #9A9590; font-size: 16px; text-decoration: none; transition: color 0.3s ease; }
        @media (min-width: 768px) { .menu-email { font-size: 18px; } }
        .menu-email:hover { color: #F4F1E8; }
        .menu-socials { display: flex; gap: 20px; }
        .menu-socials a {
          color: #9A9590; font-size: 13px; text-decoration: underline;
          text-underline-offset: 2px; transition: color 0.3s ease;
        }
        .menu-socials a:hover { color: #F4F1E8; }

        /* ===== HERO ===== */
        .hero {
          position: relative; width: 100%; height: 100%; min-height: 100%; max-height: 100%; overflow: hidden;
          background: #ffffff; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .hero-big-text {
          position: absolute; bottom: -10px; left: 0; right: 0; z-index: 2;
          pointer-events: none; width: 100%; text-align: center;
        }
        .hero-big-text h2 {
          font-weight: 500; color: #111111; opacity: 0.15; line-height: 80%;
          letter-spacing: -0.04em; white-space: nowrap;
          font-size: clamp(80px, 16vw, 320px);
        }

        .hero-base-img {
          position: absolute; inset: 0; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0;
          background-size: contain; background-repeat: no-repeat;
          background-position: center; z-index: 5;
        }

        .hero-reveal-img {
          position: absolute; inset: 0; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0;
          background-size: contain; background-repeat: no-repeat;
          background-position: center; z-index: 7; pointer-events: none;
          -webkit-mask-image: radial-gradient(circle 182px at -9999px -9999px, black 0%, black 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%);
          mask-image: radial-gradient(circle 182px at -9999px -9999px, black 0%, black 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%);
        }

        .hero-content {
          position: absolute; inset: 0; z-index: 8;
          display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;
          width: 100%; height: 100%; margin: 0 auto;
          padding: 80px 24px 32px 24px; pointer-events: none; box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .hero-content {
            padding: 90px 36px 36px 36px;
            justify-content: flex-start;
          }
        }
        .hero-content-inner { display: flex; flex-direction: column; align-items: flex-start; gap: 24px; width: 100%; pointer-events: auto; }

        .hero-headline {
          font-size: 20px; font-weight: 500; line-height: 120%;
          letter-spacing: -0.02em; color: #111111; max-width: 420px;
        }
        @media (min-width: 768px) { .hero-headline { font-size: 26px; } }

        /* ===== REDUCED MOTION ===== */
        @media (prefers-reduced-motion: reduce) {
          .splash { animation: splashHide 0.01s linear forwards; }
          .splash-box { animation: none !important; }
          .hero-image-animate, .word-reveal, .cta-animate, .creator-text-animate {
            animation: none !important; opacity: 1 !important;
            transform: none !important; filter: none !important; visibility: visible !important;
          }
        }
      </style>

      <!-- SPLASH -->
      <div class="splash" id="splash">
        <div class="splash-row splash-row-top">
          <div class="splash-box"></div><div class="splash-box"></div><div class="splash-box"></div><div class="splash-box"></div><div class="splash-box"></div>
        </div>
        <div class="splash-row splash-row-bottom">
          <div class="splash-box"></div><div class="splash-box"></div><div class="splash-box"></div><div class="splash-box"></div><div class="splash-box"></div>
        </div>
      </div>

      <!-- BURGER -->
      <div class="burger-wrapper">
        <div class="inner">
          <button class="burger-btn" id="burger-btn" aria-label="Open menu">
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>

      <!-- MENU PANEL -->
      <div class="menu-panel" id="menu-panel">
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </nav>
        <div class="menu-contact">
          <a href="mailto:studio@norakessler.com" class="menu-email">studio@norakessler.com</a>
          <div class="menu-socials">
            <a href="#">Pinterest</a>
            <a href="#">Behance</a>
            <a href="#">Letterboxd</a>
          </div>
        </div>
        <div style="margin-top:32px;">
          <button class="menu-cta-btn">
            <span class="menu-cta-bg"></span>
            <span class="menu-cta-text">Let's talk</span>
            <span class="menu-cta-circle">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <!-- HERO -->
      <main class="hero">
        <!-- Big text behind image -->
        <div class="hero-big-text creator-text-animate">
          <h2>YBPONIO</h2>
        </div>

        <!-- Base image using src/images/IMG_20260721_001852.jpg -->
        <div class="hero-base-img hero-image-animate"
             style="background-image:url('${myImgUrl}');">
        </div>

        <!-- Reveal layer using src/images/IMG_20260721_001907.png -->
        <div class="hero-reveal-img" id="reveal-img"
             style="background-image:url('${layerImgUrl}');">
        </div>

        <!-- Content -->
        <div class="hero-content">
          <div class="hero-content-inner">
            <h1 class="hero-headline" id="headline"></h1>
            <button class="cta-btn cta-animate">
              <span class="cta-btn-bg"></span>
              <span class="cta-btn-text">Start a project now</span>
              <span class="cta-btn-circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  `;
}

/**
 * Initialize Interactivity (Word reveal, Burger toggle, Spotlight mask) inside DOM element
 */
export function initPortfolioInteractivity(rootEl) {
  if (!rootEl) return;

  // 1. Headline text (Instant display)
  const headline = rootEl.querySelector('#headline');
  if (headline && !headline.textContent) {
    headline.textContent = "I build compelling visual stories & motion that make ideas shine.";
  }


  // 2. Burger menu toggle
  const burgerBtn = rootEl.querySelector('#burger-btn');
  const menuPanel = rootEl.querySelector('#menu-panel');
  let menuOpen = false;
  if (burgerBtn && menuPanel) {
    burgerBtn.onclick = (e) => {
      e.stopPropagation();
      menuOpen = !menuOpen;
      if (menuOpen) {
        burgerBtn.classList.add('open');
        menuPanel.classList.add('open');
        burgerBtn.setAttribute('aria-label', 'Close menu');
      } else {
        burgerBtn.classList.remove('open');
        menuPanel.classList.remove('open');
        burgerBtn.setAttribute('aria-label', 'Open menu');
      }
    };

    menuPanel.querySelectorAll('nav a').forEach((a) => {
      a.onclick = () => {
        menuOpen = false;
        burgerBtn.classList.remove('open');
        menuPanel.classList.remove('open');
      };
    });
  }

  // 3. Spotlight reveal effect (.3 smaller: 260 * 0.7 = 182)
  const SPOTLIGHT_R = 100;
  const imgLayer = rootEl.querySelector('#reveal-img');

  if (imgLayer) {
    let mouseX = -9999;
    let mouseY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;
    let isMouseActive = false;

    const handleMouseMove = (e) => {
      const rect = rootEl.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (!isMouseActive) {
        smoothX = mouseX;
        smoothY = mouseY;
        isMouseActive = true;
      }
    };

    rootEl.addEventListener('mousemove', handleMouseMove);

    let animId = null;
    function updateSpotlight() {
      if (isMouseActive) {
        smoothX += (mouseX - smoothX) * 0.15;
        smoothY += (mouseY - smoothY) * 0.15;

        const maskGradient = `radial-gradient(circle ${SPOTLIGHT_R}px at ${smoothX.toFixed(1)}px ${smoothY.toFixed(1)}px, black 0%, black 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%)`;
        imgLayer.style.webkitMaskImage = maskGradient;
        imgLayer.style.maskImage = maskGradient;
      }
      animId = requestAnimationFrame(updateSpotlight);
    }
    updateSpotlight();

    return () => {
      rootEl.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }
}

/**
 * Render initial blank/black 3D Monitor Screen texture with prominent center button
 */
export function renderPortfolioHTMLToCanvas(ctx, canvasWidth, canvasHeight, onComplete) {
  if (!ctx) return;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // 1. Sleek Obsidian Black Screen Base
  ctx.fillStyle = '#080c14';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // 2. Subtle Dark Matte Screen Radial Reflection & Grid
  const reflection = ctx.createRadialGradient(
    canvasWidth / 2, canvasHeight / 2 - 50, 50,
    canvasWidth / 2, canvasHeight / 2, canvasWidth / 1.5
  );
  reflection.addColorStop(0, 'rgba(30, 41, 59, 0.4)');
  reflection.addColorStop(0.5, 'rgba(15, 23, 42, 0.2)');
  reflection.addColorStop(1, 'rgba(8, 12, 20, 0.9)');
  ctx.fillStyle = reflection;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Grid lines background accent
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvasWidth; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
    ctx.stroke();
  }
  for (let y = 0; y < canvasHeight; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
    ctx.stroke();
  }

  // 3. Center Button Dimensions (btnW: 340, btnH: 70, centered)
  const btnW = 340;
  const btnH = 70;
  const btnX = (canvasWidth - btnW) / 2;
  const btnY = (canvasHeight - btnH) / 2;

  // Outer Cyan Glow Ring
  ctx.fillStyle = 'rgba(117, 197, 222, 0.25)';
  drawRoundedRect(ctx, btnX - 12, btnY - 12, btnW + 24, btnH + 24, 46);
  ctx.fill();

  // White Border Outline
  ctx.fillStyle = '#ffffff';
  drawRoundedRect(ctx, btnX - 2, btnY - 2, btnW + 4, btnH + 4, 37);
  ctx.fill();

  // Main Dark Button Pill Body
  ctx.fillStyle = '#0f172a';
  drawRoundedRect(ctx, btnX, btnY, btnW, btnH, 35);
  ctx.fill();

  ctx.strokeStyle = '#75C5DE';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Button Label Text
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 18px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('EXPAND SHOWCASE', canvasWidth / 2 - 18, btnY + 43);

  // Circle icon on right of button
  ctx.fillStyle = '#75C5DE';
  ctx.beginPath();
  ctx.arc(btnX + btnW - 36, btnY + 35, 22, 0, Math.PI * 2);
  ctx.fill();

  // Arrow icon inside circle
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(btnX + btnW - 43, btnY + 42);
  ctx.lineTo(btnX + btnW - 29, btnY + 28);
  ctx.moveTo(btnX + btnW - 39, btnY + 28);
  ctx.lineTo(btnX + btnW - 29, btnY + 28);
  ctx.lineTo(btnX + btnW - 29, btnY + 38);
  ctx.stroke();

  // Subtext below button
  ctx.fillStyle = '#94a3b8';
  ctx.font = '500 13px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CLICK BUTTON ABOVE TO EXPAND SCREEN', canvasWidth / 2, btnY + btnH + 45);

  if (onComplete) onComplete();

  function drawRoundedRect(c, x, y, width, height, radius) {
    c.beginPath();
    c.moveTo(x + radius, y);
    c.lineTo(x + width - radius, y);
    c.quadraticCurveTo(x + width, y, x + width, y + radius);
    c.lineTo(x + width, y + height - radius);
    c.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    c.lineTo(x + radius, y + height);
    c.quadraticCurveTo(x, y + height, x, y + height - radius);
    c.lineTo(x, y + radius);
    c.quadraticCurveTo(x, y, x + radius, y);
    c.closePath();
  }
}

/**
 * Check if UV coordinate on 3D screen geometry lands on the center button
 */
export function isScreenButtonClick(uv) {
  if (!uv) return false;
  // Center button UV bounds (btnW: 340, btnH: 70 on 1024x680 canvas):
  // u range: ~0.28 to 0.72, v range: ~0.38 to 0.62;
  return uv.x >= 0.28 && uv.x <= 0.72 && uv.y >= 0.38 && uv.y <= 0.62;
}
