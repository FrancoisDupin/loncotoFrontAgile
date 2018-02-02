import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Page } from '../metier/Page';
import { Article } from '../metier/Article';


@Injectable()
export class ArticleRepositoryService {



  private articleSubject: BehaviorSubject<Page<Article>>;
  private searchName: string; //recherche sur le nom

  private baseUrl: string="http://localhost:8080/extendedapi";
  private apiUrl: string="http://localhost:8080/api/";
  private numPage:number;

  constructor(private _http:HttpClient) {

    this.searchName="";
    this.articleSubject= new BehaviorSubject(new Page([],0,0,5,0,1,true,false,null));
    this.numPage=0;

   }

   public listeArticlesObservable(): Observable<Page<Article>>{
     return this.articleSubject.asObservable();
   }


  refreshListe(): any {
    let url= `${this.baseUrl}/articles`;
    if(this.searchName!="") {
      url+=`/search/${this.searchName}`;
    }
    let params : HttpParams= new HttpParams();
    params= params.set("page",""+this.numPage);


    this._http.get<Page<Article>>(url,{params: params})
              .toPromise()
              .then(articles=>this.articleSubject.next(articles));

  }
}
