import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeComponentModule),
    // canActivate: [notAuthenticatedUser], // login route can be reached only if I am NOT authenticated
  },
  {
    path: 'page2',
    loadChildren: () => import('./pages/page2/page2.module').then(m => m.Page2ComponentModule),
    // canActivate: [notAuthenticatedUser], // login route can be reached only if I am NOT authenticated
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
