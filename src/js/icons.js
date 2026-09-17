/**
 * SVG Icons & Graphics for LGPSM Futuristic Interface
 * Lucide-equivalent vector icons and custom geometric SVGs
 */

export const Icons = {
  ShoppingBag: (size = 'var(--icon)', stroke = 1.5) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
      <path d="M3 6h18"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  `,

  ArrowUpRight: (size = '1.1em', stroke = 1.5) => `
    <svg class="cta-icon" style="width:${size};height:${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 7h10v10"/>
      <path d="M7 17 17 7"/>
    </svg>
  `,

  X: (size = '1.25rem', stroke = 1.5) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  `,

  ChevronRight: (size = '1.1em', stroke = 1.5) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  `,

  Check: (size = '1.1em', stroke = 2) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  `,

  // Corner brackets
  CornerTL: (size = 'var(--corner)', stroke = 1.5) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="${stroke}">
      <path d="M0 11.5V0.5H11.5"/>
    </svg>
  `,

  CornerTR: (size = 'var(--corner)', stroke = 1.5) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="${stroke}">
      <path d="M0.5 0.5H11.5V11.5"/>
    </svg>
  `,

  CornerBL: (size = 'var(--corner)', stroke = 1.5) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="${stroke}">
      <path d="M0 0.5V11.5H11.5"/>
    </svg>
  `,

  CornerBR: (size = 'var(--corner)', stroke = 1.5) => `
    <svg style="width:${size};height:${size}" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="${stroke}">
      <path d="M0.5 11.5H11.5V0.5"/>
    </svg>
  `,

  // Checkerboard grid SVG: viewBox 0 0 36 18, 4 rows of 3.8x3.8 black squares; even rows shifted by 2.25
  Checkerboard: () => `
    <svg style="width:var(--checker-w);height:var(--checker-h);transform:translateY(2px);" viewBox="0 0 36 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="inline-block align-middle ml-2 sm:ml-3">
      <!-- Row 0 (even, shifted 0) -->
      <rect x="0" y="0.5" width="3.8" height="3.8"/>
      <rect x="4.5" y="0.5" width="3.8" height="3.8"/>
      <rect x="9.0" y="0.5" width="3.8" height="3.8"/>
      <rect x="13.5" y="0.5" width="3.8" height="3.8"/>
      <rect x="18.0" y="0.5" width="3.8" height="3.8"/>
      <rect x="22.5" y="0.5" width="3.8" height="3.8"/>
      <rect x="27.0" y="0.5" width="3.8" height="3.8"/>
      <rect x="31.5" y="0.5" width="3.8" height="3.8"/>

      <!-- Row 1 (odd, shifted by 2.25) -->
      <rect x="2.25" y="4.8" width="3.8" height="3.8"/>
      <rect x="6.75" y="4.8" width="3.8" height="3.8"/>
      <rect x="11.25" y="4.8" width="3.8" height="3.8"/>
      <rect x="15.75" y="4.8" width="3.8" height="3.8"/>
      <rect x="20.25" y="4.8" width="3.8" height="3.8"/>
      <rect x="24.75" y="4.8" width="3.8" height="3.8"/>
      <rect x="29.25" y="4.8" width="3.8" height="3.8"/>
      <rect x="33.75" y="4.8" width="2.25" height="3.8"/>

      <!-- Row 2 (even, shifted 0) -->
      <rect x="0" y="9.2" width="3.8" height="3.8"/>
      <rect x="4.5" y="9.2" width="3.8" height="3.8"/>
      <rect x="9.0" y="9.2" width="3.8" height="3.8"/>
      <rect x="13.5" y="9.2" width="3.8" height="3.8"/>
      <rect x="18.0" y="9.2" width="3.8" height="3.8"/>
      <rect x="22.5" y="9.2" width="3.8" height="3.8"/>
      <rect x="27.0" y="9.2" width="3.8" height="3.8"/>
      <rect x="31.5" y="9.2" width="3.8" height="3.8"/>

      <!-- Row 3 (odd, shifted by 2.25) -->
      <rect x="2.25" y="13.5" width="3.8" height="3.8"/>
      <rect x="6.75" y="13.5" width="3.8" height="3.8"/>
      <rect x="11.25" y="13.5" width="3.8" height="3.8"/>
      <rect x="15.75" y="13.5" width="3.8" height="3.8"/>
      <rect x="20.25" y="13.5" width="3.8" height="3.8"/>
      <rect x="24.75" y="13.5" width="3.8" height="3.8"/>
      <rect x="29.25" y="13.5" width="3.8" height="3.8"/>
      <rect x="33.75" y="13.5" width="2.25" height="3.8"/>
    </svg>
  `,

  // Wireframe globe SVG: viewBox 0 0 64 64, stroke 1.2: outer circle r=28, equator, 2 horizontal ellipses, meridian, 2 vertical ellipses
  WireframeGlobe: () => `
    <svg style="width:var(--globe);height:var(--globe);" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer Circle (r=28) -->
      <circle cx="32" cy="32" r="28"/>
      <!-- Equator Line -->
      <line x1="4" y1="32" x2="60" y2="32"/>
      <!-- Horizontal Ellipses -->
      <ellipse cx="32" cy="32" rx="28" ry="11"/>
      <ellipse cx="32" cy="32" rx="28" ry="20"/>
      <!-- Meridian Line -->
      <line x1="32" y1="4" x2="32" y2="60"/>
      <!-- Vertical Ellipses -->
      <ellipse cx="32" cy="32" rx="11" ry="28"/>
      <ellipse cx="32" cy="32" rx="20" ry="28"/>
    </svg>
  `
};
