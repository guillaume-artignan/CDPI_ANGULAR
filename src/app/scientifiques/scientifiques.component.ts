import { Component, OnInit } from '@angular/core';
import { CompteurService } from '../compteur.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-root',
  templateUrl: './scientifiques.component.html',
  styleUrls: ['./scientifiques.component.css'],
  providers:[CompteurService]
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

  personne = this.personnes[0];
  


  constructor(public compteur : CompteurService, 
              private api:ApiService) {
    
    api.donneScientifiques().subscribe((d)=>this.donneesChargees(d));
  }

  donneesChargees(d){
    this.personnes = d;
    this.personne = d[0];
  }

  ngOnInit(): void {
  }

  presse(e){
    console.log(this);
    console.log(e);
  }

  maCondition(){
    return this.personne.nom=='Einstein';
  }

  selection(e){
    this.personne = e;
    this.compteur.ajouter();
  }


}
