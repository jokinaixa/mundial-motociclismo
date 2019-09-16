import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PilotosService } from '../pilotos.service';
import { EquiposService } from '../../equipos/equipos.service';

import { Piloto } from '../../../models/Piloto';
import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-piloto-form',
  templateUrl: './piloto-form.component.html',
  styleUrls: ['./piloto-form.component.css'],
})

export class PilotoFormComponent implements OnInit {

  equipo: Equipo = {
    id: 0,
    nombre: '',
    moto: '',
    imagen: ''
  };
  
  piloto: Piloto = {
    id: null,
    equipo: this.equipo,
    nombre: '',
    imagen: '',
    edad: 0,
  };
  equipos: Equipo[];

  edit: boolean = false;  

  constructor(private pilotosService: PilotosService, private equiposService: EquiposService, private router: Router, private activatedRoute: ActivatedRoute) { }

    
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    if (params.id)
    {
      this.pilotosService.mostrarPiloto(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.piloto = res;
          this.edit = true;

          this.obtenerEquipos();
        },
        err => console.log(err)
      );
    } else {
      this.obtenerEquipos();
    }
  }

  obtenerEquipos()
  {
    this.equiposService.obtenerEquipos()
    .subscribe(
      res => {
        console.log(res);
        this.equipos = res;
      },
      err => console.log(err)
    );
  }

  crearPiloto()
  {
    delete this.piloto.id;
    this.piloto.imagen = (this.piloto.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.piloto.imagen;

    console.log(this.piloto);

    this.pilotosService.crearPiloto(this.piloto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      );
  }

  cambiarPiloto()
  {
    console.log(this.piloto);
    
    this.pilotosService.cambiarPiloto(this.piloto.id, this.piloto)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      );
  }

  borrarPiloto(id: string)
  {
    console.log(this.piloto);
    
    this.pilotosService.borrarPiloto(id, this.piloto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      )
  }
}

