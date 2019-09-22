import { Component, OnInit, Input } from '@angular/core';

import { PilotosService } from '../../pilotos/pilotos.service';

@Component({
  selector: 'app-pilotos-equipo',
  templateUrl: './pilotos-equipo.component.html',
  styleUrls: ['./pilotos-equipo.component.css']
})
export class PilotosEquipoComponent implements OnInit {

  @Input() equipo: number = 0;
  @Input() categoria: string = '';

  pilotos: any = [];
  
  constructor(
    private pilotosService: PilotosService
  ) { }

  ngOnInit() {
    this.pilotosService.obtenerPilotosPorEquipo(this.equipo)
    .subscribe(
      data => {
        //console.log(data);
        this.pilotos = data
      }
    );
  }

}
