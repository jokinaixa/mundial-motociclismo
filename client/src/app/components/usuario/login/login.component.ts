import { Component, OnInit } from '@angular/core';
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
    private router: Router) { }


  ngOnInit() { }


  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService
        .loginUser(this.usuario)
        .subscribe(
          data => {
            console.log(data);
            console.log('kk1');
            //this.authService.setUser(data.usuario);
            console.log('kk2');
            //const token = data.id;
            console.log('kk3');
            //this.authService.setToken(token);
            console.log('kk4');
            //this.router.navigate(['/usuario/profile']);
            console.log('kk5');
            //location.reload();
            //this.isError = false;
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
