import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../../models/Equipo';
import { Observable } from 'rxjs';

@Injectable()
export class EquiposService {

  equipos: any = [];
  
  API_URI = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.API_URI}/obtenerEquipos.php`);
  }

  getEquipo(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.API_URI}/mostrarEquipo.php?id=${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/borrarEquipo.php?id=${id}`);
  }

  crearEquipo(equipo: Equipo) {
    return this.http.post(`${this.API_URI}/crearEquipo.php`, equipo);
  }

  cambiarEquipo(id: string|number, equipo: Equipo): Observable<Equipo> {
    return this.http.put(`${this.API_URI}/borrarEquipo.php?id=${id}`, equipo);
  }
}
