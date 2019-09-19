import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})

export class EquiposListComponent implements OnInit {

  categoria: string;
  
  equiposByMotoGP: any = [];
  equiposByMoto2: any = [];
  equiposByMoto3: any = [];


  constructor(
    private equiposService: EquiposService,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;

    this.equiposService.obtenerEquipos().subscribe(
      data => {
        this.equiposByMotoGP = data.filter(
          equipo => equipo.categoria === 'MotoGP'
        );

        this.equiposByMoto2 = data.filter(
          equipo => equipo.categoria === 'Moto2'
        );

        this.equiposByMoto3 = data.filter(
          equipo => equipo.categoria === 'Moto3'
        );
      }
    );
  }

  muestraContenido(categoria) {
    this.categoria = categoria;
  }
}
