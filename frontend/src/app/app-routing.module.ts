import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'', pathMatch:'full', redirectTo:'regiao'
    },
    {
      path: 'regiao',
      loadChildren: () => import('./regiao/regiao.module').then(m => m.RegiaoModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
