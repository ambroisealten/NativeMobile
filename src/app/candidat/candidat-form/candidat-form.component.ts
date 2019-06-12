import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as application from "tns-core-modules/application/application";
import { isAndroid } from 'tns-core-modules/platform/platform';
import { AndroidActivityBackPressedEventData } from 'tns-core-modules/application/application';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Router } from '@angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  selector: 'ns-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css'],
  moduleId: module.id,
})
export class CandidatFormComponent implements OnInit {
  items: Array<any> = [];
  allUsedMobilities: Array<string> = [];
  newMobility: string;

  canAddMobility: boolean = false;

  entryUnit: number;
  mobilityFrUsed: boolean = false;
  mobilityIDFUsed: boolean = false;
  units: string[] = ["kms", "mins", "heures"];
  selectedUnit: string;
  isOkForInternational: boolean = true;
  searchPhrase: string;

  @ViewChild('image1',{static:false}) image1: ElementRef;
 

  constructor(private routerExtensions: RouterExtensions,
    private router: Router) {
  }

  entryUnitChanged(event) {
    this.entryUnit = event.value;
    if(event.value == "") this.entryUnit = undefined;
    this.canAddNewMobility();
  }

  onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    this.newMobility = searchBar.text;
    this.canAddNewMobility();
  }

  onUnitSubmit(event){
    console.log(event.value);
  }

  selectedIndexChanged(event) {
    this.selectedUnit = this.units[event.value];
    this.canAddNewMobility();
  }

  onTextChanged(args) {
    let searchBar = <SearchBar>args.object;
    this.newMobility = searchBar.text;
    this.canAddNewMobility();
  }

  ngOnInit() { 
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
        this.routerExtensions.navigate(['home']);
      }
    })
  }

  getIconSource(icon: string): string {
    const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

    return iconPrefix + icon;
  }

  selectTab(index: number) {
    console.log(index);
  }

  canAddNewMobility() {
    this.canAddMobility = !this.allUsedMobilities.includes(this.newMobility) && this.newMobility != "" && this.newMobility != undefined && this.entryUnit != undefined && this.selectedUnit != undefined;
    return this.canAddMobility;
  }

  addnewMobility() {
    if (this.canAddNewMobility()) {
      this.items.push({ name: this.newMobility + ", dans un rayon de " + this.entryUnit + " " + this.selectedUnit });
      this.allUsedMobilities.push(this.newMobility);
    }
    this.resetSettings();
    this.canAddNewMobility();
  }

  addFranceMobility() {
    this.newMobility = "France";
    this.entryUnit = 0;

    console.log("Mobilité France");
    if (this.canAddNewMobility() && !this.mobilityFrUsed) {
      this.items.push({ name: "Mobilité France" });
      this.allUsedMobilities.push(this.newMobility);
      this.mobilityFrUsed = true;
    }
    this.resetSettings();
    this.canAddNewMobility();
  }

  resetSettings() {
    this.newMobility = "";
    this.entryUnit = undefined;
  }

  addWithoutIDFMobility() {
    this.newMobility = "France";
    this.entryUnit = 0;
    console.log("Mobilité sans IDF");
    if (this.canAddNewMobility() && !this.mobilityIDFUsed) {
      this.newMobility = "France hors IDF";
      this.items.push({ name: "Mobilité France sauf IDF" });
      this.allUsedMobilities.push(this.newMobility);
      this.mobilityIDFUsed = true;
    }
    this.resetSettings();
    this.canAddNewMobility();
  }

}
