import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PilotosService } from '../pilotos.service';

import { Piloto } from '../../../models/Piloto';
import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-piloto-form',
  templateUrl: './piloto-form.component.html',
  styleUrls: ['./piloto-form.component.css'],
})

export class PilotoFormComponent implements OnInit {

  piloto: Piloto = {
    id: null,
    equipo: [],
    nombre: '',
    imagen: '',
    edad: 0,
  };

  edit: boolean = false;  

  constructor(private pilotosService: PilotosService, private router: Router, private activatedRoute: ActivatedRoute) { }

    
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
        },
        err => console.log(err)
      )
    }
  }

  crearPiloto()
  {
    delete this.piloto.id;

    this.piloto.imagen = (this.piloto.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.piloto.imagen;

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

