import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { Usuario } from '../../../models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private usuario: Usuario = {
    email: '',
    clave: ''
  };

  public isError = false;


  constructor(
    private authService: AuthService,
    private location: Location,
    private router: Router) { }


  ngOnInit() { }


  onLogin(form: NgForm)
  {
    if (form.valid)
    {
      return this.authService
        .loginUser(this.usuario)
        .subscribe(
          usuario => {
            this.authService.setUser(usuario);
            const token = usuario.id;
            this.authService.setToken(token);
            this.router.navigate(['/usuario/profile']);
            location.reload();
            this.isError = false;
          },
          error => this.onIsError()
        );
    }
    else
    {
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
