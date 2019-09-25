import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { EquiposService } from '../../equipos/equipos.service';

@Component({
  selector: 'app-equipos-nav',
  templateUrl: './equipos-nav.component.html',
  styleUrls: ['./equipos-nav.component.css']
})
export class EquiposNavComponent implements OnInit {

  @Input() categoria: string;

  @Output() seleccion: any = new EventEmitter();

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  cadena: any = [];
  equipos: any = [];


  constructor(
    private equiposService: EquiposService
  ) { }


  ngOnInit() {
   this.equiposService.obtenerEquipos()
    .subscribe(
      data => {
        this.equipos = data.filter(
          equipo => equipo.categoria === this.categoria
        );
      }
    );
  }


  gestionaSeleccion(moto: string, isChecked: boolean)
  {
    if (isChecked) {
      this.cadena.push(moto);
    } else {
      var index = this.cadena.indexOf(moto);
      this.cadena.splice(index, 1);
    }

    this.seleccion.emit(this.cadena.slice());
  }

  uncheckMotos() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });

    this.cadena = [];
    this.seleccion.emit(this.cadena.slice());
  }

}
