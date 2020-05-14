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
   
}
