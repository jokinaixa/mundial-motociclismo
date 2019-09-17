import { Piloto } from "./Piloto";
import { Circuito } from "./Circuito";

export interface Clasificacion {
    id?: number,
    circuito?: Circuito,
    localidad?: string,
    piloto?: Piloto,
    categoria?: string,
    posicion?: number
};