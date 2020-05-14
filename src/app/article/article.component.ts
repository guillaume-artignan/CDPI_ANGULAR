import { Component, OnInit, Input } from '@angular/core';
import Article from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article : Article;
            
  constructor() { }

  ngOnInit(): void {
  }

}
