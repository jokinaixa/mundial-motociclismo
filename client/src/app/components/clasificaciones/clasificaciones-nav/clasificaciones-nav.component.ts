import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CircuitosService } from '../../circuitos/circuitos.service';

@Component({
  selector: 'app-clasificaciones-nav',
  templateUrl: './clasificaciones-nav.component.html',
  styleUrls: ['./clasificaciones-nav.component.css']
})
export class ClasificacionesNavComponent implements OnInit {

  @Input() circuito: number;

  @Output() seleccion: any = new EventEmitter();

  cadena: any = [];
  circuitos: any = [];
  selectedCircuito: number;


  constructor(
    private circuitosService: CircuitosService
  ) { }


  ngOnInit() {
    this.circuitosService.obtenerCircuitos().subscribe(
      data => {
        this.circuitos = data;

        this.circuito = (this.circuito == 0) ? this.circuitos[0].id : this.circuito; 
        this.gestionaSeleccion(this.circuito);
      }
    );
  }


  gestionaSeleccion(circuito: number)
  {
    this.selectedCircuito = circuito;
    this.seleccion.emit(circuito);
  }

}
