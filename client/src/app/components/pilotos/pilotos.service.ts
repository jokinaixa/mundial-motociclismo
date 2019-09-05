import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Piloto } from '../../models/Piloto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  pilotos: any = [];
  
  API_URI = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  getPilotos(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(`${this.API_URI}/obtenerPilotos.php`);
  }

  getPilotosByTeam(equipo: string): Observable<Piloto> {
    return this.http.get<Piloto>(`${this.API_URI}/obtenerPilotosByTeam.php?equipo=${equipo}`);
  }

  getPiloto(id: number): Observable<Piloto> {
    return this.http.get<Piloto>(`${this.API_URI}/mostrarPiloto.php?id=${id}`);
  }

}
