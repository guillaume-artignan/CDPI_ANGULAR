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
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiquesComponent,
    CalcultriceComponent,
    OperationComponent,
    FormulairesComponent,
    CompteurTestComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule, HttpClientModule
  ],
  providers: [CompteurService],
  bootstrap: [ScientifiquesComponent]
})
export class AppModule { }
