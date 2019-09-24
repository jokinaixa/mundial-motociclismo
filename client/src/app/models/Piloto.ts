import { Equipo } from './Equipo';

export interface Piloto {
    id?: number,
    equipo?: Equipo; 
    nombre?: string,
    apellido?: string,
    imagen?: string,
    fecha?: Date,
    pais?: string
};

class PilotoMaker {
    static create(event: Piloto) {
        return { 
            id: event.id,
            equipo: event.equipo,
            nombre: event.nombre,
            apellido: event.apellido,
            completo: event.nombre + event.apellido,
            imagen: event.imagen,
            fecha: event.fecha,
            pais: event.pais
        }
    }
}

// const equipo = PilotoMaker.create({ name: 'Inferno', toppings: ['cheese', 'peppers'] };
