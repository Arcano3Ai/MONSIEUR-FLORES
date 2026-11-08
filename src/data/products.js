export const PRODUCTS = [
  {
    id: 'la-clasica',
    name: 'La Clásica',
    tagline: '24 Rosas Rojas Imperial & Eucalipto Negro',
    description: 'La máxima expresión del romance eterno. 24 rosas de tallo largo seleccionadas una a una en su punto exacto de apertura, envueltas en papel charcoal mate francés con lazo de satén grabado en oro.',
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 142,
    image: '/images/prod-clasica.jpg',
    category: 'rosas',
    emotions: ['amor', 'sorprenderte', 'felicidades', 'porque-si'],
    badge: 'La Más Deseada',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Clásico (24 rosas)', price: 1299 },
      { name: 'Magno (36 rosas)', price: 1799 },
      { name: 'Imperial (50 rosas)', price: 2399 }
    ],
    details: [
      '24 Rosas rojas premium de exportación',
      'Follaje fino de cinerea y eucalipto aromático',
      'Empaque de lujo haute-couture con sellado artesanal',
      'Tarjeta caligrafiada por Monsieur incluida',
      'Nutriente floral de larga vida'
    ]
  },
  {
    id: 'la-inolvidable',
    name: 'La Inolvidable',
    tagline: '50 Rosas Velvet en Sombrerera Haute-Couture',
    description: 'Una pieza monumental diseñada para dejar sin respiración. 50 rosas aterciopeladas dispuestas en una cúpula geométrica perfecta dentro de nuestra exclusiva sombrerera cilíndrica grabada en hot-stamping dorado.',
    price: 2499,
    originalPrice: 2899,
    rating: 5.0,
    reviewsCount: 98,
    image: '/images/prod-inolvidable.jpg',
    category: 'premium',
    emotions: ['amor', 'sorprenderte', 'cumpleanos'],
    badge: 'Firma de Monsieur',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Cúpula 50 rosas', price: 2499 },
      { name: 'Cúpula 100 rosas Imperial', price: 4299 }
    ],
    details: [
      '50 rosas de terciopelo seleccionadas por color y simetría',
      'Sombrerera cilíndrica reutilizable de colección',
      'Lazo dorado de seda con insignia de Monsieur Flores',
      'Garantía de frescura por 8 días'
    ]
  },
  {
    id: 'la-disculpa',
    name: 'La Disculpa',
    tagline: 'Rosas Blush & Bombones Franceses de Autor',
    description: 'Las disculpas no se improvisan; se presentan con gracia, ternura y delicadeza. Arreglo en caja joyero con rosas marfil y rosas té, acompañado de 12 trufas artesanales con polvo de oro comestible.',
    price: 1599,
    originalPrice: 1799,
    rating: 4.8,
    reviewsCount: 87,
    image: '/images/prod-disculpa.jpg',
    category: 'flores-regalo',
    emotions: ['perdoname', 'extrano', 'contigo'],
    badge: 'Reconciliación',
    isSelection: true,
    isBestSeller: false,
    sizes: [
      { name: 'Caja Regalo + 12 Trufas', price: 1599 },
      { name: 'Gran Reserva + 24 Trufas', price: 2199 }
    ],
    details: [
      'Rosas inglesas blush y crema de aroma dulce',
      'Caja de 12 chocolates de autor con hoja de oro',
      'Sobre lacrado en cera con carta personalizable',
      'Presentación discreta y elegante'
    ]
  },
  {
    id: 'porque-si',
    name: 'Porque Sí',
    tagline: 'Bouquet Silvestre de Peonías & Lisianthus',
    description: 'El mejor motivo es no tener ninguno. Una composición espontánea y etérea que mezcla peonías de temporada, lisianthus níveos y eucalipto silvestre en florero de cristal estriado.',
    price: 999,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 165,
    image: '/images/prod-porque-si.jpg',
    category: 'bouquets',
    emotions: ['porque-si', 'extrano', 'contigo', 'amor'],
    badge: 'Favorito de Temporada',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Bouquet Mediano', price: 999 },
      { name: 'Bouquet Generoso con Florero', price: 1499 }
    ],
    details: [
      'Peonías holandesas y anémonas silvestres',
      'Florero de cristal acanalado incluido opcional',
      'Cinta de terciopelo verde musgo',
      'Perfecto para alegrar una mesa o escritorio'
    ]
  },
  {
    id: 'jardin-primaveral',
    name: 'Fleurs du Printemps',
    tagline: 'Tulipanes Holandeses en Jarrón Escultórico',
    description: 'La frescura del rocío europeo en tu hogar. Tulipanes de doble pétalo en degradados rosados y perla que continúan creciendo y danzando con la luz del día.',
    price: 1399,
    originalPrice: 1550,
    rating: 4.9,
    reviewsCount: 74,
    image: '/images/cat-tulipanes.jpg',
    category: 'tulipanes',
    emotions: ['cumpleanos', 'felicidades', 'porque-si', 'amor'],
    badge: 'Edición Limitada',
    isSelection: false,
    isBestSeller: true,
    sizes: [
      { name: '20 Tulipanes en Jarrón Cerámico', price: 1399 },
      { name: '35 Tulipanes Imperial', price: 1999 }
    ],
    details: [
      'Tulipanes premium importados de Ámsterdam',
      'Jarrón de gres esmaltado artesanal',
      'Etiqueta caligráfica numerada',
      'Agua osmotizada con conservador botánico'
    ]
  },
  {
    id: 'orquidea-majestica',
    name: 'Orquídea Majestueuse',
    tagline: 'Doble Cascada Blanca en Piedra Volcánica',
    description: 'Elegancia escultórica y longevidad incomparable. Dos varas de orquídea Phalaenopsis blanca pura con más de 18 botones, ancladas en maceta de cerámica volcánica texturizada.',
    price: 1899,
    originalPrice: 2100,
    rating: 5.0,
    reviewsCount: 112,
    image: '/images/cat-orquideas.jpg',
    category: 'orquideas',
    emotions: ['felicidades', 'sorprenderte', 'contigo', 'cumpleanos'],
    badge: 'Duración 90+ Días',
    isSelection: false,
    isBestSeller: true,
    sizes: [
      { name: 'Doble Vara Escultórica', price: 1899 },
      { name: 'Triple Vara Imperial', price: 2699 }
    ],
    details: [
      'Orquídea Phalaenopsis grado Real 5 estrellas',
      'Maceta texturizada de autor color grafito',
      'Guía de riego y cuidados de Monsieur',
      'Vida estimada de florecimiento de 2 a 3 meses'
    ]
  }
];

