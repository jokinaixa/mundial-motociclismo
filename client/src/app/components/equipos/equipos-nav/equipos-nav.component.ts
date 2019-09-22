import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-equipos-nav',
  templateUrl: './equipos-nav.component.html',
  styleUrls: ['./equipos-nav.component.css']
})
export class EquiposNavComponent implements OnInit {

  @Input() categoria: string = 'MotoGP';
  @Input() equipos: Equipo[];
  @Input() seleccion: any[];

  @Output() public seleccionMotoGP = new EventEmitter<any>();
  @Output() public seleccionMoto2 = new EventEmitter<any>();
  @Output() public seleccionMoto3 = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  seleccionaMoto(moto:string, cadena:any, categoria:string, isChecked:boolean)
  {
    if (isChecked) {
      cadena.push(moto);
    } else {
      var index = cadena.indexOf(moto);
      cadena.splice(index, 1);
    }

    switch (categoria) {
      case 'MotoGP':
        this.seleccionMotoGP = cadena.slice();
        break;
 
      case 'Moto2':
        this.seleccionMoto2 = cadena.slice();
        break;
          
      case 'Moto3':
        this.seleccionMoto3 = cadena.slice();
        break;
    }
  }

}
