import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriosRoutingModule } from './repositorios-routing-module';
import { RepositoriosList } from './components/repositorios-list/repositorios-list';
import { RepositorioDetail } from './components/repositorio-detail/repositorio-detail';

@NgModule({
  declarations: [RepositoriosList, RepositorioDetail],
  imports: [CommonModule, RepositoriosRoutingModule],
})
export class RepositoriosModule {}
