import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function narcissique(formControl : AbstractControl):{[s:string]:string} {
  if (formControl.value!="Guillaume")
    return {nomValid : 'Le nom '+formControl.value+" n'est pas valide"};
}

@Component({
  selector: 'app-root',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent implements OnInit {

  monFormGroup : FormGroup;
  nomControler : AbstractControl;

  constructor(form:FormBuilder) { 
      this.monFormGroup = form.group({
        nom : ["",Validators.compose([Validators.required,narcissique])],
        prenom : "Artignan", 
        age : "18"
      })

      this.nomControler = this.monFormGroup.controls.nom;
  }

  ngOnInit(): void {
  }

  valid(f){
    console.log(f.value);
  }

  valid2(){
    console.log(this.monFormGroup.value) ;
    console.log(this.monFormGroup.valid);
    console.log(this.nomControler.valid)
  }
}
