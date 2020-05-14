import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Article from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article : Article;

  @Output()
  tooBad : EventEmitter<any> = new EventEmitter<any>();
            
  constructor() { }

  ngOnInit(): void {
  }

  voteContre(){
    this.article.voteContre();
    if (this.article.points<=-10){
      this.tooBad.emit(["C'EST NUL",this.article]);
    }
  }

}
