import { Injectable, Component, OnInit, HostBinding } from '@angular/core';

import { EquiposService } from '../equipos.service';
import { Equipo } from '../../../models/Equipo';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})
export class EquiposListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  equipos: any = [];

  constructor(private equipoService: EquiposService) { }

  ngOnInit() {
    this.getEquipos();
  }


  getEquipos() {
/*
    this.equipoService.getEquipos()
      .subscribe(
        res => {
          this.equipos = res;
        },
        err => console.error(err)
      );
*/
    this.equipoService.getEquipos()
      .subscribe((res : Equipo[]) => {
        this.equipos = res;
        console.log(this.equipos);
      }
    );
  }

  deleteEquipo(id: string) {
    this.equipoService.deleteEquipo(id)
      .subscribe(
        res => {
          console.log(res);
          this.getEquipos();
        },
        err => console.error(err)
      )
  }

}
