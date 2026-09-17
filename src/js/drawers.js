/**
 * Side Drawers, Cart State, and Toast Notifications for LGPSM
 * Implements SHOP (Catalog), COLLECTIONS (Archive 2026), JOURNAL (Editorial), and CART (Shopping Bag)
 */

import { Icons } from './icons.js';

// State
export const cartState = {
  items: [],
  listeners: [],

  addItem(item) {
    this.items.push({ ...item, cartId: Date.now() + Math.random() });
    this.notify();
  },

  removeItem(cartId) {
    this.items = this.items.filter(it => it.cartId !== cartId);
    this.notify();
  },

  clear() {
    this.items = [];
    this.notify();
  },

  count() {
    return this.items.length;
  },

  totalPrice() {
    return this.items.reduce((sum, it) => sum + (it.priceNumber || 0), 0);
  },

  subscribe(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  },

  notify() {
    this.listeners.forEach(fn => fn(this.items));
  }
};

// Catalog Items (exact from specifications)
export const CATALOG_ITEMS = [
  {
    id: 'cyber-tex-overcoat',
    title: 'CYBER-TEX OVERCOAT',
    price: '$850',
    priceNumber: 850,
    tag: 'LIMITED EDITION'
  },
  {
    id: 'geo-mesh-tech-hoodie',
    title: 'GEO-MESH TECH HOODIE',
    price: '$320',
    priceNumber: 320,
    tag: 'NEW DROP'
  },
  {
    id: 'orbital-tapered-trousers',
    title: 'ORBITAL TAPERED TROUSERS',
    price: '$290',
    priceNumber: 290,
    tag: 'IN STOCK'
  },
  {
    id: 'modular-all-weather-vest',
    title: 'MODULAR ALL-WEATHER VEST',
    price: '$410',
    priceNumber: 410,
    tag: 'PRE-ORDER'
  }
];

// Collections Items (exact from specifications)
export const COLLECTION_ITEMS = [
  {
    id: 'series-01',
    series: 'SERIES 01',
    title: 'SYNTHETIC HORIZONS',
    desc: 'Ultra-durable weather-sealed fabrics with minimalist silhouette architecture.'
  },
  {
    id: 'series-02',
    series: 'SERIES 02',
    title: 'KINETIC FORM',
    desc: 'Ergonomic streetwear designed for maximum mobility and temperature equilibrium.'
  },
  {
    id: 'series-03',
    series: 'SERIES 03',
    title: 'MONOCHROME ZERO',
    desc: 'Pure black and white structural tailoring crafted from 100% recycled polymers.'
  }
];

// Journal Articles (exact from specifications)
export const JOURNAL_ITEMS = [
  {
    date: 'AUG 2026',
    title: 'THE ARCHITECTURE OF NEXT-GEN TEXTILES',
    readTime: '4 MIN READ'
  },
  {
    date: 'JUL 2026',
    title: 'CIRCULAR DESIGN IN HIGH-END APPAREL',
    readTime: '6 MIN READ'
  },
  {
    date: 'JUN 2026',
    title: 'MINIMALISM AS A FUNCTIONAL STATEMENT',
    readTime: '3 MIN READ'
  }
];

let activeDrawer = null;

/**
 * Toast Notification Engine
 */
