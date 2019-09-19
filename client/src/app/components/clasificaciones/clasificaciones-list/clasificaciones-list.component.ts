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

  categoria: string;
  circuitoSeleccionado: number;
  
  circuitos: Circuito[];
  
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
    this.categoria = params.categoria;

    this.circuitosService.obtenerCircuitos().subscribe(
      data => {
        this.circuitos = data; 

        this.circuitoSeleccionado = (params.circuito == 0) ? data[params.circuito].id : params.circuito;
        this.obtenerClasificaciones();
      }
    );
  }

  muestraCircuito(circuito: number) {
    this.circuitoSeleccionado = circuito;

    this.obtenerClasificaciones();
  }

  muestraCategoria(categoria: string) {
    this.categoria = categoria;
  }

  modifiedLink(id: number) {
    this.router.navigate(['/clasificaciones/edit/', this.categoria, this.circuitoSeleccionado, id]);
  }

  obtenerClasificaciones()
  {
    this.clasificacionesByMotoGP = [];
    this.clasificacionesByMoto2 = [];
    this.clasificacionesByMoto3 = [];
    
    this.clasificacionesService.obtenerClasificaciones()
      .subscribe(
        data => {
          this.clasificacionesByMotoGP = data.filter(
            clasificacion => clasificacion.circuito.id === this.circuitoSeleccionado && clasificacion.categoria === 'MotoGP'
          );

          this.clasificacionesByMoto2 = data.filter(
            clasificacion => clasificacion.circuito.id === this.circuitoSeleccionado && clasificacion.categoria === 'Moto2'
          );

          this.clasificacionesByMoto3 = data.filter(
            clasificacion => clasificacion.circuito.id === this.circuitoSeleccionado && clasificacion.categoria === 'Moto3'
          );
        }
      );
  }
}
