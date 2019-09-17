import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PilotosService } from '../pilotos.service';
import { EquiposService } from '../../equipos/equipos.service';
import { ClasificacionesService } from '../../clasificaciones/clasificaciones.service';

import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-piloto-form',
  templateUrl: './piloto-form.component.html',
  styleUrls: ['./piloto-form.component.css'],
})

export class PilotoFormComponent implements OnInit {

  clasificacionesByPiloto: any = [];
  
  piloto: any = {
    id: null,
    equipo: 0,
    nombre: '',
    imagen: '',
    edad: 0,
  };

  equipos: Equipo[];

  edit: boolean = false;  

  constructor(
    private pilotosService: PilotosService, 
    private equiposService: EquiposService, 
    private clasificacionesService: ClasificacionesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    this.obtenerEquipos();

    if (params.id)
    {
      this.pilotosService.mostrarPiloto(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.piloto = res;
          this.edit = true;

          this.obtenerClasificaciones();
        },
        err => console.log(err)
      );
    }
  }

  obtenerEquipos()
  {
    this.equiposService.obtenerEquipos()
    .subscribe(
      res => {
        //console.log(res);
        this.equipos = res;
      },
      err => console.log(err)
    );
  }

  obtenerClasificaciones()
  {
    this.clasificacionesService.obtenerClasificaciones()
    .subscribe(
      data => {
        this.clasificacionesByPiloto = data
          .filter(
            clasificacion => clasificacion.piloto.id === this.piloto.id
          );
      }
    );
  }

  crearPiloto()
  {
    delete this.piloto.id;
    this.piloto.imagen = (this.piloto.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.piloto.imagen;

    this.pilotosService.crearPiloto(this.piloto)
      .subscribe(
        res => {
          //console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      );
  }

  cambiarPiloto()
  {
    this.pilotosService.cambiarPiloto(this.piloto.id, this.piloto)
      .subscribe(
        res => { 
          //console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      );
  }

  borrarPiloto(id: string)
  {
    this.pilotosService.borrarPiloto(id, this.piloto)
      .subscribe(
        res => {
          //console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      )
  }
}

