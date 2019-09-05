import { Piloto } from './Piloto';

export interface Equipo {
    id?: number,
    nombre?: string,
    moto?: string,
    imagen?: string,
    pilotos?: Piloto[]
};