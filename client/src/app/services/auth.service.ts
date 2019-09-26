import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

import { Usuario } from "../models/Usuario";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  API_URI = 'http://localhost:8080/api';


  constructor(
    private http: HttpClient) { }


  loginUser(usuario: Usuario): Observable<any>
  {
    return this.http
      .post<Usuario>(`${this.API_URI}/login.php?email=${usuario.email}`, usuario, { headers: this.headers })
      .pipe(map(data => data));
  }

  registerUser(usuario: Usuario)
  {
    return this.http
      .post<Usuario>(`${this.API_URI}/register.php`, usuario, { headers: this.headers })
      .pipe(map(data => data));
  }

  setUser(usuario: Usuario): void
  {
    console.log('kk11');
    let user_string = JSON.stringify(usuario);
    console.log('kk12');
    localStorage.setItem("currentUser", user_string);
    console.log('kk13');
  }

  setToken(token): void 
  {
    console.log('kk31');
    localStorage.setItem("accessToken", token);
    console.log('kk32');
  }

  getToken() 
  {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): Usuario 
  {
    let user_string = localStorage.getItem("currentUser");

    if (!isNullOrUndefined(user_string)) {
      let user: Usuario = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() 
  {
    let accessToken = localStorage.getItem("accessToken");

    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");

    return this.http
      .post<Usuario>(`${this.API_URI}/logout.php?access_token=${accessToken}`, { headers: this.headers });
  }
}
