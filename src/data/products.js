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
    id: 'cofre-bombones-autor',
    name: 'Cofre de Autor: 16 Bombones Escultóricos',
    tagline: 'Ganaches Finos de Origen & Cacao 70% Real',
    description: 'Chocolatería artesanal de alta precisión elaborada a mano con cacao fino de origen Chiapas y Tabasco. Una cata guiada que incluye ganache de frambuesa con pétalos de rosa, caramelo a la flor de sal de Colima, praliné crujiente de avellana europea, maracuyá silvestre y trufa clásica al cacao amargo. Presentado en cofre rígido negro mate grabado en hot-stamping dorado.',
    price: 590,
    originalPrice: 680,
    rating: 5.0,
    reviewsCount: 84,
    image: './images/prod-disculpa.jpg',
    category: 'chocolateria',
    emotions: ['amor', 'sorprenderte', 'cumpleanos', 'porque-si'],
    badge: 'Chocolatería de Autor',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Cofre 16 Bombones de Autor', price: 590 },
      { name: 'Gran Reserva 24 Bombones Escultóricos', price: 890 }
    ],
    details: [
      '16 bombones brillantes pintados a mano con manteca de cacao natural',
      'Cacao de origen mexicano sustentable 100% trazable',
      'Libre de conservadores, grasas trans y saborizantes artificiales',
      'Folleto explicativo con notas de cata y maridaje floral'
    ]
  },
  {
    id: 'fresas-chocolate-belga',
    name: 'Caja Joyero: 12 Fresas con Chocolate Belga Callebaut',
    tagline: 'Fresas Frescas del Día & Cobertura Semiamarga 54%',
    description: 'La tentación más fresca y elegante del atelier. Fresas jumbo seleccionadas a mano cada mañana, sumergidas en chocolate belga semiamargo Callebaut y chocolate blanco sedoso. Decoradas artesanalmente con nibs de cacao tostado, pistache finamente picado y delicadas líneas en polvo de oro comestible.',
    price: 490,
    originalPrice: 560,
    rating: 4.9,
    reviewsCount: 126,
    image: './images/prod-inolvidable.jpg',
    category: 'chocolateria',
    emotions: ['amor', 'sorprenderte', 'felicidades', 'porque-si'],
    badge: 'Frescura del Día',
    isSelection: true,
    isBestSeller: true,
    sizes: [
      { name: 'Caja Joyero 12 Fresas Gourmet', price: 490 },
      { name: 'Selección Imperial 20 Fresas con Toppings', price: 790 }
    ],
    details: [
      '12 fresas jumbo cosechadas y elaboradas el mismo día de entrega',
      'Cobertura de auténtico chocolate belga Callebaut 54%',
      'Toppings gourmet: Nibs de cacao orgánico, pistache tostado y cacao puro',
      'Empaque joyero rígido con almohadilla protectora climatizada'
    ]
  },
  {
    id: 'duo-petit-trufas',
    name: 'El Dúo Romántico: Petit Bouquet & 9 Trufas de Cacao',
    tagline: '12 Rosas Blush & Estuche de Trufas al Chocolate Amargo',
    description: 'La armonía sensorial absoluta de Monsieur Flores. Un delicado bouquet de 12 rosas en degradé marfil y blush envuelto en papel craft francés, maridado con un estuche joyero de 9 trufas artesanales de chocolate oscuro al 70% espolvoreadas con cacao holandés alcalinizado.',
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
      { name: 'Petit Bouquet 12 Rosas + 9 Trufas', price: 1190 },
      { name: 'Ramo Generoso 24 Rosas + 16 Trufas', price: 1690 }
    ],
    details: [
      '12 rosas inglesas de tallo largo en tonos pastel',
      'Estuche joyero con 9 trufas frescas de chocolate 70%',
      'Lazo de terciopelo bordó con sello en lacre artesanal',
      'Nutriente botánico de larga duración'
    ]
  },
  {
    id: 'trilogia-tabletas-botanicas',
    name: 'Trilogía de Tabletas de Origen & Botánicos',
    tagline: '3 Barras Bean-to-Bar (80g c/u) con Pétalos & Especias',
    description: 'Una experiencia de cata contemporánea y 100% factible. Tres tabletas artesanales de 80g elaboradas con cacao criollo mexicano: 1) Chocolate Oscuro 72% con pétalos de Rosa de Castilla y escamas de sal marina; 2) Chocolate con Leche 45% con flores de lavanda y pistaches horneados; 3) Chocolate Blanco con frambuesas liofilizadas y vainilla natural de Papantla.',
    price: 380,
    originalPrice: 440,
    rating: 4.8,
    reviewsCount: 61,
    image: './images/arte.jpg',
    category: 'chocolateria',
    emotions: ['porque-si', 'contigo', 'cumpleanos'],
    badge: 'Bean-to-Bar',
    isSelection: false,
    isBestSeller: false,
    sizes: [
      { name: 'Trilogía Completa (3 Barras de 80g)', price: 380 }
    ],
    details: [
      '3 barras artesanales de 80g envueltas en foil dorado y faja botánica',
      'Cacao tostado a baja temperatura para preservar antioxidantes naturales',
      'Pétalos y botánicos 100% orgánicos certificados de grado alimentario',
      'Presentación en estuche deslizante color lino'
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
    id: 'bombones-estuche-6',
    name: 'Estuche de 6 Bombones de Autor',
    description: 'Bombones rellenos de ganache de frambuesa con rosa, caramelo a la sal marina y praliné de avellana.',
    price: 195
  },
  {
    id: 'fresas-estuche-6',
    name: 'Estuche de 6 Fresas con Chocolate Belga Callebaut',
    description: 'Fresas del día bañadas en chocolate semiamargo 54% y blanco con nibs de cacao tostado.',
    price: 240
  },
  {
    id: 'tableta-rosa-sal',
    name: 'Tableta Bean-to-Bar 72% con Rosas & Sal Maldon (80g)',
    description: 'Cacao fino de aroma con pétalos de Rosa de Castilla y escamas de sal marina.',
    price: 145
  },
  {
    id: 'macarons-artesanales',
    name: 'Estuche de 6 Macarons Franceses Artesanales',
    description: 'Harina de almendra pura: Pistache, frambuesa, vainilla Bourbon y chocolate oscuro.',
    price: 220
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
