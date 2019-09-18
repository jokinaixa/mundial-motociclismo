import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'assets/data';

  constructor(private http: HttpClient) { }

  obtenerPaises() {
    return this.http.get(`${this.API_URI}/paises.json`);
  }

}
