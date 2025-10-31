import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'admin',
    component: Login
  },
  {
    path: '**',
    component: NotFound
  }
];
