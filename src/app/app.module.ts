import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiquesComponent } from './scientifiques/scientifiques.component';
import { CalcultriceComponent } from './calcultrice/calcultrice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationComponent } from './operation/operation.component';
import { FormulairesComponent } from './formulaires/formulaires.component';
import { CompteurService } from './compteur.service';
import { CompteurTestComponent } from './compteur-test/compteur-test.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiquesComponent,
    CalcultriceComponent,
    OperationComponent,
    FormulairesComponent,
    CompteurTestComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([{path:"articles", component:AppComponent},
                          {path:"scientifiques", component: ScientifiquesComponent},
                          {path:"calculatrice", component: CalcultriceComponent},
                          {path :"formulaires", component: FormulairesComponent}])
  ],
  providers: [CompteurService],
  bootstrap: [MenuComponent]
})
export class AppModule { }
