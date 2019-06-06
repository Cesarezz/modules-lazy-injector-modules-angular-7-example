import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => import('./module1/module1.module').then(mod => mod.Module1Module)
  },
  {
    path: 'module2',
    loadChildren: () => import('./module2/module2.module').then(mod => mod.Module2Module)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }