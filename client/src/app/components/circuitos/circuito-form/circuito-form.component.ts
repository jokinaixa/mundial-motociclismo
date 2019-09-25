import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { CircuitosService } from '../circuitos.service';
import { ClasificacionesService } from '../../clasificaciones/clasificaciones.service';
import { GeneralService } from '../../../services/general.service';

import { Circuito } from '../../../models/Circuito';
import { Clasificacion } from '../../../models/Clasificacion';

@Component({
  selector: 'app-circuito-form',
  templateUrl: './circuito-form.component.html',
  styleUrls: ['./circuito-form.component.css']
})
export class CircuitoFormComponent implements OnInit {

  categorias: any = ['MotoGP', 'Moto2', 'Moto3'];
  clasificaciones: any = [];
  paises: any = [];
  
  public circuitos: Circuito[];
  public circuito: Circuito = {
    id: null,
    nombre: '',
    pais: '0',
    localidad: '',
    longitud: 0,
    imagen: '',
    fecha: new Date
  };

  edit: boolean = false;  


  constructor(
    private circuitosService: CircuitosService, 
    private clasificacionesService: ClasificacionesService, 
    private generalService: GeneralService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    this.obtenerPaises();

    if (params.id)
    {
      this.circuito.id = params.id;

      this.circuitosService.mostrarCircuito(params.id)
      .subscribe(
        res => {
          //console.log(res);
          this.circuito = res;
          this.edit = true;

          this.obtenerClasificaciones();
        },
        err => console.log(err)
      )
    }
  }

  public obtenerPaises()
  {
    this.generalService.obtenerPaises()
    .subscribe(
      res => {
        //console.log(res);
        this.paises = res;
      },
      err => console.log(err)
    );
  }

  public obtenerClasificaciones()
  {
    this.clasificaciones['MotoGP'] = [];
    this.clasificaciones['Moto2'] = [];
    this.clasificaciones['Moto3'] = [];
    
    this.clasificacionesService.obtenerClasifsPorCircuito(this.circuito.id)
    .subscribe(
      data => {
        this.categorias.forEach((element: string) => {
          this.clasificaciones[element] = data.filter(
            clasificacion => clasificacion.categoria === element
          )
        })

        console.log(this.clasificaciones['MotoGP']);
      }
    );
  }

  public crearCircuito()
  {
    delete this.circuito.id;

    this.circuito.imagen = (this.circuito.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.circuito.imagen;

    this.circuitosService.crearCircuito(this.circuito)
    .subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/circuitos']);
      },
      err => console.error(err)
    );
  }

  public cambiarCircuito()
  {
    this.circuitosService.cambiarCircuito(this.circuito.id, this.circuito)
    .subscribe(
      res => { 
        //console.log(res);
        this.router.navigate(['/circuitos']);
      },
      err => console.error(err)
    );
  }

  public borrarCircuito(id: number)
  {
    this.circuitosService.borrarCircuito(id, this.circuito)
    .subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/circuitos']);
      },
      err => console.error(err)
    );
  }
}