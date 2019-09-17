import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CircuitosService } from '../circuitos.service';
import { ClasificacionesService } from '../../clasificaciones/clasificaciones.service';

import { Circuito } from '../../../models/Circuito';

@Component({
  selector: 'app-circuito-form',
  templateUrl: './circuito-form.component.html',
  styleUrls: ['./circuito-form.component.css']
})
export class CircuitoFormComponent implements OnInit {

  clasificacionesByMotoGP: any = [];
  clasificacionesByMoto2: any = [];
  clasificacionesByMoto3: any = [];
  
  circuito: Circuito = {
    id: null,
    nombre: '',
    pais: '',
    longitud: 0,
    imagen: ''
  };

  edit: boolean = false;  

  constructor(
    private circuitosService: CircuitosService, 
    private clasificacionesService: ClasificacionesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    if (params.id)
    {
      this.circuitosService.mostrarCircuito(params.id)
      .subscribe(
        res => {
          //console.log(res);
          this.circuito = res;
          this.edit = true;

          this.obtenerClasificaciones();
        },
        err => console.log(err)
      )
    }
  }

  obtenerClasificaciones()
  {
    this.clasificacionesService.obtenerClasificaciones()
    .subscribe(
      data => {
        this.clasificacionesByMotoGP = data.filter(
          clasificacion => clasificacion.circuito.id === this.circuito.id && clasificacion.categoria === 'MotoGP' && clasificacion.posicion <= 3
        );

        this.clasificacionesByMoto2 = data.filter(
          clasificacion => clasificacion.circuito.id === this.circuito.id && clasificacion.categoria === 'Moto2' && clasificacion.posicion <= 3
        );
 
        this.clasificacionesByMoto3 = data.filter(
          clasificacion => clasificacion.circuito.id === this.circuito.id && clasificacion.categoria === 'Moto3' && clasificacion.posicion <= 3
        );
      }
    );
  }

  crearCircuito()
  {
    delete this.circuito.id;

    this.circuito.imagen = (this.circuito.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.circuito.imagen;

    this.circuitosService.crearCircuito(this.circuito)
      .subscribe(
        res => {
          //console.log(res);
          this.router.navigate(['/circuitos']);
        },
        err => console.error(err)
      );
  }

  cambiarCircuito()
  {
    this.circuitosService.cambiarCircuito(this.circuito.id, this.circuito)
      .subscribe(
        res => { 
          //console.log(res);
          this.router.navigate(['/circuitos']);
        },
        err => console.error(err)
      );
  }

  borrarCircuito(id: string)
  {
    this.circuitosService.borrarCircuito(id, this.circuito)
      .subscribe(
        res => {
          //console.log(res);
          this.router.navigate(['/circuitos']);
        },
        err => console.error(err)
      );
  }
}
