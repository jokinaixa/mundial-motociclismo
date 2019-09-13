import { Component, OnInit, HostBinding } from '@angular/core';

import { EquiposService } from '../equipos.service';
import { PilotosService } from '../../pilotos/pilotos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})

export class EquiposListComponent implements OnInit {

  equipos: any = [];

  constructor(private equiposService: EquiposService) { }
  

  ngOnInit() {
    this.equiposService.obtenerEquipos()
    .subscribe(
      data => this.equipos = data
    );
  }
}
