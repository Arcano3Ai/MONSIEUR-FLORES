import { PRODUCTS, CATEGORIES, ADDONS, CITIES_MEXICO } from './data/products.js';
import { EMOTIONS } from './data/emotions.js';
import { JOURNAL_ARTICLES, TESTIMONIALS, INSTAGRAM_POSTS } from './data/journal.js';
import { store } from './state/store.js';

// Expose store globally for inline triggers if needed
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderEmotions();
  renderProducts();
  renderBestsellers();
  renderCategories();
  initSurpriseWizard();
  initPersonalizer();
  initDeliveryChecker();
  renderTestimonials();
  renderInstagram();
  renderJournal();
  initDrawersAndModals();
  initConciergeBot();
  updateHeaderBadges();
});

/* ==========================================================================
   HEADER & NAVIGATION SCROLL
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('btn-mobile-menu');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const navList = document.querySelector('.mf-nav-list');
      if (navList) {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
        navList.style.flexDirection = 'column';
        navList.style.position = 'absolute';
        navList.style.top = '80px';
        navList.style.left = '0';
        navList.style.width = '100%';
        navList.style.background = 'rgba(12, 13, 12, 0.98)';
        navList.style.padding = '24px';
        navList.style.gap = '16px';
        navList.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      }
    });
  }

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function updateHeaderBadges() {
  const favBadge = document.getElementById('fav-count-badge');
  const cartBadge = document.getElementById('cart-count-badge');
  if (favBadge) favBadge.textContent = store.favorites.size;
  if (cartBadge) cartBadge.textContent = store.getCartCount();
}

/* ==========================================================================
   4. BUSCADOR EMOCIONAL ("¿Qué quieres decir?") — ALTA COSTURA
   ========================================================================== */
function renderEmotions() {
  const grid = document.getElementById('emotions-grid');
  if (!grid) return;

  grid.innerHTML = EMOTIONS.map(emotion => `
    <div class="mf-emotion-card ${store.activeEmotion === emotion.id ? 'active' : ''}" data-emotion="${emotion.id}">
      <span class="mf-emotion-numeral">${emotion.numeral} · ATELIER</span>
      <h3 class="mf-emotion-title">${emotion.title}</h3>
      <span class="mf-emotion-french">${emotion.frenchTitle}</span>
      <p class="mf-emotion-sub">${emotion.subtitle}</p>
    </div>
  `).join('');

  grid.querySelectorAll('.mf-emotion-card').forEach(card => {
    card.addEventListener('click', () => {
      const emotionId = card.getAttribute('data-emotion');
      store.setEmotion(emotionId);
      renderEmotions();
      renderProducts();
      updateEmotionFeedback();
    });
  });

  const clearBtn = document.getElementById('btn-clear-emotion');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      store.setEmotion(null);
      renderEmotions();
      renderProducts();
      updateEmotionFeedback();
    });
  }
}

function updateEmotionFeedback() {
  const banner = document.getElementById('emotion-feedback');
  if (!banner) return;

  if (store.activeEmotion) {
    const emotion = EMOTIONS.find(e => e.id === store.activeEmotion);
    banner.style.display = 'flex';
    document.getElementById('feedback-title').textContent = `Has elegido: “${emotion.title}”`;
    document.getElementById('feedback-desc').textContent = `${emotion.quote} — Monsieur Flores recomienda:`;
    
    // Auto scroll gently to the selection section
    const sel = document.getElementById('seleccion');
    if (sel) sel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    banner.style.display = 'none';
  }
}

/* ==========================================================================
   5. PRODUCT GRID ("La Selección de Monsieur")
   ========================================================================== */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const products = store.getFilteredProducts();

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: var(--radius-md);">
        <p style="font-size: 1.3rem; font-family: var(--font-serif-headline); margin-bottom: 12px;">Monsieur está creando nuevas composiciones para este criterio.</p>
        <button class="btn-dark" onclick="window.store.setEmotion(null); window.store.setCategory('all'); document.dispatchEvent(new Event('refresh-products'));">
          Restablecer Catálogo Completo
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(prod => createProductCardHTML(prod)).join('');
  attachProductCardEvents(grid);
}

function renderBestsellers() {
  const grid = document.getElementById('bestsellers-grid');
  if (!grid) return;
  const bestsellers = PRODUCTS.filter(p => p.isBestSeller);
  grid.innerHTML = bestsellers.map(prod => createProductCardHTML(prod)).join('');
  attachProductCardEvents(grid);
}

