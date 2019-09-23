import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClasificacionesService } from '../clasificaciones.service';

@Component({
  selector: 'app-clasificaciones-list',
  templateUrl: './clasificaciones-list.component.html',
  styleUrls: ['./clasificaciones-list.component.css']
})
export class ClasificacionesListComponent implements OnInit {

  categoria: string;
  seleccionCircuito: number;
  
  clasificacionesByMotoGP: any = [];
  clasificacionesByMoto2: any = [];
  clasificacionesByMoto3: any = [];
  

  constructor(
    private clasificacionesService: ClasificacionesService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;
    this.seleccionCircuito = params.circuito;
  }


  muestraCircuito(circuito: number) {
    this.seleccionCircuito = circuito;

    this.obtenerClasificaciones();
  }

  muestraCategoria(categoria: string) {
    this.categoria = categoria;
  }

  obtenerClasificaciones()
  {
    this.clasificacionesByMotoGP = [];
    this.clasificacionesByMoto2 = [];
    this.clasificacionesByMoto3 = [];
    
    this.clasificacionesService.obtenerClasifsPorCircuito(this.seleccionCircuito).subscribe(
      data => {
        this.clasificacionesByMotoGP = data.filter(
          clasificacion => clasificacion.categoria === 'MotoGP'
        );

        this.clasificacionesByMoto2 = data.filter(
          clasificacion => clasificacion.categoria === 'Moto2'
        );

        this.clasificacionesByMoto3 = data.filter(
          clasificacion => clasificacion.categoria === 'Moto3'
        );
      }
    );
  }
}
