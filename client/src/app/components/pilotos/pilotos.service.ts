import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Piloto } from '../../models/Piloto';
import { Observable } from 'rxjs';

@Injectable()
export class PilotosService {

  pilotos: any = [];
  
  API_URI = 'http://localhost/api';
  //API_URI = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  obtenerPilotos(): Observable<Piloto[]> {
    return this.http.get<Piloto[]>(`${this.API_URI}/obtenerPilotos.php`);
  }

  mostrarPiloto(id: number): Observable<Piloto> {
    return this.http.get<Piloto>(`${this.API_URI}/mostrarPiloto.php?id=${id}`);
  }

  crearPiloto(piloto: Piloto): Observable<Piloto> {
    return this.http.post<Piloto>(`${this.API_URI}/crearPiloto.php`, piloto);
  }

  cambiarPiloto(id: string|number, piloto: Piloto): Observable<Piloto> {
    return this.http.post<Piloto>(`${this.API_URI}/cambiarPiloto.php?id=${id}`, piloto);
  }

  borrarPiloto(id: string|number, piloto: Piloto): Observable<Piloto> {
    return this.http.post<Piloto>(`${this.API_URI}/borrarPiloto.php?id=${id}`, piloto);
  }

}
