# Zyntra

Landing page de un proyecto universitario ficticio inspirado en Rick and Morty. Está hecha con React, Vite y TypeScript.

## Ejecutar en local

Con Node.js instalado, abre una terminal en esta carpeta y ejecuta:

```bash
npm ci
npm run dev
```

Para generar y probar la versión de producción:

```bash
npm run build
npm run preview
```

Abre la dirección que muestra Vite. La compilación se guarda en `dist/` y se sirve por HTTP.

En Vercel, el comando de compilación es `npm run build` y el directorio de salida es `dist`. Este comando incluye el contenido de la landing en el HTML inicial. Si cambia la URL pública, actualízala en `index.html`, `public/robots.txt` y `public/sitemap.xml`.

React genera el HTML durante la compilación. En producción solo se envía el JavaScript del menú y del consentimiento. Las fuentes WOFF2 y sus licencias SIL Open Font License están en `public/fonts/`.

- Los textos, las imágenes y el enlace al formulario de HubSpot se configuran en `src/content.ts`.
- Los colores y las fuentes se definen en `src/index.css`.
- El consentimiento de cookies y la etiqueta de Google Tag Manager se configuran en `index.html`.
