---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.bares.spotify"
paired_design: "./DESIGN.md"
case_slug: "bares"
case_label: "Bares"
template_slug: "template-01-spotify"
variant_slug: "spotify"
variant_label: "Spotify"
archetype: "bar, cocteleria, vermuteria o espacio nocturno"
business_mode: "nightlife"
primary_goal: "reservations-events"
primary_cta: "Reservar mesa"
secondary_cta: "Ver tragos"
tertiary_cta: "Agenda"
section_7_mode: "Reservas y eventos"
menu_categories:
  - "Cocteles"
  - "Vermut"
  - "Tapas"
  - "Cervezas"
  - "Sin alcohol"
---

# Wireframe Base - Bares / Spotify

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Bares.
- Arquetipo: bar, cocteleria, vermuteria o espacio nocturno.
- Variante visual: Spotify.
- Lente de variante: ambiente nocturno, musica, agenda, energia urbana y contenido cultural.
- Objetivo primario: reservations-events.
- CTA primario: `Reservar mesa`.
- CTA secundario: `Ver tragos`.
- CTA terciario: `Agenda`.

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
- `promo.label`: happy hour, noche tematica, DJ set o trago invitado.
- `conversion.primary_cta`: Reservar mesa.
- `conversion.secondary_cta`: Ver tragos.
- `conversion.tertiary_cta`: Agenda.
- `menu.categories`: categorias del menu QR.
- `menu.featured_items`: 4 items mobile, 6 items desktop.
- `gallery.items`: 6 a 10 imagenes reales o placeholders descriptivos.
- `operations.mode`: nightlife.

## Orden Funcional Fijo

1. Header
2. Hero
3. Info del local
4. Destacados
5. Galeria
6. Menu QR
7. Reservas y eventos
8. CTA final

El orden no se cambia entre variantes. La composicion, densidad y enfasis si pueden cambiar para respetar el `DESIGN.md`.

## Blueprint De Secciones

### 1. Header

- Slots mobile: logo, categoria corta, `Ver tragos`, `Reservar mesa`.
- Slots desktop: logo, links a menu, galeria, reservas y eventos, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Reservar mesa` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: barra, luces bajas, coctel insignia o grupo en mesa.
- Composicion de variante: hero inmersivo con barra o evento, rating y agenda visible.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: horarios nocturnos, direccion, reservas, edad/condiciones si aplica.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: tragos de autor, tapas, happy hour y bebidas sin alcohol.
- Variante: tragos/tapas/eventos como tracks o playlists de la noche.
- Mobile: 4 items maximos antes de `Ver tragos`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: barra, DJ/musica, cocteles, gente y detalles de luz.
- Variante: ambiente oscuro, publico, musica, tragos y escenario/barra.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Cocteles
- Vermut
- Tapas
- Cervezas
- Sin alcohol
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Ver tragos` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Reservas y eventos

- Funcion: reserva con dia, hora, cantidad y nota para evento/cumpleanos.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con clima nocturno, reserva y agenda visible.
- Debe repetir CTA primario y secundario.
- Debe incluir una ultima senal operativa: horario, zona, entrega, reserva o promocion vigente.
- Evitar claims genericos; cerrar con una accion concreta.

## Reglas De Variante

- Aplicar el sistema visual desde `DESIGN.md` sin mezclar otra variante.
- Lente: ambiente nocturno, musica, agenda, energia urbana y contenido cultural.
- Sesgo de layout: secciones inmersivas, bloques de agenda, foco en experiencia nocturna.
- Tono de CTA: venir hoy, reservar, escuchar/ver agenda.
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
