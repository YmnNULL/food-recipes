import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'specificFood/:id',
        renderMode: RenderMode.Server
    },
    {
        path: 'specialDish/:id',
        renderMode: RenderMode.Server
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender
    }
];
