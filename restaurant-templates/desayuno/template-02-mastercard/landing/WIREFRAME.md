---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.desayuno.mastercard"
paired_design: "./DESIGN.md"
case_slug: "desayuno"
case_label: "Desayuno"
template_slug: "template-02-mastercard"
variant_slug: "mastercard"
variant_label: "Mastercard"
archetype: "desayunos, brunch, panaderia o cafeteria matinal"
business_mode: "morning-order"
primary_goal: "breakfast-orders"
primary_cta: "Pedir desayuno"
secondary_cta: "Ver combos"
tertiary_cta: "Horarios"
section_7_mode: "Pedido o brunch"
menu_categories:
  - "Combos"
  - "Cafe"
  - "Panificados"
  - "Tostados"
  - "Jugos"
---

# Wireframe Base - Desayuno / Mastercard

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Desayuno.
- Arquetipo: desayunos, brunch, panaderia o cafeteria matinal.
- Variante visual: Mastercard.
- Lente de variante: confianza, calidez, pagos, promociones y beneficios faciles de entender.
- Objetivo primario: breakfast-orders.
- CTA primario: `Pedir desayuno`.
- CTA secundario: `Ver combos`.
- CTA terciario: `Horarios`.

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
- `promo.label`: combo desayuno, brunch de fin de semana o promo take away.
- `conversion.primary_cta`: Pedir desayuno.
- `conversion.secondary_cta`: Ver combos.
- `conversion.tertiary_cta`: Horarios.
- `menu.categories`: categorias del menu QR.
- `menu.featured_items`: 4 items mobile, 6 items desktop.
- `gallery.items`: 6 a 10 imagenes reales o placeholders descriptivos.
- `operations.mode`: morning-order.

## Orden Funcional Fijo

1. Header
2. Hero
3. Info del local
4. Destacados
5. Galeria
6. Menu QR
7. Pedido o brunch
8. CTA final

El orden no se cambia entre variantes. La composicion, densidad y enfasis si pueden cambiar para respetar el `DESIGN.md`.

## Blueprint De Secciones

### 1. Header

- Slots mobile: logo, categoria corta, `Ver combos`, `Pedir desayuno`.
- Slots desktop: logo, links a menu, galeria, pedido o brunch, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Pedir desayuno` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: combo de desayuno, cafe, medialunas, tostado o mesa de brunch.
- Composicion de variante: hero claro con beneficio, medio de pago/promo y experiencia segura.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: horarios tempranos, retiro, delivery, reserva brunch y zona.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: combos, panificados, cafes, jugos y opciones saludables.
- Variante: destacados organizados por beneficio: recomendados, promos, para compartir.
- Mobile: 4 items maximos antes de `Ver combos`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: mesa de desayuno, producto fresco, cafe y packaging.
- Variante: experiencia amable, mesas, producto y senales de confianza.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Combos
- Cafe
- Panificados
- Tostados
- Jugos
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Ver combos` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Pedido o brunch

- Funcion: selector de combo, horario de retiro/entrega y cantidad.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con frescura, disponibilidad temprano y pedido simple.
- Debe repetir CTA primario y secundario.
- Debe incluir una ultima senal operativa: horario, zona, entrega, reserva o promocion vigente.
- Evitar claims genericos; cerrar con una accion concreta.

## Reglas De Variante

- Aplicar el sistema visual desde `DESIGN.md` sin mezclar otra variante.
- Lente: confianza, calidez, pagos, promociones y beneficios faciles de entender.
- Sesgo de layout: jerarquia ordenada, beneficios visibles, medios de pago y promociones cerca del CTA.
- Tono de CTA: confiable, simple, conveniente.
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
