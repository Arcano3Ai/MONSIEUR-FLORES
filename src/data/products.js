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
    image: './images/prod-clasica.jpg',
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
    image: './images/prod-inolvidable.jpg',
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
    image: './images/prod-disculpa.jpg',
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
    image: './images/prod-porque-si.jpg',
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
    image: './images/cat-tulipanes.jpg',
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
    image: './images/cat-orquideas.jpg',
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
  },
  {
    id: 'chocolate-dubai-cocoan',
    name: 'Chocolate Dubai — COCOAN',
    tagline: 'Barra de Chocolate de Leche con Pasta Kataifi & Praliné de Pistache (160g)',
    description: 'La creación insignia más codiciada de COCOAN Chocolatería Sincera. Barra artesanal de auténtico chocolate de leche premium rellena de crujiente pasta kataifi tostada a la mantequilla y praliné puro de pistache esmeralda. Un bocado indulgente, adictivo y de alta pastelería contemporánea.',
    price: 490,
    originalPrice: 550,
    rating: 5.0,
    reviewsCount: 142,
    image: './images/cocoan/chocolate-dubai.webp',
    category: 'chocolateria',
    emotions: ['amor', 'sorprenderte', 'cumpleanos', 'porque-si'],
    badge: 'COCOAN · Fan Favorite',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Barra Individual Dubai (160g)', price: 490 },
      { name: 'Dúo Dubai Gift Box (2 Barras 320g)', price: 950 }
    ],
    details: [
      'Elaborado artesanalmente por COCOAN Chocolatería Sincera',
      'Relleno abundante de pasta kataifi crujiente con praliné de pistache',
      'Cobertura de chocolate de leche fino sin grasas vegetales añadidas',
      'Empaque joyero termo-protegido para entrega en perfecto estado'
    ]
  },
  {
    id: 'chocobox-imperial-cocoan',
    name: 'Chocobox Imperial — COCOAN',
    tagline: 'Cofre de Regalo con Selección Imperial de Chocolates de Autor',
    description: 'La experiencia de regalo cumbre de COCOAN. Un cofre rígido de lujo con una cuidada selección de bombones de corte, trufas de origen, tortubites de caramelo a la sal y tabletas degustación. Cada pieza es elaborada sin conservadores bajo la filosofía de chocolatería sincera.',
    price: 845,
    originalPrice: 920,
    rating: 5.0,
    reviewsCount: 98,
    image: './images/cocoan/chocobox-imperial.webp',
    category: 'chocolateria',
    emotions: ['amor', 'sorprenderte', 'felicidades', 'porque-si'],
    badge: 'COCOAN · Regalo Insignia',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Chocobox Imperial Completa', price: 845 }
    ],
    details: [
      'Selección de autor curada por el maestro chocolatero de COCOAN',
      'Bombones con rellenos frescos de ganache, pralinés y caramelo salado',
      'Cofre joyero rígido con hot-stamping y lazo de algodón orgánico',
      'Folleto de cata guiada e ingredientes 100% naturales'
    ]
  },
  {
    id: 'fresas-chocolate-cocoan',
    name: 'Docena de Fresas con Chocolate Belga — COCOAN',
    tagline: 'Fresas Frescas Seleccionadas con Cobertura Semiamarga & de Leche',
    description: 'El clásico por excelencia de COCOAN. Doce fresas jumbo cosechadas en su punto óptimo de maduración y bañadas a mano el mismo día de la entrega con chocolate fino semiamargo y de leche. Decoradas con delicadas líneas de chocolate blanco y toppings crocantes.',
    price: 360,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 167,
    image: './images/cocoan/fresas-amargo-docena.webp',
    category: 'chocolateria',
    emotions: ['amor', 'sorprenderte', 'felicidades', 'porque-si'],
    badge: 'COCOAN · Cosecha Fresca',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Docena Fresas Chocolate Semiamargo', price: 360 },
      { name: 'Docena Fresas Chocolate de Leche', price: 360 },
      { name: 'Megabox Imperial 25 Fresas Gourmet', price: 950 }
    ],
    details: [
      '12 fresas frescas seleccionadas a mano cada mañana',
      'Cobertura gruesa de auténtico chocolate belga 54%',
      'Caja rígida con divisiones individuales acolchadas',
      'Garantía de frescura el mismo día de entrega'
    ]
  },
  {
    id: 'dubites-cocoan',
    name: 'Dubites Joyero (8 piezas) — COCOAN',
    tagline: 'Bocados Bombón con Pistache Cremoso & Kataifi Tostado',
    description: 'La versión bocado del legendario Chocolate Dubai de COCOAN. Ocho piezas joyero con una fina cáscara de chocolate y un corazón suave y crujiente de pistache mediterráneo y pasta kataifi dorada.',
    price: 480,
    originalPrice: 520,
    rating: 4.9,
    reviewsCount: 88,
    image: './images/cocoan/dubites-8pz.webp',
    category: 'chocolateria',
    emotions: ['amor', 'sorprenderte', 'porque-si'],
    badge: 'COCOAN · Confitería de Autor',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Dubites Estuche 4 Piezas', price: 240 },
      { name: 'Dubites Joyero 8 Piezas', price: 480 }
    ],
    details: [
      '8 bocados individuales de alta confitería',
      'Praliné 100% pistache natural sin colorantes artificiales',
      'Empaque de diseño con cierre imantado'
    ]
  },
  {
    id: 'tortubox-cocoan',
    name: 'Tortubox Artesanal (8 piezas) — COCOAN',
    tagline: 'Nueces Pecanas Tostadas con Caramelo Suave & Chocolate',
    description: 'El dulce tradicional elevado al arte de la chocolatería. Nueces pecanas seleccionadas unidas por un caramelo suave elaborado a fuego lento con flor de sal y bañadas en generoso chocolate de leche y amargo.',
    price: 280,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 114,
    image: './images/cocoan/tortubox-8pz.webp',
    category: 'chocolateria',
    emotions: ['amor', 'cumpleanos', 'porque-si'],
    badge: 'COCOAN · Clásico Dulce',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Tortubox 4 Piezas', price: 140 },
      { name: 'Tortubox 8 Piezas', price: 280 }
    ],
    details: [
      'Nuez pecana mexicana de primera calidad',
      'Caramelo suave casero con mantequilla de rancho y flor de sal',
      '8 piezas generosas envueltas individualmente'
    ]
  },
  {
    id: 'tableta-santander-cocoan',
    name: 'Tableta de Origen Santander 85% — COCOAN',
    tagline: 'Tableta Grande Bean-to-Bar con Cacao Puro de Origen Único',
    description: 'Para los auténticos devotos del chocolate negro. Elaborada con cacao fino de origen Santander al 85%, con notas profundas a madera noble, frutos rojos maduros y un final sedoso sin amargor agresivo.',
    price: 165,
    originalPrice: 190,
    rating: 4.8,
    reviewsCount: 73,
    image: './images/cocoan/tableta-santander-85.webp',
    category: 'chocolateria',
    emotions: ['porque-si', 'contigo', 'cumpleanos'],
    badge: 'COCOAN · Origen Único',
    isSelection: false,
    isBestSeller: false,
    sizes: [
      { name: 'Tableta Grande (80g)', price: 165 }
    ],
    details: [
      '85% Cacao fino de origen Santander',
      'Solo 2 ingredientes: Cacao y azúcar de caña orgánica',
      'Comercio ético directo con productores cacaoteros'
    ]
  },
  {
    id: 'duo-petit-trufas',
    name: 'El Dúo Romántico: Petit Bouquet & Tortubox COCOAN',
    tagline: '12 Rosas Blush & Estuche de 8 Tortugas con Caramelo y Nuez',
    description: 'La armonía sensorial absoluta de Monsieur Flores junto a la chocolatería de autor de COCOAN. Un delicado bouquet de 12 rosas en degradé marfil y blush envuelto en papel craft francés, maridado con un estuche joyero de 8 tortubites de nuez y caramelo a la sal marina.',
    price: 1190,
    originalPrice: 1350,
    rating: 4.9,
    reviewsCount: 93,
    image: './images/prod-disculpa.jpg',
    category: 'flores-regalo',
    emotions: ['amor', 'extrano', 'perdoname', 'porque-si'],
    badge: 'Maridaje Perfecto',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Petit Bouquet 12 Rosas + Tortubox 8pz', price: 1190 },
      { name: 'Ramo Generoso 24 Rosas + Chocolate Dubai COCOAN', price: 1690 }
    ],
    details: [
      '12 rosas inglesas de tallo largo en tonos pastel',
      'Estuche oficial COCOAN con 8 tortubites de nuez y caramelo',
      'Lazo de terciopelo bordó con sello en lacre artesanal',
      'Nutriente botánico de larga duración'
    ]
  }
];