function createProductCardHTML(prod) {
  const isFav = store.isFavorite(prod.id);
  const formattedPrice = Number(prod.price).toLocaleString('es-MX');
  const formattedOrig = prod.originalPrice ? Number(prod.originalPrice).toLocaleString('es-MX') : null;

  return `
    <article class="mf-product-card" data-id="${prod.id}">
      <div class="mf-card-image-wrap" data-action="quickview">
        <img src="${prod.image}" alt="${prod.name} - ${prod.tagline}" class="mf-card-img" loading="lazy">
        <span class="mf-card-badge">${prod.badge}</span>
        <button class="mf-card-fav-btn ${isFav ? 'active' : ''}" data-action="fav" aria-label="Guardar en deseos">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>
      <div class="mf-card-body">
        <div class="mf-card-meta">
          <div class="mf-card-rating">
            <span style="color: var(--mf-gold-primary); font-size: 0.85rem;">★</span>
            <span>${prod.rating}</span>
            <span class="mf-card-reviews">(${prod.reviewsCount} reseñas)</span>
          </div>
          <span style="font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mf-gold-primary); font-weight: 600;">
            ${prod.category}
          </span>
        </div>
        <h3 class="mf-card-title" data-action="quickview">${prod.name}</h3>
        <p class="mf-card-tagline">${prod.tagline}</p>
        <div class="mf-card-pricing">
          <span class="mf-price-current">$${formattedPrice} MXN</span>
          ${formattedOrig ? `<span class="mf-price-original">$${formattedOrig}</span>` : ''}
        </div>
        <div class="mf-card-actions">
          <button class="mf-btn-add" data-action="add-cart">
            <span>Adquirir</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
          <button class="mf-btn-quickview" data-action="quickview" aria-label="Ver creación detallada">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachProductCardEvents(container) {
  container.querySelectorAll('.mf-product-card').forEach(card => {
    const prodId = card.getAttribute('data-id');
    const product = PRODUCTS.find(p => p.id === prodId);
    if (!product) return;

    card.querySelectorAll('[data-action="fav"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        store.toggleFavorite(prodId);
        const isFav = store.isFavorite(prodId);
        btn.classList.toggle('active', isFav);
        btn.innerHTML = isFav 
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="#831828" stroke="#831828" stroke-width="1.3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
        updateHeaderBadges();
        renderFavoritesDrawer();
      });
    });

    card.querySelectorAll('[data-action="add-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        store.addToCart(product);
        updateHeaderBadges();
        renderCartDrawer();
      });
    });

    card.querySelectorAll('[data-action="quickview"]').forEach(el => {
      el.addEventListener('click', () => {
        openProductModal(product);
      });
    });
  });
}

// Category filter bar listeners
const catFilterBar = document.getElementById('category-filter-bar');
if (catFilterBar) {
  catFilterBar.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      catFilterBar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      store.setCategory(cat);
      renderProducts();
    });
  });
}

document.addEventListener('refresh-products', () => {
  renderEmotions();
  renderProducts();
});

/* ==========================================================================
   7. CATEGORÍAS
   ========================================================================== */
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="mf-category-card" data-cat="${cat.id}">
      <img src="${cat.image}" alt="${cat.name}" class="mf-category-bg" loading="lazy">
      <div class="mf-category-overlay"></div>
      <div class="mf-category-info">
        <span style="font-family: var(--font-script); font-size: 1.1rem; color: var(--mf-gold-light); display: block; margin-bottom: 2px;">${cat.subtitle}</span>
        <h3 class="mf-category-name">${cat.name}</h3>
        <span class="mf-category-count">${cat.count} creaciones de autor</span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.mf-category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.getAttribute('data-cat');
      store.setCategory(catId);
      const catBtn = document.querySelector(`#category-filter-bar button[data-cat="${catId}"]`);
      if (catBtn) {
        document.querySelectorAll('#category-filter-bar button').forEach(b => b.classList.remove('active'));
        catBtn.classList.add('active');
      }
      renderProducts();
      const sel = document.getElementById('seleccion');
      if (sel) sel.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ==========================================================================
   8. SECCIÓN "SORPRÉNDEME" (Wizard Interactivo)
   ========================================================================== */
function initSurpriseWizard() {
  const steps = [
    document.getElementById('wizard-step-1'),
    document.getElementById('wizard-step-2'),
    document.getElementById('wizard-step-3')
  ];

  const tabs = document.querySelectorAll('.mf-wizard-step-tab');

  function setStep(stepIndex) {
    store.wizard.step = stepIndex;
    steps.forEach((stepEl, idx) => {
      if (stepEl) stepEl.style.display = idx + 1 === stepIndex ? 'block' : 'none';
    });
    tabs.forEach((tab, idx) => {
      tab.classList.toggle('active', idx + 1 === stepIndex);
    });
  }

  // Wizard tab clicking
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const step = parseInt(tab.getAttribute('data-step'), 10);
      setStep(step);
    });
  });

  // Next / Prev buttons
  document.getElementById('wizard-next-1')?.addEventListener('click', () => setStep(2));
  document.getElementById('wizard-prev-2')?.addEventListener('click', () => setStep(1));
  document.getElementById('wizard-next-2')?.addEventListener('click', () => setStep(3));
  document.getElementById('wizard-prev-3')?.addEventListener('click', () => setStep(2));
  
  document.getElementById('wizard-finish')?.addEventListener('click', () => {
    store.calculateWizardRecommendations();
    renderWizardResults();
    const resultsBox = document.getElementById('wizard-results-box');
    if (resultsBox) resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Option selection clicks
  document.querySelectorAll('.mf-wizard-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.getAttribute('data-field');
      const value = btn.getAttribute('data-value');
      
      btn.parentElement.querySelectorAll('.mf-wizard-option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      
      store.setWizardOption(field, value);
      renderWizardResults();
    });
  });

  renderWizardResults();
}

function renderWizardResults() {
  const container = document.getElementById('wizard-recommended-grid');
  if (!container) return;

  const results = store.wizard.results.length ? store.wizard.results : PRODUCTS.slice(0, 3);
  container.innerHTML = results.map(prod => createProductCardHTML(prod)).join('');
  attachProductCardEvents(container);
}

/* ==========================================================================
   10. PERSONALIZADOR ("Hazlo Personal")
   ========================================================================== */
function initPersonalizer() {
  const recipientInput = document.getElementById('input-recipient');
  const messageInput = document.getElementById('input-message');
  const liveRecipient = document.getElementById('live-recipient-preview');
  const liveMessage = document.getElementById('live-card-text');

  if (recipientInput && liveRecipient) {
    recipientInput.addEventListener('input', (e) => {
      liveRecipient.textContent = `Para: ${e.target.value.trim() || 'Alguien Muy Especial'}`;
    });
  }

  if (messageInput && liveMessage) {
    messageInput.addEventListener('input', (e) => {
      liveMessage.textContent = e.target.value.trim() ? `“${e.target.value}”` : '“Escribe tu mensaje con el corazón...”';
    });
  }

  // Render addons
  const addonsList = document.getElementById('addons-list');
  if (addonsList) {
    addonsList.innerHTML = ADDONS.map(addon => `
      <div class="mf-addon-item" data-addon-id="${addon.id}">
        <div class="mf-addon-left">
          <span style="font-family: var(--font-serif-display); font-size: 1.1rem; color: var(--mf-gold-primary); font-weight: 600;">✦</span>
          <div class="mf-addon-info">
            <h5>${addon.name}</h5>
            <p>${addon.description}</p>
          </div>
        </div>
        <div style="text-align: right;">
          <div class="mf-addon-price">+$${addon.price} MXN</div>
          <span style="font-size: 0.75rem; color: var(--mf-gold-primary); font-weight: 600;">Seleccionar</span>
        </div>
      </div>
    `).join('');

    addonsList.querySelectorAll('.mf-addon-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('selected');
        const isSelected = item.classList.contains('selected');
        item.querySelector('.mf-addon-price + span').textContent = isSelected ? '✓ Agregado' : 'Seleccionar';
      });
    });
  }

  document.getElementById('btn-save-personalization')?.addEventListener('click', () => {
    alert('✓ Personalización guardada con éxito por Monsieur Flores. Se incluirá caligrafiada en tu próximo ramo.');
  });
}

/* ==========================================================================
   11. CALCULADORA DE ENTREGA NACIONAL
   ========================================================================== */
function initDeliveryChecker() {
  const btn = document.getElementById('btn-check-delivery');
  const citySelect = document.getElementById('delivery-city-select');
  const daySelect = document.getElementById('delivery-day-select');
  const input = document.getElementById('delivery-cp-input');
  const result = document.getElementById('delivery-result-badge');

  if (!btn || !input || !result) return;

  btn.addEventListener('click', () => {
    const val = input.value.trim() || 'Zona Metropolitana Central';
    const cityId = citySelect ? citySelect.value : 'cdmx';
    const cityData = CITIES_MEXICO.find(c => c.id === cityId) || CITIES_MEXICO[0];
    const dayText = daySelect && daySelect.value === 'hoy' ? 'Hoy Mismo' : (daySelect && daySelect.value === 'manana' ? 'Mañana' : 'Fecha Programada');

    result.style.display = 'block';
    result.style.background = '#141614';
    result.style.color = '#ffffff';
    result.style.border = '1px solid var(--mf-border-gold)';
    result.innerHTML = `
      <div style="display: flex; align-items: flex-start; gap: 14px;">
        <span style="color: var(--mf-gold-primary); font-size: 1.4rem;">✦</span>
        <div>
          <strong style="color: var(--mf-gold-light); font-size: 1.05rem;">Cobertura Activa: ${cityData.name} (${val})</strong>
          <p style="font-size: 0.88rem; color: #d0d4d0; margin-top: 4px;">
            Compromiso de Entrega: <strong>${dayText}</strong> · ${cityData.deliveryTime}.
          </p>
          <p style="font-size: 0.82rem; color: var(--mf-text-muted); margin-top: 2px;">
            Principales zonas con conserje propio: ${cityData.zones}. Transporte en cabina fría a 14°C garantizada.
          </p>
        </div>
      </div>
    `;
  });
}

