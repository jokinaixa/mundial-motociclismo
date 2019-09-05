import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../../models/Equipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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

}
