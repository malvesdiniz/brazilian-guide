import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Brazilian Tourist Guide — A personal travel guide'
  },
  {
    path: 'brazil',
    loadComponent: () => import('./features/brazil/brazil').then((m) => m.Brazil),
    title: 'Brazil | Brazilian Tourist Guide'
  },
  {
    path: 'ceara',
    loadComponent: () => import('./features/ceara/ceara').then((m) => m.Ceara),
    title: 'Ceará | Brazilian Tourist Guide'
  },
  {
    path: 'fortaleza',
    loadComponent: () => import('./features/fortaleza/fortaleza').then((m) => m.Fortaleza),
    title: 'Fortaleza | Brazilian Tourist Guide'
  },
  {
    path: 'destination/:slug',
    loadComponent: () =>
      import('./features/destination/destination-detail').then((m) => m.DestinationDetail),
    title: 'Destination | Brazilian Tourist Guide'
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found | Brazilian Tourist Guide'
  }
];
