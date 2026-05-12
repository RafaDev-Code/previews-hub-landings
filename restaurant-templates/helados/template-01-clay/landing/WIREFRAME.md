---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.helados.clay"
paired_design: "./DESIGN.md"
case_slug: "helados"
case_label: "Helados"
template_slug: "template-01-clay"
variant_slug: "clay"
variant_label: "Clay"
archetype: "heladeria artesanal, postres helados o delivery de helado"
business_mode: "icecream-order"
primary_goal: "flavor-orders"
primary_cta: "Pedir helado"
secondary_cta: "Ver sabores"
tertiary_cta: "Sucursales"
section_7_mode: "Pedido y sabores"
menu_categories:
  - "Sabores"
  - "Potes"
  - "Cucuruchos"
  - "Postres helados"
  - "Sin TACC"
---

# Wireframe Base - Helados / Clay

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Helados.
- Arquetipo: heladeria artesanal, postres helados o delivery de helado.
- Variante visual: Clay.
- Lente de variante: direccion de arte organica, juego visual, sabores creativos y calidez artesanal.
- Objetivo primario: flavor-orders.
- CTA primario: `Pedir helado`.
- CTA secundario: `Ver sabores`.
- CTA terciario: `Sucursales`.

## Variables De Contenido

Usar estas variables como contrato minimo. El consumidor puede cambiar valores, pero no debe cambiar el significado de cada campo.

- `brand.name`: nombre del local.
- `brand.category`: categoria corta visible en hero y header.
- `brand.tagline`: promesa concreta de una linea.
- `brand.description`: descripcion breve, sensorial y util.
- `venue.neighborhood`: barrio o zona.
- `venue.address`: direccion completa.
- `venue.hours`: horarios principales.
- `venue.phone`: telefono o WhatsApp.
- `venue.maps_url`: enlace a mapa.
- `venue.status`: abierto, cerrado, abre pronto o solo pedidos.
- `proof.rating`: rating visible si existe.
- `proof.review_count`: cantidad de reseñas.
- `proof.badge`: sello opcional: recomendado, nuevo, top ventas, artesanal.
- `promo.label`: sabor de temporada, kilo promo, pack familiar o topping gratis.
- `conversion.primary_cta`: Pedir helado.
- `conversion.secondary_cta`: Ver sabores.
- `conversion.tertiary_cta`: Sucursales.
- `menu.categories`: categorias del menu QR.
- `menu.featured_items`: 4 items mobile, 6 items desktop.
- `gallery.items`: 6 a 10 imagenes reales o placeholders descriptivos.
- `operations.mode`: icecream-order.

## Orden Funcional Fijo

1. Header
2. Hero
3. Info del local
4. Destacados
5. Galeria
6. Menu QR
7. Pedido y sabores
8. CTA final

El orden no se cambia entre variantes. La composicion, densidad y enfasis si pueden cambiar para respetar el `DESIGN.md`.

## Blueprint De Secciones

### 1. Header

- Slots mobile: logo, categoria corta, `Ver sabores`, `Pedir helado`.
- Slots desktop: logo, links a menu, galeria, pedido y sabores, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Pedir helado` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: bochas, cucurucho, pote o vitrina de sabores.
- Composicion de variante: hero expresivo con producto y composicion organica/art-directed.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: sucursales, delivery, horarios, sabores disponibles y medios de pago.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: sabores favoritos, kilo, cuarto, cucuruchos y postres helados.
- Variante: sabores o productos como piezas creativas con nombres memorables.
- Mobile: 4 items maximos antes de `Ver sabores`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: texturas, vitrinas, toppings, potes y familias consumiendo.
- Variante: formas organicas, colores suaves, textura, producto y detalle artesanal.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Sabores
- Potes
- Cucuruchos
- Postres helados
- Sin TACC
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Ver sabores` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Pedido y sabores

- Funcion: selector de tamano, sabores, cantidad y delivery/retiro.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con sabores, antojo y pedido inmediato.
- Debe repetir CTA primario y secundario.
- Debe incluir una ultima senal operativa: horario, zona, entrega, reserva o promocion vigente.
- Evitar claims genericos; cerrar con una accion concreta.

## Reglas De Variante

- Aplicar el sistema visual desde `DESIGN.md` sin mezclar otra variante.
- Lente: direccion de arte organica, juego visual, sabores creativos y calidez artesanal.
- Sesgo de layout: modulos juguetones, microcopy con personalidad y composicion menos rigida.
- Tono de CTA: curioso, sensorial, creativo.
- No usar esta variante como simple cambio de colores; ajustar ritmo, densidad y jerarquia segun el lente.

## Contrato Responsive

- Mobile primero: header compacto, hero accionable, menu QR accesible, CTA primario visible sin buscar.
- Desktop: hero con media fuerte, info del local en banda clara, destacados y galeria con mas aire.
- Textos largos deben truncarse o pasar a segunda linea; ningun boton puede depender de texto extenso.
- La landing debe poder renderizarse con datos incompletos: si falta rating, usar estado operativo o badge.

## Anti Patrones

- No crear una landing generica de SaaS.
- No ocultar direccion, horarios o precios.
- No convertir el menu QR en decoracion; debe ser accionable.
- No agregar secciones nuevas antes del CTA final salvo pedido explicito.
- No mezclar estilos de otra variante aunque parezca compatible.