export const CATEGORIES = [
  { id: 'rosas', name: 'Rosas de Terciopelo', subtitle: 'Selección Imperial', count: 18, image: '/images/prod-clasica.jpg' },
  { id: 'tulipanes', name: 'Tulipanes Holandeses', subtitle: 'Frescura de Ámsterdam', count: 9, image: '/images/cat-tulipanes.jpg' },
  { id: 'orquideas', name: 'Orquídeas Phalaenopsis', subtitle: 'Escultura Viva', count: 6, image: '/images/cat-orquideas.jpg' },
  { id: 'bouquets', name: 'Bouquets Silvestres', subtitle: 'Diseño Etéreo', count: 14, image: '/images/prod-porque-si.jpg' },
  { id: 'flores-regalo', name: 'Cofres & Bombones', subtitle: 'Maridajes Finos', count: 11, image: '/images/prod-disculpa.jpg' },
  { id: 'premium', name: 'Alta Costura Floral', subtitle: 'Ediciones de Sombrerera', count: 8, image: '/images/prod-inolvidable.jpg' },
  { id: 'plantas', name: 'Botánica Escultórica', subtitle: 'Colección Interior', count: 7, image: '/images/cat-orquideas.jpg' },
  { id: 'girasoles', name: 'Girasoles Soleils', subtitle: 'Luz & Esplendor', count: 5, image: '/images/prod-porque-si.jpg' }
];

export const ADDONS = [
  {
    id: 'tarjeta-lujo',
    name: 'Carta Caligrafiada & Sello en Lacre Granate',
    description: 'Tu dedicatoria escrita a pluma en papel de algodón de 300g con el sello M.',
    price: 95
  },
  {
    id: 'chocolates-trufas',
    name: 'Estuche de 6 Trufas de Oro Francés',
    description: 'Cacao grand cru de Madagascar y polvo de oro 24k comestible.',
    price: 245
  },
  {
    id: 'vela-aromatica',
    name: 'Vela Aromática Bois de Rose',
    description: 'Cera de soya botánica vertida a mano con esencias de París.',
    price: 320
  },
  {
    id: 'globo-seda',
    name: 'Esfera Satinada Champagne con Helio Puro',
    description: 'Acabado espejo en tonalidad oro viejo con cinta de satén.',
    price: 180
  },
  {
    id: 'peluche-couture',
    name: 'Oso de Colección en Lino Artesanal',
    description: 'Confección francesa tradicional con bufanda de lana cardada.',
    price: 390
  }
];

export const CITIES_MEXICO = [
  { id: 'cdmx', name: 'Ciudad de México (CDMX)', zones: 'Polanco, Lomas, Roma-Condesa, Santa Fe, Pedregal, Coyoacán', deliveryTime: 'Mismo día en 2 a 3 horas' },
  { id: 'mty', name: 'Monterrey y San Pedro Garza García', zones: 'Valle Oriente, Calzada del Valle, San Jerónimo, Cumbres, Carretera Nacional', deliveryTime: 'Mismo día en 2 a 3 horas' },
  { id: 'gdl', name: 'Guadalajara y Zapopan', zones: 'Puerta de Hierro, Providencia, Chapultepec, Andares, Colinas de San Javier', deliveryTime: 'Mismo día en 2 a 4 horas' },
  { id: 'puebla', name: 'Puebla y Angelópolis', zones: 'La Vista, Lomas de Angelópolis, Zavaleta, Sonata', deliveryTime: 'Mismo día en 3 horas' },
  { id: 'qro', name: 'Querétaro', zones: 'Juriquilla, El Campanario, Centro Histórico, Álamos', deliveryTime: 'Mismo día en 3 horas' },
  { id: 'merida', name: 'Mérida', zones: 'Altabrisa, Montebello, Country Club, Temozón Norte', deliveryTime: 'Mismo día en 3 horas' },
  { id: 'cancun', name: 'Cancún y Riviera Maya', zones: 'Zona Hotelera, Puerto Cancún, Playa del Carmen, Tulum', deliveryTime: 'Mismo día express' },
  { id: 'tijuana', name: 'Tijuana', zones: 'Zona Río, Chapultepec, Playas, Agua Caliente', deliveryTime: 'Mismo día express' }
];
