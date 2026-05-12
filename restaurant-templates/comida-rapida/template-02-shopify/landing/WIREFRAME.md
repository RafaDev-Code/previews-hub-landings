---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.comida-rapida.shopify"
paired_design: "./DESIGN.md"
case_slug: "comida-rapida"
case_label: "Comida rapida"
template_slug: "template-02-shopify"
variant_slug: "shopify"
variant_label: "Shopify"
archetype: "fast food, hamburgueseria, pizzeria al paso o local de combos"
business_mode: "quick-order"
primary_goal: "orders"
primary_cta: "Pedir ahora"
secondary_cta: "Ver combos"
tertiary_cta: "Sucursales"
section_7_mode: "Pedido rapido"
menu_categories:
  - "Combos"
  - "Hamburguesas"
  - "Papas y sides"
  - "Bebidas"
  - "Postres"
---

# Wireframe Base - Comida rapida / Shopify

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Comida rapida.
- Arquetipo: fast food, hamburgueseria, pizzeria al paso o local de combos.
- Variante visual: Shopify.
- Lente de variante: conversion comercial, catalogo, pedido online, productos claros y checkout/pago visible.
- Objetivo primario: orders.
- CTA primario: `Pedir ahora`.
- CTA secundario: `Ver combos`.
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
- `promo.label`: combo del dia, 2x1, envio gratis o upgrade por tiempo limitado.
- `conversion.primary_cta`: Pedir ahora.
- `conversion.secondary_cta`: Ver combos.
- `conversion.tertiary_cta`: Sucursales.
- `menu.categories`: categorias del menu QR.
- `menu.featured_items`: 4 items mobile, 6 items desktop.
- `gallery.items`: 6 a 10 imagenes reales o placeholders descriptivos.
- `operations.mode`: quick-order.

## Orden Funcional Fijo

1. Header
2. Hero
3. Info del local
4. Destacados
5. Galeria
6. Menu QR
7. Pedido rapido
8. CTA final

El orden no se cambia entre variantes. La composicion, densidad y enfasis si pueden cambiar para respetar el `DESIGN.md`.

## Blueprint De Secciones

### 1. Header

- Slots mobile: logo, categoria corta, `Ver combos`, `Pedir ahora`.
- Slots desktop: logo, links a menu, galeria, pedido rapido, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Pedir ahora` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: combo principal, producto en primer plano y precio gancho.
- Composicion de variante: hero con oferta o producto principal, precio/beneficio y CTA de compra/pedido.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: sucursal, horarios, retiro, delivery y medios de pago.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: combos, promos, productos mas vendidos y upgrades.
- Variante: cards de producto con precio, variante, cantidad y accion directa.
- Mobile: 4 items maximos antes de `Ver combos`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: producto, packaging, papas, bebida y textura close-up.
- Variante: producto y packaging con foco comercial; menos ambiente, mas compra.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Combos
- Hamburguesas
- Papas y sides
- Bebidas
- Postres
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Ver combos` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Pedido rapido

- Funcion: selector de combo, cantidad, retiro/delivery y WhatsApp/app como salida.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con accion inmediata y cero friccion.
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
