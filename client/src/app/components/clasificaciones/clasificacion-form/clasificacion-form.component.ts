import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClasificacionesService } from '../clasificaciones.service';
import { CircuitosService } from '../../circuitos/circuitos.service';
import { PilotosService } from '../../pilotos/pilotos.service';

import { Circuito } from '../../../models/Circuito';

@Component({
  selector: 'app-clasificacion-form',
  templateUrl: './clasificacion-form.component.html',
  styleUrls: ['./clasificacion-form.component.css']
})
export class ClasificacionFormComponent implements OnInit { 

  pilotosByCategoria: any = [];
  
  clasificacion: any = {
    id: null,
    circuito: 0,
    piloto: 0,
    categoria: '0',
    posicion: 0,
  };

  circuitos: Circuito[];
  categorias: string[] = ['MotoGP', 'Moto2', 'Moto3'];

  edit: boolean = false;  

  constructor(
    private clasificacionesService: ClasificacionesService,
    private circuitosService: CircuitosService,
    private pilotosService: PilotosService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

    
  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;

    this.clasificacion.categoria = params.categoria;
    this.clasificacion.circuito = params.circuito;

    this.obtenerPilotos();
    this.obtenerCircuitos();

    if (params.id)
    {
      this.clasificacionesService.mostrarClasificacion(params.id)
      .subscribe(
        res => {
          //console.log(res);
          this.clasificacion = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  obtenerCircuitos()
  {
    this.circuitosService.obtenerCircuitos()
    .subscribe(
      res => {
        //console.log(res);
        this.circuitos = res;
      },
      err => console.log(err)
    );
  }

  obtenerPilotos()
  {
    this.pilotosService.obtenerPilotos()
    .subscribe(
      data => {
        this.pilotosByCategoria = data
          .filter(
            piloto => piloto.equipo.categoria === this.clasificacion.categoria
          );
      },
      err => console.log(err)
    );
  }

  crearClasificacion()
  {
    delete this.clasificacion.id;

    this.clasificacionesService.crearClasificacion(this.clasificacion)
      .subscribe(
        res => {
          //console.log(res);
          this.router.navigate(['/clasificaciones/show', this.clasificacion.circuito]);
        },
        err => console.error(err)
      );
  }

  cambiarClasificacion()
  {
    this.clasificacionesService.cambiarClasificacion(this.clasificacion.id, this.clasificacion)
      .subscribe(
        res => { 
          //console.log(res);
          this.router.navigate(['/clasificaciones/show', this.clasificacion.circuito]);
        },
        err => console.error(err)
      );
  }

  borrarClasificacion(id: string)
  {
    this.clasificacionesService.borrarClasificacion(id, this.clasificacion)
      .subscribe(
        res => {
          //console.log(res);
          this.router.navigate(['/clasificaciones/show', this.clasificacion.circuito]);
        },
        err => console.error(err)
      );
  }
}