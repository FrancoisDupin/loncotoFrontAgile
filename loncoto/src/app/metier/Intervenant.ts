import { Intervention } from "./Intervention";
import { Group } from "./Group";

export class Intervenant {
    constructor(
        public id:number,
        public lastname:string,
        public firstname:string,
        public interventions?:Intervention[],
        public groups?:Group[]
    ){}
}