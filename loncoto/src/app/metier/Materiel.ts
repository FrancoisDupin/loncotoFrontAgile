import { Article } from "./Article";
import { Client } from "./Client";
import { Salle } from "./Salle";
import { Intervention } from "./Intervention";

export class Materiel {
    constructor(
        public id:number,
        public serialNumber:number,
        public article?:Article,
        public client?:Client,
        public salle?:Salle,
        public interventions?:Intervention[],
    ){}
}