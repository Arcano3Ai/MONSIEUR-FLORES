import { PRODUCTS, CATEGORIES, ADDONS, CITIES_MEXICO } from './data/products.js';
import { EMOTIONS } from './data/emotions.js';
import { JOURNAL_ARTICLES, TESTIMONIALS, INSTAGRAM_POSTS } from './data/journal.js';
import { store } from './state/store.js';

// Expose store globally for inline triggers if needed
window.store = store;

function initApp() {
  initHeader();
  initHeroVideo();
  initAtelierAudio();
  renderEmotions();
  renderProducts();
  renderBestsellers();
  renderCategories();
  initCategoryFilters();
  initSurpriseWizard();
  initPersonalizer();
  initDeliveryChecker();
  renderTestimonials();
  renderInstagram();
  renderJournal();
  initDrawersAndModals();
  initSearchModal();
  initTrackingModal();
  initInvoiceModal();
  initCurrencySwitcher();
  initConciergeBot();
  updateHeaderBadges();
  initServiceWorker();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // En navegadores móviles o cuando los módulos cargan diferidos
  initApp();
}

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
  const navList = document.querySelector('.mf-nav-list');
  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navList.classList.contains('mobile-active');
      if (isOpen) {
        navList.classList.remove('mobile-active');
        navList.style.display = 'none';
      } else {
        navList.classList.add('mobile-active');
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.position = 'fixed';
        navList.style.top = '70px';
        navList.style.left = '0';
        navList.style.width = '100vw';
        navList.style.height = 'calc(100vh - 70px)';
        navList.style.background = 'rgba(12, 13, 12, 0.98)';
        navList.style.padding = '30px 24px';
        navList.style.gap = '20px';
        navList.style.zIndex = '1000';
        navList.style.overflowY = 'auto';
      }
    });

    // Cerrar menú al hacer clic en cualquier enlace
    navList.querySelectorAll('.mf-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('mobile-active');
        navList.style.display = 'none';
      });
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

