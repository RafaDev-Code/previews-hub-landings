# Biblioteca de Disenos

Indice central para elegir y consumir landings por caso de uso. La fuente de los sistemas visuales es `getdesign.md`; cada variante vive en su propia carpeta `landing` y contiene su `DESIGN.md` correspondiente.

Fuente base: https://getdesign.md/

## Flujo de consumo

1. Leer este archivo.
2. Elegir el caso que mejor encaja con el pedido del usuario.
3. Elegir una de las 3 variantes recomendadas.
4. Abrir `restaurant-templates/<caso>/<template>/landing/DESIGN.md`.
5. Implementar la landing respetando ese sistema visual y el flujo funcional de `base-wireframe`.

## Casos y variantes

| Caso | Variante 1 | Variante 2 | Variante 3 |
| --- | --- | --- | --- |
| Restaurantes | Airbnb | Pinterest | Shopify |
| Comida argentina | Airbnb | Mastercard | Ferrari |
| Comida rapida | Uber | Shopify | Starbucks |
| Comida delivery | Uber | Shopify | Starbucks |
| Bares | Spotify | The Verge | Ferrari |
| Cafeteria | Starbucks | Notion | Mastercard |
| Desayuno | Starbucks | Mastercard | Airbnb |
| Bebidas | Starbucks | Shopify | Pinterest |
| Helados | Clay | Figma | Pinterest |
| Comida internacional | Airbnb | Pinterest | Mastercard |

## Rutas

| Caso | Template | Ruta |
| --- | --- | --- |
| Restaurantes | Airbnb | `restaurant-templates/restaurantes/template-01-airbnb/landing` |
| Restaurantes | Pinterest | `restaurant-templates/restaurantes/template-02-pinterest/landing` |
| Restaurantes | Shopify | `restaurant-templates/restaurantes/template-03-shopify/landing` |
| Comida argentina | Airbnb | `restaurant-templates/comida-argentina/template-01-airbnb/landing` |
| Comida argentina | Mastercard | `restaurant-templates/comida-argentina/template-02-mastercard/landing` |
| Comida argentina | Ferrari | `restaurant-templates/comida-argentina/template-03-ferrari/landing` |
| Comida rapida | Uber | `restaurant-templates/comida-rapida/template-01-uber/landing` |
| Comida rapida | Shopify | `restaurant-templates/comida-rapida/template-02-shopify/landing` |
| Comida rapida | Starbucks | `restaurant-templates/comida-rapida/template-03-starbucks/landing` |
| Comida delivery | Uber | `restaurant-templates/comida-delivery/template-01-uber/landing` |
| Comida delivery | Shopify | `restaurant-templates/comida-delivery/template-02-shopify/landing` |
| Comida delivery | Starbucks | `restaurant-templates/comida-delivery/template-03-starbucks/landing` |
| Bares | Spotify | `restaurant-templates/bares/template-01-spotify/landing` |
| Bares | The Verge | `restaurant-templates/bares/template-02-the-verge/landing` |
| Bares | Ferrari | `restaurant-templates/bares/template-03-ferrari/landing` |
| Cafeteria | Starbucks | `restaurant-templates/cafeteria/template-01-starbucks/landing` |
| Cafeteria | Notion | `restaurant-templates/cafeteria/template-02-notion/landing` |
| Cafeteria | Mastercard | `restaurant-templates/cafeteria/template-03-mastercard/landing` |
| Desayuno | Starbucks | `restaurant-templates/desayuno/template-01-starbucks/landing` |
| Desayuno | Mastercard | `restaurant-templates/desayuno/template-02-mastercard/landing` |
| Desayuno | Airbnb | `restaurant-templates/desayuno/template-03-airbnb/landing` |
| Bebidas | Starbucks | `restaurant-templates/bebidas/template-01-starbucks/landing` |
| Bebidas | Shopify | `restaurant-templates/bebidas/template-02-shopify/landing` |
| Bebidas | Pinterest | `restaurant-templates/bebidas/template-03-pinterest/landing` |
| Helados | Clay | `restaurant-templates/helados/template-01-clay/landing` |
| Helados | Figma | `restaurant-templates/helados/template-02-figma/landing` |
| Helados | Pinterest | `restaurant-templates/helados/template-03-pinterest/landing` |
| Comida internacional | Airbnb | `restaurant-templates/comida-internacional/template-01-airbnb/landing` |
| Comida internacional | Pinterest | `restaurant-templates/comida-internacional/template-02-pinterest/landing` |
| Comida internacional | Mastercard | `restaurant-templates/comida-internacional/template-03-mastercard/landing` |

## Criterio de seleccion

- **Airbnb**: experiencias gastronomicas calidas, fotografia grande, confianza y reservas.
- **Pinterest**: menus visuales, discovery, grillas tipo moodboard y productos antojables.
- **Shopify**: compra online, pedidos, conversion, catalogo y flujo comercial.
- **Uber**: delivery, rapidez urbana, acciones directas y experiencia mobile-first.
- **Starbucks**: cafe, bebidas, desayuno, pedidos frecuentes, loyalty y retail cercano.
- **Mastercard**: confianza, calidez, pagos, promociones y tono accesible.
- **Ferrari**: energia, intensidad nocturna, parrilla potente, rojo y performance.
- **Spotify**: bares musicales, oscuros, urbanos, contenido y ambiente nocturno.
- **The Verge**: bares editoriales, cultura, grafica intensa y alto contraste.
- **Notion**: cafeteria minimal, limpia, editorial suave y ordenada.
- **Clay**: heladerias creativas, organic shapes, color suave y direccion de arte.
- **Figma**: heladerias coloridas, sistema visual flexible, modulos y juego.

## Reglas globales

- No mezclar variantes dentro de una misma landing salvo pedido explicito.
- Si el usuario pide un caso, usar una de sus 3 variantes antes de buscar otra.
- Si el pedido combina casos, priorizar el flujo principal: delivery usa Uber/Shopify; cafeteria usa Starbucks/Notion; experiencia local usa Airbnb/Pinterest.
- Toda variante debe tener `landing/DESIGN.md`.
- La landing puede usar la estructura de `base-wireframe`, pero el estilo visual sale del `DESIGN.md` de la variante elegida.

## Nota de compatibilidad

Existe `restaurant-templates/bares/template-02-raycast/landing` como template previo con codigo de app. No forma parte de la matriz nueva de 3 variantes para bares, pero se conserva para no perder trabajo existente.
