import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiquesComponent } from './scientifiques/scientifiques.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiquesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ScientifiquesComponent]
})
export class AppModule { }
