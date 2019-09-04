import { Component, OnInit, HostBinding } from '@angular/core';
import { Equipo } from 'src/app/models/Equipo';

import { EquiposService } from '../equipos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo-form',
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css']
})
export class EquipoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  equipo: Equipo = {
    id: null,
    nombre: '',
    moto: '',
    imagen: ''
  };

  edit: boolean = false;

  constructor(private equipoService: EquiposService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.equipoService.getEquipo(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.equipo = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewEquipo() {
    delete this.equipo.id;
    this.equipoService.saveEquipo(this.equipo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/equipos']);
        },
        err => console.error(err)
      )
  }

  updateEquipo() {
    this.equipoService.updateEquipo(this.equipo.id, this.equipo)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/equipos']);
        },
        err => console.error(err)
      )
  }
  
}
