import { Component, OnInit } from '@angular/core';

import { CircuitosService } from '../circuitos.service';

@Component({
  selector: 'app-circuitos-list',
  templateUrl: './circuitos-list.component.html',
  styleUrls: ['./circuitos-list.component.css']
})
export class CircuitosListComponent implements OnInit {

  circuitos: any = [];

  constructor(private circuitosService: CircuitosService) { }

  ngOnInit() {
    this.circuitosService.obtenerCircuitos()
    .subscribe(
      data => this.circuitos = data
    );
  }
}
