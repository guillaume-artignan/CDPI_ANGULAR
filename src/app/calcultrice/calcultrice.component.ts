import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calcultrice.component.html',
  styleUrls: ['./calcultrice.component.css']
})
export class CalcultriceComponent implements OnInit {

  resultat = "0";
  operations = [];

  constructor() { }

  ngOnInit(): void {
  }

  egal(){
    
    try{
      var resultatEval = eval(this.resultat);
      this.operations.push({operation : this.resultat, egal:resultatEval});
      this.resultat = ""+ resultatEval;

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

  supprime(ope){
    console.log("HELLO");
    var indice = this.operations.indexOf(ope);
    if (indice!=-1){
      this.operations.splice(indice,1);
    }
  }

}
