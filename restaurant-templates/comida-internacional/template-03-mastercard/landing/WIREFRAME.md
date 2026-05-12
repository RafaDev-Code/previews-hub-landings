---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.comida-internacional.mastercard"
paired_design: "./DESIGN.md"
case_slug: "comida-internacional"
case_label: "Comida internacional"
template_slug: "template-03-mastercard"
variant_slug: "mastercard"
variant_label: "Mastercard"
archetype: "restaurante de cocina internacional, fusion o experiencia tematica"
business_mode: "dine-in"
primary_goal: "reservations-menu"
primary_cta: "Reservar mesa"
secondary_cta: "Ver menu"
tertiary_cta: "Como llegar"
section_7_mode: "Reservas"
menu_categories:
  - "Entradas"
  - "Especialidades"
  - "Degustacion"
  - "Postres"
  - "Bebidas"
---

# Wireframe Base - Comida internacional / Mastercard

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Comida internacional.
- Arquetipo: restaurante de cocina internacional, fusion o experiencia tematica.
- Variante visual: Mastercard.
- Lente de variante: confianza, calidez, pagos, promociones y beneficios faciles de entender.
- Objetivo primario: reservations-menu.
- CTA primario: `Reservar mesa`.
- CTA secundario: `Ver menu`.
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
- `promo.label`: menu degustacion, noche tematica o recomendacion del chef.
- `conversion.primary_cta`: Reservar mesa.
- `conversion.secondary_cta`: Ver menu.
- `conversion.tertiary_cta`: Como llegar.
- `menu.categories`: categorias del menu QR.
- `menu.featured_items`: 4 items mobile, 6 items desktop.
- `gallery.items`: 6 a 10 imagenes reales o placeholders descriptivos.
- `operations.mode`: dine-in.

## Orden Funcional Fijo

1. Header
2. Hero
3. Info del local
4. Destacados
5. Galeria
6. Menu QR
7. Reservas
8. CTA final

El orden no se cambia entre variantes. La composicion, densidad y enfasis si pueden cambiar para respetar el `DESIGN.md`.

## Blueprint De Secciones

### 1. Header

- Slots mobile: logo, categoria corta, `Ver menu`, `Reservar mesa`.
- Slots desktop: logo, links a menu, galeria, reservas, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Reservar mesa` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: plato signature, origen culinario, experiencia y mesa cuidada.
- Composicion de variante: hero claro con beneficio, medio de pago/promo y experiencia segura.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: ubicacion, horarios, reservas, opciones vegetarianas/alergenos si aplica.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: especialidades, degustacion, platos para compartir y bebidas.
- Variante: destacados organizados por beneficio: recomendados, promos, para compartir.
- Mobile: 4 items maximos antes de `Ver menu`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: platos, ingredientes, cocina, salon y detalles culturales.
- Variante: experiencia amable, mesas, producto y senales de confianza.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Entradas
- Especialidades
- Degustacion
- Postres
- Bebidas
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Ver menu` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Reservas

- Funcion: reserva con fecha, hora, comensales y nota de preferencias.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con experiencia, especialidad y reserva clara.
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
