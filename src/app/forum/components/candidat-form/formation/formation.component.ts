import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { TokenModel, RadAutoCompleteTextView } from 'nativescript-ui-autocomplete';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Diploma } from '~/app/forum/models/Diploma';


@Component({
  selector: 'ns-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  moduleId: module.id,
})
export class FormationComponent implements OnInit {

  diplomaAvailable: ObservableArray<TokenModel> = new ObservableArray<TokenModel>([
    new TokenModel("Epitech", undefined),
    new TokenModel("Ep", undefined),
    new TokenModel("Ensise", undefined),
    new TokenModel("Albataga", undefined),
    new TokenModel("Telecom", undefined),
    new TokenModel("Ensisa", undefined),
    new TokenModel("Albb", undefined),
    new TokenModel("Albaa", undefined),
    new TokenModel("Elbow", undefined),
    new TokenModel("Backar", undefined),
    new TokenModel("Cacahuete", undefined),
    new TokenModel("Daddy", undefined),
    new TokenModel("Frite", undefined),
    new TokenModel("Hijack", undefined),
    new TokenModel("Inouit", undefined),
    new TokenModel("Jackass", undefined),
    new TokenModel("Kartoffel", undefined),
    new TokenModel("Linguiste", undefined),
    new TokenModel("Mamamia", undefined),
    new TokenModel("Zaza", undefined),
    new TokenModel("Sachet", undefined),
    new TokenModel("Yo-yo", undefined),
    new TokenModel("xoxo", undefined),
  ]);

  currentYear: number = new Date().getFullYear();
  diplomaName: string = "";
  candidatDiplomas: Diploma[] = [];
  autocompleteView: RadAutoCompleteTextView;


  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() { }

  onNavTap() {
    this.routerExtensions.backToPreviousPage();
  }

  onTextChanged($event) {
    this.autocompleteView = (<RadAutoCompleteTextView>$event.object)
    this.diplomaName = $event.text;
  }

  addDiploma() {
    if (this.diplomaName !== "") {
      let newDiploma = new Diploma(this.diplomaName, this.currentYear.toString());
      this.candidatDiplomas.push(newDiploma);
      this.currentYear = new Date().getFullYear();
      this.diplomaName = "";
      this.autocompleteView.resetAutoComplete();
    }
  }

  deleteDiploma($event){
    this.candidatDiplomas.splice($event.index, 1);
  }

}
