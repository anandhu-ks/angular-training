import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(e => e.HomeModule)
  }, {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(e => e.ArticlesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(e => e.LoginModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(e => e.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
