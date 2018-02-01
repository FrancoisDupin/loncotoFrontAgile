import { Materiel } from "./Materiel";
import { Etage } from "./Etage";

export class Salle{
    constructor(
        public id:number,
        public nom:string,
        public etage?:Etage,
        public equipments?:Materiel[]
    ){}
}