export function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'lgpsm-toast font-jakarta';
  toast.innerHTML = `
    <span class="flex-shrink-0">${Icons.Check('1.15em', 2.2)}</span>
    <span class="text-sm font-medium tracking-wide">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

/**
 * Render Drawer Contents
 */
function renderDrawerBody(type) {
  if (type === 'shop') {
    return `
      <div class="flex flex-col h-full justify-between">
        <div>
          <div class="flex items-center justify-between pb-4 border-b border-gray-100">
            <h2 class="font-orbitron font-bold text-xl tracking-wider uppercase">Catalog</h2>
            <button class="close-drawer-btn text-gray-500 hover:text-black transition-colors p-1 cursor-pointer" aria-label="Close drawer">
              ${Icons.X('1.25rem')}
            </button>
          </div>
          <p class="text-[var(--micro)] tracking-widest uppercase text-gray-400 font-semibold mt-3 mb-6">Featured Garments</p>

          <div class="flex flex-col divide-y divide-gray-100">
            ${CATALOG_ITEMS.map(item => `
              <div class="py-4.5 flex flex-col gap-1.5">
                <span class="text-[var(--micro)] tracking-widest text-gray-400 uppercase font-mono">${item.tag}</span>
                <div class="flex items-center justify-between gap-3">
                  <span class="font-jakarta font-semibold text-sm tracking-wide text-black">${item.title}</span>
                  <span class="font-mono text-sm text-gray-700">${item.price}</span>
                </div>
                <div class="pt-2">
                  <button data-add-item="${item.id}" class="add-to-cart-btn px-3.5 py-1.5 border border-gray-300 rounded text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer">
                    ADD
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-6 border-t border-gray-100 text-center">
          <p class="text-[var(--micro)] text-gray-400 uppercase tracking-widest font-mono">LGPSM © 2026 — FUTURE FORWARD FASHION</p>
        </div>
      </div>
    `;
  }

  if (type === 'collections') {
    return `
      <div class="flex flex-col h-full justify-between">
        <div>
          <div class="flex items-center justify-between pb-4 border-b border-gray-100">
            <h2 class="font-orbitron font-bold text-xl tracking-wider uppercase">Archive 2026</h2>
            <button class="close-drawer-btn text-gray-500 hover:text-black transition-colors p-1 cursor-pointer" aria-label="Close drawer">
              ${Icons.X('1.25rem')}
            </button>
          </div>
          <p class="text-[var(--micro)] tracking-widest uppercase text-gray-400 font-semibold mt-3 mb-6">Season Lineup</p>

          <div class="flex flex-col gap-6">
            ${COLLECTION_ITEMS.map(col => `
              <div class="p-4 border border-gray-200 rounded-sm bg-gray-50/50 flex flex-col gap-2">
                <span class="font-orbitron text-xs font-bold tracking-widest text-gray-500">${col.series}</span>
                <h3 class="font-orbitron text-sm font-bold tracking-wide text-black uppercase">${col.title}</h3>
                <p class="text-xs text-gray-600 font-jakarta leading-relaxed">${col.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-6 border-t border-gray-100 text-center">
          <p class="text-[var(--micro)] text-gray-400 uppercase tracking-widest font-mono">LGPSM © 2026 — FUTURE FORWARD FASHION</p>
        </div>
      </div>
    `;
  }

  if (type === 'journal') {
    return `
      <div class="flex flex-col h-full justify-between">
        <div>
          <div class="flex items-center justify-between pb-4 border-b border-gray-100">
            <h2 class="font-orbitron font-bold text-xl tracking-wider uppercase">Editorial</h2>
            <button class="close-drawer-btn text-gray-500 hover:text-black transition-colors p-1 cursor-pointer" aria-label="Close drawer">
              ${Icons.X('1.25rem')}
            </button>
          </div>
          <p class="text-[var(--micro)] tracking-widest uppercase text-gray-400 font-semibold mt-3 mb-6">Latest Dispatches</p>

          <div class="flex flex-col divide-y divide-gray-100">
            ${JOURNAL_ITEMS.map(art => `
              <div class="py-4.5 flex flex-col gap-1.5">
                <div class="flex items-center justify-between text-[var(--micro)] text-gray-400 font-mono tracking-widest uppercase">
                  <span>${art.date}</span>
                  <span>${art.readTime}</span>
                </div>
                <h3 class="font-jakarta font-semibold text-sm tracking-wide text-black hover:opacity-75 transition-opacity cursor-pointer">
                  ${art.title}
                </h3>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-6 border-t border-gray-100 text-center">
          <p class="text-[var(--micro)] text-gray-400 uppercase tracking-widest font-mono">LGPSM © 2026 — FUTURE FORWARD FASHION</p>
        </div>
      </div>
    `;
  }

  if (type === 'cart') {
    const hasItems = cartState.items.length > 0;
    return `
      <div class="flex flex-col h-full justify-between">
        <div>
          <div class="flex items-center justify-between pb-4 border-b border-gray-100">
            <h2 class="font-orbitron font-bold text-xl tracking-wider uppercase">Shopping Bag</h2>
            <button class="close-drawer-btn text-gray-500 hover:text-black transition-colors p-1 cursor-pointer" aria-label="Close drawer">
              ${Icons.X('1.25rem')}
            </button>
          </div>

          <div id="cart-drawer-items" class="mt-6 flex flex-col gap-3 overflow-y-auto max-h-[60vh]">
            ${!hasItems ? `
              <div class="py-16 flex flex-col items-center justify-center gap-3 text-gray-400 text-center">
                <div class="text-gray-300">${Icons.ShoppingBag('2.5rem', 1.2)}</div>
                <p class="text-sm font-medium tracking-wide">Your shopping bag is empty.</p>
              </div>
            ` : `
              <div class="flex flex-col divide-y divide-gray-100">
                ${cartState.items.map(item => `
                  <div class="py-3 flex items-center justify-between gap-3">
                    <div class="flex flex-col">
                      <span class="font-semibold text-sm text-black">${item.title}</span>
                      <span class="text-xs text-gray-500 font-mono">${item.price}</span>
                    </div>
                    <button data-remove-item="${item.cartId}" class="text-xs text-gray-400 hover:text-black font-mono uppercase tracking-wider underline cursor-pointer">
                      Remove
                    </button>
                  </div>
                `).join('')}
              </div>
              <div class="pt-4 border-t border-gray-200 flex justify-between items-center text-sm font-semibold">
                <span>SUBTOTAL</span>
                <span class="font-mono">$${cartState.totalPrice()}</span>
              </div>
            `}
          </div>
        </div>

        <div class="pt-6 border-t border-gray-100">
          ${hasItems ? `
            <button id="checkout-btn" class="w-full py-3.5 bg-black text-white hover:bg-gray-900 rounded font-jakarta font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer">
              <span>CHECKOUT NOW</span>
              ${Icons.ChevronRight('1.1em', 2)}
            </button>
          ` : `
            <p class="text-[var(--micro)] text-gray-400 uppercase tracking-widest font-mono text-center">LGPSM © 2026 — FUTURE FORWARD FASHION</p>
          `}
        </div>
      </div>
    `;
  }

  return '';
}

/**
 * Open Side Drawer
 */
export function openDrawer(type) {
  const container = document.getElementById('drawers-container');
  if (!container) return;

  activeDrawer = type;

  container.innerHTML = `
    <div id="drawer-backdrop" class="drawer-backdrop active"></div>
    <div id="drawer-panel" class="drawer-panel active font-jakarta">
      ${renderDrawerBody(type)}
    </div>
  `;

  attachDrawerEvents(container, type);
}

/**
 * Close Currently Active Drawer
 */
export function closeDrawer() {
  const container = document.getElementById('drawers-container');
  if (!container) return;

  const panel = container.querySelector('#drawer-panel');
  const backdrop = container.querySelector('#drawer-backdrop');

  if (panel && backdrop) {
    panel.classList.remove('active');
    backdrop.classList.remove('active');
    setTimeout(() => {
      container.innerHTML = '';
      activeDrawer = null;
    }, 350);
  } else {
    container.innerHTML = '';
    activeDrawer = null;
  }
}

/**
 * Attach Event Handlers within Active Drawer
 */
function attachDrawerEvents(container, type) {
  const backdrop = container.querySelector('#drawer-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => closeDrawer());
  }

  const closeBtns = container.querySelectorAll('.close-drawer-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => closeDrawer());
  });

  // Shop Add Buttons
  if (type === 'shop') {
    const addBtns = container.querySelectorAll('[data-add-item]');
    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-add-item');
        const found = CATALOG_ITEMS.find(it => it.id === id);
        if (found) {
          cartState.addItem(found);
          showToast(`Added "${found.title}" to your shopping bag.`);
        }
      });
    });
  }

  // Cart Remove and Checkout Buttons
  if (type === 'cart') {
    const removeBtns = container.querySelectorAll('[data-remove-item]');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cartId = parseFloat(e.currentTarget.getAttribute('data-remove-item'));
        cartState.removeItem(cartId);
        // re-render cart body
        const panel = container.querySelector('#drawer-panel');
        if (panel) {
          panel.innerHTML = renderDrawerBody('cart');
          attachDrawerEvents(container, 'cart');
        }
      });
    });

    const checkoutBtn = container.querySelector('#checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        cartState.clear();
        showToast('Order submitted successfully!');
        closeDrawer();
      });
    }
  }
}

// Global ESC Key Listener to Close Drawer
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && activeDrawer) {
    closeDrawer();
  }
});