function initCategoryFilters() {
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

  // Inicializar con datos guardados si existen
  if (store.activePersonalization) {
    if (recipientInput) recipientInput.value = store.activePersonalization.recipientName || 'Sofía Navarro';
    if (messageInput) messageInput.value = store.activePersonalization.cardMessage || 'Para la persona que ilumina cada uno de mis días. Con todo mi amor.';
    if (liveRecipient) liveRecipient.textContent = `Para: ${recipientInput.value}`;
    if (liveMessage) liveMessage.textContent = `“${messageInput.value}”`;
  }

  if (recipientInput && liveRecipient) {
    recipientInput.addEventListener('input', (e) => {
      const val = e.target.value.trim() || 'Alguien Muy Especial';
      liveRecipient.textContent = `Para: ${val}`;
      store.activePersonalization.recipientName = val;
    });
  }

  if (messageInput && liveMessage) {
    messageInput.addEventListener('input', (e) => {
      const val = e.target.value.trim() || 'Escribe tu mensaje con el corazón...';
      liveMessage.textContent = `“${val}”`;
      store.activePersonalization.cardMessage = val;
    });
  }

  // Render addons con selección real
  const addonsList = document.getElementById('addons-list');
  let selectedAddons = [];

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
          <div class="mf-addon-price">+${store.formatPrice(addon.price)}</div>
          <span class="mf-addon-action" style="font-size: 0.75rem; color: var(--mf-gold-primary); font-weight: 600;">Seleccionar</span>
        </div>
      </div>
    `).join('');

    addonsList.querySelectorAll('.mf-addon-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-addon-id');
        const addonObj = ADDONS.find(a => a.id === id);
        item.classList.toggle('selected');
        const isSelected = item.classList.contains('selected');
        const actionSpan = item.querySelector('.mf-addon-action');
        if (actionSpan) actionSpan.textContent = isSelected ? '✓ Agregado' : 'Seleccionar';

        if (isSelected && addonObj) {
          if (!selectedAddons.some(a => a.id === id)) selectedAddons.push(addonObj);
        } else {
          selectedAddons = selectedAddons.filter(a => a.id !== id);
        }
      });
    });
  }

  // Guardar y sincronizar personalización real en el carrito y checkout
  document.getElementById('btn-save-personalization')?.addEventListener('click', () => {
    const recName = recipientInput?.value.trim() || 'Alguien Muy Especial';
    const cardMsg = messageInput?.value.trim() || 'Para la persona que ilumina cada uno de mis días. Con todo mi amor.';

    store.setPersonalization({
      recipientName: recName,
      cardMessage: cardMsg,
      addons: selectedAddons
    });

    const addonsText = selectedAddons.length > 0 
      ? ` y ${selectedAddons.length} complemento(s) gourmet de atelier` 
      : '';

    showVelvetToast(
      'Personalización de Autor Guardada',
      `Carta manuscrita para ${recName}${addonsText} adjuntados a tu pedido con éxito.`
    );

    // Abrir el carrito para que el cliente constate la personalización y los complementos
    setTimeout(() => {
      const cartDrawer = document.getElementById('cart-drawer');
      const overlay = document.getElementById('drawer-overlay');
      if (cartDrawer && overlay) {
        overlay.classList.add('active');
        cartDrawer.classList.add('active');
        renderCartDrawer();
      }
    }, 600);
  });

  // Inicializar descarga y compartir de carta digital en alta resolución
  initCardDownloadAndShare();
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
    <article class="mf-journal-card" data-journal-id="${art.id}" style="cursor: pointer;">
      <div class="mf-journal-img-wrap">
        <img src="${art.image}" alt="${art.title}" class="mf-journal-img" loading="lazy">
      </div>
      <div class="mf-journal-body">
        <div class="mf-journal-meta">${art.category} · ${art.readTime}</div>
        <h3 class="mf-journal-title">${art.title}</h3>
        <p class="mf-journal-excerpt">${art.excerpt}</p>
        <span style="color: var(--mf-gold-primary); font-weight: 600; font-size: 0.85rem;">Leer Crónica Completa →</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.mf-journal-card').forEach(card => {
    card.addEventListener('click', () => {
      const artId = card.getAttribute('data-journal-id');
      window.openJournalModal(artId);
    });
  });

  document.getElementById('btn-view-all-journal')?.addEventListener('click', () => {
    showVelvetToast(
      'Edición Especial de Monsieur Flores',
      'El Compendio Botánico Otoño/Invierno está en imprenta sobre papel de algodón. Estará disponible el próximo mes.'
    );
  });
}

window.openJournalModal = function(artId) {
  const art = JOURNAL_ARTICLES.find(a => a.id === artId) || JOURNAL_ARTICLES[0];
  const modal = document.getElementById('journal-modal');
  const overlay = document.getElementById('drawer-overlay');
  const catEl = document.getElementById('journal-modal-category');
  const titleEl = document.getElementById('journal-modal-title');
  const metaEl = document.getElementById('journal-modal-meta');
  const bodyEl = document.getElementById('journal-modal-body');

  if (!modal || !overlay || !bodyEl) return;

  if (catEl) catEl.textContent = `${art.category} · ${art.readTime}`;
  if (titleEl) titleEl.textContent = art.title;
  if (metaEl) metaEl.textContent = `Por ${art.author} · Publicado en ${art.date}`;

  bodyEl.innerHTML = `
    <div style="margin-bottom: 24px; border-radius: 4px; overflow: hidden; max-height: 280px; box-shadow: var(--shadow-sm);">
      <img src="${art.image}" alt="${art.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div class="mf-journal-editorial-body">
      ${art.content || `<p>${art.excerpt}</p>`}
    </div>
    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--mf-border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 12px;">
      <span style="font-size: 0.82rem; color: var(--mf-text-muted);">¿Te inspiró esta lectura?</span>
      <button class="btn-primary" onclick="window.closeJournalModal(); document.getElementById('seleccion').scrollIntoView({behavior: 'smooth'});">
        Explorar la Selección de Monsieur →
      </button>
    </div>
  `;

  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('mf-modal-open');
};

window.closeJournalModal = function() {
  const modal = document.getElementById('journal-modal');
  const overlay = document.getElementById('drawer-overlay');
  modal?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.classList.remove('mf-modal-open');
};

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
    document.getElementById('journal-modal')?.classList.remove('active');
    document.body.classList.remove('mf-modal-open');
  }

  overlay.addEventListener('click', closeAll);

  // Vaciar carrito
  document.getElementById('btn-clear-cart')?.addEventListener('click', () => {
    if (store.cart.length === 0) return;
    store.clearCart();
    showVelvetToast('Bolsa de Atelier', 'Has vaciado tu bolsa de compras.');
  });

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

  // Search button triggers (Apertura de Omnibox de Lujo)
  const searchBtn = document.getElementById('btn-search-open');
  const mobileSearch = document.getElementById('mobile-btn-search');
  searchBtn?.addEventListener('click', () => openSearchModal());
  mobileSearch?.addEventListener('click', () => openSearchModal());

  // Atajo de teclado universal para búsqueda: Cmd+K / Ctrl+K o /
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === 'Escape') {
      closeAll();
      closeSearchModal();
      window.closeTrackingModal?.();
      window.closeInvoiceModal?.();
      window.closeLegalModal?.();
    }
  });

  // Meet Monsieur Modal
  document.getElementById('btn-meet-monsieur-modal')?.addEventListener('click', () => {
    showVelvetToast(
      'Manifiesto de Monsieur Flores',
      '“Monsieur Flores es la voz de tus afectos más puros. Un atelier fundado para convertir cada ramo en una pieza inolvidable de la alta floristería mexicana con espíritu europeo.”'
    );
  });

  // Aplicar Cupón en Carrito
  const btnApplyCoupon = document.getElementById('btn-apply-coupon');
  const couponInput = document.getElementById('cart-coupon-input');
  const applyCouponHandler = () => {
    if (!couponInput) return;
    const res = store.applyCoupon(couponInput.value);
    if (res.success) {
      showVelvetToast('Cortesía de Atelier', res.message);
      couponInput.value = '';
    } else {
      showVelvetToast('Código de Cortesía', res.message, true);
    }
  };
  btnApplyCoupon?.addEventListener('click', applyCouponHandler);
  couponInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyCouponHandler();
    }
  });

  // React to store notifications
  store.subscribe('cart:updated', () => {
    updateHeaderBadges();
    renderCartDrawer();
  });

  store.subscribe('currency:updated', () => {
    renderProducts();
    renderBestsellers();
    renderCartDrawer();
    renderFavoritesDrawer();
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
          <img src="./images/sello-lacre-mf.svg" alt="Sello de Monsieur Flores" style="width: 48px; height: 48px; opacity: 0.85; filter: grayscale(20%);">
        </div>
        <h4 style="margin-bottom: 6px; font-family: var(--font-serif-headline); color: var(--mf-text-main);">Tu bolsa espera una creación</h4>
        <p style="font-size: 0.85rem; color: var(--mf-text-muted); margin-bottom: 22px;">
          Descubre la selección de Monsieur y elige las flores que hablarán por ti hoy.
        </p>
        <button class="btn-monsieur" onclick="document.getElementById('cart-drawer').classList.remove('active'); document.getElementById('drawer-overlay').classList.remove('active'); document.getElementById('seleccion').scrollIntoView({behavior: 'smooth'});">
          <img src="./images/sello-lacre-mf.svg" alt="Sello" class="btn-seal-icon">
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

  subtotalEl.textContent = store.formatPrice(store.getCartSubtotal());

  // Manejo visual de descuento y total
  const discountRow = document.getElementById('cart-discount-row');
  const discountVal = document.getElementById('cart-discount-val');
  const totalVal = document.getElementById('cart-total-val');
  const feedbackBox = document.getElementById('cart-coupon-feedback');

  if (store.coupon) {
    const discountAmt = store.getDiscountAmount();
    if (discountRow) discountRow.style.display = 'flex';
    if (discountVal) discountVal.textContent = `-${store.formatPrice(discountAmt)}`;
    if (totalVal) totalVal.textContent = store.formatPrice(store.getCartTotal());
    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      feedbackBox.innerHTML = `
        <span style="color: #4ade80;">✓ ${store.coupon.label}</span>
        <button onclick="window.store.removeCoupon();" style="background: none; border: none; color: #f87171; text-decoration: underline; margin-left: 8px; cursor: pointer; font-size: 0.72rem;">Remover</button>
      `;
    }
  } else {
    if (discountRow) discountRow.style.display = 'none';
    if (totalVal) totalVal.textContent = store.formatPrice(store.getCartSubtotal());
    if (feedbackBox) feedbackBox.style.display = 'none';
  }
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
      const liveMsg = store.activePersonalization?.cardMessage || 'Para la persona que ilumina cada uno de mis días. Con todo mi amor.';
      const liveRec = store.activePersonalization?.recipientName || 'Sofía Navarro';

      body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="background: #fdfaf4; padding: 24px; border: 1px solid #e7d5be; border-radius: var(--radius-md); text-align: center;">
            <div style="width: 44px; height: 44px; background: var(--mf-crimson-deep); border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-family: var(--font-serif-display); font-size: 1.3rem;">M</div>
            <div style="font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--mf-gold-primary); font-weight: 600; margin-bottom: 8px;">
              Para: <span id="chk-card-recipient-label">${liveRec}</span>
            </div>
            <p style="font-family: var(--font-serif-display); font-style: italic; font-size: 1.25rem;" id="chk-card-message-preview">
              “${liveMsg}”
            </p>
            <span style="font-size: 0.75rem; color: var(--mf-text-muted); display: block; margin-top: 10px;">
              Caligrafiado a mano en papel de algodón de 300g con lacre granate y sello de Monsieur
            </span>
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px;">¿Deseas modificar las palabras de tu carta?</label>
            <input type="text" id="chk-card-edit-input" class="mf-input-field" style="color: black; background: #f8f9f8; border: 1px solid #ccc; width: 100%;" value="${liveMsg}">
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 14px;">
            <button class="btn-dark" id="btn-chk-back-3">← Volver</button>
            <button class="btn-primary" id="btn-chk-to-5">Continuar al Pago Seguro (${store.formatPrice(store.getCartTotal())}) →</button>
          </div>
        </div>
      `;

      const editInput = document.getElementById('chk-card-edit-input');
      const previewText = document.getElementById('chk-card-message-preview');
      editInput?.addEventListener('input', (e) => {
        const val = e.target.value.trim() || 'Escribe tus palabras...';
        if (previewText) previewText.textContent = `“${val}”`;
        store.activePersonalization.cardMessage = val;
      });

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
              <img src="./images/sello-lacre-mf.svg" alt="Sello" class="btn-seal-icon">
              <span>Confirmar Pedido y Enviar a Atelier</span>
            </button>
          </div>
        </div>
      `;
      document.getElementById('btn-chk-back-4')?.addEventListener('click', () => renderStep(4));
      document.getElementById('btn-confirm-order')?.addEventListener('click', () => renderStep(6));
    } else if (curStep === 6) {
      // ORDER TRACKING SCREEN & WHATSAPP DISPATCH
      title.textContent = '¡Merci! Pedido Confirmado';
      const orderId = store.orderTracking.orderId;
      const finalTotalFormatted = store.formatPrice(store.getCartTotal());
      const itemsList = store.cart.map(i => `• ${i.product.name} (${i.size.name}) x${i.quantity}`).join('\n');
      
      const whatsappMsg = `Bonjour Monsieur Flores! Acabo de confirmar mi encargo de autor con Folio: *${orderId}*.\n\n*Creaciones:* \n${itemsList}\n\n*Total:* ${finalTotalFormatted}\n*Destinatario:* Sofía Navarro\n*Dedicatoria:* "Para la persona que ilumina cada uno de mis días. Con todo mi amor."\n\nPor favor confirmen la recepción y la preparación en el atelier. ¡Merci!`;
      const waUrl = `https://api.whatsapp.com/send?phone=528112345678&text=${encodeURIComponent(whatsappMsg)}`;

      body.innerHTML = `
        <div style="text-align: center;">
          <div style="margin-bottom: 12px;">
            <img src="./images/sello-lacre-mf.svg" alt="Sello Oficial Monsieur Flores" style="width: 58px; height: 58px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">
          </div>
          <h3 style="font-size: 1.6rem; color: var(--mf-text-main); margin-bottom: 4px; font-family: var(--font-serif-headline);">Monsieur Flores ha recibido tu encargo</h3>
          <p style="font-size: 0.9rem; color: var(--mf-text-muted); margin-bottom: 24px;">
            Folio de Pedido de Autor: <strong style="color: var(--mf-gold-primary); font-family: monospace; font-size: 1.1rem;">${orderId}</strong>
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
                <strong style="font-size: 0.95rem; color: var(--mf-gold-primary);">Monsieur está confeccionando tu arreglo</strong>
                <p style="font-size: 0.78rem; color: var(--mf-text-muted);">Corte en 45°, hidratación francesa y caligrafía de la carta</p>
              </div>
            </div>

            <div class="mf-tracking-node">
              <div class="mf-tracking-icon" style="font-family: var(--font-serif-display); font-weight: 700;">III</div>
              <div style="text-align: left;">
                <strong style="font-size: 0.95rem;">En camino con conserje privado</strong>
                <p style="font-size: 0.78rem; color: var(--mf-text-muted);">Vehículo climatizado a 14°C rumbo a destino</p>
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

          <div style="background: var(--mf-bg-light); padding: 18px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.85rem; text-align: left;">
            <p style="margin-bottom: 4px;"><strong>Destinatario:</strong> Sofía Navarro</p>
            <p style="margin-bottom: 4px;"><strong>Horario Estimado:</strong> Hoy, 2:00 PM – 4:00 PM</p>
            <p style="margin-bottom: 4px;"><strong>Importe Liquidado:</strong> ${finalTotalFormatted}</p>
            <p style="margin-bottom: 0;"><strong>Actualizaciones en vivo:</strong> Vía WhatsApp al +52 81 1234 5678</p>
          </div>

          <!-- Acciones Clave de Despacho y Comprobante -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="width: 100%; text-decoration: none; padding: 14px 20px;">
              <span>Enviar Confirmación y Dedicatoria a Monsieur por WhatsApp →</span>
            </a>
            <div style="display: flex; gap: 10px;">
              <button class="btn-secondary" onclick="window.print();" style="flex: 1; padding: 12px 14px; font-size: 0.75rem;">
                Imprimir Comprobante Oficial
              </button>
              <button class="btn-dark" onclick="document.getElementById('checkout-modal').classList.remove('active'); document.getElementById('drawer-overlay').classList.remove('active'); document.body.classList.remove('mf-modal-open');" style="flex: 1; padding: 12px 14px; font-size: 0.75rem;">
                Volver a la Boutique
              </button>
            </div>
          </div>
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

  const mobileConcierge = document.getElementById('mobile-btn-concierge');
  if (mobileConcierge) {
    mobileConcierge.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWindow();
    });
  }

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
        <img src="./images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
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
        <img src="./images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
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
        <img src="./images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
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
        <img src="./images/sello-lacre-mf.svg" alt="Sello Lacre" style="width: 38px; height: 38px;">
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



/* ==========================================================================
   HERO COMMERCIAL VIDEO — REPRODUCCIÓN CONTINUA SIN AUDIO
   ========================================================================== */
function initHeroVideo() {
  const video = document.querySelector('.mf-hero-video');
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const startPlayback = () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback por políticas de bajo consumo o restricción móvil: reintentar al primer tap
        const playOnFirstTouch = () => {
          video.play().catch(() => {});
          window.removeEventListener('touchstart', playOnFirstTouch);
          window.removeEventListener('click', playOnFirstTouch);
        };
        window.addEventListener('touchstart', playOnFirstTouch, { passive: true, once: true });
        window.addEventListener('click', playOnFirstTouch, { passive: true, once: true });
      });
    }
  };

  startPlayback();
}

/* ==========================================================================
   ATELIER AMBIENT AUDIO — REPRODUCTOR RESILIENTE MÓVIL Y ESCRITORIO
   ========================================================================== */
function initAtelierAudio() {
  const audioEl = document.getElementById('mf-atelier-audio');
  const headerBtn = document.getElementById('btn-audio-toggle');
  const heroBtn = document.getElementById('btn-hero-audio');
  const heroIcon = document.getElementById('hero-audio-state-icon');
  const floatBtn = document.getElementById('btn-audio-float');
  const floatStatus = document.getElementById('mf-audio-float-status');
  const floatIcon = document.getElementById('mf-audio-float-icon-state');
  const toastEl = document.getElementById('mf-audio-toast');
  const toastMsg = document.getElementById('mf-audio-toast-msg');

  if (!audioEl) return;

  // Requisito 3: Compatibilidad iOS / Android (playsinline directo y volumen fijo)
  audioEl.setAttribute('playsinline', 'true');
  audioEl.setAttribute('webkit-playsinline', 'true');
  audioEl.volume = 0.35; // Nivel audible calibrado

  // Asignar fuente con resolución segura universal (soporta Vite y navegador nativo)
  const isGithubPages = window.location.pathname.includes('/MONSIEUR-FLORES');
  const basePrefix = (typeof import.meta !== 'undefined' && import.meta && import.meta.env && import.meta.env.BASE_URL)
    ? import.meta.env.BASE_URL.replace(/\/+$/, '')
    : (isGithubPages ? '/MONSIEUR-FLORES' : '');
  
  const candidateUrls = [
    './audio/dilo-con-flores.mp3',
    `${basePrefix}/audio/dilo-con-flores.mp3`,
    './public/audio/dilo-con-flores.mp3'
  ];
  let candidateIndex = 0;

  if (!audioEl.src && !audioEl.currentSrc) {
    audioEl.src = candidateUrls[0];
  }

  let isPlaying = false;
  let userMuted = false;
  let hasStarted = false;
  let toastTimeout = null;

  audioEl.addEventListener('error', () => {
    if (candidateIndex < candidateUrls.length - 1) {
      candidateIndex++;
      audioEl.src = candidateUrls[candidateIndex];
      if (isPlaying && !userMuted) {
        audioEl.play().catch(() => {});
      }
    }
  });

  function showToast(message) {
    if (!toastEl || !toastMsg) return;
    toastMsg.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3200);
  }

  function updateUI(playing) {
    isPlaying = playing;

    // Control flotante
    if (floatBtn) {
      if (playing) {
        floatBtn.classList.add('playing');
        floatBtn.classList.remove('muted');
        if (floatStatus) floatStatus.textContent = 'Música On';
        if (floatIcon) floatIcon.textContent = '❚❚';
        floatBtn.setAttribute('title', 'Pausar música ambiental');
      } else {
        floatBtn.classList.remove('playing');
        floatBtn.classList.add('muted');
        if (floatStatus) floatStatus.textContent = 'Música';
        if (floatIcon) floatIcon.textContent = '▶';
        floatBtn.setAttribute('title', 'Iniciar música ambiental');
      }
    }

    // Botón en Header
    if (headerBtn) {
      if (playing) {
        headerBtn.classList.add('playing');
        headerBtn.setAttribute('title', 'Pausar música del Atelier');
      } else {
        headerBtn.classList.remove('playing');
        headerBtn.setAttribute('title', 'Reproducir música del Atelier');
      }
    }

    // Botón en Hero
    if (heroBtn) {
      if (playing) {
        heroBtn.classList.add('playing');
        if (heroIcon) heroIcon.textContent = '❚❚';
      } else {
        heroBtn.classList.remove('playing');
        if (heroIcon) heroIcon.textContent = '▶';
      }
    }
  }

  // Desbloqueo universal en primer gesto (Touchstart, Touchend, Pointerdown, Click, Scroll)
  const gestureEvents = ['touchstart', 'touchend', 'click', 'pointerdown', 'scroll'];

  function removeGestureListeners() {
    gestureEvents.forEach(evt => {
      window.removeEventListener(evt, attemptAutoPlay, { passive: true });
      document.removeEventListener(evt, attemptAutoPlay, { passive: true });
    });
  }

  function attemptAutoPlay() {
    if (userMuted || isPlaying || hasStarted) {
      return;
    }

    const playPromise = audioEl.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        hasStarted = true;
        updateUI(true);
        removeGestureListeners(); // Se eliminan únicamente al confirmar reproducción
        showToast('♪ Música del Atelier: “Dilo con flores”');
      }).catch(() => {
        // En iOS Safari / Chrome móvil, si se rechaza por scroll pasivo,
        // los listeners permanecen 100% activos para el siguiente toque.
      });
    }
  }

  // Suscribir eventos con { passive: true }
  gestureEvents.forEach(evt => {
    window.addEventListener(evt, attemptAutoPlay, { passive: true });
    document.addEventListener(evt, attemptAutoPlay, { passive: true });
  });

  // Alternar reproducción respetando la decisión del usuario
  function togglePlay() {
    if (audioEl.paused) {
      userMuted = false;
      audioEl.play().then(() => {
        hasStarted = true;
        updateUI(true);
        removeGestureListeners();
        showToast('♪ Reproduciendo en el Atelier: “Dilo con flores”');
      }).catch(err => {
        console.warn('Playback error:', err);
      });
    } else {
      userMuted = true; // Pausa manual explícita
      audioEl.pause();
      updateUI(false);
      showToast('Atelier en silencio');
    }
  }

  if (floatBtn) {
    floatBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });
  }

  if (headerBtn) {
    headerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });
  }

  if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });
  }

  audioEl.addEventListener('play', () => updateUI(true));
  audioEl.addEventListener('pause', () => updateUI(false));
  audioEl.addEventListener('ended', () => updateUI(false));
}

/* ==========================================================================
   SISTEMA DE TOASTS DE TERCIOPELO (REEMPLAZA A ALERT NATIVO)
   ========================================================================== */
export function showVelvetToast(title, message, isError = false) {
  const container = document.getElementById('mf-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `mf-velvet-toast ${isError ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <img src="./images/sello-lacre-mf.svg" alt="Sello Monsieur" class="mf-velvet-toast-seal">
    <div class="mf-velvet-toast-content">
      <strong>${title}</strong>
      <span>${message}</span>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* ==========================================================================
   MODAL DE BÚSQUEDA SPOTLIGHT / OMNIBOX DE ALTA COSTURA
   ========================================================================== */
export function openSearchModal() {
  const modal = document.getElementById('search-modal');
  const overlay = document.getElementById('drawer-overlay');
  const input = document.getElementById('omni-search-input');
  if (!modal || !overlay) return;

  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('mf-modal-open');

  if (input) {
    setTimeout(() => input.focus(), 120);
    renderSearchResults(input.value);
  }
}

export function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  const overlay = document.getElementById('drawer-overlay');
  modal?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.classList.remove('mf-modal-open');
}

function renderSearchResults(query = '') {
  const container = document.getElementById('search-results-list');
  const clearBtn = document.getElementById('btn-search-clear');
  if (!container) return;

  const q = (query || '').toLowerCase().trim();
  if (clearBtn) {
    clearBtn.style.display = q ? 'block' : 'none';
  }

  const matches = q
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.emotions.some(e => e.includes(q))
      )
    : PRODUCTS.slice(0, 5); // Mostrar destacados cuando el input está vacío

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--mf-text-muted);">
        <p style="font-family: var(--font-serif-headline); font-size: 1.15rem; color: #ffffff; margin-bottom: 6px;">
          No hallamos creaciones bajo el término “${query}”
        </p>
        <p style="font-size: 0.85rem;">Prueba buscando "Rosas", "COCOAN", "Tulipanes" o pregúntale a Monsieur en el Concierge.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(prod => `
    <div class="mf-search-item" data-id="${prod.id}">
      <img src="${prod.image}" alt="${prod.name}" class="mf-search-item-img" loading="lazy">
      <div class="mf-search-item-info">
        <h4 class="mf-search-item-title">${prod.name}</h4>
        <span class="mf-search-item-tag">${prod.category} · ${prod.tagline}</span>
      </div>
      <div class="mf-search-item-price">${store.formatPrice(prod.price)}</div>
      <button class="btn-dark" style="padding: 6px 14px; font-size: 0.72rem;" onclick="event.stopPropagation(); window.store.addToCart(window.store.getFilteredProducts().find(p => p.id === '${prod.id}') || ${JSON.stringify(prod)}); window.closeSearchModal();">
        Adquirir
      </button>
    </div>
  `).join('');

  container.querySelectorAll('.mf-search-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-id');
      const prod = PRODUCTS.find(p => p.id === id);
      if (prod) {
        closeSearchModal();
        openProductModal(prod);
      }
    });
  });
}

