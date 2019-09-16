import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClasificacionesService } from '../clasificaciones.service';
import { CircuitosService } from '../../circuitos/circuitos.service';
import { PilotosService } from '../../pilotos/pilotos.service';

import { Clasificacion } from '../../../models/Clasificacion';
import { Circuito } from '../../../models/Circuito';
import { Piloto } from '../../../models/Piloto';

@Component({
  selector: 'app-clasificacion-form',
  templateUrl: './clasificacion-form.component.html',
  styleUrls: ['./clasificacion-form.component.css']
})
export class ClasificacionFormComponent implements OnInit {

  circuito: Circuito = {
    id: 0,
    nombre: '',
    pais: '',
    longitud: 0,
    imagen: ''
  }

  piloto: Piloto = {
    id: 0,
    nombre: '',
    imagen: '',
    edad: 0,
  }  

  clasificacion: Clasificacion = {
    id: null,
    anio: 2019,
    circuito: this.circuito,
    piloto: this.piloto,
    tipo: 0,
    categoria: 0,
    posicion: '0',
  };

  pilotos: Piloto[];
  circuitos: Circuito[];
  anios: number[] = [2015, 2016, 2017, 2018, 2019];
  tipos: string[] = ['Carrera', 'Pole'];
  categorias: string[] = ['MotoGP', 'Moto2', 'Moto3'];
  posiciones: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '25', '26', 'DNF'];

  edit: boolean = false;  

  constructor(
    private clasificacionesService: ClasificacionesService,
    private circuitosService: CircuitosService,
    private pilotosService: PilotosService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

    
  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;

    this.obtenerPilotos();
    this.obtenerCircuitos();

    if (params.id)
    {
      this.clasificacionesService.mostrarClasificacion(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.clasificacion = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  obtenerCircuitos()
  {
    this.circuitosService.obtenerCircuitos()
    .subscribe(
      res => {
        console.log(res);
        this.circuitos = res;
      },
      err => console.log(err)
    );
  }

  obtenerPilotos()
  {
    this.pilotosService.obtenerPilotos()
    .subscribe(
      res => {
        console.log(res);
        this.pilotos = res;
      },
      err => console.log(err)
    );
  }

  crearClasificacion()
  {
    delete this.clasificacion.id;

    console.log(this.clasificacion);

    this.clasificacionesService.crearClasificacion(this.clasificacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/clasificaciones']);
        },
        err => console.error(err)
      );
  }

  cambiarClasificacion()
  {
    this.clasificacionesService.cambiarClasificacion(this.clasificacion.id, this.clasificacion)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/clasificaciones']);
        },
        err => console.error(err)
      );
  }

  borrarClasificacion(id: string)
  {
    this.clasificacionesService.borrarClasificacion(id, this.clasificacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/clasificaciones']);
        },
        err => console.error(err)
      );
  }
}