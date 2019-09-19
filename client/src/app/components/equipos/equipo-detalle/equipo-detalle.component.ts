import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipo-detalle',
  template: `{{ equipo.nombre }} <small>({{ equipo.moto }})</small>`,
  styles: [''] 
})
export class EquipoDetalleComponent implements OnInit {

  @Input() equipo = [];
  
  constructor() { }

  ngOnInit() {
  }

}
