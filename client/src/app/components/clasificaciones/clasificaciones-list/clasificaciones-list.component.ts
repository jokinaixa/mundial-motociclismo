import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClasificacionesService } from '../clasificaciones.service';
import { CircuitosService } from '../../circuitos/circuitos.service';

import { Circuito } from '../../../models/Circuito';

@Component({
  selector: 'app-clasificaciones-list',
  templateUrl: './clasificaciones-list.component.html',
  styleUrls: ['./clasificaciones-list.component.css']
})
export class ClasificacionesListComponent implements OnInit {

  circuito: number;
  circuitos: Circuito[];
  selected: number;
  
  clasificacionesByMotoGP: any = [];
  clasificacionesByMoto2: any = [];
  clasificacionesByMoto3: any = [];
  
  constructor(
    private clasificacionesService: ClasificacionesService,
    private circuitosService: CircuitosService) { }

  ngOnInit() {
    this.circuitosService.obtenerCircuitos().subscribe(
      data => {
        this.circuitos = data; 
        
        this.obtenerClasificaciones(data[0]);
      }
    );
  }

  isActive(id: number) {
    return this.selected === id;
  };

  modifiedLink(selected: number, id: number) {
    this.router.navigate(['/clasificaciones/edit/', selected, 'MotoGP', id]);
  }

  obtenerClasificaciones(circuito: Circuito)
  {
    this.selected = circuito.id;
    
    this.clasificacionesByMotoGP = [];
    this.clasificacionesByMoto2 = [];
    this.clasificacionesByMoto3 = [];
    
    this.clasificacionesService.obtenerClasificaciones()
      .subscribe(
        data => {
          this.clasificacionesByMotoGP = data
            .filter(
              clasificacion => clasificacion.circuito.id === circuito.id && clasificacion.categoria === 'MotoGP'
            );

          this.clasificacionesByMoto2 = data
            .filter(
              clasificacion => clasificacion.circuito.id === circuito.id && clasificacion.categoria === 'Moto2'
            );

          this.clasificacionesByMoto3 = data
            .filter(
              clasificacion => clasificacion.circuito.id === circuito.id && clasificacion.categoria === 'Moto3'
            );
        }
      );
  }
}