/* ==========================================================================
   13-15. TESTIMONIOS, INSTAGRAM & JOURNAL
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="mf-testimonial-card">
      <div class="mf-testimonial-stars">★★★★★</div>
      <p class="mf-testimonial-quote">${t.comment}</p>
      <div class="mf-testimonial-author">
        <div>
          <span class="mf-author-name">${t.name}</span>
          <span class="mf-author-city"> · ${t.city}</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--mf-gold-primary); font-weight: 600;">${t.product}</span>
      </div>
    </div>
  `).join('');
}

function renderInstagram() {
  const grid = document.getElementById('instagram-grid');
  if (!grid) return;

  grid.innerHTML = INSTAGRAM_POSTS.map(post => `
    <div class="mf-insta-item">
      <img src="${post.image}" alt="Creación Monsieur Flores en Instagram" class="mf-insta-img" loading="lazy">
      <div class="mf-insta-overlay">
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="vertical-align: -2px; margin-right: 4px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          ${post.likes}
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="vertical-align: -2px; margin-right: 4px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          ${post.comments}
        </span>
      </div>
    </div>
  `).join('');
}

function renderJournal() {
  const grid = document.getElementById('journal-grid');
  if (!grid) return;

  grid.innerHTML = JOURNAL_ARTICLES.map(art => `
    <article class="mf-journal-card">
      <div class="mf-journal-img-wrap">
        <img src="${art.image}" alt="${art.title}" class="mf-journal-img" loading="lazy">
      </div>
      <div class="mf-journal-body">
        <div class="mf-journal-meta">${art.category} · ${art.readTime}</div>
        <h3 class="mf-journal-title">${art.title}</h3>
        <p class="mf-journal-excerpt">${art.excerpt}</p>
        <span style="color: var(--mf-gold-primary); font-weight: 600; font-size: 0.85rem;">Leer Crónica →</span>
      </div>
    </article>
  `).join('');

  document.getElementById('btn-view-all-journal')?.addEventListener('click', () => {
    alert('Próximamente: Guía Botánica Completa de Monsieur Flores — Edición Otoño/Invierno.');
  });
}

/* ==========================================================================
   DRAWERS (CARRITO & FAVORITOS) & MODALES
   ========================================================================== */
