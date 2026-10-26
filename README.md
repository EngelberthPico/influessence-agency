# Influessence Agency

Sitio web de **Influessence Agency** ([influessenceagency.com](https://influessenceagency.com)), una agencia de estrategia de contenido, edición de video y diseño y desarrollo web. El sitio está en español y dirigido a público de Estados Unidos.

## Tecnologías

- **Angular 22.2.0** (standalone components, sin NgModules)
- **TypeScript 6.0.2**
- **RxJS 7.8**
- **Express 5.1** — motor de renderizado en el servidor durante la compilación

El proyecto usa el modo `outputMode: "static"` de Angular (`angular.json`), combinado con SSR (`src/server.ts`) para prerenderizar las páginas. El resultado de la compilación son archivos HTML, CSS y JS estáticos, listos para publicarse en cualquier hosting sin necesidad de un servidor Node en producción.

## Requisitos

- **Node.js**: `^22.22.3 || ^24.15.0 || >=26.0.0` (requerido por Angular CLI)
- **npm**: `11.17.0` (ver campo `packageManager` en `package.json`)

## Cómo correrlo en local

Instalar dependencias:

```bash
npm install
```

Levantar el servidor de desarrollo:

```bash
npm start
```

El sitio queda disponible en `http://localhost:4200/` y se recarga automáticamente al guardar cambios.

Compilar para producción:

```bash
npm run build
```

El resultado compilado queda en `dist/influessence-agency/browser/`. Esos son los archivos que se publican.

## Cómo publicar un cambio

1. Compilar el proyecto con `npm run build`.
2. Tomar el contenido de `dist/influessence-agency/browser/`.
3. Subir ese contenido al directorio público del hosting, reemplazando los archivos anteriores.
4. Verificar que el sitio cargue correctamente en `https://influessenceagency.com`.

## Estructura del proyecto

Dentro de `src/app/`:

- **`pages/`** — páginas enrutadas del sitio:
  - `home` — página principal; compone todas las secciones (hero, servicios, proceso, FAQ, etc.).
  - `servicios` — página de paquetes y precios de los tres servicios (estrategia de contenido, edición de video, diseño y desarrollo web), con botones de pago/contacto.
  - `politica-de-privacidad` — política de privacidad (uso de Google Analytics, cookies y procesamiento de pagos vía Stripe).
- **`sections/`** — bloques de contenido que se insertan en las páginas:
  - `hero` — carrusel principal de imágenes y llamado a la acción inicial.
  - `reto` — tarjetas que describen los problemas comunes que resuelve la agencia (contenido sin dirección, web desactualizada, oportunidades perdidas).
  - `servicios-teaser` — resumen de los tres servicios con enlace a la página de servicios.
  - `diferenciador` — mensaje sobre el enfoque estratégico de la agencia ("no hacemos contenido por hacer contenido").
  - `proceso` — pasos del proceso de trabajo con un cliente.
  - `por-que-nosotros` — argumentos de por qué contratar a la agencia.
  - `sobre-nosotros` — presentación del equipo, con video.
  - `faq` — preguntas frecuentes en acordeón.
- **`components/`** — piezas reutilizables en varias páginas: `header`, `footer`, `cta-section` (bloque de llamado a la acción final) y `whatsapp-button` (botón flotante de WhatsApp).
- **`shared/`** — utilidades transversales: `seo.ts` (título/descripción por ruta), `meta-pixel.ts` (eventos del Meta Pixel), `reveal.ts` y `tilt-3d.ts` (animaciones al hacer scroll/hover) y `sparkle.ts` (decoración visual).

## Dónde se edita cada cosa

- **Precios y enlaces de pago (Stripe)**: `src/app/pages/servicios/servicios.ts` (propiedad `stripeUrl` de cada paquete; los enlaces son de `buy.stripe.com`, de uso público).
- **Número y enlaces de WhatsApp**: aparecen en varios archivos con el mismo número `+14077156067` — `src/app/components/whatsapp-button/whatsapp-button.html`, `src/app/components/footer/footer.html`, `src/app/components/cta-section/cta-section.html`, `src/app/sections/hero/hero.ts` y `src/app/pages/servicios/servicios.ts`.
- **Preguntas frecuentes**: `src/app/sections/faq/faq.ts` (arreglo `faqs`).
- **Título y descripción de cada página**: `src/app/app.routes.ts` (propiedades `title` y `data.description` de cada ruta). El título y descripción de la página de inicio también deben actualizarse en `src/index.html` (metadatos `<title>`, `description`, Open Graph y Twitter) si cambian.
- **`sitemap.xml` y `robots.txt`**: en `public/sitemap.xml` y `public/robots.txt`.

## Medición y publicidad

- **Google Tag Manager**: instalado en `src/index.html` (contenedor `GTM-5W6F2867`).
- **Meta Pixel**: instalado en `src/index.html` (pixel `1367550412117051`) y controlado desde `src/app/shared/meta-pixel.ts`. Envía el evento `PageView` al cargar el sitio y al cambiar de ruta, y el evento `Contact` cada vez que alguien hace clic en un enlace de WhatsApp (lógica en `src/app/app.ts`).
- El sitio incluye datos estructurados (JSON-LD de tipo `MarketingAgency`) y etiquetas Open Graph/Twitter para que los enlaces se vean bien al compartirse en redes sociales, ambos en `src/index.html`.

## Mantenimiento recomendado

- Revisar una vez al mes que el botón de WhatsApp, los enlaces de contacto y los enlaces de pago de Stripe funcionen correctamente.
- Mantener las dependencias de `package.json` actualizadas.