function initSearchModal() {
  const input = document.getElementById('omni-search-input');
  const clearBtn = document.getElementById('btn-search-clear');
  const closeBtn = document.getElementById('btn-close-search');

  input?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  clearBtn?.addEventListener('click', () => {
    if (input) {
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  });

  closeBtn?.addEventListener('click', closeSearchModal);

  document.querySelectorAll('.mf-search-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const term = chip.getAttribute('data-term') || '';
      if (input) {
        input.value = term;
        renderSearchResults(term);
      }
    });
  });
}

/* ==========================================================================
   MODAL DE SEGUIMIENTO DE PEDIDO (TRACKING REAL)
   ========================================================================== */
window.openTrackingModal = function(initialFolio = '') {
  const modal = document.getElementById('tracking-modal');
  const overlay = document.getElementById('drawer-overlay');
  const input = document.getElementById('tracking-input-folio');
  if (!modal || !overlay) return;

  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('mf-modal-open');

  const folioToUse = initialFolio || store.orderTracking.orderId;
  if (input) {
    input.value = folioToUse;
  }
  renderTrackingResult(folioToUse);
};

window.closeTrackingModal = function() {
  const modal = document.getElementById('tracking-modal');
  const overlay = document.getElementById('drawer-overlay');
  modal?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.classList.remove('mf-modal-open');
};

