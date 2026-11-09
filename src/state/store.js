import { PRODUCTS, ADDONS } from '../data/products.js';

class Store {
  constructor() {
    this.cart = this.loadFromStorage('mf_cart', [
      {
        id: 'la-clasica-init',
        product: PRODUCTS[0],
        size: PRODUCTS[0].sizes[0],
        quantity: 1,
        addons: [ADDONS[0]],
        cardMessage: 'Para la persona que ilumina cada uno de mis días. Con todo mi amor.',
        recipientName: 'Sofía Navarro'
      }
    ]);

    this.favorites = new Set(this.loadFromStorage('mf_favorites', ['la-inolvidable']));
    this.activeEmotion = null;
    this.activeCategory = 'all';
    this.searchQuery = '';
    
    // Cupones y Descuentos de Atelier
    this.coupon = this.loadFromStorage('mf_coupon', null); // { code, label, discountType: 'pct'|'fixed', value }
    this.currency = this.loadFromStorage('mf_currency', 'MXN'); // 'MXN' | 'USD' | 'EUR'
    
    this.wizard = {
      step: 1,
      recipient: 'pareja',
      sentiment: 'amor',
      budget: '1000-2000',
      results: []
    };

    this.modals = {
      cart: false,
      favorites: false,
      search: false,
      tracking: false,
      invoice: false,
      productDetail: null,
      checkout: false,
      checkoutStep: 1,
      whatsapp: false
    };

    this.orderTracking = this.loadFromStorage('mf_order_tracking', {
      orderId: 'MF-' + Math.floor(100000 + Math.random() * 900000),
      status: 'preparando', // 'recibido', 'preparando', 'en-camino', 'entregado'
      progress: 55,
      deliverySlot: 'Hoy, 2:00 PM – 4:00 PM',
      recipientName: 'Sofía Navarro',
      address: 'Calzada del Valle 400, San Pedro Garza García'
    });

    this.listeners = new Map();
  }

