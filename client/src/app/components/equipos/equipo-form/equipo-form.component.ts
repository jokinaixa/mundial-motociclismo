import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EquiposService } from '../equipos.service';

import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-equipo-form',
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css'],
})

export class EquipoFormComponent implements OnInit {

  equipo: Equipo = {
    nombre: '',
    moto: '',
    imagen: '',
    categoria: ''
  };

  categorias: string[] = ['MotoGP', 'Moto2', 'Moto3'];

  edit: boolean = false;

  constructor(
    private equiposService: EquiposService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.id)
    {
      this.equiposService.mostrarEquipo(params.id)
      .subscribe(
        res => {
          //console.log(res);
          this.equipo = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }

    if (params.categoria)
    {
      this.equipo.categoria = params.categoria;
    }
  }

  crearEquipo()
  {
    delete this.equipo.id;

    this.equipo.imagen = (this.equipo.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.equipo.imagen;

    this.equiposService.crearEquipo(this.equipo)
    .subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/equipos', this.equipo.categoria]);
      },
      err => console.error(err)
    );
  }

  cambiarEquipo()
  {
    this.equiposService.cambiarEquipo(this.equipo.id, this.equipo)
    .subscribe(
      res => { 
        //console.log(res);
        this.router.navigate(['/equipos', this.equipo.categoria]);
      },
      err => console.error(err)
    );
  }

  borrarEquipo(id: string)
  {
    this.equiposService.borrarEquipo(id, this.equipo)
    .subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/equipos', this.equipo.categoria]);
      },
      err => console.error(err)
    );
  }
}
