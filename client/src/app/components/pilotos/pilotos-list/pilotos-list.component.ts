import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrls: ['./pilotos-list.component.css'],
})

export class PilotosListComponent implements OnInit {

  categorias: any = ['MotoGP', 'Moto2', 'Moto3'];
  categoria: string = this.categorias[0];
  
  pilotos: any = [];
  seleccion: any = [];

  filterPiloto = '';


  constructor(
    private pilotosService: PilotosService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.seleccion['MotoGP'] = [];
    this.seleccion['Moto2'] = [];
    this.seleccion['Moto3'] = [];

    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;

    this.pilotosService.obtenerPilotos()
    .subscribe(
      data => {
        this.categorias.forEach((element: string) => {
          this.pilotos[element] = data.filter(
            piloto => piloto.equipo.categoria === element
          )
        })
      }
    );
  }

  muestraContenido(categoria: string)
  {
    this.categoria = categoria;
  }

  obtenerSeleccion(e: any)
  {
    this.seleccion[this.categoria] = e;
  }

}
