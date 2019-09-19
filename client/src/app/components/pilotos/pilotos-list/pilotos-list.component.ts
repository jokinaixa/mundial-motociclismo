import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrls: ['./pilotos-list.component.css'],
})

export class PilotosListComponent implements OnInit {

  categoria: string;
  
  pilotosByMotoGP: any = [];
  pilotosByMoto2: any = [];
  pilotosByMoto3: any = [];

  filterPiloto = '';


  constructor(
    private pilotosService: PilotosService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;

    this.pilotosService.obtenerPilotos()
    .subscribe(
      data => {
        this.pilotosByMotoGP = data.filter(
          piloto => piloto.equipo.categoria === 'MotoGP'
        );

        this.pilotosByMoto2 = data
          .filter(
            piloto => piloto.equipo.categoria === 'Moto2'
          );

        this.pilotosByMoto3 = data
          .filter(
            piloto => piloto.equipo.categoria === 'Moto3'
          );
      }
    );
  }

  muestraContenido(categoria) {
    this.categoria = categoria;
  }
}