export const CATEGORIES = [
  { id: 'rosas', name: 'Rosas de Terciopelo', subtitle: 'Selección Imperial', count: 18, image: './images/prod-clasica.jpg' },
  { id: 'chocolateria', name: 'Chocolatería Artesanal', subtitle: 'Bombones, Trufas & Fresas', count: 8, image: './images/prod-disculpa.jpg' },
  { id: 'tulipanes', name: 'Tulipanes Holandeses', subtitle: 'Frescura de Ámsterdam', count: 9, image: './images/cat-tulipanes.jpg' },
  { id: 'orquideas', name: 'Orquídeas Phalaenopsis', subtitle: 'Escultura Viva', count: 6, image: './images/cat-orquideas.jpg' },
  { id: 'bouquets', name: 'Bouquets Silvestres', subtitle: 'Diseño Etéreo', count: 14, image: './images/prod-porque-si.jpg' },
  { id: 'flores-regalo', name: 'Flores + Chocolates', subtitle: 'Maridajes de Autor', count: 11, image: './images/prod-disculpa.jpg' },
  { id: 'premium', name: 'Alta Costura Floral', subtitle: 'Ediciones de Sombrerera', count: 8, image: './images/prod-inolvidable.jpg' },
  { id: 'girasoles', name: 'Girasoles Soleils', subtitle: 'Luz & Esplendor', count: 5, image: './images/prod-porque-si.jpg' }
];

