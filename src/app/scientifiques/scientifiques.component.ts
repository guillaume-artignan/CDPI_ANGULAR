import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './scientifiques.component.html',
  styleUrls: ['./scientifiques.component.css']
})
export class ScientifiquesComponent implements OnInit {

  title = "Détail sur ";
  personne = {
                nom : "Einstein",
                prenom : "Albert",
                decouverte : "E=MC²",
                description : "The scientifique"
              };
  


  constructor() { }

  ngOnInit(): void {
  }

  toto(event,a){
    this.personne.nom += "1"+a;
    console.log(event);
  }

}
