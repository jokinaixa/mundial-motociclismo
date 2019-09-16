import { Piloto } from "./Piloto";
import { Circuito } from "./Circuito";

export interface Clasificacion {
    id?: number,
    anio?: number,
    circuito?: Circuito,
    piloto?: Piloto,
    tipo?: number;
    categoria?: number;
    posicion?: string,
};