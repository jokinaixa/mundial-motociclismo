import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrls: ['./pilotos-list.component.css'],
})

export class PilotosListComponent implements OnInit {

  categoria: string = "MotoGP";
  
  pilotosMotoGP: any = [];
  pilotosMoto2: any = [];
  pilotosMoto3: any = [];

  seleccionMotoGP: any = [];
  seleccionMoto2: any = [];
  seleccionMoto3: any = [];

  filterPiloto = '';


  constructor(
    private pilotosService: PilotosService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;

    this.pilotosService.obtenerPilotos().subscribe(
      data => {
        this.pilotosMotoGP = data.filter(
          piloto => piloto.equipo.categoria === 'MotoGP'
        );

        this.pilotosMoto2 = data.filter(
          piloto => piloto.equipo.categoria === 'Moto2'
        );

        this.pilotosMoto3 = data.filter(
          piloto => piloto.equipo.categoria === 'Moto3'
        );
      }
    );
  }

  muestraContenido(categoria: string)
  {
    this.categoria = categoria;
  }

  obtenerSeleccion(e: any)
  {
    switch (this.categoria) {
      case 'MotoGP':
        this.seleccionMotoGP = e;
        break;
 
      case 'Moto2':
        this.seleccionMoto2 = e;
        break;
          
      case 'Moto3':
        this.seleccionMoto3 = e;
        break;
    }
  }

}
