import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Circuito } from '../../models/Circuito';
import { Observable } from 'rxjs';

@Injectable()
export class CircuitosService {

  circuitos: any = [];
  
  API_URI = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  obtenerCircuitos(): Observable<Circuito[]> {
    return this.http.get<Circuito[]>(`${this.API_URI}/obtenerCircuitos.php`);
  }

  mostrarCircuito(id: number): Observable<Circuito> {
    return this.http.get<Circuito>(`${this.API_URI}/mostrarCircuito.php?id=${id}`);
  }

  crearCircuito(circuito: Circuito): Observable<Circuito> {
    return this.http.post<Circuito>(`${this.API_URI}/crearCircuito.php`, circuito);
  }

  cambiarCircuito(id: string|number, circuito: Circuito): Observable<Circuito> {
    return this.http.post<Circuito>(`${this.API_URI}/cambiarCircuito.php?id=${id}`, circuito);
  }

  borrarCircuito(id: string|number, circuito: Circuito): Observable<Circuito> {
    return this.http.post<Circuito>(`${this.API_URI}/borrarCircuito.php?id=${id}`, circuito);
  }
}
