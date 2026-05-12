# Previews Hub Landings

Portfolio hub de landings gastronomicas. El proyecto reune 31 landings React Router y publica una seleccion inicial de 10 demos en un hub simple para navegar, abrir y comparar previews deployadas.

## Que Incluye

- Hub publico en `apps/portfolio-hub`.
- 31 landings gastronomicas en `restaurant-templates/`.
- Catalogo de 10 demos en `apps/portfolio-hub/data/landings.json`.
- Comparacion de landings en iframes desde el hub.
- Configuracion para Vercel Monorepos.

## Requisitos

- Node.js 22 o superior.
- npm.

Instalar dependencias:

```bash
npm ci
```

## Hub

El hub esta en:

```text
apps/portfolio-hub
```

Usa este archivo como fuente de datos:

```text
apps/portfolio-hub/data/landings.json
```

Validar datos del hub:

```bash
npm run hub:validate
```

Build del hub:

```bash
npm run hub:build
```

El build genera:

```text
apps/portfolio-hub/dist
```

## Deploy En Vercel

El deploy se hace con proyectos separados:

1. Un proyecto para el hub.
2. Un proyecto por cada landing publica.

Config del hub:

| Setting | Valor |
| --- | --- |
| Root Directory | `apps/portfolio-hub` |
| Framework Preset | `Other` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Config de cada landing:

| Setting | Valor |
| --- | --- |
| Root Directory | carpeta `landing` correspondiente |
| Framework Preset | `React Router` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | default |

Las landings estan configuradas con `ssr: false`, por lo que se publican como sitios estaticos y no crean Serverless Functions en Vercel.

## Landings Publicas

| Proyecto | Root Directory |
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

Si Vercel asigna otro dominio, actualizar `publicUrl` en:

```text
apps/portfolio-hub/data/landings.json
```

Despues redeployar el hub.

## SSR False

`ssr: false` significa que React Router genera una app estatica para el navegador.

En este repo conviene porque las landings no usan datos del servidor, sesiones, cookies ni acciones server-side. El resultado es mas simple para Vercel: archivos estaticos en vez de funciones serverless.

## Comandos

```bash
npm run hub:validate
npm run hub:build
npm run build
npm run typecheck
```

## Estructura

```text
.
|-- apps/
|   `-- portfolio-hub/
|-- base-wireframe/
|-- restaurant-templates/
|   |-- categories.json
|   |-- variants.json
|   `-- <categoria>/<template>/landing/
|-- package.json
|-- package-lock.json
`-- VERCEL.md
```

## Notas

- No subir `node_modules`, `build`, `.react-router`, `.vite` ni `.vercel`.
- El hub muestra URLs ya deployadas; no levanta procesos locales.
- La guia detallada de deploy esta en `VERCEL.md`.