function initDrawersAndModals() {
  const overlay = document.getElementById('drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const favDrawer = document.getElementById('favorites-drawer');
  const checkoutModal = document.getElementById('checkout-modal');
  const prodModal = document.getElementById('product-detail-modal');

  function closeAll() {
    overlay.classList.remove('active');
    cartDrawer.classList.remove('active');
    favDrawer.classList.remove('active');
    checkoutModal.classList.remove('active');
    prodModal.classList.remove('active');
    document.body.classList.remove('mf-modal-open');
  }

  overlay.addEventListener('click', closeAll);

  // Cart Drawer triggers
  document.getElementById('btn-cart-open')?.addEventListener('click', () => {
    overlay.classList.add('active');
    cartDrawer.classList.add('active');
    renderCartDrawer();
  });
  document.getElementById('mobile-btn-cart')?.addEventListener('click', () => {
    overlay.classList.add('active');
    cartDrawer.classList.add('active');
    renderCartDrawer();
  });
  document.getElementById('btn-close-cart')?.addEventListener('click', closeAll);

  // Favorites Drawer triggers
  document.getElementById('btn-fav-open')?.addEventListener('click', () => {
    overlay.classList.add('active');
    favDrawer.classList.add('active');
    renderFavoritesDrawer();
  });
  document.getElementById('mobile-btn-fav')?.addEventListener('click', () => {
    overlay.classList.add('active');
    favDrawer.classList.add('active');
    renderFavoritesDrawer();
  });
  document.getElementById('btn-close-fav')?.addEventListener('click', closeAll);

  // Checkout Modal triggers
  document.getElementById('btn-start-checkout')?.addEventListener('click', () => {
    closeAll();
    openCheckoutModal(1);
  });
  document.getElementById('btn-close-checkout')?.addEventListener('click', closeAll);

  // Product Detail Modal triggers
  document.getElementById('btn-close-prod-modal')?.addEventListener('click', closeAll);

  // Search button
  const searchBtn = document.getElementById('btn-search-open');
  const mobileSearch = document.getElementById('mobile-btn-search');
  const handleSearch = () => {
    const term = prompt('¿Qué flor o arreglo buscas? (ej. Rosas, Peonías, Disculpa, etc.)');
    if (term) {
      store.setSearchQuery(term);
      renderProducts();
      document.getElementById('seleccion')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  searchBtn?.addEventListener('click', handleSearch);
  mobileSearch?.addEventListener('click', handleSearch);

  // Meet Monsieur Modal
  document.getElementById('btn-meet-monsieur-modal')?.addEventListener('click', () => {
    alert('“Monsieur Flores es la voz de tus afectos más puros. Un atelier fundado para convertir cada ramo en una pieza inolvidable de la alta floristería mexicana con espíritu europeo.”');
  });

  // React to store notifications
  store.subscribe('cart:updated', () => {
    updateHeaderBadges();
    renderCartDrawer();
  });

  store.subscribe('favorites:updated', () => {
    updateHeaderBadges();
    renderFavoritesDrawer();
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  if (!container || !subtotalEl) return;

  if (store.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <div style="margin-bottom: 16px;">
          <img src="/images/sello-lacre-mf.svg" alt="Sello de Monsieur Flores" style="width: 48px; height: 48px; opacity: 0.85; filter: grayscale(20%);">
        </div>
        <h4 style="margin-bottom: 6px; font-family: var(--font-serif-headline); color: var(--mf-text-main);">Tu bolsa espera una creación</h4>
        <p style="font-size: 0.85rem; color: var(--mf-text-muted); margin-bottom: 22px;">
          Descubre la selección de Monsieur y elige las flores que hablarán por ti hoy.
        </p>
        <button class="btn-monsieur" onclick="document.getElementById('cart-drawer').classList.remove('active'); document.getElementById('drawer-overlay').classList.remove('active'); document.getElementById('seleccion').scrollIntoView({behavior: 'smooth'});">
          <img src="/images/sello-lacre-mf.svg" alt="Sello" class="btn-seal-icon">
          <span>Ver Colección Floral</span>
        </button>
      </div>
    `;
    subtotalEl.textContent = '$0 MXN';
    return;
  }

  container.innerHTML = store.cart.map(item => {
    const itemTotal = (item.size.price * item.quantity).toLocaleString('es-MX');
    return `
      <div class="mf-cart-item">
        <img src="${item.product.image}" alt="${item.product.name}" class="mf-cart-item-img">
        <div class="mf-cart-item-details">
          <h4 class="mf-cart-item-name">${item.product.name}</h4>
          <span class="mf-cart-item-size">${item.size.name}</span>
          ${item.recipientName ? `<div style="font-size: 0.72rem; color: var(--mf-gold-primary); margin-top: 2px;">Para: ${item.recipientName}</div>` : ''}
          <div class="mf-cart-item-price">$${itemTotal} MXN</div>
          <div class="mf-cart-qty-ctrl">
            <button onclick="window.store.updateQuantity('${item.id}', -1)">−</button>
            <span style="font-weight: 600; font-size: 0.85rem;">${item.quantity}</span>
            <button onclick="window.store.updateQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
        <button onclick="window.store.removeFromCart('${item.id}')" style="color: var(--mf-text-muted); font-size: 1.1rem; align-self: flex-start;">✕</button>
      </div>
    `;
  }).join('');

  subtotalEl.textContent = `$${store.getCartSubtotal().toLocaleString('es-MX')} MXN`;
}

function renderFavoritesDrawer() {
  const container = document.getElementById('favorites-items-container');
  if (!container) return;

  const favProducts = store.getFavoriteProducts();

  if (favProducts.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <div style="margin-bottom: 16px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C5A059" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <h4 style="font-family: var(--font-serif-headline); color: var(--mf-text-main);">Aún no has guardado favoritos</h4>
        <p style="font-size: 0.85rem; color: var(--mf-text-muted); margin-top: 8px;">
          Guarda tus creaciones preferidas para consultarlas o prepararlas en tu próxima fecha especial.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = favProducts.map(p => `
    <div class="mf-cart-item">
      <img src="${p.image}" alt="${p.name}" class="mf-cart-item-img">
      <div class="mf-cart-item-details">
        <h4 class="mf-cart-item-name">${p.name}</h4>
        <div class="mf-cart-item-price">$${Number(p.price).toLocaleString('es-MX')} MXN</div>
        <button class="btn-primary" style="padding: 8px 16px; font-size: 0.72rem; margin-top: 8px;" onclick="window.store.addToCart(window.store.getFavoriteProducts().find(x=>x.id==='${p.id}'));">
          Añadir a la Bolsa
        </button>
      </div>
      <button onclick="window.store.toggleFavorite('${p.id}');" style="color: #831828; font-size: 1.1rem;" title="Eliminar de favoritos">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#831828" stroke="#831828" stroke-width="1.3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   PRODUCT DETAIL MODAL
   ========================================================================== */
function openProductModal(prod) {
  const modal = document.getElementById('product-detail-modal');
  const body = document.getElementById('modal-prod-body');
  const overlay = document.getElementById('drawer-overlay');
  if (!modal || !body) return;

  document.getElementById('modal-prod-title').textContent = prod.name;

  let selectedSizeIndex = 0;

  function renderModalContent() {
    const curSize = prod.sizes[selectedSizeIndex];
    body.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: start;">
        <div>
          <img src="${prod.image}" alt="${prod.name}" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
        </div>
        <div>
          <span class="mf-eyebrow" style="margin-bottom: 4px;">${prod.badge}</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 6px;">${prod.name}</h2>
          <p style="font-size: 0.95rem; color: var(--mf-text-muted); margin-bottom: 16px;">${prod.tagline}</p>
          <div style="font-size: 1.6rem; font-weight: 700; color: var(--mf-text-main); margin-bottom: 16px;">
            $${curSize.price.toLocaleString('es-MX')} MXN
          </div>
          <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
            ${prod.description}
          </p>

          <h5 style="margin-bottom: 10px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em;">Tamaño de la Composición:</h5>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
            ${prod.sizes.map((s, idx) => `
              <button class="btn-dark ${idx === selectedSizeIndex ? 'active' : ''}" style="padding: 8px 14px; font-size: 0.8rem; border-color: ${idx === selectedSizeIndex ? 'var(--mf-gold-primary)' : 'var(--mf-border-light)'}; background: ${idx === selectedSizeIndex ? 'var(--mf-gold-primary)' : '#ffffff'}; color: ${idx === selectedSizeIndex ? '#0c0d0c' : 'var(--mf-text-main)'};" data-size-idx="${idx}">
                ${s.name}
              </button>
            `).join('')}
          </div>

          <h5 style="margin-bottom: 8px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em;">El Toque de Monsieur:</h5>
          <ul style="list-style: none; font-size: 0.85rem; color: var(--mf-text-muted); margin-bottom: 24px; display: flex; flex-direction: column; gap: 6px;">
            ${prod.details.map(d => `<li>✦ ${d}</li>`).join('')}
          </ul>

          <button class="btn-primary" id="btn-modal-add-cart" style="width: 100%;">
            Agregar al Carrito de Monsieur ($${curSize.price.toLocaleString('es-MX')} MXN)
          </button>
        </div>
      </div>
    `;

    body.querySelectorAll('[data-size-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedSizeIndex = parseInt(btn.getAttribute('data-size-idx'), 10);
        renderModalContent();
      });
    });

    body.querySelector('#btn-modal-add-cart')?.addEventListener('click', () => {
      store.addToCart(prod, prod.sizes[selectedSizeIndex]);
      modal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('mf-modal-open');
    });
  }

  renderModalContent();
  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('mf-modal-open');
}

/* ==========================================================================
   CHECKOUT VISUAL (5 PASOS + TRACKING ANIMADO)
   ========================================================================== */
function openCheckoutModal(step = 1) {
  const modal = document.getElementById('checkout-modal');
  const title = document.getElementById('checkout-step-title');
  const body = document.getElementById('checkout-step-body');
  const overlay = document.getElementById('drawer-overlay');
  if (!modal || !body || !title) return;

  const total = store.getCartSubtotal();

  function renderStep(curStep) {
    if (curStep === 1) {
      title.textContent = 'Paso 1 de 5: Tus Datos de Comprador';
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Nombre Completo:</label>
            <input type="text" id="chk-buyer-name" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="Carlos Mendoza">
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Correo Electrónico (para confirmación):</label>
            <input type="email" id="chk-buyer-email" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="carlos.mendoza@email.com">
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Teléfono WhatsApp (notificaciones del chofer):</label>
            <input type="tel" id="chk-buyer-phone" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="+52 81 1234 5678">
          </div>
          <div style="margin-top: 14px; display: flex; justify-content: flex-end;">
            <button class="btn-primary" id="btn-chk-to-2">Continuar a Datos del Destinatario →</button>
          </div>
        </div>
      `;
      document.getElementById('btn-chk-to-2')?.addEventListener('click', () => renderStep(2));
    } else if (curStep === 2) {
      title.textContent = 'Paso 2 de 5: Destinatario y Dirección';
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Nombre de la Persona que Recibe:</label>
            <input type="text" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="Sofía Navarro">
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Calle, Número Exterior e Interior:</label>
            <input type="text" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="Calzada del Valle 400, Torre C, Depto 502">
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
              <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Colonia / Municipio:</label>
              <input type="text" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="Del Valle, San Pedro Garza García">
            </div>
            <div>
              <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Código Postal:</label>
              <input type="text" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="66220">
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 14px;">
            <button class="btn-dark" id="btn-chk-back-1">← Volver</button>
            <button class="btn-primary" id="btn-chk-to-3">Continuar a Fecha y Horario →</button>
          </div>
        </div>
      `;
      document.getElementById('btn-chk-back-1')?.addEventListener('click', () => renderStep(1));
      document.getElementById('btn-chk-to-3')?.addEventListener('click', () => renderStep(3));
    } else if (curStep === 3) {
      title.textContent = 'Paso 3 de 5: Momento de Entrega';
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Día de Entrega:</label>
            <select class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;">
              <option selected>Hoy Mismo (Mismo Día)</option>
              <option>Mañana</option>
              <option>Viernes de Sorpresa</option>
              <option>Sábado de Celebración</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">Franja Horaria Preferida:</label>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--mf-border-light); border-radius: var(--radius-sm); cursor: pointer;">
                <input type="radio" name="slot" checked>
                <div>
                  <strong>Entrega Mediodía: 11:00 AM – 2:00 PM</strong>
                  <div style="font-size: 0.75rem; color: var(--mf-text-muted);">Ideal para oficina o sorpresa antes de comer</div>
                </div>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--mf-border-light); border-radius: var(--radius-sm); cursor: pointer;">
                <input type="radio" name="slot">
                <div>
                  <strong>Entrega Vespertina: 3:00 PM – 6:00 PM</strong>
                  <div style="font-size: 0.75rem; color: var(--mf-text-muted);">Perfecto para llegada al domicilio</div>
                </div>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--mf-border-light); border-radius: var(--radius-sm); cursor: pointer;">
                <input type="radio" name="slot">
                <div>
                  <strong>Entrega Dorada Atardecer: 6:00 PM – 8:30 PM</strong>
                  <div style="font-size: 0.75rem; color: var(--mf-text-muted);">Para aniversarios y cenas románticas</div>
                </div>
              </label>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 14px;">
            <button class="btn-dark" id="btn-chk-back-2">← Volver</button>
            <button class="btn-primary" id="btn-chk-to-4">Continuar a Dedicatoria →</button>
          </div>
        </div>
      `;
      document.getElementById('btn-chk-back-2')?.addEventListener('click', () => renderStep(2));
      document.getElementById('btn-chk-to-4')?.addEventListener('click', () => renderStep(4));
    } else if (curStep === 4) {
      title.textContent = 'Paso 4 de 5: Dedicatoria y Sello en Cera';
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="background: #fdfaf4; padding: 24px; border: 1px solid #e7d5be; border-radius: var(--radius-md); text-align: center;">
            <div style="width: 44px; height: 44px; background: var(--mf-crimson-deep); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-family: var(--font-serif-display); font-size: 1.3rem;">M</div>
            <p style="font-family: var(--font-serif-display); font-style: italic; font-size: 1.25rem;">
              “Para la persona que ilumina cada uno de mis días. Con todo mi amor.”
            </p>
            <span style="font-size: 0.75rem; color: var(--mf-text-muted); display: block; margin-top: 10px;">
              Caligrafiado a mano en papel de algodón de 300g con lacre granate
            </span>
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">¿Deseas modificar las palabras?</label>
            <input type="text" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="Para la persona que ilumina cada uno de mis días. Con todo mi amor.">
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 14px;">
            <button class="btn-dark" id="btn-chk-back-3">← Volver</button>
            <button class="btn-primary" id="btn-chk-to-5">Continuar al Pago Seguro ($${total.toLocaleString('es-MX')} MXN) →</button>
          </div>
        </div>
      `;
      document.getElementById('btn-chk-back-3')?.addEventListener('click', () => renderStep(3));
      document.getElementById('btn-chk-to-5')?.addEventListener('click', () => renderStep(5));
    } else if (curStep === 5) {
      title.textContent = 'Paso 5 de 5: Pago Protegido y Cifrado';
      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 18px;">
          <div style="background: #f7faf7; border: 1px solid #cfebd2; padding: 18px; border-radius: var(--radius-sm);">
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.15rem; margin-bottom: 4px;">
              <span>Total a Liquidar:</span>
              <span style="color: var(--mf-crimson-deep);">$${total.toLocaleString('es-MX')} MXN</span>
            </div>
            <span style="font-size: 0.75rem; color: #236830;">✓ Envío climatizado bonificado · Incluye IVA</span>
          </div>

          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px;">Método de Pago:</label>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--mf-gold-primary); border-radius: var(--radius-sm); background: #fffcf7;">
                <input type="radio" name="pay-method" checked>
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="vertical-align: -2px; margin-right: 6px;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                  Tarjeta Bancaria (Visa, Mastercard, AMEX)
                </span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--mf-border-light); border-radius: var(--radius-sm);">
                <input type="radio" name="pay-method">
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="vertical-align: -2px; margin-right: 6px;"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  Apple Pay / Billetera Digital (1 Clic)
                </span>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--mf-border-light); border-radius: var(--radius-sm);">
                <input type="radio" name="pay-method">
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="vertical-align: -2px; margin-right: 6px;"><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z"></path></svg>
                  Transferencia Electrónica Directa SPEI
                </span>
              </label>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: 10px;">
            <button class="btn-dark" id="btn-chk-back-4">← Volver</button>
            <button class="btn-monsieur" id="btn-confirm-order" style="padding: 16px 28px;">
              <img src="/images/sello-lacre-mf.svg" alt="Sello" class="btn-seal-icon">
              <span>Confirmar Pedido y Enviar a Atelier</span>
            </button>
          </div>
        </div>
      `;
      document.getElementById('btn-chk-back-4')?.addEventListener('click', () => renderStep(4));
      document.getElementById('btn-confirm-order')?.addEventListener('click', () => renderStep(6));
    } else if (curStep === 6) {
      // ORDER TRACKING SCREEN
      title.textContent = '¡Merci! Pedido Confirmado';
      body.innerHTML = `
        <div style="text-align: center;">
          <div style="margin-bottom: 12px;">
            <img src="/images/sello-lacre-mf.svg" alt="Sello Oficial Monsieur Flores" style="width: 58px; height: 58px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">
          </div>
          <h3 style="font-size: 1.6rem; color: var(--mf-text-main); margin-bottom: 4px; font-family: var(--font-serif-headline);">Monsieur Flores ha recibido tu encargo</h3>
          <p style="font-size: 0.9rem; color: var(--mf-text-muted); margin-bottom: 24px;">
            Folio de Pedido de Autor: <strong>${store.orderTracking.orderId}</strong>
          </p>

          <div class="mf-tracking-flow">
            <div class="mf-tracking-node done">
              <div class="mf-tracking-icon" style="font-family: var(--font-serif-display); font-weight: 700;">I</div>
              <div style="text-align: left;">
                <strong style="font-size: 0.95rem;">Pedido Recibido y Validado</strong>
                <p style="font-size: 0.78rem; color: var(--mf-text-muted);">Pago acreditado con éxito</p>
              </div>
            </div>

            <div class="mf-tracking-node active">
              <div class="mf-tracking-icon" style="font-family: var(--font-serif-display); font-weight: 700;">II</div>
              <div style="text-align: left;">
                <strong style="font-size: 0.95rem; color: var(--mf-gold-primary);">Monsieur está preparando tu arreglo</strong>
                <p style="font-size: 0.78rem; color: var(--mf-text-muted);">Selección de flores en su apertura ideal y caligrafía de carta</p>
              </div>
            </div>

            <div class="mf-tracking-node">
              <div class="mf-tracking-icon" style="font-family: var(--font-serif-display); font-weight: 700;">III</div>
              <div style="text-align: left;">
                <strong style="font-size: 0.95rem;">En camino con nuestro conserje</strong>
                <p style="font-size: 0.78rem; color: var(--mf-text-muted);">Vehículo climatizado rumbo a la zona metropolitana</p>
              </div>
            </div>

            <div class="mf-tracking-node">
              <div class="mf-tracking-icon" style="font-family: var(--font-serif-display); font-weight: 700;">IV</div>
              <div style="text-align: left;">
                <strong style="font-size: 0.95rem;">Entregado con Protocolo</strong>
                <p style="font-size: 0.78rem; color: var(--mf-text-muted);">Confirmación y foto de entrega enviada a tu teléfono</p>
              </div>
            </div>
          </div>

          <div style="background: var(--mf-bg-light); padding: 18px; border-radius: var(--radius-md); margin-bottom: 24px; font-size: 0.85rem; text-align: left;">
            <p><strong>Destinatario:</strong> Sofía Navarro</p>
            <p><strong>Horario Estimado:</strong> Hoy, 2:00 PM – 4:00 PM</p>
            <p><strong>Actualizaciones en vivo:</strong> Enviadas al WhatsApp +52 81 1234 5678</p>
          </div>

          <button class="btn-primary" onclick="document.getElementById('checkout-modal').classList.remove('active'); document.getElementById('drawer-overlay').classList.remove('active'); document.body.classList.remove('mf-modal-open');">
            Volver a la Boutique
          </button>
        </div>
      `;
    }
  }

  renderStep(step);
  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('mf-modal-open');
}

/* ==========================================================================
   CONCIERGE BOT PRIVADO DE MONSIEUR FLORES
   ========================================================================== */
function initConciergeBot() {
  const toggle = document.getElementById('concierge-toggle');
  const windowEl = document.getElementById('concierge-window');
  const closeBtn = document.getElementById('concierge-close');
  const messagesList = document.getElementById('concierge-messages-list');
  const form = document.getElementById('concierge-form');
  const input = document.getElementById('concierge-input-text');
  const chips = document.querySelectorAll('.mf-chip-btn');

  if (!toggle || !windowEl) return;

  function toggleWindow() {
    windowEl.classList.toggle('active');
    if (windowEl.classList.contains('active')) {
      input?.focus();
      scrollToBottom();
    }
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWindow();
  });

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    windowEl.classList.remove('active');
  });

  // Close when clicking outside on mobile/desktop
  document.addEventListener('click', (e) => {
    if (!windowEl.contains(e.target) && !toggle.contains(e.target)) {
      windowEl.classList.remove('active');
    }
  });

  function scrollToBottom() {
    if (messagesList) {
      messagesList.scrollTop = messagesList.scrollHeight;
    }
  }

  function addMessage(sender, text, actionHTML = '') {
    if (!messagesList) return;
    const time = new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
    const msgDiv = document.createElement('div');
    msgDiv.className = `mf-msg ${sender}`;
    msgDiv.innerHTML = `
      <div class="mf-msg-bubble">
        ${text}
        ${actionHTML ? `<div style="margin-top: 10px;">${actionHTML}</div>` : ''}
      </div>
      <span class="mf-msg-time">${time} · ${sender === 'bot' ? 'Monsieur Flores' : 'Usted'}</span>
    `;
    messagesList.appendChild(msgDiv);
    scrollToBottom();
  }

  function handleBotResponse(queryText) {
    const q = queryText.toLowerCase().trim();

    // Typing simulation
    setTimeout(() => {
      if (q.includes('perdon') || q.includes('perdón') || q.includes('disculpa') || q.includes('error')) {
        const prod = PRODUCTS.find(p => p.id === 'la-disculpa');
        addMessage(
          'bot',
          '<em>“Reconocer un tropiezo con gracia es el primer paso hacia el reencuentro.”</em> Para pedir perdón, la estridencia es un error. He creado <strong>La Disculpa</strong>: rosas inglesas blush en caja joyero, acompañadas de 12 trufas artesanales con polvo de oro comestible y su dedicatoria en papel de algodón lacrada en cera.',
          `<button class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='la-disculpa'));">
            Añadir La Disculpa a la Bolsa ($1,599 MXN)
          </button>`
        );
      } else if (q.includes('aniversario') || q.includes('amor') || q.includes('novia') || q.includes('esposa') || q.includes('conquistar')) {
        addMessage(
          'bot',
          'El amor verdadero no se susurra; se declara con la magnificencia del terciopelo. Para aniversarios memorables, mi recomendación suprema es <strong>La Inolvidable</strong> (50 rosas en sombrerera cilíndrica de alta costura) o <strong>La Clásica</strong> (24 rosas de tallo largo con lazo dorado).',
          `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='la-inolvidable'));">
              La Inolvidable ($2,499)
            </button>
            <button class="btn-dark" style="padding: 8px 14px; font-size: 0.75rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='la-clasica'));">
              La Clásica ($1,299)
            </button>
          </div>`
        );
      } else if (q.includes('ciudad') || q.includes('ciudades') || q.includes('donde') || q.includes('dónde') || q.includes('cobertura') || q.includes('envio') || q.includes('envío') || q.includes('entrega')) {
        addMessage(
          'bot',
          'Monsieur Flores realiza entregas garantizadas el mismo día en las 8 metrópolis de México:<br><br>' +
          '✦ <strong>Ciudad de México (CDMX)</strong>: Polanco, Lomas, Roma-Condesa, Santa Fe.<br>' +
          '✦ <strong>Monterrey & San Pedro</strong>: Valle Oriente, Calzada del Valle, San Jerónimo.<br>' +
          '✦ <strong>Guadalajara & Zapopan</strong>: Providencia, Puerta de Hierro, Andares.<br>' +
          '✦ <strong>Puebla</strong>: Angelópolis, La Vista.<br>' +
          '✦ <strong>Querétaro</strong>: Juriquilla, El Campanario.<br>' +
          '✦ <strong>Mérida</strong>: Montebello, Altabrisa.<br>' +
          '✦ <strong>Cancún & Riviera Maya</strong>: Zona Hotelera, Puerto Cancún.<br>' +
          '✦ <strong>Tijuana</strong>: Zona Río, Chapultepec.<br><br>' +
          'Todas nuestras flores viajan en cabinas refrigeradas a 14°C para conservar su turgencia impecable.'
        );
      } else if (q.includes('sorpresa') || q.includes('porque si') || q.includes('porque sí') || q.includes('espontaneo') || q.includes('amiga') || q.includes('amigo')) {
        addMessage(
          'bot',
          '<em>“Los regalos más memorables son los que llegan en un martes cualquiera sin previo aviso.”</em> Le sugiero <strong>Porque Sí</strong>, un bouquet etéreo de peonías y anémonas en jarrón de cristal acanalado ($999 MXN). Provocará una sonrisa sincera.',
          `<button class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='porque-si'));">
            Añadir Porque Sí ($999 MXN)
          </button>`
        );
      } else if (q.includes('alta-costura') || q.includes('lujo') || q.includes('presidencial') || q.includes('caro')) {
        addMessage(
          'bot',
          'Nuestra línea de <strong>Alta Costura Floral</strong> contempla montajes de hasta 100 rosas en sombrerera artesanal o la <strong>Orquídea Majestueuse</strong> en piedra volcánica. Piezas que imponen una presencia arquitectónica inigualable.',
          `<button class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem;" onclick="document.getElementById('seleccion').scrollIntoView({behavior:'smooth'}); window.store.setCategory('premium');">
            Ver Colección Alta Costura
          </button>`
        );
      } else if (q.includes('whatsapp') || q.includes('humano') || q.includes('telefono') || q.includes('llamada')) {
        addMessage(
          'bot',
          'Con el mayor agrado. Nuestro conserje titular está disponible para asistirle telefónicamente o vía enlace directo:<br><br>' +
          'Línea Privada Atelier: <strong>+52 81 8000 3567</strong><br>' +
          'Horario de Atención: Lunes a Domingo, 8:00 AM – 9:00 PM.',
          `<a href="https://wa.me/528180003567?text=Hola%20Monsieur%20Flores,%20deseo%20asistencia%20personalizada" target="_blank" class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem; text-decoration: none;">
            Abrir Canal Privado de WhatsApp
          </a>`
        );
      } else {
        addMessage(
          'bot',
          `Entiendo la sutileza de lo que busca. Para "${queryText}", le sugiero que me permita recomendarle una de nuestras creaciones de autor. ¿Desea que prioricemos rosas clásicas, peonías silvestres u orquídeas de larga duración?`,
          `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="mf-chip-btn" onclick="document.getElementById('buscador-emocional').scrollIntoView({behavior:'smooth'});">Explorar Buscador Emocional</button>
            <button class="mf-chip-btn" onclick="document.getElementById('sorprendeme').scrollIntoView({behavior:'smooth'});">Asesor Sorpréndeme</button>
          </div>`
        );
      }
    }, 450);
  }

  // Handle form submit
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMessage('user', text);
    input.value = '';
    handleBotResponse(text);
  });

  // Handle chips clicks
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-query') || chip.textContent;
      addMessage('user', chip.textContent);
      handleBotResponse(q);
    });
  });
}

