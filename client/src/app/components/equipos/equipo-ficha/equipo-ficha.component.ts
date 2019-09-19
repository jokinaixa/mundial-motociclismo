import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-equipo-ficha',
  templateUrl: './equipo-ficha.component.html',
  styleUrls: ['./equipo-ficha.component.css']
})
export class EquipoFichaComponent implements OnInit {

  @Input() equipo: [];
  
  constructor() { }

  ngOnInit() {
  }

}
