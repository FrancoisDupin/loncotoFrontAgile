import { Materiel } from "./Materiel";
import { Site } from "./Site";

export class Client {
    constructor(
        public id:number,
        public name:string,
        public equipments?:Materiel[],
        public sites?:Site[]
    ){}
}