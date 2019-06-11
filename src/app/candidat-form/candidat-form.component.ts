import { Component, OnInit } from '@angular/core';
import * as application from "tns-core-modules/application/application";
import { isAndroid } from "tns-core-modules/platform/platform"
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css'],
  moduleId: module.id,
})
export class CandidatFormComponent implements OnInit {
  units : String[] = ["kms","mins"];
  selectedUnit: String;
  isOkForInternational: boolean = true;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    if(!isAndroid){
      return;
    }
    application.android.on(application.AndroidApplication.activityBackPressedEvent, (data : application.AndroidActivityBackPressedEventData) =>{
      data.cancel = true;
    });
  }

  onNavTap() {
    confirm("Voulez-vous arrêter l'entretien de xxx XXX ?").then(result => {
      if (result) {
        console.log(result);
        this.routerExtensions.navigate(['home']);
      }
      else {
        console.log(result);
      }
    });
  }

  selectedIndexChanged(event){
    console.log(event);
    console.log(event.data);
  }

}
