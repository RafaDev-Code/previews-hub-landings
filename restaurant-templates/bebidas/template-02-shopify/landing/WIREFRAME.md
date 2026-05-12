---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.bebidas.shopify"
paired_design: "./DESIGN.md"
case_slug: "bebidas"
case_label: "Bebidas"
template_slug: "template-02-shopify"
variant_slug: "shopify"
variant_label: "Shopify"
archetype: "bar de bebidas, jugueria, tienda o carta liquida especializada"
business_mode: "beverage-order"
primary_goal: "orders-menu"
primary_cta: "Pedir bebidas"
secondary_cta: "Ver carta"
tertiary_cta: "Promos"
section_7_mode: "Pedido o pickup"
menu_categories:
  - "Frias"
  - "Calientes"
  - "Cocteles"
  - "Packs"
  - "Sin alcohol"
---

# Wireframe Base - Bebidas / Shopify

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Bebidas.
- Arquetipo: bar de bebidas, jugueria, tienda o carta liquida especializada.
- Variante visual: Shopify.
- Lente de variante: conversion comercial, catalogo, pedido online, productos claros y checkout/pago visible.
- Objetivo primario: orders-menu.
- CTA primario: `Pedir bebidas`.
- CTA secundario: `Ver carta`.
- CTA terciario: `Promos`.

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
- `promo.label`: 2x1, happy hour, pack semanal o bebida de temporada.
- `conversion.primary_cta`: Pedir bebidas.
- `conversion.secondary_cta`: Ver carta.
- `conversion.tertiary_cta`: Promos.
- `menu.categories`: categorias del menu QR.
- `menu.featured_items`: 4 items mobile, 6 items desktop.
- `gallery.items`: 6 a 10 imagenes reales o placeholders descriptivos.
- `operations.mode`: beverage-order.

## Orden Funcional Fijo

1. Header
2. Hero
3. Info del local
4. Destacados
5. Galeria
6. Menu QR
7. Pedido o pickup
8. CTA final

El orden no se cambia entre variantes. La composicion, densidad y enfasis si pueden cambiar para respetar el `DESIGN.md`.

## Blueprint De Secciones

### 1. Header

- Slots mobile: logo, categoria corta, `Ver carta`, `Pedir bebidas`.
- Slots desktop: logo, links a menu, galeria, pedido o pickup, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Pedir bebidas` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: bebida insignia, hielo, color, botella o vaso en primer plano.
- Composicion de variante: hero con oferta o producto principal, precio/beneficio y CTA de compra/pedido.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: horarios, pickup, delivery, edad/condiciones si aplica y pagos.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: bebidas destacadas, packs, promos y ediciones de temporada.
- Variante: cards de producto con precio, variante, cantidad y accion directa.
- Mobile: 4 items maximos antes de `Ver carta`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: vasos, botellas, colores, barra, ingredientes y packs.
- Variante: producto y packaging con foco comercial; menos ambiente, mas compra.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Frias
- Calientes
- Cocteles
- Packs
- Sin alcohol
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Ver carta` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Pedido o pickup

- Funcion: pedido por cantidad, pickup/delivery y alternativa WhatsApp.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con promo, carta visible y accion directa.
- Debe repetir CTA primario y secundario.
- Debe incluir una ultima senal operativa: horario, zona, entrega, reserva o promocion vigente.
- Evitar claims genericos; cerrar con una accion concreta.

## Reglas De Variante

- Aplicar el sistema visual desde `DESIGN.md` sin mezclar otra variante.
- Lente: conversion comercial, catalogo, pedido online, productos claros y checkout/pago visible.
- Sesgo de layout: bloques de catalogo, beneficios, promos y conversion box fuerte.
- Tono de CTA: directo, transaccional, orientado a pedir o comprar.
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
