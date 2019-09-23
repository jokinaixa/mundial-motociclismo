import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { EquiposService } from '../../equipos/equipos.service';

@Component({
  selector: 'app-pilotos-nav',
  templateUrl: './pilotos-nav.component.html',
  styleUrls: ['./pilotos-nav.component.css']
})
export class PilotosNavComponent implements OnInit {

  @Input() categoria: string;

  @Output() seleccion: any = new EventEmitter();

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  cadena: any = [];
  equipos: any = [];


  constructor(
    private equiposService: EquiposService
  ) { }


  ngOnInit() {
    this.equiposService.obtenerEquipos().subscribe(
      data => {
        this.equipos = data.filter(
          equipo => equipo.categoria === this.categoria
        );
      }
    );
  }


  gestionaSeleccion(equipo: string, isChecked: boolean)
  {
    if (isChecked) {
      this.cadena.push(equipo);
    } else {
      var index = this.cadena.indexOf(equipo);
      this.cadena.splice(index, 1);
    }

    this.seleccion.emit(this.cadena.slice());
  }

  uncheckEquipos() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });

    this.cadena = [];
    this.seleccion.emit(this.cadena.slice());
  }

}
