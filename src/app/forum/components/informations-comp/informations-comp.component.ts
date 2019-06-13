import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckBox } from "nativescript-checkbox"

@Component({
  selector: 'ns-informations-comp',
  templateUrl: './informations-comp.component.html',
  styleUrls: ['./informations-comp.component.css'],
  moduleId: module.id,
})
export class InformationsCompComponent implements OnInit {

  @ViewChild("permis", { static: true }) permis: ElementRef;
  @ViewChild("vehicule", { static: true }) vehicule: ElementRef;
  @ViewChild("FR", { static: true }) fr: ElementRef;
  @ViewChild("UE", { static: true }) ue: ElementRef;
  @ViewChild("autre", { static: true }) autre: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  selectNationalite(args) {
    let checkBox = <CheckBox>args.object;
    switch (checkBox.id) {
      case ("FR"): this.ue.nativeElement.checked = false;
        this.autre.nativeElement.checked = false;
        break;

      case ("UE"): this.fr.nativeElement.checked = false;
        this.autre.nativeElement.checked = false;
        break;

      case ("autre"): this.fr.nativeElement.checked = false;
        this.ue.nativeElement.checked = false;
        break;

      default: this.fr.nativeElement.checked = false;
        this.ue.nativeElement.checked = false;
        this.autre.nativeElement.checked = false;
        break;
    }
  }

  validate(){
    let final: string = "" ; 
    let isOkai: boolean = false ; 
    let count = 0 ; 
    if(this.permis.nativeElement.checked){
      final += "Permis : Checked - "
    }
    if(this.vehicule.nativeElement.checked){
      final += "Vehicule Personnel : Checked - "
    }
    if(this.fr.nativeElement.checked){
      final += "Nationalité : FR"
      count++ ;  
    }
    if(this.ue.nativeElement.checked){
      final += "Nationalité : UE" 
      count++ ;  
    }
    if(this.autre.nativeElement.checked){
      final += "Nationalité : Autre"
      count++ ;  
    }
    if(count == 1){
      isOkai = true ; 
    }
    console.log(final)
    console.log(isOkai)
  }



}
