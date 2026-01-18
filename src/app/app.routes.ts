import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'year-setup',
    loadComponent: () => import('./pages/year-setup/year-setup.page').then( m => m.YearSetupPage)
  },
  {
    path: 'board',
    loadComponent: () => import('./pages/board/board.page').then( m => m.BoardPage)
  },
  {
    path: 'intention',
    loadComponent: () => import('./pages/intention/intention.page').then( m => m.IntentionPage)
  },
  {
    path: 'add-moment',
    loadComponent: () => import('./pages/add-moment/add-moment.page').then( m => m.AddMomentPage)
  },
  {
    path: 'year-reflection',
    loadComponent: () => import('./pages/year-reflection/year-reflection.page').then( m => m.YearReflectionPage)
  },

];
