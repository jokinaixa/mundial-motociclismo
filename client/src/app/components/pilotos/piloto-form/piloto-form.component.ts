import { Component, OnInit, HostBinding } from '@angular/core';
import { Piloto } from 'src/app/models/Piloto';

import { PilotosService } from '../pilotos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-piloto-form',
  templateUrl: './piloto-form.component.html',
  styleUrls: ['./piloto-form.component.css']
})
export class PilotoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  piloto: Piloto = {
    id: null,
    nombre: '',
    imagen: '',
    edad: 0
  };

  edit: boolean = false;

  constructor(private pilotoService: PilotosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.pilotoService.getPiloto(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.piloto = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewPiloto() {
    delete this.piloto.id;
    this.pilotoService.savePiloto(this.piloto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      )
  }

  updatePiloto() {
    this.pilotoService.updatePiloto(this.piloto.id, this.piloto)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/pilotos']);
        },
        err => console.error(err)
      )
  }
  
}
