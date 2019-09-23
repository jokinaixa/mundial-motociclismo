import { Component, OnInit, Input } from '@angular/core';

import { Clasificacion } from '../../../models/Clasificacion';

@Component({
  selector: 'app-clasificaciones-ficha',
  templateUrl: './clasificaciones-ficha.component.html',
  styleUrls: ['./clasificaciones-ficha.component.css']
})
export class ClasificacionesFichaComponent implements OnInit {

  @Input() clasificaciones: Clasificacion[];

  constructor() { }

  ngOnInit() {
  }

}
