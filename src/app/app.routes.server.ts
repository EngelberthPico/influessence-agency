import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'servicios', renderMode: RenderMode.Prerender },
  { path: 'politica-de-privacidad', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
