import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  API_URI = 'assets/data';

  constructor(private http: HttpClient) { }

  obtenerPaises() {
    return this.http.get(`${this.API_URI}/paises.json`);
  }

}
