import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

import { Usuario } from '../../../models/Usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  usuario: Usuario;

  ngOnInit() {
    this.usuario = this.authService.getCurrentUser();
  }

}
