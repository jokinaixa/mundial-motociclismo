import { Component, OnInit, HostBinding } from '@angular/core';

import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-list',
  template: `
    <h2>Listado de Equipos</h2>
    <ul *ngFor="let equipo of equipos">
      <li>{{ equipo.id }} {{ equipo.nombre }}</li>
    </ul>
  `,
  styles: [],
})
export class EquiposListComponent implements OnInit {

  equipos: any = [];

  constructor(private equipoService: EquiposService) { }
  

  ngOnInit() {
    this.equipoService.getEquipos()
      .subscribe(data => this.equipos = data);
  }

}
