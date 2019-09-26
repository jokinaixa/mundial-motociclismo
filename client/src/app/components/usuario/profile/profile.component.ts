import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  user: Usuario;

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }

}
