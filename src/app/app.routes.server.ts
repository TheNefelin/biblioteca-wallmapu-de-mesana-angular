import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'book-details/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { id: '0' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
