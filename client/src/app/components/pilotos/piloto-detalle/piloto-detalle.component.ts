import { Component, OnInit, Input } from '@angular/core';

import { Piloto } from '../../../models/Piloto';

@Component({
  selector: 'app-piloto-detalle',
  template: `{{ obtenerNombreCompleto(piloto) }} <span [innerHTML]="info"></span>`,
  styles: [''] 
})
export class PilotoDetalleComponent implements OnInit {

  @Input() piloto: Piloto;
  @Input() extra: string;

  info: string = '';


  constructor() { }

  ngOnInit() {
    console.log(this.extra);

    if (this.extra) {
      this.info = '<small>(' + this.extra + ')</small>';
    }
  }

  obtenerNombreCompleto(piloto: Piloto) {
    return piloto.nombre + ' ' + piloto.apellido;
  }
}
