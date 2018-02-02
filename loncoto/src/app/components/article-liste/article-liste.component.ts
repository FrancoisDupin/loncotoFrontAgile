import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';
import { Article } from '../../metier/Article';
import { Subscription } from 'rxjs/Subscription';
import { ArticleRepositoryService } from '../../services/article-repository.service';

@Component({
  selector: 'app-article-liste',
  templateUrl: './article-liste.component.html',
  styleUrls: ['./article-liste.component.css']
})
export class ArticleListeComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
   
  }

  public articles: Subject<Article[]>;
  public articleSubscription: Subscription;
  public totalItems:number;
  public currentPage:number;

  constructor(private _articleRepository:ArticleRepositoryService) { }

  ngOnInit() {
    this.articles= new Subject();
    this.articleSubscription=this._articleRepository.listeArticlesObservable().subscribe(page=>{
      this.totalItems=page.totalElements;
      this.currentPage=page.number+1;
      this.articles.next(page.content);
    })

    this._articleRepository.refreshListe();
  }

  public pageChanged(event:any) :void{
    //this._articleRepository.setNumPage(event.page -1);
  }

}
