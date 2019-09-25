import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})

export class EquiposListComponent implements OnInit {

  categorias: any = ['MotoGP', 'Moto2', 'Moto3'];
  categoria: string = this.categorias[0];
  
  equipos: any = [];
  seleccion: any = [];


  constructor(
    private equiposService: EquiposService,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    this.seleccion['MotoGP'] = [];
    this.seleccion['Moto2'] = [];
    this.seleccion['Moto3'] = [];

    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;

    this.equiposService.obtenerEquipos()
    .subscribe(
      data => {
        this.categorias.forEach((element: string) => {
          this.equipos[element] = data.filter(
            equipo => equipo.categoria === element
          )
        });
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