  loadFromStorage(key, fallback) {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : fallback;
    } catch {
      return fallback;
    }
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.listeners.get(event).delete(callback);
  }

  notify(event, payload) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => cb(payload, this));
    }
    // Also notify wildcard
    if (this.listeners.has('*')) {
      this.listeners.get('*').forEach(cb => cb({ event, payload }, this));
    }
  }

  // --- Cart Actions ---
  addToCart(product, size = null, addons = [], cardMessage = '', recipientName = '') {
    const chosenSize = size || product.sizes[0];
    const existingIndex = this.cart.findIndex(
      item => item.product.id === product.id && item.size.name === chosenSize.name
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push({
        id: `${product.id}-${Date.now()}`,
        product,
        size: chosenSize,
        quantity: 1,
        addons: [...addons],
        cardMessage,
        recipientName
      });
    }

    this.saveToStorage('mf_cart', this.cart);
    this.notify('cart:updated', this.cart);
    this.openModal('cart');
  }

  updateQuantity(itemId, delta) {
    const item = this.cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => i.id !== itemId);
    }

    this.saveToStorage('mf_cart', this.cart);
    this.notify('cart:updated', this.cart);
  }

  removeFromCart(itemId) {
    this.cart = this.cart.filter(i => i.id !== itemId);
    this.saveToStorage('mf_cart', this.cart);
    this.notify('cart:updated', this.cart);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => {
      const base = item.size.price * item.quantity;
      const addonsCost = (item.addons || []).reduce((aSum, a) => aSum + a.price, 0);
      return sum + base + addonsCost;
    }, 0);
  }

  // --- Sistema de Cupones de Atelier ---
  applyCoupon(rawCode) {
    if (!rawCode) return { success: false, message: 'Ingresa un código de cortesía.' };
    const code = rawCode.trim().toUpperCase();
    const VALID_COUPONS = {
      'MONSIEUR10': { label: '10% de Cortesía de Atelier', discountType: 'pct', value: 0.10 },
      'COCOAN': { label: 'Bono $200 MXN en Chocolatería Fina', discountType: 'fixed', value: 200 },
      'BIENVENIDA': { label: '15% Primer Encargo Floral', discountType: 'pct', value: 0.15 },
      'AMOR2026': { label: '12% Especial San Valentín / Romance', discountType: 'pct', value: 0.12 }
    };

    if (VALID_COUPONS[code]) {
      this.coupon = { code, ...VALID_COUPONS[code] };
      this.saveToStorage('mf_coupon', this.coupon);
      this.notify('cart:updated', this.cart);
      return { success: true, message: `Código ${code} aplicado: ${this.coupon.label}` };
    }

    return { success: false, message: 'Código no válido o expirado en el Atelier de Monsieur.' };
  }

  removeCoupon() {
    this.coupon = null;
    this.saveToStorage('mf_coupon', null);
    this.notify('cart:updated', this.cart);
  }

  getDiscountAmount() {
    if (!this.coupon) return 0;
    const subtotal = this.getCartSubtotal();
    if (this.coupon.discountType === 'pct') {
      return Math.round(subtotal * this.coupon.value);
    }
    if (this.coupon.discountType === 'fixed') {
      return Math.min(subtotal, this.coupon.value);
    }
    return 0;
  }

  getCartTotal() {
    return Math.max(0, this.getCartSubtotal() - this.getDiscountAmount());
  }

  // --- Moneda & Formato Internacional ---
  setCurrency(curr) {
    if (['MXN', 'USD', 'EUR'].includes(curr)) {
      this.currency = curr;
      this.saveToStorage('mf_currency', curr);
      this.notify('currency:updated', curr);
    }
  }

  formatPrice(mxnAmount) {
    const rates = { MXN: 1, USD: 0.052, EUR: 0.048 };
    const symbols = { MXN: '$', USD: 'US$', EUR: '€' };
    const rate = rates[this.currency] || 1;
    const symbol = symbols[this.currency] || '$';
    const converted = Math.round(mxnAmount * rate);
    return `${symbol}${converted.toLocaleString('es-MX')} ${this.currency}`;
  }

  // --- Seguimiento de Pedidos ---
  getTrackingInfo(searchFolio) {
    const clean = (searchFolio || '').trim().toUpperCase();
    if (clean === this.orderTracking.orderId.toUpperCase() || clean === 'DEMO' || clean === 'MF-2026') {
      return {
        found: true,
        order: this.orderTracking
      };
    }
    // Generar un resultado realista y coherente si el folio tiene formato MF-XXXXX
    if (/^MF-\d{4,6}$/i.test(clean)) {
      return {
        found: true,
        order: {
          orderId: clean,
          status: 'en-camino',
          progress: 75,
          deliverySlot: 'Hoy, 3:30 PM – 5:30 PM',
          recipientName: 'Destinatario Especial',
          address: 'Zona Residencial Poniente, CDMX'
        }
      };
    }
    return { found: false };
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // --- Favorites Actions ---
  toggleFavorite(productId) {
    if (this.favorites.has(productId)) {
      this.favorites.delete(productId);
    } else {
      this.favorites.add(productId);
    }
    this.saveToStorage('mf_favorites', Array.from(this.favorites));
    this.notify('favorites:updated', Array.from(this.favorites));
  }

  isFavorite(productId) {
    return this.favorites.has(productId);
  }

  getFavoriteProducts() {
    return PRODUCTS.filter(p => this.favorites.has(p.id));
  }

  // --- Emotion & Filtering ---
  setEmotion(emotionId) {
    this.activeEmotion = this.activeEmotion === emotionId ? null : emotionId;
    this.notify('filter:updated', { emotion: this.activeEmotion, category: this.activeCategory });
  }

  setCategory(categoryId) {
    this.activeCategory = categoryId;
    this.notify('filter:updated', { emotion: this.activeEmotion, category: this.activeCategory });
  }

  setSearchQuery(query) {
    this.searchQuery = query.toLowerCase().trim();
    this.notify('search:updated', this.searchQuery);
  }

  getFilteredProducts() {
    return PRODUCTS.filter(p => {
      // Filter by emotion
      if (this.activeEmotion && !p.emotions.includes(this.activeEmotion)) {
        return false;
      }
      // Filter by category
      if (this.activeCategory !== 'all' && p.category !== this.activeCategory) {
        return false;
      }
      // Filter by search text
      if (this.searchQuery) {
        const matchesName = p.name.toLowerCase().includes(this.searchQuery);
        const matchesDesc = p.description.toLowerCase().includes(this.searchQuery);
        const matchesTag = p.tagline.toLowerCase().includes(this.searchQuery);
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }
      return true;
    });
  }

  // --- Surprise Wizard ---
  setWizardOption(field, value) {
    this.wizard[field] = value;
    this.calculateWizardRecommendations();
    this.notify('wizard:updated', this.wizard);
  }

  calculateWizardRecommendations() {
    let matches = [...PRODUCTS];

    // Priority filter by sentiment
    const sentimentEmotionMap = {
      amor: 'amor',
      gratitud: 'porque-si',
      perdon: 'perdoname',
      celebracion: 'felicidades',
      sorpresa: 'sorprenderte'
    };
    const targetEmotion = sentimentEmotionMap[this.wizard.sentiment] || 'amor';

    matches.sort((a, b) => {
      const aScore = (a.emotions.includes(targetEmotion) ? 3 : 0) + (a.isSelection ? 2 : 0);
      const bScore = (b.emotions.includes(targetEmotion) ? 3 : 0) + (b.isSelection ? 2 : 0);
      return bScore - aScore;
    });

    this.wizard.results = matches.slice(0, 3);
  }

  // --- Modals Management ---
  openModal(modalName, payload = null) {
    Object.keys(this.modals).forEach(k => {
      if (k !== 'productDetail' && k !== 'checkoutStep') {
        this.modals[k] = false;
      }
    });

    if (modalName === 'productDetail') {
      this.modals.productDetail = payload;
    } else if (modalName === 'checkout') {
      this.modals.checkout = true;
      this.modals.checkoutStep = 1;
    } else {
      this.modals[modalName] = true;
    }

    this.notify('modals:changed', this.modals);
    document.body.classList.toggle('mf-modal-open', Boolean(modalName));
  }

  closeModal() {
    Object.keys(this.modals).forEach(k => {
      if (k !== 'productDetail' && k !== 'checkoutStep') {
        this.modals[k] = false;
      }
    });
    this.modals.productDetail = null;
    this.notify('modals:changed', this.modals);
    document.body.classList.remove('mf-modal-open');
  }

  setCheckoutStep(step) {
    this.modals.checkoutStep = step;
    this.notify('checkout:step', step);
  }
}

export const store = new Store();
store.calculateWizardRecommendations();
