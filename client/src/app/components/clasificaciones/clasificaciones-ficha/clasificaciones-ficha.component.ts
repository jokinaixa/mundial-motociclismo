import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Clasificacion } from '../../../models/Clasificacion';

@Component({
  selector: 'app-clasificaciones-ficha',
  templateUrl: './clasificaciones-ficha.component.html',
  styleUrls: ['./clasificaciones-ficha.component.css']
})
export class ClasificacionesFichaComponent implements OnInit {

  @Input() clasificaciones: Clasificacion[];
  @Input() categoria: string;
  @Input() circuito: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  modifiedLink(id: number) {
    this.router.navigate(['/clasificaciones/edit/', this.categoria, this.circuito, id]);
  }

}
