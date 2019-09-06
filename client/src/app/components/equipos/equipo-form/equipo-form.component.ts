import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EquiposService } from '../equipos.service';
import { PilotosService } from '../../pilotos/pilotos.service';

import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-equipo-form',
  template: `
    <h2>{{ equipo.nombre }} <small>({{ equipo.moto }})</small></h2>
    <h4>Listado de pilotos</h4> 
    <ul class="list-inline" *ngFor="let piloto of equipo.pilotos">
      <li class="list-inline-item"><app-piloto-ficha [piloto] = "piloto"></app-piloto-ficha></li>
    </ul>
  `,
  styles: [],
})

export class EquipoFormComponent implements OnInit {

  equipo: Equipo;
  pilotos: any = [];

  constructor(
    private equiposService: EquiposService, 
    private pilotosService: PilotosService,  
    private activatedRoute: ActivatedRoute) { }

    
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    this.equiposService.getEquipo(params.id)
      .subscribe(data => {
        this.equipo = data;

        this.pilotosService.getPilotosByTeam(params.id)
        .subscribe(data => {
          this.pilotos = data;
          this.equipo.pilotos = this.pilotos;
        });

      });
    }

}
