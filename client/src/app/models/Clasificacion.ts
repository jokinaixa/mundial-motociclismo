import { Title } from '@angular/platform-browser';
import { Piloto } from "./Piloto";

export interface Circuito {
    id?: number,
    ano?: number,
    circuito?: string,
    piloto?: Piloto,
    tipo?: 'Pole' | 'Carrera';
    categoria?: 'Moto3' | 'Moto2' | 'MotoGP';
    posición?: number,
};