function renderTrackingResult(folio) {
  const box = document.getElementById('tracking-result-box');
  if (!box) return;

  const info = store.getTrackingInfo(folio);
  if (!info.found) {
    box.innerHTML = `
      <div style="text-align: center; padding: 24px 10px; background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.3); border-radius: 4px;">
        <p style="color: #f87171; font-weight: 600; margin-bottom: 4px;">No encontramos un encargo con el folio: ${folio}</p>
        <p style="font-size: 0.8rem; color: var(--mf-text-muted);">Verifica que el código coincida con el correo de confirmación o consulta a nuestro conserje.</p>
      </div>
    `;
    return;
  }

  const ord = info.order;
  const isDemo = folio.toUpperCase().includes('DEMO') || folio.toUpperCase() === 'MF-ACTIVO';

  box.innerHTML = `
    <div class="mf-tracking-status-banner">
      <img src="./images/sello-lacre-mf.svg" alt="Sello" style="width: 44px; height: 44px;">
      <div>
        <div style="font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--mf-gold-primary); font-weight: 600;">Estado en Vivo</div>
        <h4 style="font-size: 1.15rem; color: #ffffff; margin: 2px 0;">Monsieur Confeccionando en Atelier</h4>
        <span style="font-size: 0.8rem; color: #a3e635;">● Conserje y vehículo refrigerado asignados (14°C)</span>
      </div>
    </div>

    <div class="mf-tracking-step-line">
      <div class="mf-tracking-point done">
        <strong style="color: #ffffff; font-size: 0.92rem;">I. Pedido Recibido y Pago Acreditado</strong>
        <p style="font-size: 0.78rem; color: var(--mf-text-muted); margin-top: 2px;">Validación bancaria cifrada completada.</p>
      </div>
      <div class="mf-tracking-point active">
        <strong style="color: var(--mf-gold-primary); font-size: 0.92rem;">II. Confección Floral y Caligrafía de Carta</strong>
        <p style="font-size: 0.78rem; color: #f0ede6; margin-top: 2px;">Corte de tallos en 45°, nutrientes franceses y dedicatoria con sello de cera.</p>
      </div>
      <div class="mf-tracking-point">
        <strong style="color: rgba(255,255,255,0.7); font-size: 0.92rem;">III. En Camino en Unidad Climatizada</strong>
        <p style="font-size: 0.78rem; color: var(--mf-text-muted); margin-top: 2px;">Chofer con protocolo de guante blanco rumbo al domicilio.</p>
      </div>
      <div class="mf-tracking-point">
        <strong style="color: rgba(255,255,255,0.7); font-size: 0.92rem;">IV. Entrega Protocolaria en Mano</strong>
        <p style="font-size: 0.78rem; color: var(--mf-text-muted); margin-top: 2px;">Fotografía y firma de recepción enviada al remitente.</p>
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 14px 18px; border-radius: 4px; font-size: 0.84rem; margin-bottom: 18px;">
      <p style="margin-bottom: 4px;"><strong>Destinatario:</strong> ${ord.recipientName || 'Sofía Navarro'}</p>
      <p style="margin-bottom: 4px;"><strong>Destino:</strong> ${ord.address}</p>
      <p style="margin-bottom: 0;"><strong>Ventana de Entrega Estimada:</strong> ${ord.deliverySlot}</p>
    </div>

    <a href="https://api.whatsapp.com/send?phone=528112345678&text=Bonjour!%20Deseo%20consultar%20el%20estatus%20del%20folio%20${ord.orderId}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="width: 100%; text-decoration: none; padding: 12px; font-size: 0.78rem;">
      <span>Hablar con el Conserje a Cargo por WhatsApp →</span>
    </a>
  `;
}

