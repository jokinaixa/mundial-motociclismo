import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EquiposService } from '../equipos.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css'],
})

export class EquiposListComponent implements OnInit {

  categoria: string;
  
  equiposByMotoGP: any = [];
  equiposByMoto2: any = [];
  equiposByMoto3: any = [];

  marcasMotoGP: any = ["Honda", "Yamaha",  "Suzuki", "Ducati"];
  marcasMoto2: any = ["KTM", "Kalex"];
  marcasMoto3: any = [];
  //marcasMotoGP: any = [];
  //marcasMoto2: any = [];
  //marcasMoto3: any = [];

  marcasMotoGPSeleccionadas: any = [];
  marcasMoto2Seleccionadas: any = [];
  marcasMoto3Seleccionadas: any = [];


  constructor(
    private equiposService: EquiposService,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.categoria = params.categoria;

    //this.equiposService.obtenerMotos('MotoGP').subscribe(
    //  data => this.marcasMotoGP = data
    //);

    this.equiposService.obtenerEquipos().subscribe(
      data => {
        this.equiposByMotoGP = data.filter(
          equipo => equipo.categoria === 'MotoGP'
        );

        this.equiposByMoto2 = data.filter(
          equipo => equipo.categoria === 'Moto2'
        );

        this.equiposByMoto3 = data.filter(
          equipo => equipo.categoria === 'Moto3'
        );
      }
    );
  }

  muestraContenido(categoria) {
    this.categoria = categoria;
  }

  seleccionMarcasMotoGP(moto:string, isChecked: boolean) { 
    if (isChecked) {
      this.marcasMotoGPSeleccionadas.push(moto);
    } else {
      var index = this.marcasMotoGPSeleccionadas.indexOf(moto);
      this.marcasMotoGPSeleccionadas.splice(index, 1);
    }
    this.marcasMotoGPSeleccionadas = this.marcasMotoGPSeleccionadas.slice();
  }

  seleccionMarcasMoto2(moto:string, isChecked: boolean) { 
    if (isChecked) {
      this.marcasMoto2Seleccionadas.push(moto);
    } else {
      var index = this.marcasMoto2Seleccionadas.indexOf(moto);
      this.marcasMoto2Seleccionadas.splice(index, 1);
    }
    this.marcasMoto2Seleccionadas = this.marcasMoto2Seleccionadas.slice();
  }

  seleccionMarcasMoto3(moto:string, categoria: string, isChecked: boolean) { 
    
    if (isChecked) {
      this.marcasMoto3Seleccionadas.push(moto);
    } else {
      var index = this.marcasMoto3Seleccionadas.indexOf(moto);
      this.marcasMoto3Seleccionadas.splice(index, 1);
    }
    this.marcasMoto3Seleccionadas = this.marcasMoto3Seleccionadas.slice();
  }
}