/* ==========================================================================
   DOCUMENTOS Y POLÍTICAS LEGALES DE MONSIEUR FLORES
   ========================================================================== */
const LEGAL_DOCUMENTS = {
  terminos: {
    title: 'Términos y Condiciones de Contratación Floral',
    subtitle: 'Monsieur Flores Haute Floristerie S.A.P.I. de C.V. · Vigencia 2026',
    content: `
      <div class="mf-legal-article">
        <h4>1. Ámbito y Naturaleza del Servicio</h4>
        <p>MONSIEUR FLORES opera como una boutique digital de alta floristería de autor, ofreciendo diseño botánico exclusivo, flores de corte fresco de procedencia selecta (Holanda, Ecuador y campos boutique de México), complementos gourmet y servicio de entrega protocolaria con chófer de guante blanco en las 8 principales zonas metropolitanas de México.</p>
        <p>Al confirmar una orden en esta plataforma, el cliente acepta íntegramente los presentes Términos de Servicio y nuestras normas de confidencialidad.</p>
      </div>

      <div class="mf-legal-article">
        <h4>2. Naturaleza Botánica y Exclusividad Artesanal</h4>
        <p>Dado que las flores son elementos biológicos vivos sujetos a estacionalidad, apertura natural y clima, pueden presentarse sutiles variaciones cromáticas respecto a las fotografías de catálogo. Monsieur Flores garantiza que cualquier ajuste mantendrá o superará el valor estético, la paleta cromática de autor y el volumen floral pactado.</p>
      </div>

      <div class="mf-legal-article">
        <h4>3. Horarios de Corte y Entregas Mismo Día</h4>
        <p>Las órdenes confirmadas antes de las 14:00 horas (tiempo del centro de México) son elegibles para entrega el mismo día en las ciudades con cobertura activa (CDMX, Monterrey, Guadalajara, Puebla, Querétaro, Mérida, Cancún y Tijuana). Pedidos posteriores se programan para el primer bloque del día siguiente o en la fecha específica elegida por el remitente.</p>
      </div>

      <div class="mf-legal-article">
        <h4>4. Mensajes Confidenciales y Sello de Lacre</h4>
        <p>Toda dedicatoria adjunta es transcrita a mano o en tipografía caligráfica clásica sobre papel de algodón 100% y sellada con lacre artesanal. Monsieur Flores mantiene absoluto secreto profesional sobre el contenido de los mensajes y la identidad del comprador cuando se marque la opción de envío anónimo o 'Admirador Secreto'.</p>
      </div>

      <div class="mf-legal-signature-box">
        <img src="/images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
        <div>
          <strong>Monsieur Flores</strong> — Maître Fleuriste<br>
          <span style="font-size: 0.8rem; opacity: 0.85;">“El arte de decirlo con flores.”</span>
        </div>
      </div>
    `
  },
  privacidad: {
    title: 'Aviso de Privacidad Integral',
    subtitle: 'En estricto cumplimiento con la LFPDPPP de los Estados Unidos Mexicanos',
    content: `
      <div class="mf-legal-article">
        <h4>1. Responsable del Tratamiento de sus Datos</h4>
        <p>Monsieur Flores Haute Floristerie S.A.P.I. de C.V., con domicilio en Ciudad de México, es responsable del tratamiento legítimo, controlado e informado de sus datos personales y los de los destinatarios indicados para la prestación de nuestros servicios botánicos.</p>
      </div>

      <div class="mf-legal-article">
        <h4>2. Datos Personales Recabados</h4>
        <p>Para procesar su encargo recabamos: nombre completo del remitente, correo electrónico, teléfono móvil, datos de facturación (RFC, domicilio fiscal), dirección completa del destinatario, teléfono de contacto y texto confidencial de la dedicatoria.</p>
      </div>

      <div class="mf-legal-article">
        <h4>3. Finalidades Primarias y Seguridad Criptográfica</h4>
        <p>Los datos se utilizan exclusivamente para: procesamiento seguro de pagos con encriptación SSL y certificación PCI-DSS, elaboración del ramo de autor, caligrafía de la carta, coordinación logística con vehículos climatizados a 14°C y envío de notificación fotográfica de entrega en mano.</p>
        <p>Bajo ninguna circunstancia comercializamos, alquilamos ni transferimos sus datos personales a terceros con fines publicitarios ajenos.</p>
      </div>

      <div class="mf-legal-article">
        <h4>4. Ejercicio de Derechos ARCO</h4>
        <p>Usted puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición al tratamiento de sus datos personales enviando un correo a <strong>privacidad@monsieurflores.mx</strong> o solicitándolo directamente mediante nuestro Concierge Privado.</p>
      </div>

      <div class="mf-legal-signature-box">
        <img src="/images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
        <div>
          <strong>Unidad de Protección y Confidencialidad</strong><br>
          <span style="font-size: 0.8rem; opacity: 0.85;">Monsieur Flores Haute Floristerie</span>
        </div>
      </div>
    `
  },
  reembolso: {
    title: 'Política de Reembolso, Cancelación y Sustitución',
    subtitle: 'Garantía de Satisfacción Absoluta y Protección al Consumidor',
    content: `
      <div class="mf-legal-article">
        <h4>1. Cancelaciones sin Penalización</h4>
        <p>Cualquier solicitud de cancelación es recibida con agrado y reembolsada al 100% sin penalización alguna siempre que se solicite al menos <strong>3 horas antes</strong> del inicio de la confección floral en nuestro atelier.</p>
      </div>

      <div class="mf-legal-article">
        <h4>2. Compromiso de Reposición Inmediata o Reembolso</h4>
        <p>Si por causas imputables al traslado en nuestras unidades refrigeradas el arreglo sufriera daño o no cumpliera con la excelencia prometida por Monsieur Flores, el cliente podrá optar de inmediato por:</p>
        <ul>
          <li><strong>Reposición prioritaria:</strong> Confección y reenvío de un nuevo arreglo de categoría igual o superior en un plazo máximo de 4 horas sin costo alguno.</li>
          <li><strong>Reembolso íntegro:</strong> Devolución del 100% del importe pagado mediante el mismo método de pago en un plazo de 24 a 48 horas hábiles.</li>
        </ul>
      </div>

      <div class="mf-legal-article">
        <h4>3. Protocolo de Ausencia del Destinatario</h4>
        <p>En caso de que el destinatario no se encuentre en el domicilio indicado, el conserje aguardará hasta 20 minutos de cortesía y realizará una llamada discreta. Si no es posible la entrega, el ramo regresa a la cámara climatizada para reprogramar una segunda entrega el mismo día sin recargo por resguardo botánico.</p>
      </div>

      <div class="mf-legal-signature-box">
        <img src="/images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
        <div>
          <strong>Garantía de Guante Blanco</strong><br>
          <span style="font-size: 0.8rem; opacity: 0.85;">Satisfacción total o reposición inmediata en atelier.</span>
        </div>
      </div>
    `
  },
  frescura: {
    title: 'Garantía de Frescura Botánica de 8 Días',
    subtitle: 'El Compromiso Científico y Artesanal de Monsieur Flores',
    content: `
      <div class="mf-legal-article">
        <h4>1. Cadena de Frío a 14°C y Alimento Floral Francés</h4>
        <p>Nuestras flores no se exponen a temperaturas ambientales degradantes. Desde el momento del corte en finca, se sumergen en soluciones de hidratación formuladas en Francia y viajan en compartimentos con microclima a 14°C para garantizar que los pétalos conserven su máxima turgencia.</p>
      </div>

      <div class="mf-legal-article">
        <h4>2. Ocho Días de Vida Garantizados</h4>
        <p>Monsieur Flores asegura una duración mínima de 8 días en jarrón para sus ramos de autor, siempre que se observen los siguientes tres pasos esenciales:</p>
        <ul>
          <li><strong>Corte en 45°:</strong> Recortar 1.5 cm del tallo en ángulo diagonal cada 48 horas para facilitar la absorción de savia limpia.</li>
          <li><strong>Agua fresca filtrada:</strong> Renovar el agua del jarrón y disolver el sobre de nutrientes botánicos de Monsieur incluido en cada entrega.</li>
          <li><strong>Ubicación noble:</strong> Mantener el arreglo en un espacio ventilado, alejado del impacto directo de luz solar cenital o corrientes de aire acondicionado.</li>
        </ul>
      </div>

      <div class="mf-legal-article">
        <h4>3. Asistencia Personalizada de Monsieur</h4>
        <p>Si alguna de sus flores presenta marchitamiento prematuro antes de cumplirse los 8 días, envíenos una fotografía a través de nuestro <strong>Concierge Bot</strong> o WhatsApp y Monsieur le enviará una cortesía o reemplazo sin objeción.</p>
      </div>

      <div class="mf-legal-signature-box">
        <img src="/images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
        <div>
          <strong>Compromiso Botánico de Autor</strong><br>
          <span style="font-size: 0.8rem; opacity: 0.85;">Monsieur Flores · Maestro Florista</span>
        </div>
      </div>
    `
  }
};

