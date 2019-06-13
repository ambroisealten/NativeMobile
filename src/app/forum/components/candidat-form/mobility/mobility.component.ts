import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as application from "tns-core-modules/application/application";
import { isAndroid } from 'tns-core-modules/platform/platform';
import { AndroidActivityBackPressedEventData } from 'tns-core-modules/application/application';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Router } from '@angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { EventData } from 'tns-core-modules/ui/page/page';
import { Switch } from "tns-core-modules/ui/switch"
import { CandidatFormService } from '../../../services/candidatForm.service';
import { Mobility } from '../../../models/Mobility';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { MobilityService } from '../../../services/mobility.service';
import { TokenModel, RadAutoCompleteTextView } from 'nativescript-ui-autocomplete';

@Component({
  selector: 'ns-mobility',
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.css'],
  moduleId: module.id,
})
export class MobilityComponent implements OnInit {
  mobilityAvailable: ObservableArray<TokenModel>;
  autocompleteView: RadAutoCompleteTextView;

  allUsedMobilities: string[] = [];
  newMobility: string = '';

  entryUnit: number;
  units: string[] = ["kms", "mins", "heures"];
  selectedUnit: string;
  isOkForInternational: boolean = false;
  searchPhrase: string;
  candidatFormService: CandidatFormService;

  @ViewChild('image1', { static: false }) image1: ElementRef;


  constructor(private routerExtensions: RouterExtensions,
    private router: Router,
    private mobilityService : MobilityService) {
      this.candidatFormService = CandidatFormService.getInstance("{{Nom a injecter}}","{{Année à injecter}}");
  }

  selectedIndexChanged(event) {
    this.selectedUnit = this.units[event.value];
  }

  onTextChanged(args) {
    this.autocompleteView = <RadAutoCompleteTextView>args.object;
    this.newMobility = this.autocompleteView.text;
  }

  ngOnInit() {
    this.mobilityAvailable = this.mobilityService.fetchMobilities();

    this.image1.nativeElement.style = "tint-color : white";
    if (!isAndroid) {
      return;
    }
    application.android.on(application.AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
      data.cancel = true;
    })
  }

  onNavTap() {
    dialogs.confirm("Voulez-vous arrêter l'entretien avec xxx XXX ?").then(result => {
      if (result) {
        this.candidatFormService.resetCandidat();
        this.routerExtensions.navigate(['home']);
      }
    })
  }

  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
  }

  deleteMobility(args){
    this.candidatFormService.candidat.mobilities.splice(args.index,1);
    this.allUsedMobilities.splice(args.index,1);
  }

  selectTab(index: number) {
    console.log(index);

    switch(index){
      case 2:
        this.routerExtensions.navigate(['formation']);
        break;
      default:
        break;
    }
  }

  internationalChanged(args: EventData) {
    let mySwitch = args.object as Switch;
    let isChecked = mySwitch.checked;

    if (isChecked) {
      this.candidatFormService.candidat.mobilities.push(new Mobility("International","Region",-1,undefined));
      this.allUsedMobilities.push("International");
    }
    else {
      this.candidatFormService.candidat.mobilities = this.candidatFormService.candidat.mobilities.filter(item => {
        return item.placeName != "International";
      });
      this.allUsedMobilities = this.allUsedMobilities.filter(item => {
        return item != "International";
      });
    }
  }

  canAddNewMobility() {
    return !this.allUsedMobilities.includes(this.newMobility) && this.newMobility != "" && this.newMobility != undefined && this.entryUnit != undefined && this.selectedUnit != undefined;
  }

  addnewMobility() {
    if (this.canAddNewMobility()) {
      this.candidatFormService.candidat.mobilities.push(new Mobility(this.newMobility,"Location",this.entryUnit,this.selectedUnit));
      this.allUsedMobilities.push(this.newMobility);
    }
    this.resetSettings();
  }

  resetSettings() {
    this.autocompleteView.resetAutoComplete();
    this.newMobility = "";
    this.entryUnit = undefined;
  }

  findFrMobility() {
    let result: string;
    this.candidatFormService.candidat.mobilities.forEach(item => {
      if (item.placeName.startsWith('France')) {
        if (item.placeName == "France hors IDF") {
          result = "IDF";
        }
        else {
          result = "France";
        }
      }
    });
    return result;
  }

  clearFrMobility(mobilityName: string) {
    this.candidatFormService.candidat.mobilities = this.candidatFormService.candidat.mobilities.filter(item => {
      return item.placeName != mobilityName;
    });
    switch (mobilityName) {
      case "France hors IDF":
        this.allUsedMobilities = this.allUsedMobilities.filter(item => {
          return item != "France hors IDF";
        });
        break;
      default:
        this.allUsedMobilities = this.allUsedMobilities.filter(item => {
          return item != "France";
        });
        break;
    }
  }

  addFranceMobility() {
    this.newMobility = "France";
    this.entryUnit = -1;

    if (this.findFrMobility() == "IDF") {
      this.clearFrMobility("France hors IDF");
    }

    if (this.canAddNewMobility()) {
      this.candidatFormService.candidat.mobilities.push(new Mobility(this.newMobility,"Region",this.entryUnit,undefined));
      this.allUsedMobilities.push(this.newMobility);
    }
    this.resetSettings();
  }

  addFranceWithoutIDFMobility() {
    this.newMobility = "France hors IDF";
    this.entryUnit = -1;

    if (this.findFrMobility() == "France") {
      this.clearFrMobility("France");
    }

    if (this.canAddNewMobility()) {
      this.newMobility = "France hors IDF";
      this.candidatFormService.candidat.mobilities.push(new Mobility(this.newMobility,"Region",this.entryUnit,undefined));
      this.allUsedMobilities.push(this.newMobility);
    }
    this.resetSettings();
  }

}
