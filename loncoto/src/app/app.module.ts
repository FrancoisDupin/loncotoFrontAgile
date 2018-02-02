import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ArticleListeComponent } from './components/article-liste/article-liste.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { RouterModule } from "@angular/router";
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArticleRepositoryService } from './services/article-repository.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListeComponent,
    NavBarComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot(
      [
        { path:'accueil', component: AccueilComponent },
        { path:'articles', component: ArticleListeComponent },
        { path:'', redirectTo: '/accueil', pathMatch: 'full' }
      ]      
    )
  ],
  providers: [ArticleRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
