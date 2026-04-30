import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriosList } from './components/repositorios-list/repositorios-list';

const routes: Routes = [
  { path: '', component: RepositoriosList }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriosRoutingModule {}
