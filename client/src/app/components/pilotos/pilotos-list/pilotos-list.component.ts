import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PilotosService } from '../pilotos.service';
import { Piloto } from '../../../models/Piloto';
import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrls: ['./pilotos-list.component.css'],
})

export class PilotosListComponent implements OnInit {

  pilotos: any = [];

  constructor(private pilotosService: PilotosService) { }

  ngOnInit() {

    this.pilotosService.getPilotos()
      .subscribe(data => {
        console.log(data);
        this.pilotos = data;
    })

  }
}
