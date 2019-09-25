import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PilotosService } from '../pilotos.service';
import { EquiposService } from '../../equipos/equipos.service';
import { GeneralService } from '../../../services/general.service';

import { Piloto } from '../../../models/Piloto';
import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-piloto-form',
  templateUrl: './piloto-form.component.html',
  styleUrls: ['./piloto-form.component.css']
})

export class PilotoFormComponent implements OnInit {

  categoria: string;

  equipo: Equipo = {
    id: 0,
    categoria: ''
  };

  piloto: Piloto = {
    equipo: this.equipo,
    nombre: '',
    apellido: '',
    imagen: '',
    pais: '0'    
  };

  equipos: Equipo[];
  paises: any = [];

  edit: boolean = false;


  constructor(
    private pilotosService: PilotosService, 
    private equiposService: EquiposService,
    private generalService: GeneralService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit()
  {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;
    
    this.obtenerEquipos();
    this.obtenerPaises();

    if (params.id)
    {
      this.pilotosService.mostrarPiloto(params.id).subscribe(
        res => {
          //console.log(res);
          this.piloto = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }

    if (params.categoria)
    {
      this.equipo.categoria = params.categoria;
    }
  }

  obtenerEquipos()
  {
    this.equiposService.obtenerEquipos().subscribe(
      res => {
        //console.log(res);
        this.equipos = res.filter(
          equipo => equipo.categoria === this.categoria
        );
      },
      err => console.log(err)
    );
  }

  obtenerPaises()
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

  crearPiloto()
  {
    delete this.piloto.id;
    this.piloto.imagen = (this.piloto.imagen == '') ? 'assets/images/sin_imagen.jpg' : this.piloto.imagen;
    this.piloto.apellido = this.piloto.apellido.toLocaleUpperCase();

    this.pilotosService.crearPiloto(this.piloto).subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/pilotos', this.equipo.categoria]);
      },
      err => console.error(err)
    );
  }

  cambiarPiloto()
  {
    this.piloto.apellido = this.piloto.apellido.toLocaleUpperCase();
    
    this.pilotosService.cambiarPiloto(this.piloto.id, this.piloto).subscribe(
      res => { 
        //console.log(res);
        this.router.navigate(['/pilotos', this.equipo.categoria]);
      },
      err => console.error(err)
    );
  }

  borrarPiloto(id: string)
  {
    this.pilotosService.borrarPiloto(id, this.piloto).subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/pilotos', this.equipo.categoria]);
      },
      err => console.error(err)
    )
  }
}
