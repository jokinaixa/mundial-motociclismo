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

  getPilotos() {
    return this.http.get(`${this.API_URI}/obtenerPilotos.php`);
  }

  getPiloto(id: string) {
    return this.http.get(`${this.API_URI}/pilotos/${id}`);
  }

  deletePiloto(id: string) {
    return this.http.delete(`${this.API_URI}/pilotos/${id}`);
  }

  savePiloto(piloto: Piloto) {
    return this.http.post(`${this.API_URI}/pilotos`, piloto);
  }

  updatePiloto(id: string|number, updatedPiloto: Piloto): Observable<Piloto> {
    return this.http.put(`${this.API_URI}/pilotos/${id}`, updatedPiloto);
  }

}
