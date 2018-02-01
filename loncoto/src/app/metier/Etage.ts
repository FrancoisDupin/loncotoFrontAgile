import { Salle } from "./Salle";
import { Batiment } from "./Batiment";

export class Etage {
    constructor(
        public id:number,
        public number:number,
        public batiment?:Batiment,
        public salles?:Salle
    ){}
}