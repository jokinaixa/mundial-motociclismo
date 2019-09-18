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
    private circuitosService: CircuitosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    this.circuitosService.obtenerCircuitos().subscribe(
      data => {
        this.circuitos = data; 

        this.circuito = (params.circuito) ? params.circuito : data[0].id;
        this.obtenerClasificaciones(this.circuito);
        this.selected = this.circuito;
      }
    );
  }

  isActive(id: number) {
    return this.selected === id;
  };

  modifiedLink(id: number) {
    this.router.navigate(['/clasificaciones/edit/', this.selected, 'MotoGP', id]);
  }

  obtenerClasificaciones(id: number)
  {
    this.selected = id;
    
    this.clasificacionesByMotoGP = [];
    this.clasificacionesByMoto2 = [];
    this.clasificacionesByMoto3 = [];
    
    this.clasificacionesService.obtenerClasificaciones()
      .subscribe(
        data => {
          this.clasificacionesByMotoGP = data
            .filter(
              clasificacion => clasificacion.circuito.id === this.selected && clasificacion.categoria === 'MotoGP'
            );

          this.clasificacionesByMoto2 = data
            .filter(
              clasificacion => clasificacion.circuito.id === this.selected && clasificacion.categoria === 'Moto2'
            );

          this.clasificacionesByMoto3 = data
            .filter(
              clasificacion => clasificacion.circuito.id === this.selected && clasificacion.categoria === 'Moto3'
            );
        }
      );
  }
}
