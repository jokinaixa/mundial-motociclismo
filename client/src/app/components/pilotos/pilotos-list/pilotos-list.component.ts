import { Component, OnInit, HostBinding } from '@angular/core';

import { PilotosService } from '../pilotos.service';

@Component({
  selector: 'app-pilotos-list',
  templateUrl: './pilotos-list.component.html',
  styleUrls: ['./pilotos-list.component.css'],
})
export class PilotosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  pilotos: any = [];

  constructor(private pilotoService: PilotosService) { }


  ngOnInit() {
    this.getPilotos();
  }

  getPilotos() {
    this.pilotoService.getPilotos()
      .subscribe(
        res => {
          this.pilotos = res;
        },
        err => console.error(err)
      );
  }

  deletePiloto(id: string) {
    this.pilotoService.deletePiloto(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPilotos();
        },
        err => console.error(err)
      )
  }
}
