import { SousFamille } from "./SousFamille";
import { Materiel } from "./Materiel";

export class Article {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public subfamilly?: SousFamille,
        public equipements?: Materiel[]
    ){}

}