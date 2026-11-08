# PRD & Plan de Arquitectura — MONSIEUR FLORES

## 1. Visión y Posicionamiento
**MONSIEUR FLORES** no es una florería genérica de catálogo; es una boutique floral digital de lujo y emociones guiada por un personaje anfitrión: **Monsieur Flores**, un florista carismático, refinado, apasionado y teatral.

> **Eslogan Central:** *"El arte de decirlo con flores. Hay cosas que las palabras no saben decir."*  
> **Filosofía Clave:** *"Dime qué quieres decir y Monsieur Flores encontrará la manera de expresarlo con flores."*

---

## 2. Paleta Cromática y Dirección de Arte
- **Noir Profondo (Fondo/Contraste):** `#0E0F0E` y `#161816`
- **Marfil / Lino de Seda:** `#FBF9F5` y `#F4EFEA`
- **Champagne Dorado (Lujo & Botonería):** `#D4AF37` / `#C5A059`
- **Verde Follaje Inglés / Esmeralda Botánico:** `#1C2E24`
- **Bordeaux / Rosa Antiguo (Acentos románticos):** `#7A1F2D` y `#D98A86`
- **Tipografías:**
  - *Headings & Citas:* `Cormorant Garamond` & `Playfair Display` (elegancia parisina, corte editorial de alta costura).
  - *Cuerpo, UI & Precios:* `Plus Jakarta Sans` / `Outfit` (claridad geométrica premium).

---

## 3. Jerarquía y Módulos de la Experiencia Front-End

1. **Top Notification Bar:** Banner discreto con promociones/campañas rotativas ("Envío el mismo día · Arreglos florales premium · Entrega a domicilio").
2. **Header & Mega-Navegación:**
   - Logotipo protagónico y estilizado *MONSIEUR FLORES*.
   - Menú de navegación principal con indicadores sutiles.
   - Acciones globales: Buscador en tiempo real, Drawer de Favoritos ♡ (con contador reactivo), Carrito de Compras 🛒 (con badge de cantidad).
   - Responsive móvil con menú drawer y bottom navigation bar persistente.
3. **Hero Cinematográfico:**
   - Fotografía/visual inmersivo de alta resolución mostrando a Monsieur en su atelier.
   - Copys editoriales de gran impacto: *"El arte de decirlo con flores"* y *"Hay cosas que las palabras no saben decir"*.
   - Dual CTA: `ENCUENTRA TU RAMO` y `¿QUÉ QUIERES DECIR?`.
   - Scroll indicator suave `↓ Descubre la colección`.
4. **Buscador Emocional Reactivo ("¿Qué quieres decir?"):**
   - Selector interactivo con estados de ánimo: *❤️ Te amo, 🥹 Te extraño, 💔 Perdóname, 🎉 Felicidades, 🎂 Feliz cumpleaños, 💍 Quiero sorprenderte, 🤍 Estoy contigo, 🌸 Porque sí*.
   - Filtrado dinámico instantáneo con feedback visual y recomendación personalizada de Monsieur.
5. **"La Selección de Monsieur" (Catálogo Curado):**
   - Cards de producto con fotografía de alta gama, badges exclusivos ("Selección Monsieur", "Más vendido"), rating, precio formateado, selector rápido de tamaño y microinteracciones de Favorito y Agregar al carrito.
6. **Banner Emocional de Impacto:**
   - Frase editorial: *"No necesitas una ocasión. Solo necesitas pensar en alguien."*
   - CTA hacia experiencia fluida de compra.
7. **Explorador de Categorías:**
   - Rosas, Tulipanes, Girasoles, Orquídeas, Bouquets, Plantas, Flores + Regalo, Premium.
8. **Asesor Interactivo "Sorpréndeme":**
   - Wizard interactivo por pasos:
     1. *¿Para quién es?* (Pareja, Mamá, Papá, Amigo/a, Cliente, Alguien especial)
     2. *¿Qué quieres transmitir?* (Amor, Gratitud, Perdón, Celebración, Sorpresa)
     3. *¿Cuál es tu presupuesto?* ($500-$1,000 / $1,000-$2,000 / $2,000-$3,500 / $3,500+)
   - Generación instantánea de 3 arreglos perfectos con la rúbrica de Monsieur.
9. **"Conoce a Monsieur" (Storytelling de Marca):**
   - Retrato editorial del personaje + Manifiesto ("Hay quienes venden flores. Monsieur Flores las entiende.").
10. **Configurador "Hazlo Personal":**
    - Personalización en tiempo real: Tarjeta dedicatoria con vista previa tipográfica en vivo, chocolates artesanales, peluches, globos de helio y empaques de lujo.
11. **Calculadora & Promesa de Entrega:**
    - Selector interactivo (Hoy / Mañana / Fecha programada) + Validador de código postal con cálculo de cobertura en tiempo real.
12. **Carrusel de Favoritos & Más Vendidos:**
    - Slider suave táctil y con flechas de control.
13. **Social Proof & Testimonios:**
    - Reseñas 5 estrellas verificadas con detalles de entrega.
14. **Instagram & Journal Editorial:**
    - Feed social interactivo `@monsieurflores` + Artículos guía floral para posicionamiento orgánico.
15. **CTA Final & Footer Integral:**
    - Bloque de cierre inspirador + Footer con suscripción a cartas de Monsieur, links estructurados y métodos de pago aceptados.
16. **Sidebars y Modales Interactivos:**
    - **Drawer de Carrito:** Ítems dinámicos, cálculo de subtotal, costo de envío, extras, cupón promocional y checkout button.
    - **Drawer de Favoritos:** Lista de guardados persistente con opción de añadir directo al carrito.
    - **Modal de Checkout Visual (5 pasos):** Datos personales -> Destinatario -> Entrega -> Mensaje de tarjeta -> Pago visual -> Confirmación con pantalla de Tracking animado ("Monsieur está preparando tu arreglo").
    - **Widget Flotante WhatsApp:** Concierge con opciones rápidas contextuales ("Monsieur está disponible").

---

## 4. Stack y Estructura Técnica
- **Bundler:** Vite (ultrarrápido, modular, HMR).
- **Frontend Core:** Vanilla ES Modules moderno (Clean Architecture, desacoplado, sin deuda técnica, máxima velocidad 60fps).
- **Estilos:** Vanilla CSS con CSS Custom Properties (Design Tokens), animaciones CSS GPU-accelerated, responsive design Mobile-First.
- **Store Reactivo:** Event-driven state manager para Carrito, Favoritos, Filtro Emocional y Wizard de Recomendaciones con persistencia `localStorage`.
- **Assets de imagen:** Generados con IA para mantener una coherencia visual cinemática y de alta costura.
