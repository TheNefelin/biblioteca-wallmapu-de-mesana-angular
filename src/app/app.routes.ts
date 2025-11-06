import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { NotFoundComponent } from './features/not-found/not-found';
import { PageLayoutComponent } from './layouts/page-layout/page-layout';
import { BookDetailComponent } from './features/book-detail/book-detail';

export const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'book-details/:id', component: BookDetailComponent },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }  
]

// export const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path: 'auth',
//     component: AuthComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'register', component: RegisterComponent },
//       { path: '', redirectTo: 'login', pathMatch: 'full' }      
//     ]
//   },
//   {
//     path: '**',
//     component: NotFoundComponent
//   }
// ];
