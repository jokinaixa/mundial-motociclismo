import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CircuitosService } from '../circuitos.service';

import { Circuito } from '../../../models/Circuito';

@Component({
  selector: 'app-circuito-form',
  templateUrl: './circuito-form.component.html',
  styleUrls: ['./circuito-form.component.css']
})
export class CircuitoFormComponent implements OnInit {

  circuito: Circuito = {
    id: null,
    nombre: '',
    pais: '',
    longitud: 0,
    imagen: ''
  };

  edit: boolean = false;  

  constructor(private circuitosService: CircuitosService, private router: Router, private activatedRoute: ActivatedRoute) { }

    
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;

    if (params.id)
    {
      this.circuitosService.mostrarCircuito(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.circuito = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  crearCircuito()
  {
    delete this.circuito.id;

    this.circuito.imagen = (this.circuito.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.circuito.imagen;

    this.circuitosService.crearCircuito(this.circuito)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/circuitos']);
        },
        err => console.error(err)
      );
  }

  cambiarCircuito()
  {
    this.circuitosService.cambiarCircuito(this.circuito.id, this.circuito)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/circuitos']);
        },
        err => console.error(err)
      );
  }

  borrarCircuito(id: string)
  {
    this.circuitosService.borrarCircuito(id, this.circuito)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/circuitos']);
        },
        err => console.error(err)
      );
  }
}
