import { Equipo } from './Equipo';

export interface Piloto {
    id?: number,
    equipo?: Equipo; 
    nombre?: string,
    imagen?: string,
    edad?: number,
};