import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthService } from 'src/app/services/auth.service';

import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private user: Usuario = {
    email: '',
    clave: ''
  };

  public isError = false;


  constructor(
    private authService: AuthService, 
    private router: Router) { }


  ngOnInit() { }


  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService
        .loginUser(this.user)
        .subscribe(
          data => {
            this.authService.setUser(data.usuario);
            const token = data.id;
            this.authService.setToken(token);
            this.router.navigate(['/usuario/profile']);
            location.reload();
            this.isError = false;
          },
          error => this.onIsError()
        );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
