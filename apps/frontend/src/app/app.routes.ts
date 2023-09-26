import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', loadChildren: () => import('@workshop/products-ui').then((m) => m.productsRoutes) },
];
