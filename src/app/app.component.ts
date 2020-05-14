import { Component } from '@angular/core';
import Article from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nouvelleAppAngular';
  articles = [new Article("Google","www.google.fr",15),
             new Article("Yahoo","www.yahoo.fr",5),
             new Article("Lycos","www.lycos.fr",2)];
  titre:string;
  lien:string;
   
  ajouterArticle(){
    this.articles.push(new Article(this.titre,this.lien));
  }
}
