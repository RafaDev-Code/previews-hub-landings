---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.cafeteria.notion"
paired_design: "./DESIGN.md"
case_slug: "cafeteria"
case_label: "Cafeteria"
template_slug: "template-02-notion"
variant_slug: "notion"
variant_label: "Notion"
archetype: "cafeteria de especialidad, pasteleria o cafe de barrio"
business_mode: "local-pickup"
primary_goal: "menu-visit-pickup"
primary_cta: "Ver menu"
secondary_cta: "Pedir para llevar"
tertiary_cta: "Como llegar"
section_7_mode: "Pedido o mesa"
menu_categories:
  - "Cafe"
  - "Pasteleria"
  - "Brunch"
  - "Sandwiches"
  - "Sin cafe"
---

# Wireframe Base - Cafeteria / Notion

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Cafeteria.
- Arquetipo: cafeteria de especialidad, pasteleria o cafe de barrio.
- Variante visual: Notion.
- Lente de variante: minimalismo ordenado, calma, lectura facil, menu claro y tono editorial suave.
- Objetivo primario: menu-visit-pickup.
- CTA primario: `Ver menu`.
- CTA secundario: `Pedir para llevar`.
- CTA terciario: `Como llegar`.

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
- `promo.label`: combo cafe + medialuna, brunch o bebida de temporada.
- `conversion.primary_cta`: Ver menu.
- `conversion.secondary_cta`: Pedir para llevar.
- `conversion.tertiary_cta`: Como llegar.
- `menu.categories`: categorias del menu QR.
- `menu.featured_items`: 4 items mobile, 6 items desktop.
- `gallery.items`: 6 a 10 imagenes reales o placeholders descriptivos.
- `operations.mode`: local-pickup.

## Orden Funcional Fijo

1. Header
2. Hero
3. Info del local
4. Destacados
5. Galeria
6. Menu QR
7. Pedido o mesa
8. CTA final

El orden no se cambia entre variantes. La composicion, densidad y enfasis si pueden cambiar para respetar el `DESIGN.md`.

## Blueprint De Secciones

### 1. Header

- Slots mobile: logo, categoria corta, `Pedir para llevar`, `Ver menu`.
- Slots desktop: logo, links a menu, galeria, pedido o mesa, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Ver menu` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: cafe servido, barra, pasteleria fresca o mesa de trabajo.
- Composicion de variante: hero limpio con copy breve, datos esenciales y CTA sin ruido.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: horarios de manana/tarde, direccion, wifi, take away y medios de pago.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: cafes, pasteleria, brunch, tostados y favoritos de temporada.
- Variante: lista/cards simples con detalles utiles; evitar exceso fotografico.
- Mobile: 4 items maximos antes de `Pedir para llevar`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: barra, tazas, vitrinas, mesas, producto y detalle humano.
- Variante: pocas imagenes, bien espaciadas, con captions utiles.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Cafe
- Pasteleria
- Brunch
- Sandwiches
- Sin cafe
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Pedir para llevar` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Pedido o mesa

- Funcion: pedido para llevar o reserva ligera si el local trabaja mesas.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con cercania, ritual diario y ubicacion clara.
- Debe repetir CTA primario y secundario.
- Debe incluir una ultima senal operativa: horario, zona, entrega, reserva o promocion vigente.
- Evitar claims genericos; cerrar con una accion concreta.

## Reglas De Variante

- Aplicar el sistema visual desde `DESIGN.md` sin mezclar otra variante.
- Lente: minimalismo ordenado, calma, lectura facil, menu claro y tono editorial suave.
- Sesgo de layout: estructura modular, baja friccion, buen uso de texto y aire.
- Tono de CTA: calmo, ordenado, confiable.
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
