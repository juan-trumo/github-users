import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriosRoutingModule } from './repositorios-routing-module';
import { RepositoriosList } from './components/repositorios-list/repositorios-list';

@NgModule({
  declarations: [RepositoriosList],
  imports: [CommonModule, RepositoriosRoutingModule],
})
export class RepositoriosModule {}
