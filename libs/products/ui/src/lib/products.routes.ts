import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { ProductsDataAccessModule } from '@workshop/products-data-access';

const providers = [
  importProvidersFrom(ProductsDataAccessModule)
];

export const productsRoutes: Route[] = [
  { path: '', providers, children: [
    { path: 'list', loadComponent: () => import('./components').then((m) => m.ListComponent) },
    { path: 'add', loadComponent: () => import('./components').then((m) => m.AddComponent) },
    { path: 'edit/:id', loadComponent: () => import('./components').then((m) => m.EditComponent) },
    { path: '**', redirectTo: 'list' }
  ] }
];
