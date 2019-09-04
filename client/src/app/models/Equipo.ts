import { Title } from '@angular/platform-browser';
import { Piloto } from "./Piloto";

export interface Equipo {
    id?: number,
    piloto?: Piloto,
    nombre?: string,
    moto?: string,
    imagen?: string,
};