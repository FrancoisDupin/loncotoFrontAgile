import { Article } from "./Article";
import { Famille } from "./Famille";

export class SousFamille{
    constructor(
        public id:number,
        public name:string,
        public family?:Famille,
        public articles?:Article[]
    ){}
}