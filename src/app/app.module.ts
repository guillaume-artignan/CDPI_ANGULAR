import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiquesComponent } from './scientifiques/scientifiques.component';
import { CalcultriceComponent } from './calcultrice/calcultrice.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiquesComponent,
    CalcultriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CalcultriceComponent]
})
export class AppModule { }
