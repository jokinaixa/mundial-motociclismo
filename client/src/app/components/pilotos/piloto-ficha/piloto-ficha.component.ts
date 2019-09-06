import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-piloto-ficha',
  templateUrl: './piloto-ficha.component.html',
  styleUrls: ['./piloto-ficha.component.css']
})
export class PilotoFichaComponent implements OnInit {

  @Input() piloto: [];

  constructor() { }

  ngOnInit() {
  }

}
