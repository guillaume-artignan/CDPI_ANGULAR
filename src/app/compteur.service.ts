import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  cpt : number =0;

  ajouter(){
    this.cpt++;
  }

  donne(){
    return this.cpt;
  }
}
