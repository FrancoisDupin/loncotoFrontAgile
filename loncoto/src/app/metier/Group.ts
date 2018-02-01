import { Intervenant } from "./Intervenant";

export class Group {
    constructor(
        public id:number,
        public name:string,
        public intervenants?:Intervenant[]
    ){}
}