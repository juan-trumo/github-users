import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { UsuariosList } from './components/usuarios-list/usuarios-list';
import { UsuarioDetail } from './components/usuario-detail/usuario-detail';

@NgModule({
  declarations: [UsuariosList, UsuarioDetail],
  imports: [CommonModule, UsuariosRoutingModule],
})
export class UsuariosModule {}
