import { Component, OnInit } from '@angular/core';

import { ClasificacionesService } from '../clasificaciones.service';

@Component({
  selector: 'app-clasificaciones-list',
  templateUrl: './clasificaciones-list.component.html',
  styleUrls: ['./clasificaciones-list.component.css']
})
export class ClasificacionesListComponent implements OnInit {

  clasificaciones: any = [];
  
  constructor(private clasificacionesService: ClasificacionesService) { }

  ngOnInit() {
    this.clasificacionesService.obtenerClasificaciones(2019, 1)
    .subscribe(
      data => this.clasificaciones = data
    );
  }

}
