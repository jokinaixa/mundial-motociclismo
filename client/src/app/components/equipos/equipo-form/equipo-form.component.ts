import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipo-form',
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css'],
})

export class EquipoFormComponent implements OnInit {

  equipo: any = [];
  prueba1: any = [];
  prueba2 = "Tonto";

  constructor(private equiposService: EquiposService, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.equiposService.getEquipo(1)
      .subscribe(data => {
        this.equipo = data;
        this.prueba1 = {
          nombre: "Jokin",
          apellido: "Aixa",
        };
      });
  }

  ngOnInit() {}

}
