import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  public app_name = 'Mundial de Motociclismo';
  public isLogged = false;


  constructor(
    private authService: AuthService) { }


  ngOnInit() {
    this.onCheckUser();
  }


  onLogout(): void {
    this.authService.logoutUser();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
