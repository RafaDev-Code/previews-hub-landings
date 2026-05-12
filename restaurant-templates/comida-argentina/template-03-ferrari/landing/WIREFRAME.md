---
version: alpha
artifact: WIREFRAME.md
structure_key: "landing.comida-argentina.ferrari"
paired_design: "./DESIGN.md"
case_slug: "comida-argentina"
case_label: "Comida argentina"
template_slug: "template-03-ferrari"
variant_slug: "ferrari"
variant_label: "Ferrari"
archetype: "parrilla, bodegon o cocina argentina tradicional"
business_mode: "dine-in"
primary_goal: "reservations"
primary_cta: "Reservar mesa"
secondary_cta: "Ver carta"
tertiary_cta: "Como llegar"
section_7_mode: "Reservas"
menu_categories:
  - "Entradas"
  - "Parrilla"
  - "Minutas"
  - "Pastas"
  - "Postres"
  - "Vinos"
---

# Wireframe Base - Comida argentina / Ferrari

Este archivo es la fuente estructural para esta landing. Consumirlo junto con `DESIGN.md`: este `WIREFRAME.md` manda sobre orden funcional, variables, contenido y conversion; `DESIGN.md` manda sobre color, tipografia, radios, espaciado, componentes y tono visual.

## Intento

- Caso: Comida argentina.
- Arquetipo: parrilla, bodegon o cocina argentina tradicional.
- Variante visual: Ferrari.
- Lente de variante: intensidad premium, dramatismo, energia nocturna y platos con caracter fuerte.
- Objetivo primario: reservations.
- CTA primario: `Reservar mesa`.
- CTA secundario: `Ver carta`.
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
- `promo.label`: menu ejecutivo, tabla para compartir o plato de temporada.
- `conversion.primary_cta`: Reservar mesa.
- `conversion.secondary_cta`: Ver carta.
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

- Slots mobile: logo, categoria corta, `Ver carta`, `Reservar mesa`.
- Slots desktop: logo, links a menu, galeria, reservas, ubicacion y CTA primario.
- Debe resolver navegacion rapida y acceso permanente al menu QR.
- En mobile, si la landing es larga, repetir `Reservar mesa` en una accion sticky o persistente.

### 2. Hero

- Foco de contenido: parrilla encendida, plato abundante o mesa familiar.
- Composicion de variante: hero cinematico de alto contraste con plato o ambiente como impacto inicial.
- Debe mostrar arriba del fold: categoria, nombre, promesa, zona, estado operativo, prueba social y CTA primario.
- Media principal: foto real del producto, local o experiencia; nunca ilustracion generica si existe foto disponible.
- Promo opcional: `promo.label` cerca del CTA si ayuda a convertir sin ensuciar el hero.

### 3. Info Del Local

- Foco: barrio, horarios de cocina, telefono y mapa.
- Bloques minimos: direccion, horarios, contacto, mapa/zona.
- Para delivery o pedido rapido, reemplazar mapa dominante por cobertura, tiempo estimado o retiro.
- Mantener esta seccion escaneable; no convertirla en texto largo.

### 4. Destacados

- Foco: cortes, minutas, empanadas, pastas o platos de bodegon.
- Variante: destacados pocos, potentes y aspiracionales; priorizar signature items.
- Mobile: 4 items maximos antes de `Ver carta`.
- Desktop: 6 items maximos, con precio y descripcion corta.
- Cada item debe tener: `name`, `price`, `description`, `tag` opcional, `image` opcional.
- Si el objetivo es pedido, incluir accion por item: agregar, pedir o consultar.

### 5. Galeria

- Foco: parrilla, porciones, sobremesa, vino y salon.
- Variante: fotos dramaticas, close-ups, fuego, barra o movimiento.
- Debe validar el producto y el ambiente; no repetir las mismas fotos de destacados.
- Mobile: grilla compacta, scroll natural.
- Desktop: grilla mas expresiva, pero sin desplazar el CTA principal demasiado abajo.

### 6. Menu QR

- Funcion: puente a pantalla secundaria `qr.menu-list`.
- Categorias base:
- Entradas
- Parrilla
- Minutas
- Pastas
- Postres
- Vinos
- Debe incluir: mini QR o icono, descripcion de categorias, accion `Ver carta` y opcion de compartir/WhatsApp si aplica.
- El menu QR debe ser mobile-first, con tabs horizontales, lista por categoria, precio visible y CTA final.

### 7. Reservas

- Funcion: reserva simple con comensales; destacar mesas grandes y grupos.
- Si `business_mode` es `dine-in` o `nightlife`: usar fecha, hora, comensales y contacto.
- Si `business_mode` es pedido/delivery/pickup: usar cantidad, entrega/retiro, zona y CTA de pedido.
- Mostrar WhatsApp como salida de baja friccion, no como unica opcion si el template sugiere checkout.

### 8. CTA Final

- Mensaje: Cerrar con calidez barrial y promesa de mesa servida.
- Debe repetir CTA primario y secundario.
- Debe incluir una ultima senal operativa: horario, zona, entrega, reserva o promocion vigente.
- Evitar claims genericos; cerrar con una accion concreta.

## Reglas De Variante

- Aplicar el sistema visual desde `DESIGN.md` sin mezclar otra variante.
- Lente: intensidad premium, dramatismo, energia nocturna y platos con caracter fuerte.
- Sesgo de layout: menos items por bloque, mas impacto visual, CTAs precisos y tono premium.
- Tono de CTA: seguro, intenso, de ocasion especial.
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
