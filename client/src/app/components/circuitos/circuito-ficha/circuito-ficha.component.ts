import { Component, OnInit, Input} from '@angular/core';

import { CircuitosService } from '../../circuitos/circuitos.service';

import { Circuito } from '../../../models/Circuito';

@Component({
  selector: 'app-circuito-ficha',
  templateUrl: './circuito-ficha.component.html',
  styleUrls: ['./circuito-ficha.component.css']
})
export class CircuitoFichaComponent implements OnInit {

  @Input() circuito = [];

  
  constructor() { }

  ngOnInit() {
  }

}
