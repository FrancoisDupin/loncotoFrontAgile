export class Page<T>{
    constructor(
        public content:T[],
        public totalElements:number,
        public totalPages:number,
        public size:number,
        public number:number,
        public numberOfElements:number,
        public first:boolean,
        public  last:boolean,
        public sort:any
    ) {
    }

    public static emptyPage<T>(): Page<T> {
        let p = new Page<T>([],0,1,12,0,0,true,true,{direction: "ASC", property:"id"});
        return p;
    }
}