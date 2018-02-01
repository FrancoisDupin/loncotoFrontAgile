import { SousFamille } from "./SousFamille";

export class Famille {
    constructor(
        public id:number,
        public name:string,
        public subfamilies?:SousFamille[]
    ){}
}