function initTrackingModal() {
  const submitBtn = document.getElementById('btn-submit-tracking');
  const input = document.getElementById('tracking-input-folio');
  const demoBtn = document.getElementById('btn-demo-folio');

  submitBtn?.addEventListener('click', () => {
    if (input && input.value.trim()) {
      renderTrackingResult(input.value.trim());
    }
  });

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.value.trim()) renderTrackingResult(input.value.trim());
    }
  });

  demoBtn?.addEventListener('click', () => {
    if (input) {
      input.value = store.orderTracking.orderId;
      renderTrackingResult(store.orderTracking.orderId);
    }
  });
}

/* ==========================================================================
   MODAL DE FACTURACIÓN ELECTRÓNICA CFDI 4.0
   ========================================================================== */
window.openInvoiceModal = function() {
  const modal = document.getElementById('invoice-modal');
  const overlay = document.getElementById('drawer-overlay');
  const orderInput = document.getElementById('inv-order-id');
  if (!modal || !overlay) return;

  if (orderInput && !orderInput.value) {
    orderInput.value = store.orderTracking.orderId;
  }

  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('mf-modal-open');
};

window.closeInvoiceModal = function() {
  const modal = document.getElementById('invoice-modal');
  const overlay = document.getElementById('drawer-overlay');
  modal?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.classList.remove('mf-modal-open');
};

