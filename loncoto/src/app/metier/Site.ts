import { Batiment } from "./Batiment";
import { Client } from "./Client";

export class Site {
    constructor(
        public id:number,
        public name:string,
        public batiments?:Batiment[],
        public clients?:Client[]
    ){}
}