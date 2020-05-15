import { Component, OnInit } from '@angular/core';
import { CompteurService } from '../compteur.service';

@Component({
  selector: 'CptButton',
  templateUrl: './compteur-test.component.html',
  styleUrls: ['./compteur-test.component.css'],
  providers:[CompteurService]
})
export class CompteurTestComponent implements OnInit {

  constructor(public compteur : CompteurService) { }

  ngOnInit(): void {
  }

  

}
