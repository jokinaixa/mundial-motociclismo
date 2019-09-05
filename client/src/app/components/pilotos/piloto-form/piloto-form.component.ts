import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-piloto-form',
  template: `
    <p>{{ piloto.nombre }}</p>
    <p>{{ piloto.edad }}</p>
  `,
  styles: []
})

export class PilotoFormComponent implements OnInit {

  piloto: any = [];

  constructor(private pilotosService: PilotosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pilotosService.getPiloto(1)
      .subscribe(data => {
        this.piloto = data;
      });
  }

}