window.openLegalModal = function(tab = 'terminos') {
  const modal = document.getElementById('legal-modal');
  const overlay = document.getElementById('drawer-overlay');
  if (!modal) return;

  modal.classList.add('active');
  overlay?.classList.add('active');
  window.switchLegalTab(tab);
};

window.closeLegalModal = function() {
  const modal = document.getElementById('legal-modal');
  const overlay = document.getElementById('drawer-overlay');
  modal?.classList.remove('active');
  overlay?.classList.remove('active');
};

window.switchLegalTab = function(tabKey) {
  const doc = LEGAL_DOCUMENTS[tabKey] || LEGAL_DOCUMENTS.terminos;
  const titleEl = document.getElementById('legal-modal-title');
  const contentEl = document.getElementById('legal-modal-content');

  if (titleEl) titleEl.textContent = doc.title;
  if (contentEl) {
    contentEl.innerHTML = `
      <div style="font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mf-gold-primary); margin-bottom: 20px;">
        ${doc.subtitle}
      </div>
      ${doc.content}
    `;
    contentEl.scrollTop = 0;
  }

  // Update tabs active state
  document.querySelectorAll('.mf-legal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`tab-btn-${tabKey}`)?.classList.add('active');
};

// Cerrar modales con tecla Escape y clic en overlay
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeLegalModal?.();
  }
});

