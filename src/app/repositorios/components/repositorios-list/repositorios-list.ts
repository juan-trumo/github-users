import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositorio } from '../../models/repositorio';
import { RepositoriosService } from '../../services/repositorios';

@Component({
  selector: 'app-repositorios-list',
  standalone: false,
  templateUrl: './repositorios-list.html',
  styleUrl: './repositorios-list.scss'
})
export class RepositoriosList implements OnInit {
  repositorios$!: Observable<Repositorio[]>;

  constructor(private service: RepositoriosService) {}

  ngOnInit(): void {
    this.repositorios$ = this.service.getRepositorios();
  }
}
