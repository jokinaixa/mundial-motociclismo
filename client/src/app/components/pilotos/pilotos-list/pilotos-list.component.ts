import { Component, OnInit, Input } from '@angular/core';

import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilotos-list',
  template: `
    <h4>Listado de Pilotos</h4>
    <p>{{ nombre }} {{ calificativo }}</p>
    <ul *ngFor="let piloto of pilotos">
      <li>{{ piloto.nombre }}</li>
    </ul>
  `,
  styles: [],
})
export class PilotosListComponent implements OnInit {

  pilotos: any = [];

  @Input() nombre: string;
  @Input() calificativo: string;
  @Input() valor: string;


  constructor(private pilotoService: PilotosService) {}

  ngOnInit() {
    console.log(this.nombre);
    console.log(this.calificativo);
    console.log(this.valor);
    
    if (this.valor != null) {
      this.getPilotosByTeam(this.valor);
    } else {
      this.getPilotos();
    }
  }


  getPilotos() {
    this.pilotoService.getPilotos()
      .subscribe(data => this.pilotos = data);
  }

  getPilotosByTeam(equipo: string) {
    this.pilotoService.getPilotosByTeam(equipo)
      .subscribe(data => this.pilotos = data);
  }

}
