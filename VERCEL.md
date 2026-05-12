# Deploy en Vercel

Este repo esta preparado para Vercel Monorepos con npm workspaces. El portfolio publico y cada landing se deployan como proyectos separados dentro del mismo repositorio.

## Configuracion recomendada

En Vercel Dashboard:

1. Add New -> Project.
2. Importar este repositorio.
3. Elegir la landing en `Root Directory`.
4. Framework Preset: `React Router` si aparece; si no, dejar autodeteccion.
5. Build Command: `npm run build`.
6. Install Command: default. No usar comandos `npm install --prefix=...` copiados de otro proyecto.
7. Output Directory: default.
8. Node.js Version: 22.x.

Repetir el flujo para el hub publico y para cada landing publica que quieras mostrar.

Vercel puede crear un proyecto por cada directorio del monorepo. Para este portfolio, el primer corte recomendado es `1 hub publico + 10 landings`.

## Hub publico

| Proyecto sugerido | Root Directory |
| --- | --- |
| `previews-hub-landings` | `apps/portfolio-hub` |

Config del hub publico:

| Setting | Valor |
| --- | --- |
| Framework Preset | `Other` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

El JSON ya trae URLs esperadas tipo `https://<projectName>.vercel.app`. Despues de deployar las landings, revisar que esas URLs coincidan con las URLs reales en:

```text
apps/portfolio-hub/data/landings.json
```

Luego redeployar el hub publico.

## Primeras 10 landings

| Proyecto sugerido | Root Directory |
| --- | --- |
| `restaurantes-airbnb` | `restaurant-templates/restaurantes/template-01-airbnb/landing` |
| `comida-argentina-mastercard` | `restaurant-templates/comida-argentina/template-02-mastercard/landing` |
| `comida-rapida-uber` | `restaurant-templates/comida-rapida/template-01-uber/landing` |
| `comida-delivery-shopify` | `restaurant-templates/comida-delivery/template-02-shopify/landing` |
| `bares-spotify` | `restaurant-templates/bares/template-01-spotify/landing` |
| `cafeteria-notion` | `restaurant-templates/cafeteria/template-02-notion/landing` |
| `desayuno-airbnb` | `restaurant-templates/desayuno/template-03-airbnb/landing` |
| `bebidas-pinterest` | `restaurant-templates/bebidas/template-03-pinterest/landing` |
| `helados-clay` | `restaurant-templates/helados/template-01-clay/landing` |
| `comida-internacional-mastercard` | `restaurant-templates/comida-internacional/template-03-mastercard/landing` |

Config de cada landing:

| Setting | Valor |
| --- | --- |
| Framework Preset | `React Router` |
| Build Command | `npm run build` |
| Output Directory | default |

## Root directories

| Proyecto sugerido | Root Directory |
| --- | --- |
| `restaurantes-airbnb` | `restaurant-templates/restaurantes/template-01-airbnb/landing` |
| `restaurantes-pinterest` | `restaurant-templates/restaurantes/template-02-pinterest/landing` |
| `restaurantes-shopify` | `restaurant-templates/restaurantes/template-03-shopify/landing` |
| `comida-argentina-airbnb` | `restaurant-templates/comida-argentina/template-01-airbnb/landing` |
| `comida-argentina-mastercard` | `restaurant-templates/comida-argentina/template-02-mastercard/landing` |
| `comida-argentina-ferrari` | `restaurant-templates/comida-argentina/template-03-ferrari/landing` |
| `comida-rapida-uber` | `restaurant-templates/comida-rapida/template-01-uber/landing` |
| `comida-rapida-shopify` | `restaurant-templates/comida-rapida/template-02-shopify/landing` |
| `comida-rapida-starbucks` | `restaurant-templates/comida-rapida/template-03-starbucks/landing` |
| `comida-delivery-uber` | `restaurant-templates/comida-delivery/template-01-uber/landing` |
| `comida-delivery-shopify` | `restaurant-templates/comida-delivery/template-02-shopify/landing` |
| `comida-delivery-starbucks` | `restaurant-templates/comida-delivery/template-03-starbucks/landing` |
| `bares-spotify` | `restaurant-templates/bares/template-01-spotify/landing` |
| `bares-raycast` | `restaurant-templates/bares/template-02-raycast/landing` |
| `bares-the-verge` | `restaurant-templates/bares/template-02-the-verge/landing` |
| `bares-ferrari` | `restaurant-templates/bares/template-03-ferrari/landing` |
| `cafeteria-starbucks` | `restaurant-templates/cafeteria/template-01-starbucks/landing` |
| `cafeteria-notion` | `restaurant-templates/cafeteria/template-02-notion/landing` |
| `cafeteria-mastercard` | `restaurant-templates/cafeteria/template-03-mastercard/landing` |
| `desayuno-starbucks` | `restaurant-templates/desayuno/template-01-starbucks/landing` |
| `desayuno-mastercard` | `restaurant-templates/desayuno/template-02-mastercard/landing` |
| `desayuno-airbnb` | `restaurant-templates/desayuno/template-03-airbnb/landing` |
| `bebidas-starbucks` | `restaurant-templates/bebidas/template-01-starbucks/landing` |
| `bebidas-shopify` | `restaurant-templates/bebidas/template-02-shopify/landing` |
| `bebidas-pinterest` | `restaurant-templates/bebidas/template-03-pinterest/landing` |
| `helados-clay` | `restaurant-templates/helados/template-01-clay/landing` |
| `helados-figma` | `restaurant-templates/helados/template-02-figma/landing` |
| `helados-pinterest` | `restaurant-templates/helados/template-03-pinterest/landing` |
| `comida-internacional-airbnb` | `restaurant-templates/comida-internacional/template-01-airbnb/landing` |
| `comida-internacional-pinterest` | `restaurant-templates/comida-internacional/template-02-pinterest/landing` |
| `comida-internacional-mastercard` | `restaurant-templates/comida-internacional/template-03-mastercard/landing` |

## Demos recomendadas para empezar

Si preferis empezar mas chico que 10, arrancaria con estas:

| Caso | Root Directory |
| --- | --- |
| Restaurante visual | `restaurant-templates/restaurantes/template-01-airbnb/landing` |
| Delivery/pedido | `restaurant-templates/comida-delivery/template-01-uber/landing` |
| Bar nocturno | `restaurant-templates/bares/template-01-spotify/landing` |
| Cafeteria limpia | `restaurant-templates/cafeteria/template-02-notion/landing` |
| Helados/producto | `restaurant-templates/helados/template-01-clay/landing` |
| Cocina internacional | `restaurant-templates/comida-internacional/template-03-mastercard/landing` |
