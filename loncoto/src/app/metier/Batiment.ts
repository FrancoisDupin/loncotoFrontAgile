import { Site } from "./Site";
import { Etage } from "./Etage";

export class Batiment{
    constructor(
        public id:number,
        public name:string,
        public site?:Site,
        public etages?:Etage[]
    ){}
}