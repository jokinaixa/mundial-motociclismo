import { Component, OnInit, HostBinding } from '@angular/core';

import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})

export class EquiposListComponent implements OnInit {

  equipos: any = [];

  constructor(private equipoService: EquiposService) { }
  

  ngOnInit() {
    this.equipoService.getEquipos()
      .subscribe(data => this.equipos = data);
  }

}
