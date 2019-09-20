import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../../models/Equipo';
import { Observable } from 'rxjs';

@Injectable()
export class EquiposService {

  equipos: any = [];
  
  API_URI = 'http://localhost/api';
  //API_URI = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  obtenerEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.API_URI}/obtenerEquipos.php`);
  }

  obtenerMotos(categoria: string) {
    return this.http.get(`${this.API_URI}/obtenerMotos.php?categoria=${categoria}`);
  }

  mostrarEquipo(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.API_URI}/mostrarEquipo.php?id=${id}`);
  }

  crearEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(`${this.API_URI}/crearEquipo.php`, equipo);
  }

  cambiarEquipo(id: string|number, equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(`${this.API_URI}/cambiarEquipo.php?id=${id}`, equipo);
  }

  borrarEquipo(id: string|number, equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(`${this.API_URI}/borrarEquipo.php?id=${id}`, equipo);
  }
}
