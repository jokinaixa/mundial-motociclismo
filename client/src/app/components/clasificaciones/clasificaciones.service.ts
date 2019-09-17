import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clasificacion } from '../../models/Clasificacion';
import { Observable } from 'rxjs';

@Injectable()
export class ClasificacionesService {

  circuitos: any = [];
  
  API_URI = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  obtenerClasificaciones(): Observable<Clasificacion[]> {
    return this.http.get<Clasificacion[]>(`${this.API_URI}/obtenerClasificaciones.php`);
  }

  mostrarClasificacion(id: number): Observable<Clasificacion> {
    return this.http.get<Clasificacion>(`${this.API_URI}/mostrarClasificacion.php?id=${id}`);
  }

  crearClasificacion(clasificacion: Clasificacion): Observable<Clasificacion> {
    return this.http.post<Clasificacion>(`${this.API_URI}/crearClasificacion.php`, clasificacion);
  }

  cambiarClasificacion(id: string|number, clasificacion: Clasificacion): Observable<Clasificacion> {
    return this.http.post<Clasificacion>(`${this.API_URI}/cambiarClasificacion.php?id=${id}`, clasificacion);
  }

  borrarClasificacion(id: string|number, clasificacion: Clasificacion): Observable<Clasificacion> {
    return this.http.post<Clasificacion>(`${this.API_URI}/borrarClasificacion.php?id=${id}`, clasificacion);
  }
}