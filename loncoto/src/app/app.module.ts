import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { RouterModule } from "@angular/router";
import { AccueilComponent } from './components/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path:'accueil', component: AccueilComponent },
        { path:'', redirectTo: '/accueil', pathMatch: 'full' }
      ]      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
