import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PilotosService } from '../pilotos.service';

import { Piloto } from '../../../models/Piloto';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrls: ['./pilotos-list.component.css'],
})

export class PilotosListComponent implements OnInit {

  pilotos: any = [];

  constructor(private pilotosService: PilotosService) { }


  ngOnInit() {
    this.pilotosService.obtenerPilotos()
    .subscribe(
      data => this.pilotos = data
    );
  }
}
