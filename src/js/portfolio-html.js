/**
 * Portfolio HTML Template & Render Engine for 3D Monitor
 * Designed based on template.jpg (Minimalist Light Theme)
 */

export function getPortfolioHTML() {
  return `
    <div class="portfolio-screen font-sans bg-[#fafafa] text-slate-900 min-h-full w-full p-6 md:p-8 flex flex-col justify-between box-border overflow-y-auto select-none">
      <!-- Custom Template Styles -->
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body, div, h1, h2, h3, p, a, button { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        
        .portfolio-screen {
          background-color: #ffffff;
          color: #111827;
        }

        .stroke-text {
          -webkit-text-stroke: 2px #111827;
          color: transparent;
        }

        .pill-badge {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          color: #374151;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .pill-btn-black {
          background: #111827;
          color: #ffffff;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          border: 1px solid #111827;
          cursor: pointer;
        }
        .pill-btn-black:hover {
          background: #1f2937;
          transform: translateY(-1px);
        }

        .pill-social {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          color: #374151;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .pill-social:hover {
          border-color: #111827;
          color: #111827;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }

        .card-minimal {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 20px;
          transition: all 0.25s ease;
        }
        .card-minimal:hover {
          border-color: #9ca3af;
          box-shadow: 0 12px 30px -10px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f3f4f6; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
      </style>

      <!-- 1. Top Navigation Bar (Template Style) -->
      <header class="flex items-center justify-between pb-6 select-none shrink-0 border-b border-gray-100 mb-6">
        <div class="pill-badge">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Available for New Projects</span>
        </div>

        <nav class="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-600 tracking-wide">
          <a href="#work" class="hover:text-black transition-colors" onclick="window.scrollToSection && window.scrollToSection('work')">Work <span class="text-gray-400 font-mono text-[10px]">[3]</span></a>
          <a href="#services" class="hover:text-black transition-colors" onclick="window.scrollToSection && window.scrollToSection('services')">Services <span class="text-gray-400 font-mono text-[10px]">[3]</span></a>
          <a href="#experience" class="hover:text-black transition-colors" onclick="window.scrollToSection && window.scrollToSection('experience')">Experience <span class="text-gray-400 font-mono text-[10px]">[RTC]</span></a>
          <a href="#contact" class="hover:text-black transition-colors" onclick="window.scrollToSection && window.scrollToSection('contact')">Contact</a>
        </nav>

        <a href="#contact" class="pill-btn-black" onclick="window.scrollToSection && window.scrollToSection('contact')">
          <span>Let's Talk</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
      </header>

      <!-- 2. Hero Section (Template Typography) -->
      <section class="relative my-4 py-4 flex flex-col items-center justify-center">
        <!-- Giant Typography Header -->
        <div class="w-full text-center leading-none tracking-tighter select-none mb-6">
          <h1 class="text-5xl sm:text-7xl md:text-8xl font-black uppercase inline-block">
            <span class="stroke-text">YCKER</span> <span class="text-gray-900">PONIO</span>
          </h1>
        </div>

        <!-- Hero Content Grid: Left Tagline & Right Social Pills -->
        <div class="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
          
          <!-- Left Bio Block (7 cols) -->
          <div class="md:col-span-7 flex flex-col items-start space-y-4 mb-4 md:mb-0">
            <h2 class="text-xl md:text-3xl font-bold tracking-tight text-gray-900 leading-snug">
              Web Developer & IT Support Specialist
            </h2>
            <p class="text-xs text-gray-600 leading-relaxed max-w-lg">
              Building scalable web applications, WebGL 3D model showcases, and IT support infrastructures with focus on performance, aesthetics, and system reliability.
            </p>
            <a href="#contact" class="pill-btn-black text-xs" onclick="window.scrollToSection && window.scrollToSection('contact')">
              <span>Let's collaborate</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          </div>

          <!-- Right Social Links (5 cols) -->
          <div class="md:col-span-5 flex flex-col gap-2.5 items-stretch md:items-end justify-end">
            <a href="https://github.com" target="_blank" class="pill-social w-full md:w-48">
              <span>GitHub</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" class="pill-social w-full md:w-48">
              <span>LinkedIn</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a href="mailto:ybponio@dev.ph" class="pill-social w-full md:w-48">
              <span>Email Me</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a href="#resume" class="pill-social w-full md:w-48" onclick="alert('Downloading Ycker Ponio Resume...')">
              <span>Download CV</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/></svg>
            </a>
          </div>

        </div>
      </section>

      <!-- 3. Featured Work & Experience Section -->
      <section id="work" class="pt-8 mt-6 border-t border-gray-100">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wider">Selected Works</h3>
          <span class="text-xs text-gray-400 font-mono">2026 Portfolio</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Work Card 1 -->
          <div class="card-minimal flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-400 mb-2 font-mono">
                <span>DATABASE ARCHITECTURE</span>
                <span>01</span>
              </div>
              <h4 class="text-base font-bold text-gray-900 mb-1">RMIS Information System</h4>
              <p class="text-xs text-gray-500 leading-relaxed mb-4">
                Records Management Information System built with Cloud Firestore, NoSQL schemas, and file streaming.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">Firebase</span>
              <span class="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">JavaScript</span>
            </div>
          </div>

          <!-- Work Card 2 -->
          <div class="card-minimal flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-400 mb-2 font-mono">
                <span>SIMULATION ENGINE</span>
                <span>02</span>
              </div>
              <h4 class="text-base font-bold text-gray-900 mb-1">Fire Risk Reduction Game</h4>
              <p class="text-xs text-gray-500 leading-relaxed mb-4">
                Interactive web-based training simulation for emergency safety protocols and hazard reduction logic.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">Anime.js</span>
              <span class="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">HTML5 Canvas</span>
            </div>
          </div>

          <!-- Work Card 3 -->
          <div class="card-minimal flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-400 mb-2 font-mono">
                <span>3D WEBGL GRAPHICS</span>
                <span>03</span>
              </div>
              <h4 class="text-base font-bold text-gray-900 mb-1">3D Monitor Model Showcase</h4>
              <p class="text-xs text-gray-500 leading-relaxed mb-4">
                Interactive 3D desktop setup built with Three.js and real-time Render-to-Texture (RTT) offscreen mapping.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">Three.js</span>
              <span class="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">WebGL</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Contact Dispatch Section -->
      <section id="contact" class="pt-8 mt-6 border-t border-gray-100">
        <div class="card-minimal bg-gray-50/70 p-6">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="md:col-span-5 space-y-2">
              <h3 class="text-lg font-bold text-gray-900">Let's build something together</h3>
              <p class="text-xs text-gray-500 leading-relaxed">
                Available for freelance projects, full-stack software development, and IT systems administration.
              </p>
              <div class="text-xs font-mono text-gray-700 pt-2">
                <span>Location: Regional Training Center, PH</span>
              </div>
            </div>

            <form class="md:col-span-7 grid grid-cols-2 gap-3" onsubmit="event.preventDefault(); window.handleContactSubmit && window.handleContactSubmit(event)">
              <input type="text" placeholder="Your Name" required class="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-black" />
              <input type="email" placeholder="Email Address" required class="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-black" />
              <textarea placeholder="Your Message..." rows="2" required class="col-span-2 w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-black resize-none"></textarea>
              <button type="submit" class="col-span-2 pill-btn-black justify-center py-2.5">
                <span>Send Dispatch Message</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- 5. Minimalist Footer -->
      <footer class="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 select-none">
        <span>© 2026 Ycker Bandola Ponio</span>
        <span>Minimalist 3D Showcase Theme</span>
      </footer>
    </div>
  `;
}

/**
 * Render Portfolio HTML string into 2D Canvas via SVG foreignObject
 */
export function renderPortfolioHTMLToCanvas(ctx, canvasWidth, canvasHeight, onComplete) {
  if (!ctx) return;

  const htmlContent = getPortfolioHTML();
  const svgData = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap');
      </style>
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%; height:100%;">
          ${htmlContent}
        </div>
      </foreignObject>
    </svg>
  `;

  const img = new Image();
  const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  img.onload = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);
    if (onComplete) onComplete();
  };

  img.onerror = (err) => {
    console.warn("SVG RTT fallback trigger", err);
    URL.revokeObjectURL(url);
    if (onComplete) onComplete();
  };

  img.src = url;
}
