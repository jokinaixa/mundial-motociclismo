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
    id: null,
    nombre: '',
    moto: '',
    imagen: ''
  };

  edit: boolean = false;  

  constructor(private equiposService: EquiposService, private router: Router, private activatedRoute: ActivatedRoute) { }

    
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    if (params.id)
    {
      this.equiposService.getEquipo(params.id)
        .subscribe(data => {
          this.equipo = data;
        });
      }
  }

  crearEquipo() {
    console.log("crear");

    delete this.equipo.id;

    this.equiposService.crearEquipo(this.equipo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/equipos']);
        },
        err => console.error(err)
      )

    }

  cambiarEquipo() {
    //delete this.equipo.created_at;
    console.log("cambiar");

    this.equiposService.cambiarEquipo(this.equipo.id, this.equipo)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/equipos']);
        },
        err => console.error(err)
      )

  }  

}
