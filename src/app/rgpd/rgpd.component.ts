import { Component, OnInit } from '@angular/core';
import { ScrollEventData, ScrollView } from "tns-core-modules/ui/scroll-view";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-rgpd',
  templateUrl: './rgpd.component.html',
  styleUrls: ['./rgpd.component.css'],
  moduleId: module.id,
})
export class RgpdComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    console.log("oker");
  }

  onTap() {
    console.log("tap");

  }

  onCancel() {
    var toto = require("tns-core-modules/ui/dialogs");

    toto.confirm({
      title: "Purger les données ? ",
      message: "Etes-vous sûr de vouloir supprimer toutes les données de la fiche ?",
      okButtonText: "Oui",
      cancelButtonText: "Non"
    }).then(function (result) {
      if (result == true) {
        console.log("oui");
      }
      else {
        console.log("non");
      }
    });


  }

}
