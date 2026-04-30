import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Repositorio } from '../../models/repositorio';
import { RepositoriosService } from '../../services/repositorios';

@Component({
  selector: 'app-repositorio-detail',
  standalone: false,
  templateUrl: './repositorio-detail.html',
  styleUrl: './repositorio-detail.scss'
})
export class RepositorioDetail implements OnInit {
  repositorio$!: Observable<Repositorio | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RepositoriosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.repositorio$ = this.service.getRepositorio(id);
  }

  volver(): void {
    this.router.navigate(['/repositorios']);
  }
}
