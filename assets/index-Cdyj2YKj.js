(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const x=[{id:"la-clasica",name:"La Clásica",tagline:"24 Rosas Rojas Imperial & Eucalipto Negro",description:"La máxima expresión del romance eterno. 24 rosas de tallo largo seleccionadas una a una en su punto exacto de apertura, envueltas en papel charcoal mate francés con lazo de satén grabado en oro.",price:1299,originalPrice:1499,rating:4.9,reviewsCount:142,image:"./images/prod-clasica.jpg",category:"rosas",emotions:["amor","sorprenderte","felicidades","porque-si"],badge:"La Más Deseada",isSelection:!0,isBestSeller:!0,sizes:[{name:"Clásico (24 rosas)",price:1299},{name:"Magno (36 rosas)",price:1799},{name:"Imperial (50 rosas)",price:2399}],details:["24 Rosas rojas premium de exportación","Follaje fino de cinerea y eucalipto aromático","Empaque de lujo haute-couture con sellado artesanal","Nutriente floral de larga vida"]},{id:"la-inolvidable",name:"La Inolvidable",tagline:"50 Rosas Velvet en Sombrerera Haute-Couture",description:"Una pieza monumental diseñada para dejar sin respiración. 50 rosas aterciopeladas dispuestas en una cúpula geométrica perfecta dentro de nuestra exclusiva sombrerera cilíndrica grabada en hot-stamping dorado.",price:2499,originalPrice:2899,rating:5,reviewsCount:98,image:"./images/prod-inolvidable.jpg",category:"premium",emotions:["amor","sorprenderte","cumpleanos"],badge:"Firma de Monsieur",isSelection:!0,isBestSeller:!0,sizes:[{name:"Cúpula 50 rosas",price:2499},{name:"Cúpula 100 rosas Imperial",price:4299}],details:["50 rosas de terciopelo seleccionadas por color y simetría","Sombrerera cilíndrica reutilizable de colección","Lazo dorado de seda con insignia de Monsieur Flores","Garantía de frescura por 8 días"]},{id:"la-disculpa",name:"La Disculpa",tagline:"Rosas Blush & Bombones Franceses de Autor",description:"Las disculpas no se improvisan; se presentan con gracia, ternura y delicadeza. Arreglo en caja joyero con rosas marfil y rosas té, acompañado de 12 trufas artesanales con polvo de oro comestible.",price:1599,originalPrice:1799,rating:4.8,reviewsCount:87,image:"./images/prod-disculpa.jpg",category:"flores-regalo",emotions:["perdoname","extrano","contigo"],badge:"Reconciliación",isSelection:!0,isBestSeller:!1,sizes:[{name:"Caja Regalo + 12 Trufas",price:1599},{name:"Gran Reserva + 24 Trufas",price:2199}],details:["Rosas inglesas blush y crema de aroma dulce","Caja de 12 chocolates de autor con hoja de oro","Sobre lacrado en cera con carta personalizable","Presentación discreta y elegante"]},{id:"porque-si",name:"Porque Sí",tagline:"Bouquet Silvestre de Peonías & Lisianthus",description:"El mejor motivo es no tener ninguno. Una composición espontánea y etérea que mezcla peonías de temporada, lisianthus níveos y eucalipto silvestre en florero de cristal estriado.",price:999,originalPrice:1199,rating:4.9,reviewsCount:165,image:"./images/prod-porque-si.jpg",category:"bouquets",emotions:["porque-si","extrano","contigo","amor"],badge:"Favorito de Temporada",isSelection:!0,isBestSeller:!0,sizes:[{name:"Bouquet Mediano",price:999},{name:"Bouquet Generoso con Florero",price:1499}],details:["Peonías holandesas y anémonas silvestres","Florero de cristal acanalado incluido opcional","Cinta de terciopelo verde musgo","Perfecto para alegrar una mesa o escritorio"]},{id:"jardin-primaveral",name:"Fleurs du Printemps",tagline:"Tulipanes Holandeses en Jarrón Escultórico",description:"La frescura del rocío europeo en tu hogar. Tulipanes de doble pétalo en degradados rosados y perla que continúan creciendo y danzando con la luz del día.",price:1399,originalPrice:1550,rating:4.9,reviewsCount:74,image:"./images/cat-tulipanes.jpg",category:"tulipanes",emotions:["cumpleanos","felicidades","porque-si","amor"],badge:"Edición Limitada",isSelection:!1,isBestSeller:!0,sizes:[{name:"20 Tulipanes en Jarrón Cerámico",price:1399},{name:"35 Tulipanes Imperial",price:1999}],details:["Tulipanes premium importados de Ámsterdam","Jarrón de gres esmaltado artesanal","Etiqueta caligráfica numerada","Agua osmotizada con conservador botánico"]},{id:"orquidea-majestica",name:"Orquídea Majestueuse",tagline:"Doble Cascada Blanca en Piedra Volcánica",description:"Elegancia escultórica y longevidad incomparable. Dos varas de orquídea Phalaenopsis blanca pura con más de 18 botones, ancladas en maceta de cerámica volcánica texturizada.",price:1899,originalPrice:2100,rating:5,reviewsCount:112,image:"./images/cat-orquideas.jpg",category:"orquideas",emotions:["felicidades","sorprenderte","contigo","cumpleanos"],badge:"Duración 90+ Días",isSelection:!1,isBestSeller:!0,sizes:[{name:"Doble Vara Escultórica",price:1899},{name:"Triple Vara Imperial",price:2699}],details:["Orquídea Phalaenopsis grado Real 5 estrellas","Maceta texturizada de autor color grafito","Guía de riego y cuidados de Monsieur","Vida estimada de florecimiento de 2 a 3 meses"]},{id:"cofre-bombones-autor",name:"Cofre de Autor: 16 Bombones Escultóricos",tagline:"Ganaches Finos de Origen & Cacao 70% Real",description:"Chocolatería artesanal de alta precisión elaborada a mano con cacao fino de origen Chiapas y Tabasco. Una cata guiada que incluye ganache de frambuesa con pétalos de rosa, caramelo a la flor de sal de Colima, praliné crujiente de avellana europea, maracuyá silvestre y trufa clásica al cacao amargo. Presentado en cofre rígido negro mate grabado en hot-stamping dorado.",price:590,originalPrice:680,rating:5,reviewsCount:84,image:"./images/prod-disculpa.jpg",category:"chocolateria",emotions:["amor","sorprenderte","cumpleanos","porque-si"],badge:"Chocolatería de Autor",isSelection:!0,isBestSeller:!0,sizes:[{name:"Cofre 16 Bombones de Autor",price:590},{name:"Gran Reserva 24 Bombones Escultóricos",price:890}],details:["16 bombones brillantes pintados a mano con manteca de cacao natural","Cacao de origen mexicano sustentable 100% trazable","Libre de conservadores, grasas trans y saborizantes artificiales","Folleto explicativo con notas de cata y maridaje floral"]},{id:"fresas-chocolate-belga",name:"Caja Joyero: 12 Fresas con Chocolate Belga Callebaut",tagline:"Fresas Frescas del Día & Cobertura Semiamarga 54%",description:"La tentación más fresca y elegante del atelier. Fresas jumbo seleccionadas a mano cada mañana, sumergidas en chocolate belga semiamargo Callebaut y chocolate blanco sedoso. Decoradas artesanalmente con nibs de cacao tostado, pistache finamente picado y delicadas líneas en polvo de oro comestible.",price:490,originalPrice:560,rating:4.9,reviewsCount:126,image:"./images/prod-inolvidable.jpg",category:"chocolateria",emotions:["amor","sorprenderte","felicidades","porque-si"],badge:"Frescura del Día",isSelection:!0,isBestSeller:!0,sizes:[{name:"Caja Joyero 12 Fresas Gourmet",price:490},{name:"Selección Imperial 20 Fresas con Toppings",price:790}],details:["12 fresas jumbo cosechadas y elaboradas el mismo día de entrega","Cobertura de auténtico chocolate belga Callebaut 54%","Toppings gourmet: Nibs de cacao orgánico, pistache tostado y cacao puro","Empaque joyero rígido con almohadilla protectora climatizada"]},{id:"duo-petit-trufas",name:"El Dúo Romántico: Petit Bouquet & 9 Trufas de Cacao",tagline:"12 Rosas Blush & Estuche de Trufas al Chocolate Amargo",description:"La armonía sensorial absoluta de Monsieur Flores. Un delicado bouquet de 12 rosas en degradé marfil y blush envuelto en papel craft francés, maridado con un estuche joyero de 9 trufas artesanales de chocolate oscuro al 70% espolvoreadas con cacao holandés alcalinizado.",price:1190,originalPrice:1350,rating:4.9,reviewsCount:93,image:"./images/prod-disculpa.jpg",category:"flores-regalo",emotions:["amor","extrano","perdoname","porque-si"],badge:"Maridaje Perfecto",isSelection:!0,isBestSeller:!0,sizes:[{name:"Petit Bouquet 12 Rosas + 9 Trufas",price:1190},{name:"Ramo Generoso 24 Rosas + 16 Trufas",price:1690}],details:["12 rosas inglesas de tallo largo en tonos pastel","Estuche joyero con 9 trufas frescas de chocolate 70%","Lazo de terciopelo bordó con sello en lacre artesanal","Nutriente botánico de larga duración"]},{id:"trilogia-tabletas-botanicas",name:"Trilogía de Tabletas de Origen & Botánicos",tagline:"3 Barras Bean-to-Bar (80g c/u) con Pétalos & Especias",description:"Una experiencia de cata contemporánea y 100% factible. Tres tabletas artesanales de 80g elaboradas con cacao criollo mexicano: 1) Chocolate Oscuro 72% con pétalos de Rosa de Castilla y escamas de sal marina; 2) Chocolate con Leche 45% con flores de lavanda y pistaches horneados; 3) Chocolate Blanco con frambuesas liofilizadas y vainilla natural de Papantla.",price:380,originalPrice:440,rating:4.8,reviewsCount:61,image:"./images/arte.jpg",category:"chocolateria",emotions:["porque-si","contigo","cumpleanos"],badge:"Bean-to-Bar",isSelection:!1,isBestSeller:!1,sizes:[{name:"Trilogía Completa (3 Barras de 80g)",price:380}],details:["3 barras artesanales de 80g envueltas en foil dorado y faja botánica","Cacao tostado a baja temperatura para preservar antioxidantes naturales","Pétalos y botánicos 100% orgánicos certificados de grado alimentario","Presentación en estuche deslizante color lino"]}],R=[{id:"rosas",name:"Rosas de Terciopelo",subtitle:"Selección Imperial",count:18,image:"./images/prod-clasica.jpg"},{id:"chocolateria",name:"Chocolatería Artesanal",subtitle:"Bombones, Trufas & Fresas",count:8,image:"./images/prod-disculpa.jpg"},{id:"tulipanes",name:"Tulipanes Holandeses",subtitle:"Frescura de Ámsterdam",count:9,image:"./images/cat-tulipanes.jpg"},{id:"orquideas",name:"Orquídeas Phalaenopsis",subtitle:"Escultura Viva",count:6,image:"./images/cat-orquideas.jpg"},{id:"bouquets",name:"Bouquets Silvestres",subtitle:"Diseño Etéreo",count:14,image:"./images/prod-porque-si.jpg"},{id:"flores-regalo",name:"Flores + Chocolates",subtitle:"Maridajes de Autor",count:11,image:"./images/prod-disculpa.jpg"},{id:"premium",name:"Alta Costura Floral",subtitle:"Ediciones de Sombrerera",count:8,image:"./images/prod-inolvidable.jpg"},{id:"girasoles",name:"Girasoles Soleils",subtitle:"Luz & Esplendor",count:5,image:"./images/prod-porque-si.jpg"}],F=[{id:"bombones-estuche-6",name:"Estuche de 6 Bombones de Autor",description:"Bombones rellenos de ganache de frambuesa con rosa, caramelo a la sal marina y praliné de avellana.",price:195},{id:"fresas-estuche-6",name:"Estuche de 6 Fresas con Chocolate Belga Callebaut",description:"Fresas del día bañadas en chocolate semiamargo 54% y blanco con nibs de cacao tostado.",price:240},{id:"tableta-rosa-sal",name:"Tableta Bean-to-Bar 72% con Rosas & Sal Maldon (80g)",description:"Cacao fino de aroma con pétalos de Rosa de Castilla y escamas de sal marina.",price:145},{id:"macarons-artesanales",name:"Estuche de 6 Macarons Franceses Artesanales",description:"Harina de almendra pura: Pistache, frambuesa, vainilla Bourbon y chocolate oscuro.",price:220},{id:"tarjeta-lujo",name:"Carta Caligrafiada & Sello en Lacre Granate",description:"Tu dedicatoria escrita a pluma en papel de algodón de 300g con el sello en cera M.",price:95},{id:"vela-aromatica",name:"Vela Botánica Bois de Rose en Cera de Soya",description:"Cera 100% vegetal vertida a mano con notas de rosas silvestres y madera de cedro.",price:290},{id:"globo-seda",name:"Esfera Satinada Champagne con Helio Puro",description:"Acabado espejo en oro champán con lazo de satén grueso.",price:180}],j=[{id:"cdmx",name:"Ciudad de México (CDMX)",zones:"Polanco, Lomas, Roma-Condesa, Santa Fe, Pedregal, Coyoacán",deliveryTime:"Mismo día en 2 a 3 horas"},{id:"mty",name:"Monterrey y San Pedro Garza García",zones:"Valle Oriente, Calzada del Valle, San Jerónimo, Cumbres, Carretera Nacional",deliveryTime:"Mismo día en 2 a 3 horas"},{id:"gdl",name:"Guadalajara y Zapopan",zones:"Puerta de Hierro, Providencia, Chapultepec, Andares, Colinas de San Javier",deliveryTime:"Mismo día en 2 a 4 horas"},{id:"puebla",name:"Puebla y Angelópolis",zones:"La Vista, Lomas de Angelópolis, Zavaleta, Sonata",deliveryTime:"Mismo día en 3 horas"},{id:"qro",name:"Querétaro",zones:"Juriquilla, El Campanario, Centro Histórico, Álamos",deliveryTime:"Mismo día en 3 horas"},{id:"merida",name:"Mérida",zones:"Altabrisa, Montebello, Country Club, Temozón Norte",deliveryTime:"Mismo día en 3 horas"},{id:"cancun",name:"Cancún y Riviera Maya",zones:"Zona Hotelera, Puerto Cancún, Playa del Carmen, Tulum",deliveryTime:"Mismo día express"},{id:"tijuana",name:"Tijuana",zones:"Zona Río, Chapultepec, Playas, Agua Caliente",deliveryTime:"Mismo día express"}],D=[{id:"amor",numeral:"I",title:"TE AMO",frenchTitle:"L’Amour Éternel",subtitle:"El amor no se susurra; se entrega en terciopelo carmín.",quote:"Cuando las palabras quedan cortas ante la inmensidad del corazón.",recommendedTag:"Romance & Pasión",flowerRecommendation:"24 a 50 Rosas Colombianas de Terciopelo Imperial"},{id:"extrano",numeral:"II",title:"TE EXTRAÑO",frenchTitle:"La Douce Nostalgie",subtitle:"Acorta la distancia con la elegancia etérea de un recuerdo.",quote:"Un ramo para decirle que el espacio entre los dos duele un poco menos hoy.",recommendedTag:"Nostalgia & Ternura",flowerRecommendation:"Peonías Silvestres y Eucalipto de Grasse"},{id:"perdoname",numeral:"III",title:"PERDÓNAME",frenchTitle:"Le Sincère Pardon",subtitle:"La humildad más noble vestida en rosas marfil y bombones de autor.",quote:"Reconocer un tropiezo con gracia es el primer paso hacia el reencuentro.",recommendedTag:"Reconciliación",flowerRecommendation:"Rosas Crema Inglesas y Trufas de Chocolate Francés"},{id:"felicidades",numeral:"IV",title:"FELICIDADES",frenchTitle:"La Grande Célébration",subtitle:"Celebra cada conquista como una gran victoria de la vida.",quote:"Un estallido de esplendor botánico digno de quien alcanza sus sueños.",recommendedTag:"Celebración & Triunfo",flowerRecommendation:"Tulipanes Dobles Holandeses y Girasoles Dorados"},{id:"cumpleanos",numeral:"V",title:"FELIZ CUMPLEAÑOS",frenchTitle:"L’Anniversaire Majestueux",subtitle:"Un año más de vida merece un homenaje inolvidable.",quote:"Para recordarle que su existencia enriquece el mundo de quienes le rodean.",recommendedTag:"Homenaje de Vida",flowerRecommendation:"Orquídeas Phalaenopsis Escultóricas de Doble Vara"},{id:"sorprenderte",numeral:"VI",title:"QUIERO SORPRENDERTE",frenchTitle:"L’Inattendu Sublime",subtitle:"El misterio de lo inesperado genera los recuerdos más imperecederos.",quote:"Dejar sin aliento con una pieza de alta costura floral fuera de lo común.",recommendedTag:"Gran Gesto",flowerRecommendation:"Caja Cilíndrica Sombrerera con 50 Rosas Preservadas"},{id:"contigo",numeral:"VII",title:"ESTOY CONTIGO",frenchTitle:"La Sérénité Partagée",subtitle:"Silencioso consuelo y abrazo que se percibe en el alma.",quote:"Para los instantes solemnes, una caricia botánica que susurra paz.",recommendedTag:"Paz & Acompañamiento",flowerRecommendation:"Lirios Blancos, Lisianthus y Follaje Noble"},{id:"porque-si",numeral:"VIII",title:"PORQUE SÍ",frenchTitle:"L’Élan Spontané",subtitle:"No hace falta calendario cuando hay un pensamiento sincero.",quote:"Los regalos más memorables son los que llegan en un martes cualquiera.",recommendedTag:"Espontaneidad",flowerRecommendation:"Bouquet de Temporada en Florero de Cristal Estriado"}],H=[{id:"flores-para-pedir-perdon",title:"¿Qué flores regalar para pedir perdón con elocuencia y dignidad?",excerpt:"La disculpa no es un trámite: es una reverencia al cariño mutuo. Descubre por qué las rosas blush y los ranúnculos blancos expresan lo que la voz quiebra.",date:"28 Sep 2026",readTime:"4 min de lectura",category:"Etiqueta Floral",image:"./images/prod-disculpa.jpg",author:"Monsieur Flores"},{id:"significado-rosas-color",title:"El lenguaje secreto de las rosas: qué susurra cada tono",excerpt:"Desde el carmín aterciopelado de la pasión irrevocable hasta el marfil de la devoción eterna. Una guía para no enviar el mensaje equivocado.",date:"22 Sep 2026",readTime:"6 min de lectura",category:"Simbolismo Botánico",image:"./images/prod-clasica.jpg",author:"Monsieur Flores"},{id:"cuantas-rosas-regalar",title:"¿Cuántas rosas debes regalar? La numerología de la floricultura",excerpt:"12 para declarar lealtad, 24 para recordar que estás en mis pensamientos cada hora del día, 50 para inmortalizar un instante irrepetible.",date:"15 Sep 2026",readTime:"5 min de lectura",category:"Tradición",image:"./images/prod-inolvidable.jpg",author:"Monsieur Flores"}],N=[{name:"Valeria M. Garza",city:"San Pedro Garza García",product:"La Inolvidable (50 Rosas)",rating:5,date:"Ayer",comment:"“El arreglo estaba todavía más impresionante que en las fotografías. El aroma a rosas frescas inundó toda la sala y el empaque cilíndrico es una verdadera obra de arte.”"},{name:"Santiago De la Peña",city:"Monterrey, N.L.",product:"La Disculpa",rating:5,date:"Hace 3 días",comment:"“Llegó exactamente a la hora que elegí en el checkout. La carta caligrafiada a mano y los chocolates con hoja de oro lograron el milagro. Monsieur sabe lo que hace.”"},{name:"Fernanda Elizondo",city:"Valle Oriente",product:"Porque Sí",rating:5,date:"Hace 5 días",comment:"“Recibir flores un martes cualquiera sin previo aviso cambió mi semana entera. La selección de peonías y el listón de terciopelo verde son de un gusto exquisito.”"}],V=[{id:1,image:"./images/monsieur-paris-boutique.jpg",likes:"4.8k",comments:"184",caption:"Fleurs du Monsieur, Rue Saint-Honoré, Paris."},{id:2,image:"./images/monsieur-biografia.jpg",likes:"6.2k",comments:"342",caption:"Hay cosas que las palabras no saben decir."},{id:3,image:"./images/monsieur-atelier-craft.jpg",likes:"5.1k",comments:"219",caption:"En el atelier: cada tallo se escoge con el pulso del corazón."},{id:4,image:"./images/monsieur-rose-mirror.jpg",likes:"3.9k",comments:"167",caption:"La perspectiva de la elegancia. Monsieur sabe."},{id:5,image:"./images/monsieur-arte-coleccion.jpg",likes:"4.4k",comments:"195",caption:"Del Papel a la Flor: el boceto antes de la creación."},{id:6,image:"./images/prod-clasica.jpg",likes:"3.1k",comments:"128",caption:"La Clásica en terciopelo imperial."}];class O{constructor(){this.cart=this.loadFromStorage("mf_cart",[{id:"la-clasica-init",product:x[0],size:x[0].sizes[0],quantity:1,addons:[F[0]],cardMessage:"Para la persona que ilumina cada uno de mis días. Con todo mi amor.",recipientName:"Sofía Navarro"}]),this.favorites=new Set(this.loadFromStorage("mf_favorites",["la-inolvidable"])),this.activeEmotion=null,this.activeCategory="all",this.searchQuery="",this.wizard={step:1,recipient:"pareja",sentiment:"amor",budget:"1000-2000",results:[]},this.modals={cart:!1,favorites:!1,search:!1,productDetail:null,checkout:!1,checkoutStep:1,whatsapp:!1},this.orderTracking={orderId:"MF-"+Math.floor(1e5+Math.random()*9e5),status:"preparando",progress:55,deliverySlot:"Hoy, 2:00 PM – 4:00 PM",address:"Calzada del Valle 400, San Pedro Garza García"},this.listeners=new Map}loadFromStorage(e,a){try{const i=localStorage.getItem(e);return i?JSON.parse(i):a}catch{return a}}saveToStorage(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch(i){console.warn("Storage save failed:",i)}}subscribe(e,a){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(a),()=>this.listeners.get(e).delete(a)}notify(e,a){this.listeners.has(e)&&this.listeners.get(e).forEach(i=>i(a,this)),this.listeners.has("*")&&this.listeners.get("*").forEach(i=>i({event:e,payload:a},this))}addToCart(e,a=null,i=[],o="",r=""){const s=a||e.sizes[0],d=this.cart.findIndex(l=>l.product.id===e.id&&l.size.name===s.name);d>-1?this.cart[d].quantity+=1:this.cart.push({id:`${e.id}-${Date.now()}`,product:e,size:s,quantity:1,addons:[...i],cardMessage:o,recipientName:r}),this.saveToStorage("mf_cart",this.cart),this.notify("cart:updated",this.cart),this.openModal("cart")}updateQuantity(e,a){const i=this.cart.find(o=>o.id===e);i&&(i.quantity+=a,i.quantity<=0&&(this.cart=this.cart.filter(o=>o.id!==e)),this.saveToStorage("mf_cart",this.cart),this.notify("cart:updated",this.cart))}removeFromCart(e){this.cart=this.cart.filter(a=>a.id!==e),this.saveToStorage("mf_cart",this.cart),this.notify("cart:updated",this.cart)}getCartSubtotal(){return this.cart.reduce((e,a)=>{const i=a.size.price*a.quantity,o=(a.addons||[]).reduce((r,s)=>r+s.price,0);return e+i+o},0)}getCartCount(){return this.cart.reduce((e,a)=>e+a.quantity,0)}toggleFavorite(e){this.favorites.has(e)?this.favorites.delete(e):this.favorites.add(e),this.saveToStorage("mf_favorites",Array.from(this.favorites)),this.notify("favorites:updated",Array.from(this.favorites))}isFavorite(e){return this.favorites.has(e)}getFavoriteProducts(){return x.filter(e=>this.favorites.has(e.id))}setEmotion(e){this.activeEmotion=this.activeEmotion===e?null:e,this.notify("filter:updated",{emotion:this.activeEmotion,category:this.activeCategory})}setCategory(e){this.activeCategory=e,this.notify("filter:updated",{emotion:this.activeEmotion,category:this.activeCategory})}setSearchQuery(e){this.searchQuery=e.toLowerCase().trim(),this.notify("search:updated",this.searchQuery)}getFilteredProducts(){return x.filter(e=>{if(this.activeEmotion&&!e.emotions.includes(this.activeEmotion)||this.activeCategory!=="all"&&e.category!==this.activeCategory)return!1;if(this.searchQuery){const a=e.name.toLowerCase().includes(this.searchQuery),i=e.description.toLowerCase().includes(this.searchQuery),o=e.tagline.toLowerCase().includes(this.searchQuery);if(!a&&!i&&!o)return!1}return!0})}setWizardOption(e,a){this.wizard[e]=a,this.calculateWizardRecommendations(),this.notify("wizard:updated",this.wizard)}calculateWizardRecommendations(){let e=[...x];const i={amor:"amor",gratitud:"porque-si",perdon:"perdoname",celebracion:"felicidades",sorpresa:"sorprenderte"}[this.wizard.sentiment]||"amor";e.sort((o,r)=>{const s=(o.emotions.includes(i)?3:0)+(o.isSelection?2:0);return(r.emotions.includes(i)?3:0)+(r.isSelection?2:0)-s}),this.wizard.results=e.slice(0,3)}openModal(e,a=null){Object.keys(this.modals).forEach(i=>{i!=="productDetail"&&i!=="checkoutStep"&&(this.modals[i]=!1)}),e==="productDetail"?this.modals.productDetail=a:e==="checkout"?(this.modals.checkout=!0,this.modals.checkoutStep=1):this.modals[e]=!0,this.notify("modals:changed",this.modals),document.body.classList.toggle("mf-modal-open",!!e)}closeModal(){Object.keys(this.modals).forEach(e=>{e!=="productDetail"&&e!=="checkoutStep"&&(this.modals[e]=!1)}),this.modals.productDetail=null,this.notify("modals:changed",this.modals),document.body.classList.remove("mf-modal-open")}setCheckoutStep(e){this.modals.checkoutStep=e,this.notify("checkout:step",e)}}const u=new O;u.calculateWizardRecommendations();window.store=u;document.addEventListener("DOMContentLoaded",()=>{G(),oe(),I(),L(),X(),U(),Q(),J(),W(),_(),Z(),Y(),K(),te(),z()});function G(){const t=document.getElementById("header");window.addEventListener("scroll",()=>{window.scrollY>40?t.classList.add("scrolled"):t.classList.remove("scrolled")});const e=document.getElementById("btn-mobile-menu");e&&e.addEventListener("click",()=>{const a=document.querySelector(".mf-nav-list");a&&(a.style.display=a.style.display==="flex"?"none":"flex",a.style.flexDirection="column",a.style.position="absolute",a.style.top="80px",a.style.left="0",a.style.width="100%",a.style.background="rgba(12, 13, 12, 0.98)",a.style.padding="24px",a.style.gap="16px",a.style.borderBottom="1px solid rgba(255, 255, 255, 0.1)")}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(i){const o=this.getAttribute("href");if(o==="#"||!o)return;const r=document.querySelector(o);r&&(i.preventDefault(),r.scrollIntoView({behavior:"smooth"}))})})}function z(){const t=document.getElementById("fav-count-badge"),e=document.getElementById("cart-count-badge");t&&(t.textContent=u.favorites.size),e&&(e.textContent=u.getCartCount())}function I(){const t=document.getElementById("emotions-grid");if(!t)return;t.innerHTML=D.map(a=>`
    <div class="mf-emotion-card ${u.activeEmotion===a.id?"active":""}" data-emotion="${a.id}">
      <span class="mf-emotion-numeral">${a.numeral} · ATELIER</span>
      <h3 class="mf-emotion-title">${a.title}</h3>
      <span class="mf-emotion-french">${a.frenchTitle}</span>
      <p class="mf-emotion-sub">${a.subtitle}</p>
    </div>
  `).join(""),t.querySelectorAll(".mf-emotion-card").forEach(a=>{a.addEventListener("click",()=>{const i=a.getAttribute("data-emotion");u.setEmotion(i),I(),L(),A()})});const e=document.getElementById("btn-clear-emotion");e&&e.addEventListener("click",()=>{u.setEmotion(null),I(),L(),A()})}function A(){const t=document.getElementById("emotion-feedback");if(t)if(u.activeEmotion){const e=D.find(i=>i.id===u.activeEmotion);t.style.display="flex",document.getElementById("feedback-title").textContent=`Has elegido: “${e.title}”`,document.getElementById("feedback-desc").textContent=`${e.quote} — Monsieur Flores recomienda:`;const a=document.getElementById("seleccion");a&&a.scrollIntoView({behavior:"smooth",block:"start"})}else t.style.display="none"}function L(){const t=document.getElementById("products-grid");if(!t)return;const e=u.getFilteredProducts();if(e.length===0){t.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: var(--radius-md);">
        <p style="font-size: 1.3rem; font-family: var(--font-serif-headline); margin-bottom: 12px;">Monsieur está creando nuevas composiciones para este criterio.</p>
        <button class="btn-dark" onclick="window.store.setEmotion(null); window.store.setCategory('all'); document.dispatchEvent(new Event('refresh-products'));">
          Restablecer Catálogo Completo
        </button>
      </div>
    `;return}t.innerHTML=e.map(a=>q(a)).join(""),T(t)}function X(){const t=document.getElementById("bestsellers-grid");if(!t)return;const e=x.filter(a=>a.isBestSeller);t.innerHTML=e.map(a=>q(a)).join(""),T(t)}function q(t){const e=u.isFavorite(t.id),a=Number(t.price).toLocaleString("es-MX"),i=t.originalPrice?Number(t.originalPrice).toLocaleString("es-MX"):null;return`
    <article class="mf-product-card" data-id="${t.id}">
      <div class="mf-card-image-wrap" data-action="quickview">
        <img src="${t.image}" alt="${t.name} - ${t.tagline}" class="mf-card-img" loading="lazy">
        <span class="mf-card-badge">${t.badge}</span>
        <button class="mf-card-fav-btn ${e?"active":""}" data-action="fav" aria-label="Guardar en deseos">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${e?"currentColor":"none"}" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </div>
      <div class="mf-card-body">
        <div class="mf-card-meta">
          <div class="mf-card-rating">
            <span style="color: var(--mf-gold-primary); font-size: 0.85rem;">★</span>
            <span>${t.rating}</span>
            <span class="mf-card-reviews">(${t.reviewsCount} reseñas)</span>
          </div>
          <span style="font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mf-gold-primary); font-weight: 600;">
            ${t.category}
          </span>
        </div>
        <h3 class="mf-card-title" data-action="quickview">${t.name}</h3>
        <p class="mf-card-tagline">${t.tagline}</p>
        <div class="mf-card-pricing">
          <span class="mf-price-current">$${a} MXN</span>
          ${i?`<span class="mf-price-original">$${i}</span>`:""}
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
  `}function T(t){t.querySelectorAll(".mf-product-card").forEach(e=>{const a=e.getAttribute("data-id"),i=x.find(o=>o.id===a);i&&(e.querySelectorAll('[data-action="fav"]').forEach(o=>{o.addEventListener("click",r=>{r.stopPropagation(),u.toggleFavorite(a);const s=u.isFavorite(a);o.classList.toggle("active",s),o.innerHTML=s?'<svg width="18" height="18" viewBox="0 0 24 24" fill="#831828" stroke="#831828" stroke-width="1.3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',z(),M()})}),e.querySelectorAll('[data-action="add-cart"]').forEach(o=>{o.addEventListener("click",r=>{r.stopPropagation(),u.addToCart(i),z(),k()})}),e.querySelectorAll('[data-action="quickview"]').forEach(o=>{o.addEventListener("click",()=>{ee(i)})}))})}const B=document.getElementById("category-filter-bar");B&&B.querySelectorAll("button").forEach(t=>{t.addEventListener("click",()=>{B.querySelectorAll("button").forEach(a=>a.classList.remove("active")),t.classList.add("active");const e=t.getAttribute("data-cat");u.setCategory(e),L()})});document.addEventListener("refresh-products",()=>{I(),L()});function U(){const t=document.getElementById("categories-grid");t&&(t.innerHTML=R.map(e=>`
    <div class="mf-category-card" data-cat="${e.id}">
      <img src="${e.image}" alt="${e.name}" class="mf-category-bg" loading="lazy">
      <div class="mf-category-overlay"></div>
      <div class="mf-category-info">
        <span style="font-family: var(--font-script); font-size: 1.1rem; color: var(--mf-gold-light); display: block; margin-bottom: 2px;">${e.subtitle}</span>
        <h3 class="mf-category-name">${e.name}</h3>
        <span class="mf-category-count">${e.count} creaciones de autor</span>
      </div>
    </div>
  `).join(""),t.querySelectorAll(".mf-category-card").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-cat");u.setCategory(a);const i=document.querySelector(`#category-filter-bar button[data-cat="${a}"]`);i&&(document.querySelectorAll("#category-filter-bar button").forEach(r=>r.classList.remove("active")),i.classList.add("active")),L();const o=document.getElementById("seleccion");o&&o.scrollIntoView({behavior:"smooth"})})}))}function Q(){var i,o,r,s,d;const t=[document.getElementById("wizard-step-1"),document.getElementById("wizard-step-2"),document.getElementById("wizard-step-3")],e=document.querySelectorAll(".mf-wizard-step-tab");function a(l){u.wizard.step=l,t.forEach((c,g)=>{c&&(c.style.display=g+1===l?"block":"none")}),e.forEach((c,g)=>{c.classList.toggle("active",g+1===l)})}e.forEach(l=>{l.addEventListener("click",()=>{const c=parseInt(l.getAttribute("data-step"),10);a(c)})}),(i=document.getElementById("wizard-next-1"))==null||i.addEventListener("click",()=>a(2)),(o=document.getElementById("wizard-prev-2"))==null||o.addEventListener("click",()=>a(1)),(r=document.getElementById("wizard-next-2"))==null||r.addEventListener("click",()=>a(3)),(s=document.getElementById("wizard-prev-3"))==null||s.addEventListener("click",()=>a(2)),(d=document.getElementById("wizard-finish"))==null||d.addEventListener("click",()=>{u.calculateWizardRecommendations(),P();const l=document.getElementById("wizard-results-box");l&&l.scrollIntoView({behavior:"smooth",block:"nearest"})}),document.querySelectorAll(".mf-wizard-option-btn").forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-field"),g=l.getAttribute("data-value");l.parentElement.querySelectorAll(".mf-wizard-option-btn").forEach(m=>m.classList.remove("selected")),l.classList.add("selected"),u.setWizardOption(c,g),P()})}),P()}function P(){const t=document.getElementById("wizard-recommended-grid");if(!t)return;const e=u.wizard.results.length?u.wizard.results:x.slice(0,3);t.innerHTML=e.map(a=>q(a)).join(""),T(t)}function J(){var r;const t=document.getElementById("input-recipient"),e=document.getElementById("input-message"),a=document.getElementById("live-recipient-preview"),i=document.getElementById("live-card-text");t&&a&&t.addEventListener("input",s=>{a.textContent=`Para: ${s.target.value.trim()||"Alguien Muy Especial"}`}),e&&i&&e.addEventListener("input",s=>{i.textContent=s.target.value.trim()?`“${s.target.value}”`:"“Escribe tu mensaje con el corazón...”"});const o=document.getElementById("addons-list");o&&(o.innerHTML=F.map(s=>`
      <div class="mf-addon-item" data-addon-id="${s.id}">
        <div class="mf-addon-left">
          <span style="font-family: var(--font-serif-display); font-size: 1.1rem; color: var(--mf-gold-primary); font-weight: 600;">✦</span>
          <div class="mf-addon-info">
            <h5>${s.name}</h5>
            <p>${s.description}</p>
          </div>
        </div>
        <div style="text-align: right;">
          <div class="mf-addon-price">+$${s.price} MXN</div>
          <span style="font-size: 0.75rem; color: var(--mf-gold-primary); font-weight: 600;">Seleccionar</span>
        </div>
      </div>
    `).join(""),o.querySelectorAll(".mf-addon-item").forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("selected");const d=s.classList.contains("selected");s.querySelector(".mf-addon-price + span").textContent=d?"✓ Agregado":"Seleccionar"})})),(r=document.getElementById("btn-save-personalization"))==null||r.addEventListener("click",()=>{alert("✓ Personalización guardada con éxito por Monsieur Flores. Se incluirá caligrafiada en tu próximo ramo.")})}function W(){const t=document.getElementById("btn-check-delivery"),e=document.getElementById("delivery-city-select"),a=document.getElementById("delivery-day-select"),i=document.getElementById("delivery-cp-input"),o=document.getElementById("delivery-result-badge");!t||!i||!o||t.addEventListener("click",()=>{const r=i.value.trim()||"Zona Metropolitana Central",s=e?e.value:"cdmx",d=j.find(c=>c.id===s)||j[0],l=a&&a.value==="hoy"?"Hoy Mismo":a&&a.value==="manana"?"Mañana":"Fecha Programada";o.style.display="block",o.style.background="#141614",o.style.color="#ffffff",o.style.border="1px solid var(--mf-border-gold)",o.innerHTML=`
      <div style="display: flex; align-items: flex-start; gap: 14px;">
        <span style="color: var(--mf-gold-primary); font-size: 1.4rem;">✦</span>
        <div>
          <strong style="color: var(--mf-gold-light); font-size: 1.05rem;">Cobertura Activa: ${d.name} (${r})</strong>
          <p style="font-size: 0.88rem; color: #d0d4d0; margin-top: 4px;">
            Compromiso de Entrega: <strong>${l}</strong> · ${d.deliveryTime}.
          </p>
          <p style="font-size: 0.82rem; color: var(--mf-text-muted); margin-top: 2px;">
            Principales zonas con conserje propio: ${d.zones}. Transporte en cabina fría a 14°C garantizada.
          </p>
        </div>
      </div>
    `})}function _(){const t=document.getElementById("testimonials-grid");t&&(t.innerHTML=N.map(e=>`
    <div class="mf-testimonial-card">
      <div class="mf-testimonial-stars">★★★★★</div>
      <p class="mf-testimonial-quote">${e.comment}</p>
      <div class="mf-testimonial-author">
        <div>
          <span class="mf-author-name">${e.name}</span>
          <span class="mf-author-city"> · ${e.city}</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--mf-gold-primary); font-weight: 600;">${e.product}</span>
      </div>
    </div>
  `).join(""))}function Z(){const t=document.getElementById("instagram-grid");t&&(t.innerHTML=V.map(e=>`
    <div class="mf-insta-item">
      <img src="${e.image}" alt="Creación Monsieur Flores en Instagram" class="mf-insta-img" loading="lazy">
      <div class="mf-insta-overlay">
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="vertical-align: -2px; margin-right: 4px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          ${e.likes}
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" style="vertical-align: -2px; margin-right: 4px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          ${e.comments}
        </span>
      </div>
    </div>
  `).join(""))}function Y(){var e;const t=document.getElementById("journal-grid");t&&(t.innerHTML=H.map(a=>`
    <article class="mf-journal-card">
      <div class="mf-journal-img-wrap">
        <img src="${a.image}" alt="${a.title}" class="mf-journal-img" loading="lazy">
      </div>
      <div class="mf-journal-body">
        <div class="mf-journal-meta">${a.category} · ${a.readTime}</div>
        <h3 class="mf-journal-title">${a.title}</h3>
        <p class="mf-journal-excerpt">${a.excerpt}</p>
        <span style="color: var(--mf-gold-primary); font-weight: 600; font-size: 0.85rem;">Leer Crónica →</span>
      </div>
    </article>
  `).join(""),(e=document.getElementById("btn-view-all-journal"))==null||e.addEventListener("click",()=>{alert("Próximamente: Guía Botánica Completa de Monsieur Flores — Edición Otoño/Invierno.")}))}function K(){var c,g,m,n,f,y,v,b,h,C;const t=document.getElementById("drawer-overlay"),e=document.getElementById("cart-drawer"),a=document.getElementById("favorites-drawer"),i=document.getElementById("checkout-modal"),o=document.getElementById("product-detail-modal");function r(){t.classList.remove("active"),e.classList.remove("active"),a.classList.remove("active"),i.classList.remove("active"),o.classList.remove("active"),document.body.classList.remove("mf-modal-open")}t.addEventListener("click",r),(c=document.getElementById("btn-cart-open"))==null||c.addEventListener("click",()=>{t.classList.add("active"),e.classList.add("active"),k()}),(g=document.getElementById("mobile-btn-cart"))==null||g.addEventListener("click",()=>{t.classList.add("active"),e.classList.add("active"),k()}),(m=document.getElementById("btn-close-cart"))==null||m.addEventListener("click",r),(n=document.getElementById("btn-fav-open"))==null||n.addEventListener("click",()=>{t.classList.add("active"),a.classList.add("active"),M()}),(f=document.getElementById("mobile-btn-fav"))==null||f.addEventListener("click",()=>{t.classList.add("active"),a.classList.add("active"),M()}),(y=document.getElementById("btn-close-fav"))==null||y.addEventListener("click",r),(v=document.getElementById("btn-start-checkout"))==null||v.addEventListener("click",()=>{r(),ae(1)}),(b=document.getElementById("btn-close-checkout"))==null||b.addEventListener("click",r),(h=document.getElementById("btn-close-prod-modal"))==null||h.addEventListener("click",r);const s=document.getElementById("btn-search-open"),d=document.getElementById("mobile-btn-search"),l=()=>{var E;const w=prompt("¿Qué flor o arreglo buscas? (ej. Rosas, Peonías, Disculpa, etc.)");w&&(u.setSearchQuery(w),L(),(E=document.getElementById("seleccion"))==null||E.scrollIntoView({behavior:"smooth"}))};s==null||s.addEventListener("click",l),d==null||d.addEventListener("click",l),(C=document.getElementById("btn-meet-monsieur-modal"))==null||C.addEventListener("click",()=>{alert("“Monsieur Flores es la voz de tus afectos más puros. Un atelier fundado para convertir cada ramo en una pieza inolvidable de la alta floristería mexicana con espíritu europeo.”")}),u.subscribe("cart:updated",()=>{z(),k()}),u.subscribe("favorites:updated",()=>{z(),M()})}function k(){const t=document.getElementById("cart-items-container"),e=document.getElementById("cart-subtotal-val");if(!(!t||!e)){if(u.cart.length===0){t.innerHTML=`
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
    `,e.textContent="$0 MXN";return}t.innerHTML=u.cart.map(a=>{const i=(a.size.price*a.quantity).toLocaleString("es-MX");return`
      <div class="mf-cart-item">
        <img src="${a.product.image}" alt="${a.product.name}" class="mf-cart-item-img">
        <div class="mf-cart-item-details">
          <h4 class="mf-cart-item-name">${a.product.name}</h4>
          <span class="mf-cart-item-size">${a.size.name}</span>
          ${a.recipientName?`<div style="font-size: 0.72rem; color: var(--mf-gold-primary); margin-top: 2px;">Para: ${a.recipientName}</div>`:""}
          <div class="mf-cart-item-price">$${i} MXN</div>
          <div class="mf-cart-qty-ctrl">
            <button onclick="window.store.updateQuantity('${a.id}', -1)">−</button>
            <span style="font-weight: 600; font-size: 0.85rem;">${a.quantity}</span>
            <button onclick="window.store.updateQuantity('${a.id}', 1)">+</button>
          </div>
        </div>
        <button onclick="window.store.removeFromCart('${a.id}')" style="color: var(--mf-text-muted); font-size: 1.1rem; align-self: flex-start;">✕</button>
      </div>
    `}).join(""),e.textContent=`$${u.getCartSubtotal().toLocaleString("es-MX")} MXN`}}function M(){const t=document.getElementById("favorites-items-container");if(!t)return;const e=u.getFavoriteProducts();if(e.length===0){t.innerHTML=`
      <div style="text-align: center; padding: 40px 10px;">
        <div style="margin-bottom: 16px;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C5A059" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <h4 style="font-family: var(--font-serif-headline); color: var(--mf-text-main);">Aún no has guardado favoritos</h4>
        <p style="font-size: 0.85rem; color: var(--mf-text-muted); margin-top: 8px;">
          Guarda tus creaciones preferidas para consultarlas o prepararlas en tu próxima fecha especial.
        </p>
      </div>
    `;return}t.innerHTML=e.map(a=>`
    <div class="mf-cart-item">
      <img src="${a.image}" alt="${a.name}" class="mf-cart-item-img">
      <div class="mf-cart-item-details">
        <h4 class="mf-cart-item-name">${a.name}</h4>
        <div class="mf-cart-item-price">$${Number(a.price).toLocaleString("es-MX")} MXN</div>
        <button class="btn-primary" style="padding: 8px 16px; font-size: 0.72rem; margin-top: 8px;" onclick="window.store.addToCart(window.store.getFavoriteProducts().find(x=>x.id==='${a.id}'));">
          Añadir a la Bolsa
        </button>
      </div>
      <button onclick="window.store.toggleFavorite('${a.id}');" style="color: #831828; font-size: 1.1rem;" title="Eliminar de favoritos">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#831828" stroke="#831828" stroke-width="1.3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
    </div>
  `).join("")}function ee(t){const e=document.getElementById("product-detail-modal"),a=document.getElementById("modal-prod-body"),i=document.getElementById("drawer-overlay");if(!e||!a)return;document.getElementById("modal-prod-title").textContent=t.name;let o=0;function r(){var d;const s=t.sizes[o];a.innerHTML=`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: start;">
        <div>
          <img src="${t.image}" alt="${t.name}" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
        </div>
        <div>
          <span class="mf-eyebrow" style="margin-bottom: 4px;">${t.badge}</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 6px;">${t.name}</h2>
          <p style="font-size: 0.95rem; color: var(--mf-text-muted); margin-bottom: 16px;">${t.tagline}</p>
          <div style="font-size: 1.6rem; font-weight: 700; color: var(--mf-text-main); margin-bottom: 16px;">
            $${s.price.toLocaleString("es-MX")} MXN
          </div>
          <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
            ${t.description}
          </p>

          <h5 style="margin-bottom: 10px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em;">Tamaño de la Composición:</h5>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
            ${t.sizes.map((l,c)=>`
              <button class="btn-dark ${c===o?"active":""}" style="padding: 8px 14px; font-size: 0.8rem; border-color: ${c===o?"var(--mf-gold-primary)":"var(--mf-border-light)"}; background: ${c===o?"var(--mf-gold-primary)":"#ffffff"}; color: ${c===o?"#0c0d0c":"var(--mf-text-main)"};" data-size-idx="${c}">
                ${l.name}
              </button>
            `).join("")}
          </div>

          <h5 style="margin-bottom: 8px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em;">El Toque de Monsieur:</h5>
          <ul style="list-style: none; font-size: 0.85rem; color: var(--mf-text-muted); margin-bottom: 24px; display: flex; flex-direction: column; gap: 6px;">
            ${t.details.map(l=>`<li>✦ ${l}</li>`).join("")}
          </ul>

          <button class="btn-primary" id="btn-modal-add-cart" style="width: 100%;">
            Agregar al Carrito de Monsieur ($${s.price.toLocaleString("es-MX")} MXN)
          </button>
        </div>
      </div>
    `,a.querySelectorAll("[data-size-idx]").forEach(l=>{l.addEventListener("click",()=>{o=parseInt(l.getAttribute("data-size-idx"),10),r()})}),(d=a.querySelector("#btn-modal-add-cart"))==null||d.addEventListener("click",()=>{u.addToCart(t,t.sizes[o]),e.classList.remove("active"),i.classList.remove("active"),document.body.classList.remove("mf-modal-open")})}r(),i.classList.add("active"),e.classList.add("active"),document.body.classList.add("mf-modal-open")}function ae(t=1){const e=document.getElementById("checkout-modal"),a=document.getElementById("checkout-step-title"),i=document.getElementById("checkout-step-body"),o=document.getElementById("drawer-overlay");if(!e||!i||!a)return;const r=u.getCartSubtotal();function s(d){var l,c,g,m,n,f,y,v,b;d===1?(a.textContent="Paso 1 de 5: Tus Datos de Comprador",i.innerHTML=`
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
      `,(l=document.getElementById("btn-chk-to-2"))==null||l.addEventListener("click",()=>s(2))):d===2?(a.textContent="Paso 2 de 5: Destinatario y Dirección",i.innerHTML=`
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
      `,(c=document.getElementById("btn-chk-back-1"))==null||c.addEventListener("click",()=>s(1)),(g=document.getElementById("btn-chk-to-3"))==null||g.addEventListener("click",()=>s(3))):d===3?(a.textContent="Paso 3 de 5: Momento de Entrega",i.innerHTML=`
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
      `,(m=document.getElementById("btn-chk-back-2"))==null||m.addEventListener("click",()=>s(2)),(n=document.getElementById("btn-chk-to-4"))==null||n.addEventListener("click",()=>s(4))):d===4?(a.textContent="Paso 4 de 5: Dedicatoria y Sello en Cera",i.innerHTML=`
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
            <button class="btn-primary" id="btn-chk-to-5">Continuar al Pago Seguro ($${r.toLocaleString("es-MX")} MXN) →</button>
          </div>
        </div>
      `,(f=document.getElementById("btn-chk-back-3"))==null||f.addEventListener("click",()=>s(3)),(y=document.getElementById("btn-chk-to-5"))==null||y.addEventListener("click",()=>s(5))):d===5?(a.textContent="Paso 5 de 5: Pago Protegido y Cifrado",i.innerHTML=`
        <div style="display: flex; flex-direction: column; gap: 18px;">
          <div style="background: #f7faf7; border: 1px solid #cfebd2; padding: 18px; border-radius: var(--radius-sm);">
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.15rem; margin-bottom: 4px;">
              <span>Total a Liquidar:</span>
              <span style="color: var(--mf-crimson-deep);">$${r.toLocaleString("es-MX")} MXN</span>
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
      `,(v=document.getElementById("btn-chk-back-4"))==null||v.addEventListener("click",()=>s(4)),(b=document.getElementById("btn-confirm-order"))==null||b.addEventListener("click",()=>s(6))):d===6&&(a.textContent="¡Merci! Pedido Confirmado",i.innerHTML=`
        <div style="text-align: center;">
          <div style="margin-bottom: 12px;">
            <img src="/images/sello-lacre-mf.svg" alt="Sello Oficial Monsieur Flores" style="width: 58px; height: 58px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">
          </div>
          <h3 style="font-size: 1.6rem; color: var(--mf-text-main); margin-bottom: 4px; font-family: var(--font-serif-headline);">Monsieur Flores ha recibido tu encargo</h3>
          <p style="font-size: 0.9rem; color: var(--mf-text-muted); margin-bottom: 24px;">
            Folio de Pedido de Autor: <strong>${u.orderTracking.orderId}</strong>
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
      `)}s(t),o.classList.add("active"),e.classList.add("active"),document.body.classList.add("mf-modal-open")}function te(){const t=document.getElementById("concierge-toggle"),e=document.getElementById("concierge-window"),a=document.getElementById("concierge-close"),i=document.getElementById("concierge-messages-list"),o=document.getElementById("concierge-form"),r=document.getElementById("concierge-input-text"),s=document.querySelectorAll(".mf-chip-btn");if(!t||!e)return;function d(){e.classList.toggle("active"),e.classList.contains("active")&&(r==null||r.focus(),l())}t.addEventListener("click",m=>{m.stopPropagation(),d()}),a==null||a.addEventListener("click",m=>{m.stopPropagation(),e.classList.remove("active")}),document.addEventListener("click",m=>{!e.contains(m.target)&&!t.contains(m.target)&&e.classList.remove("active")});function l(){i&&(i.scrollTop=i.scrollHeight)}function c(m,n,f=""){if(!i)return;const y=new Date().toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit"}),v=document.createElement("div");v.className=`mf-msg ${m}`,v.innerHTML=`
      <div class="mf-msg-bubble">
        ${n}
        ${f?`<div style="margin-top: 10px;">${f}</div>`:""}
      </div>
      <span class="mf-msg-time">${y} · ${m==="bot"?"Monsieur Flores":"Usted"}</span>
    `,i.appendChild(v),l()}function g(m){const n=m.toLowerCase().trim();setTimeout(()=>{n.includes("perdon")||n.includes("perdón")||n.includes("disculpa")||n.includes("error")?(x.find(f=>f.id==="la-disculpa"),c("bot","<em>“Reconocer un tropiezo con gracia es el primer paso hacia el reencuentro.”</em> Para pedir perdón, la estridencia es un error. He creado <strong>La Disculpa</strong>: rosas inglesas blush en caja joyero, acompañadas de 12 trufas artesanales con polvo de oro comestible y su dedicatoria en papel de algodón lacrada en cera.",`<button class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='la-disculpa'));">
            Añadir La Disculpa a la Bolsa ($1,599 MXN)
          </button>`)):n.includes("aniversario")||n.includes("amor")||n.includes("novia")||n.includes("esposa")||n.includes("conquistar")?c("bot","El amor verdadero no se susurra; se declara con la magnificencia del terciopelo. Para aniversarios memorables, mi recomendación suprema es <strong>La Inolvidable</strong> (50 rosas en sombrerera cilíndrica de alta costura) o <strong>La Clásica</strong> (24 rosas de tallo largo con lazo dorado).",`<div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn-primary" style="padding: 8px 14px; font-size: 0.75rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='la-inolvidable'));">
              La Inolvidable ($2,499)
            </button>
            <button class="btn-dark" style="padding: 8px 14px; font-size: 0.75rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='la-clasica'));">
              La Clásica ($1,299)
            </button>
          </div>`):n.includes("ciudad")||n.includes("ciudades")||n.includes("donde")||n.includes("dónde")||n.includes("cobertura")||n.includes("envio")||n.includes("envío")||n.includes("entrega")?c("bot","Monsieur Flores realiza entregas garantizadas el mismo día en las 8 metrópolis de México:<br><br>✦ <strong>Ciudad de México (CDMX)</strong>: Polanco, Lomas, Roma-Condesa, Santa Fe.<br>✦ <strong>Monterrey & San Pedro</strong>: Valle Oriente, Calzada del Valle, San Jerónimo.<br>✦ <strong>Guadalajara & Zapopan</strong>: Providencia, Puerta de Hierro, Andares.<br>✦ <strong>Puebla</strong>: Angelópolis, La Vista.<br>✦ <strong>Querétaro</strong>: Juriquilla, El Campanario.<br>✦ <strong>Mérida</strong>: Montebello, Altabrisa.<br>✦ <strong>Cancún & Riviera Maya</strong>: Zona Hotelera, Puerto Cancún.<br>✦ <strong>Tijuana</strong>: Zona Río, Chapultepec.<br><br>Todas nuestras flores viajan en cabinas refrigeradas a 14°C para conservar su turgencia impecable."):n.includes("sorpresa")||n.includes("porque si")||n.includes("porque sí")||n.includes("espontaneo")||n.includes("amiga")||n.includes("amigo")?c("bot","<em>“Los regalos más memorables son los que llegan en un martes cualquiera sin previo aviso.”</em> Le sugiero <strong>Porque Sí</strong>, un bouquet etéreo de peonías y anémonas en jarrón de cristal acanalado ($999 MXN). Provocará una sonrisa sincera.",`<button class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem;" onclick="window.store.addToCart(window.store.getFilteredProducts().find(p=>p.id==='porque-si'));">
            Añadir Porque Sí ($999 MXN)
          </button>`):n.includes("alta-costura")||n.includes("lujo")||n.includes("presidencial")||n.includes("caro")?c("bot","Nuestra línea de <strong>Alta Costura Floral</strong> contempla montajes de hasta 100 rosas en sombrerera artesanal o la <strong>Orquídea Majestueuse</strong> en piedra volcánica. Piezas que imponen una presencia arquitectónica inigualable.",`<button class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem;" onclick="document.getElementById('seleccion').scrollIntoView({behavior:'smooth'}); window.store.setCategory('premium');">
            Ver Colección Alta Costura
          </button>`):n.includes("whatsapp")||n.includes("humano")||n.includes("telefono")||n.includes("llamada")?c("bot","Con el mayor agrado. Nuestro conserje titular está disponible para asistirle telefónicamente o vía enlace directo:<br><br>Línea Privada Atelier: <strong>+52 81 8000 3567</strong><br>Horario de Atención: Lunes a Domingo, 8:00 AM – 9:00 PM.",`<a href="https://wa.me/528180003567?text=Hola%20Monsieur%20Flores,%20deseo%20asistencia%20personalizada" target="_blank" class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem; text-decoration: none;">
            Abrir Canal Privado de WhatsApp
          </a>`):c("bot",`Entiendo la sutileza de lo que busca. Para "${m}", le sugiero que me permita recomendarle una de nuestras creaciones de autor. ¿Desea que prioricemos rosas clásicas, peonías silvestres u orquídeas de larga duración?`,`<div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="mf-chip-btn" onclick="document.getElementById('buscador-emocional').scrollIntoView({behavior:'smooth'});">Explorar Buscador Emocional</button>
            <button class="mf-chip-btn" onclick="document.getElementById('sorprendeme').scrollIntoView({behavior:'smooth'});">Asesor Sorpréndeme</button>
          </div>`)},450)}o==null||o.addEventListener("submit",m=>{m.preventDefault();const n=r.value.trim();n&&(c("user",n),r.value="",g(n))}),s.forEach(m=>{m.addEventListener("click",()=>{const n=m.getAttribute("data-query")||m.textContent;c("user",m.textContent),g(n)})})}const $={terminos:{title:"Términos y Condiciones de Contratación Floral",subtitle:"Monsieur Flores Haute Floristerie S.A.P.I. de C.V. · Vigencia 2026",content:`
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
    `},privacidad:{title:"Aviso de Privacidad Integral",subtitle:"En estricto cumplimiento con la LFPDPPP de los Estados Unidos Mexicanos",content:`
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
    `},reembolso:{title:"Política de Reembolso, Cancelación y Sustitución",subtitle:"Garantía de Satisfacción Absoluta y Protección al Consumidor",content:`
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
    `},frescura:{title:"Garantía de Frescura Botánica de 8 Días",subtitle:"El Compromiso Científico y Artesanal de Monsieur Flores",content:`
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
    `}};window.openLegalModal=function(t="terminos"){const e=document.getElementById("legal-modal"),a=document.getElementById("drawer-overlay");e&&(e.classList.add("active"),a==null||a.classList.add("active"),window.switchLegalTab(t))};window.closeLegalModal=function(){const t=document.getElementById("legal-modal"),e=document.getElementById("drawer-overlay");t==null||t.classList.remove("active"),e==null||e.classList.remove("active")};window.switchLegalTab=function(t){var o;const e=$[t]||$.terminos,a=document.getElementById("legal-modal-title"),i=document.getElementById("legal-modal-content");a&&(a.textContent=e.title),i&&(i.innerHTML=`
      <div style="font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mf-gold-primary); margin-bottom: 20px;">
        ${e.subtitle}
      </div>
      ${e.content}
    `,i.scrollTop=0),document.querySelectorAll(".mf-legal-tab-btn").forEach(r=>{r.classList.remove("active")}),(o=document.getElementById(`tab-btn-${t}`))==null||o.classList.add("active")};document.addEventListener("keydown",t=>{var e;t.key==="Escape"&&((e=window.closeLegalModal)==null||e.call(window))});function oe(){const t=document.getElementById("mf-atelier-audio"),e=document.getElementById("btn-audio-toggle"),a=document.getElementById("btn-hero-audio"),i=document.getElementById("hero-audio-state-icon"),o=document.getElementById("btn-audio-float"),r=document.getElementById("mf-audio-float-status"),s=document.getElementById("mf-audio-float-icon-state"),d=document.getElementById("mf-audio-toast"),l=document.getElementById("mf-audio-toast-msg");if(!t)return;t.setAttribute("playsinline","true"),t.setAttribute("webkit-playsinline","true"),t.volume=.35;const g=[`${"/MONSIEUR-FLORES/".replace(/\/+$/,"")}/audio/dilo-con-flores.mp3`,"./audio/dilo-con-flores.mp3","./public/audio/dilo-con-flores.mp3"];let m=0;!t.src&&!t.currentSrc&&(t.src=g[0]);let n=!1,f=!1,y=!1,v=null;t.addEventListener("error",()=>{m<g.length-1&&(m++,t.src=g[m],n&&!f&&t.play().catch(()=>{}))});function b(p){!d||!l||(l.textContent=p,d.classList.add("show"),clearTimeout(v),v=setTimeout(()=>{d.classList.remove("show")},3200))}function h(p){n=p,o&&(p?(o.classList.add("playing"),o.classList.remove("muted"),r&&(r.textContent="Música On"),s&&(s.textContent="❚❚"),o.setAttribute("title","Pausar música ambiental")):(o.classList.remove("playing"),o.classList.add("muted"),r&&(r.textContent="Música"),s&&(s.textContent="▶"),o.setAttribute("title","Iniciar música ambiental"))),e&&(p?(e.classList.add("playing"),e.setAttribute("title","Pausar música del Atelier")):(e.classList.remove("playing"),e.setAttribute("title","Reproducir música del Atelier"))),a&&(p?(a.classList.add("playing"),i&&(i.textContent="❚❚")):(a.classList.remove("playing"),i&&(i.textContent="▶")))}const C=["touchstart","touchend","click","pointerdown","scroll"];function w(){C.forEach(p=>{window.removeEventListener(p,E,{passive:!0}),document.removeEventListener(p,E,{passive:!0})})}function E(){if(f||n||y)return;const p=t.play();p!==void 0&&p.then(()=>{y=!0,h(!0),w(),b("♪ Música del Atelier: “Dilo con flores”")}).catch(()=>{})}C.forEach(p=>{window.addEventListener(p,E,{passive:!0}),document.addEventListener(p,E,{passive:!0})});function S(){t.paused?(f=!1,t.play().then(()=>{y=!0,h(!0),w(),b("♪ Reproduciendo en el Atelier: “Dilo con flores”")}).catch(p=>{console.warn("Playback error:",p)})):(f=!0,t.pause(),h(!1),b("Atelier en silencio"))}o&&o.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),S()}),e&&e.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),S()}),a&&a.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),S()}),t.addEventListener("play",()=>h(!0)),t.addEventListener("pause",()=>h(!1)),t.addEventListener("ended",()=>h(!1))}
//# sourceMappingURL=index-Cdyj2YKj.js.map
