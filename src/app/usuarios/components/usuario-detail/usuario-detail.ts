import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario-detail',
  standalone: false,
  templateUrl: './usuario-detail.html',
  styleUrl: './usuario-detail.scss'
})
export class UsuarioDetail {
  @Input() usuario!: Usuario;
  @Output() cerrar = new EventEmitter<void>();
}
