import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClasificacionesService } from '../clasificaciones.service';

@Component({
  selector: 'app-clasificaciones-list',
  templateUrl: './clasificaciones-list.component.html',
  styleUrls: ['./clasificaciones-list.component.css']
})

export class ClasificacionesListComponent implements OnInit {

  categorias: any = ['MotoGP', 'Moto2', 'Moto3'];
  categoria: string = this.categorias[0];

  clasificaciones: any = [];
  seleccion: number;
  

  constructor(
    private clasificacionesService: ClasificacionesService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;
    this.seleccion = params.circuito;
  }


  muestraCircuito(circuito: number) {
    this.seleccion = circuito;

    this.obtenerClasificaciones();
  }

  muestraCategoria(categoria: string) {
    this.categoria = categoria;
  }

  obtenerClasificaciones()
  {
    this.clasificaciones['MotoGP'] = [];
    this.clasificaciones['Moto2'] = [];
    this.clasificaciones['Moto3'] = [];
    
    this.clasificacionesService.obtenerClasifsPorCircuito(this.seleccion)
    .subscribe(
      data => {
        this.categorias.forEach((element: string) => {
          this.clasificaciones[element] = data.filter(
            clasificacion => clasificacion.categoria === element
          )
        })
      }
    );
  }
}
