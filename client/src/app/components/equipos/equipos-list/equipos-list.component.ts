import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})

export class EquiposListComponent implements OnInit {

  categoria: string = "MotoGP";
  
  equiposMotoGP: any = [];
  equiposMoto2: any = [];
  equiposMoto3: any = [];

  seleccionMotoGP: any = [];
  seleccionMoto2: any = [];
  seleccionMoto3: any = [];


  constructor(
    private equiposService: EquiposService,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;

    this.equiposService.obtenerEquipos().subscribe(
      data => {
        this.equiposMotoGP = data.filter(
          equipo => equipo.categoria === "MotoGP"
        );

        this.equiposMoto2 = data.filter(
          equipo => equipo.categoria === "Moto2"
        );

        this.equiposMoto3 = data.filter(
          equipo => equipo.categoria === "Moto3"
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
