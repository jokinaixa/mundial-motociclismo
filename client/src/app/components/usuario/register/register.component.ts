import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { NgForm } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { Usuario } from '../../../models/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  private usuario: Usuario = {
    nombre: '',
    email: '',
    clave: ''
  };
  public isError = false;
  public msgError = '';


  constructor(
    private authService: AuthService, 
    private router: Router,
    private location: Location) { }


  ngOnInit() { }

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.authService
        .registerUser(this.usuario)
        .subscribe(usuario => {
          this.authService.setUser(usuario);
          const token = usuario.id;
          this.authService.setToken(token);
          this.router.navigate(['/usuario/profile']);
          location.reload();
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
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
