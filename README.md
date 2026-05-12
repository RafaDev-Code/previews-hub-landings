# Previews Hub Landings

Workspace de portfolio con 31 previews de landings gastronomicas y un hub local para buscarlas, abrirlas y compararlas rapido.

## Que incluye

- `restaurant-templates/`: workspace npm con todas las variantes de landings.
- `restaurant-templates/tools/preview-hub.mjs`: dashboard local de previews.
- `base-wireframe/`: wireframes y referencias base.
- `restaurant-templates/categories.json`: etiquetas de categorias.
- `restaurant-templates/variants.json`: catalogo de categorias y variantes que usa el hub.

## Requisitos

- Node.js 22 o superior.
- npm.

Si usas `nvm`, podes tomar la version sugerida del repo:

```bash
nvm use
```

## Uso local

```bash
npm ci
npm run preview:hub
```

Abrir la URL que imprime la terminal, normalmente:

```text
http://127.0.0.1:5170/
```

El hub inicia cada landing bajo demanda, asi que no hace falta correr las 31 previews al mismo tiempo.

## Comandos utiles

Correr el hub:

```bash
npm run preview:hub
```

Correr el hub e iniciar todas las landings:

```bash
npm run preview:all
```

Build de todas las landings:

```bash
npm run build
```

Typecheck de todas las landings:

```bash
npm run typecheck
```

## Notas de deploy

Este repo queda preparado para usarse como monorepo en Vercel. Cada landing se importa como un proyecto separado usando su carpeta `landing` como Root Directory.

Ver detalles en [VERCEL.md](./VERCEL.md).

El hub de previews sigue pensado como herramienta local de portfolio y trabajo. Levanta varios dev servers de React Router en puertos locales y los compara en iframes.

Para un deploy publico de portfolio, el proximo paso mas limpio es publicar una app de showcase en produccion que:

- sirva capturas estaticas y links a demos seleccionadas, o
- despliegue cada landing como app publica y apunte el hub a esas URLs.

Render puede correr un servicio Node, pero expone un solo puerto HTTP publico por servicio. Por eso este flujo local multi-puerto no conviene desplegarlo tal como esta.