window.handleInvoiceSubmit = function(form) {
  window.closeInvoiceModal();
  showVelvetToast(
    'Solicitud Fiscal Recibida',
    'Hemos recibido tus datos fiscales con éxito. El CFDI 4.0 (PDF y XML) será enviado a tu correo en menos de 24 horas hábiles.'
  );
  form.reset();
};

/* ==========================================================================
   NEWSLETTER & CARTAS DE MONSIEUR
   ========================================================================== */
window.handleNewsletterSubmit = function(form) {
  const emailInput = document.getElementById('newsletter-email-input');
  const email = emailInput?.value || '';
  if (emailInput) emailInput.value = '';
  showVelvetToast(
    '¡Merci por tu confianza!',
    `Monsieur Flores te da la bienvenida al círculo íntimo. Recibirás nuestras reflexiones botánicas y beneficios de atelier en ${email}.`
  );
};

/* ==========================================================================
   SELECTOR DE MONEDA EN TOPBAR (MXN, USD, EUR)
   ========================================================================== */
function initCurrencySwitcher() {
  const buttons = document.querySelectorAll('.mf-curr-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const curr = btn.getAttribute('data-curr');
      if (curr) {
        store.setCurrency(curr);
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showVelvetToast('Divisa Actualizada', `Precios exhibidos en ${curr}`);
      }
    });
  });
}

