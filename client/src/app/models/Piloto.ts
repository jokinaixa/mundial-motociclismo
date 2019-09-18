import { Equipo } from './Equipo';

export interface Piloto {
    id?: number,
    equipo?: Equipo; 
    nombre?: string,
    imagen?: string,
    fecha?: Date,
    pais?: string
};