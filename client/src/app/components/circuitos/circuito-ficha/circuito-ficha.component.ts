import { Component, OnInit, Input} from '@angular/core';

import { CircuitosService } from '../../circuitos/circuitos.service';

import { Circuito } from '../../../models/Circuito';

@Component({
  selector: 'app-circuito-ficha',
  templateUrl: './circuito-ficha.component.html',
  styleUrls: ['./circuito-ficha.component.css']
})
export class CircuitoFichaComponent implements OnInit {

  @Input() variable1 = '';
  @Input() id_circuito;

  circuito: Circuito = {
    id: null,
    nombre: '',
    pais: '',
    longitud: 0,
    imagen: ''
  };
  
  constructor(
    private circuitosService: CircuitosService) { }

  ngOnInit() {
    this.circuitosService.mostrarCircuito(this.id_circuito).subscribe(
      data => this.circuito = data
    );
  }

}