/* ==========================================================================
   SERVICE WORKER (PWA & OFFLINE CACHE)
   ========================================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      const isGhPages = window.location.pathname.includes('/MONSIEUR-FLORES');
      const swUrl = isGhPages ? '/MONSIEUR-FLORES/sw.js' : '/sw.js';
      navigator.serviceWorker.register(swUrl).then(reg => {
        console.log('Monsieur Flores PWA ServiceWorker registrado con éxito:', reg.scope);
      }).catch(err => {
        console.info('PWA ServiceWorker en modo desarrollo o no disponible:', err);
      });
    });
  }
}

/* ==========================================================================
   DESCARGA Y COMPARTIR DE CARTA CALIGRAFIADA (CANVAS 1200x750)
   ========================================================================== */
function initCardDownloadAndShare() {
  const downloadBtn = document.getElementById('btn-download-card');
  const shareWaBtn = document.getElementById('btn-share-card-wa');
  const canvas = document.getElementById('card-render-canvas');

  if (downloadBtn && canvas) {
    downloadBtn.addEventListener('click', () => {
      renderCardToCanvas(canvas);
      try {
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `Carta-Dedicatoria-Monsieur-Flores.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showVelvetToast('Carta de Atelier Descargada', 'Tu tarjeta en papel de algodón con sello de lacre ha sido guardada en alta resolución.');
      } catch (err) {
        console.warn('Error al exportar canvas:', err);
        showVelvetToast('Exportación Digital', 'Tu mensaje ha sido grabado. Lista para ser caligrafiada en tu encargo.');
      }
    });
  }

  if (shareWaBtn) {
    shareWaBtn.addEventListener('click', () => {
      const rec = store.activePersonalization?.recipientName || 'Alguien Muy Especial';
      const msg = store.activePersonalization?.cardMessage || 'Para la persona que ilumina cada uno de mis días.';
      const waText = `*Carta Caligrafiada de Monsieur Flores*\n\n_Para: ${rec}_\n\n“${msg}”\n\n— _Con la complicidad de Monsieur Flores · Haute Floristerie_\nhttps://arcano3ai.github.io/MONSIEUR-FLORES/`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank');
    });
  }
}

function renderCardToCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  const rec = store.activePersonalization?.recipientName || 'Alguien Muy Especial';
  const msg = store.activePersonalization?.cardMessage || 'Para la persona que ilumina cada uno de mis días. Con todo mi amor.';

  // 1. Fondo de papel de algodón hecho a mano
  const grad = ctx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, w / 1.5);
  grad.addColorStop(0, '#FCFAF7');
  grad.addColorStop(1, '#F4ECE1');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // 2. Doble Marco Perimetral en Oro
  ctx.strokeStyle = '#C5A059';
  ctx.lineWidth = 3;
  ctx.strokeRect(36, 36, w - 72, h - 72);

  ctx.strokeStyle = 'rgba(197, 160, 89, 0.45)';
  ctx.lineWidth = 1;
  ctx.strokeRect(46, 46, w - 92, h - 92);

  // 3. Esquinas Ornamentales Clásicas
  drawCornerFiligree(ctx, 48, 48, 1, 1);
  drawCornerFiligree(ctx, w - 48, 48, -1, 1);
  drawCornerFiligree(ctx, 48, h - 48, 1, -1);
  drawCornerFiligree(ctx, w - 48, h - 48, -1, -1);

  // 4. Sello de Lacre Carmesí 3D Superior
  const sealX = w / 2;
  const sealY = 135;
  const sealR = 48;

  // Sombra del sello
  ctx.save();
  ctx.shadowColor = 'rgba(122, 22, 34, 0.4)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 6;

  const sealGrad = ctx.createRadialGradient(sealX - 12, sealY - 12, 6, sealX, sealY, sealR);
  sealGrad.addColorStop(0, '#9E1F30');
  sealGrad.addColorStop(0.6, '#7A1622');
  sealGrad.addColorStop(1, '#4A0A12');
  ctx.fillStyle = sealGrad;
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Borde fino de oro en el sello
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealR - 4, 0, Math.PI * 2);
  ctx.stroke();

  // Monograma "M" repujado
  ctx.fillStyle = '#F2D59B';
  ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('M', sealX, sealY + 2);

  // 5. Destinatario
  ctx.fillStyle = '#C5A059';
  ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '4px';
  ctx.textAlign = 'center';
  ctx.fillText(`PARA: ${rec.toUpperCase()}`, w / 2, 245);

  // 6. Mensaje Caligrafiado (Con ajuste automático de líneas)
  ctx.fillStyle = '#181A18';
  ctx.font = 'italic 36px "Playfair Display", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const maxLineWidth = w - 240;
  const words = `“${msg}”`.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxLineWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) lines.push(currentLine);

  const startY = 360 - (lines.length - 1) * 26;
  lines.forEach((line, idx) => {
    ctx.fillText(line, w / 2, startY + idx * 56);
  });

  // 7. Firma de Monsieur Flores en el pie
  ctx.fillStyle = '#787068';
  ctx.font = '500 20px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('— Con la complicidad de Monsieur Flores · Haute Floristerie —', w / 2, h - 90);
}

function drawCornerFiligree(ctx, x, y, scaleX, scaleY) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scaleX, scaleY);
  ctx.strokeStyle = '#C5A059';
  ctx.lineWidth = 1.2;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(40, 0);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 40);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(14, 14, 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}
