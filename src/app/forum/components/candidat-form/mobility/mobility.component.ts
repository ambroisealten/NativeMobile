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

@Component({
  selector: 'ns-mobility',
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.css'],
  moduleId: module.id,
})
export class MobilityComponent implements OnInit {
  items: any[] = [];
  allUsedMobilities: string[] = [];
  newMobility: string = '';

  entryUnit: number;
  mobilityFrUsed: boolean = false;
  mobilityIDFUsed: boolean = false;
  units: string[] = ["kms", "mins", "heures"];
  selectedUnit: string;
  isOkForInternational: boolean = false;
  searchPhrase: string;

  @ViewChild('image1', { static: false }) image1: ElementRef;


  constructor(private routerExtensions: RouterExtensions,
    private router: Router) {
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

  deleteMobility(args){
    this.items.splice(args.index,1);
    this.allUsedMobilities.splice(args.index,1);
  }

  selectTab(index: number) {
    //TODO : Redirect to other components
    console.log(index);
  }

  internationalChanged(args: EventData) {
    let mySwitch = args.object as Switch;
    let isChecked = mySwitch.checked;

    if (isChecked) {
      this.items.push({ name: "Mobilité Internationale" });
      this.allUsedMobilities.push("International");
    }
    else {
      this.items = this.items.filter(item => {
        return item.name != "Mobilité Internationale";
      });
      this.allUsedMobilities = this.allUsedMobilities.filter(item => {
        return item != "International";
      });
    }
  }

  canAddNewMobility() {
    return !this.allUsedMobilities.includes(this.newMobility) && this.newMobility != "" && this.newMobility != undefined && this.entryUnit != undefined && this.selectedUnit != undefined;
  }

  hasNotFranceMobility() {
    if (this.newMobility.toLocaleLowerCase().startsWith('france')) {
      return !(this.mobilityFrUsed || this.mobilityIDFUsed);
    }
    else {
      return true;
    }
  }

  addnewMobility() {
    if (this.canAddNewMobility() && this.hasNotFranceMobility()) {
      this.items.push({ name: this.newMobility + ", dans un rayon de " + this.entryUnit + " " + this.selectedUnit });
      this.allUsedMobilities.push(this.newMobility);
    }
    this.resetSettings();
    this.canAddNewMobility();
  }

  addFranceMobility() {
    this.newMobility = "France";
    this.entryUnit = 0;

    if (this.findFrMobility() == "IDF") {
      this.clearFrMobility("Mobilité France sauf IDF");
    }

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

  findFrMobility() {
    let result: string;
    this.items.forEach(item => {
      if (item.name.startsWith('Mobilité France')) {
        if (item.name.length > 15) {
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
    this.items = this.items.filter(item => {
      return item.name != mobilityName;
    });
    this.mobilityFrUsed = false;
    this.mobilityIDFUsed = false;
    switch (mobilityName) {
      case "Mobilité France sauf IDF":
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

  addWithoutIDFMobility() {
    this.newMobility = "France";
    this.entryUnit = 0;

    if (this.findFrMobility() == "France") {
      this.clearFrMobility("Mobilité France");
    }

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
