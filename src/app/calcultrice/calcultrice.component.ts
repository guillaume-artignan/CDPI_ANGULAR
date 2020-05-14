import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calcultrice.component.html',
  styleUrls: ['./calcultrice.component.css']
})
export class CalcultriceComponent implements OnInit {

  resultat = "0";

  constructor() { }

  ngOnInit(): void {
  }

  egal(){
    
    try{
      this.resultat = ""+eval(this.resultat);
    } catch (e){
      this.resultat = "Err";
    }
  }

  nettoie(){
    this.resultat = "0";
  }

  presse(e,touche){
    if (this.resultat=="0" || this.resultat=="Err")
      this.resultat=""+touche;
    else this.resultat+=""+touche;
  }

}