export const ADDONS = [
  {
    id: 'chocolate-dubai-cocoan-addon',
    name: 'Chocolate Dubai COCOAN (160g)',
    description: 'Barra artesanal de chocolate de leche rellena de pasta kataifi crujiente y praliné de pistache.',
    price: 490
  },
  {
    id: 'tortubox-cocoan-addon',
    name: 'Tortubox COCOAN (4 piezas)',
    description: 'Nueces pecanas seleccionadas con caramelo suave a la sal marina y cobertura de chocolate fino.',
    price: 140
  },
  {
    id: 'fresas-estuche-6-cocoan',
    name: 'Media Docena de Fresas COCOAN',
    description: '6 fresas frescas cosechadas del día bañadas en auténtico chocolate fino belga.',
    price: 180
  },
  {
    id: 'tableta-santander-addon',
    name: 'Tableta Santander 85% Cacao Puro COCOAN (80g)',
    description: 'Cacao fino de origen Santander al 85%, notas a madera noble y frutos maduros.',
    price: 165
  },
  {
    id: 'tarjeta-lujo',
    name: 'Carta Caligrafiada & Sello en Lacre Granate',
    description: 'Tu dedicatoria escrita a pluma en papel de algodón de 300g con el sello en cera M.',
    price: 95
  },
  {
    id: 'vela-aromatica',
    name: 'Vela Botánica Bois de Rose en Cera de Soya',
    description: 'Cera 100% vegetal vertida a mano con notas de rosas silvestres y madera de cedro.',
    price: 290
  },
  {
    id: 'globo-seda',
    name: 'Esfera Satinada Champagne con Helio Puro',
    description: 'Acabado espejo en oro champán con lazo de satén grueso.',
    price: 180
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
