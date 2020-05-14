import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './scientifiques.component.html',
  styleUrls: ['./scientifiques.component.css']
})
export class ScientifiquesComponent implements OnInit {

  title = "Détail sur ";
  toto;
  exemple;

  personnes = [{
                nom : "Einstein",
                prenom : "Albert",
                decouverte : "E=MC²",
                description : "The scientifique"
              },{
                nom : "Curie",
                prenom : "Marie",
                decouverte : "Radioactivité",
                description : ""
              },{
                nom : "Curie",
                prenom : "Pierre",
                decouverte : "Radioactivité",
                description : ""
              }];

  personne = {
                nom : "Einstein",
                prenom : "Albert",
                decouverte : "E=MC²",
                description : "The scientifique"
              };
  


  constructor() { }

  ngOnInit(): void {
  }

  presse(e){
    console.log(this);
    console.log(e);
  }

  maCondition(){
    return this.personne.nom=='Einstein';
  }


}
