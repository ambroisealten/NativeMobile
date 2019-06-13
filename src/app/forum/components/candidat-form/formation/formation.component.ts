import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadAutoCompleteTextView, TokenModel } from 'nativescript-ui-autocomplete';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Diploma } from '~/app/forum/models/Diploma';
import { CandidatFormService } from '~/app/forum/services/candidatForm.service';
import { DiplomaService } from '~/app/forum/services/diploma.service';


@Component({
  selector: 'ns-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  moduleId: module.id,
})
export class FormationComponent implements OnInit {
 
  @ViewChild('image3', { static: false }) image3: ElementRef;

  diplomaAvailable: ObservableArray<TokenModel>;

  currentYear: number = new Date().getFullYear();
  diplomaName: string = "";
  autocompleteView: RadAutoCompleteTextView;
  candidatFormService: CandidatFormService;


  constructor(private routerExtensions: RouterExtensions,private diplomaService: DiplomaService) { 
    this.candidatFormService = CandidatFormService.getInstance("{{Nom a injecter}}","{{Année à injecter}}");
  }

  ngOnInit() {
    this.diplomaAvailable = this.diplomaService.fetchDiplomas();
    this.image3.nativeElement.style = "tint-color : white";
  }

  onNavTap() {
    this.routerExtensions.backToPreviousPage();
  }

  onTextChanged($event) {
    this.autocompleteView = <RadAutoCompleteTextView>$event.object;
    this.diplomaName = $event.text;
  }

  addDiploma() {
    if (this.diplomaName !== "") {
      let newDiploma = new Diploma(this.diplomaName, this.currentYear.toString());
      this.candidatFormService.candidat.diplomas.push(newDiploma);
      this.currentYear = new Date().getFullYear();
      this.diplomaName = "";
      this.autocompleteView.resetAutoComplete();
    }
  }

  deleteDiploma($event){
    this.candidatFormService.candidat.diplomas.splice($event.index, 1);
  }

  selectTab(index: number) {
    switch(index){
      case 0:
        this.routerExtensions.navigate(['mobility']);
        break;
      case 2:
        this.routerExtensions.navigate(['formation']);
        break;
      default:
        break;
    }
  }

}
