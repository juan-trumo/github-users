import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriosList } from './components/repositorios-list/repositorios-list';
import { RepositorioDetail } from './components/repositorio-detail/repositorio-detail';

const routes: Routes = [
  { path: '', component: RepositoriosList },
  { path: ':id', component: RepositorioDetail }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriosRoutingModule {}
