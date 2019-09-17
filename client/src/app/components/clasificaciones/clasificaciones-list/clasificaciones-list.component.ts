import { Component, OnInit } from '@angular/core';

import { ClasificacionesService } from '../clasificaciones.service';
import { CircuitosService } from '../../circuitos/circuitos.service';

import { Piloto } from '../../../models/Piloto';
import { Circuito } from '../../../models/Circuito';

@Component({
  selector: 'app-clasificaciones-list',
  templateUrl: './clasificaciones-list.component.html',
  styleUrls: ['./clasificaciones-list.component.css']
})
export class ClasificacionesListComponent implements OnInit {

  piloto: Piloto;
  circuitos: Circuito[];
  
  clasificacionesByMotoGP: any = [];
  clasificacionesByMoto2: any = [];
  clasificacionesByMoto3: any = [];
  
  constructor(
    private clasificacionesService: ClasificacionesService,
    private circuitosService: CircuitosService) { }

  ngOnInit() {
    this.circuitosService.obtenerCircuitos().subscribe(
      data => this.circuitos = data
    );
  }

  obtenerClasificaciones(circuito: number)
  {
    this.circuitosService.mostrarCircuito(circuito).subscribe(
      data => this.piloto = data
    );

    this.clasificacionesByMotoGP = [];
    this.clasificacionesByMoto2 = [];
    this.clasificacionesByMoto3 = [];
    
    this.clasificacionesService.obtenerClasificaciones()
      .subscribe(
        data => {
          this.clasificacionesByMotoGP = data
            .filter(
              clasificacion => clasificacion.circuito.id === circuito && clasificacion.categoria === 'MotoGP'
            );

          this.clasificacionesByMoto2 = data
            .filter(
              clasificacion => clasificacion.circuito.id === circuito && clasificacion.categoria === 'Moto2'
            );

          this.clasificacionesByMoto3 = data
            .filter(
              clasificacion => clasificacion.circuito.id === circuito && clasificacion.categoria === 'Moto3'
            );
        }
      );
  }
}
