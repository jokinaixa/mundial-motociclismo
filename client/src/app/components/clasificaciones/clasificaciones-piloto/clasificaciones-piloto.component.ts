import { Component, OnInit, Input } from '@angular/core';

import { ClasificacionesService } from '../../clasificaciones/clasificaciones.service';

@Component({
  selector: 'app-clasificaciones-piloto',
  templateUrl: './clasificaciones-piloto.component.html',
  styleUrls: ['./clasificaciones-piloto.component.css']
})
export class ClasificacionesPilotoComponent implements OnInit {

  @Input() piloto: number;

  clasificaciones: any = [];

  constructor(
    private clasificacionesService: ClasificacionesService
  ) { }

  ngOnInit() 
  {
    this.clasificacionesService.obtenerClasifsPorPiloto(this.piloto).subscribe(
      data => {
        //console.log(data);
        this.clasificaciones = data
      }
    );
  }

}
