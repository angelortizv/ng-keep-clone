import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'archive', renderMode: RenderMode.Prerender },
  { path: 'trash', renderMode: RenderMode.Prerender },
  { path: 'label/:name', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender }
];
