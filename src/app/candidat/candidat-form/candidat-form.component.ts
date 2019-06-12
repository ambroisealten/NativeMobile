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
  units: string[] = ["kms", "mins", "heures"];
  selectedUnit: string;
  isOkForInternational: boolean = true;
  searchPhrase: string;

  @ViewChild('image1') image1: ElementRef;
	@ViewChild('image2') image2: ElementRef;
	@ViewChild('image3') image3: ElementRef;

  constructor(private routerExtensions: RouterExtensions,
    private router: Router) {

  }

  onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    console.log("You are searching for " + searchBar.text);
  }

  selectedIndexChanged(event){
    this.selectedUnit = this.units[event.value];
  }

  onTextChanged(args) {
    let searchBar = <SearchBar>args.object;
    console.log("SearchBar text changed! New value: " + searchBar.text);
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


}
