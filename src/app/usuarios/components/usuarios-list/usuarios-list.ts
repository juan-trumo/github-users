import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios';

@Component({
  selector: 'app-usuarios-list',
  standalone: false,
  templateUrl: './usuarios-list.html',
  styleUrl: './usuarios-list.scss'
})
export class UsuariosList implements OnInit {
  usuarios$!: Observable<Usuario[]>;

  constructor(private service: UsuariosService) {}

  ngOnInit(): void {
    this.usuarios$ = this.service.getUsuarios();
  }
}
