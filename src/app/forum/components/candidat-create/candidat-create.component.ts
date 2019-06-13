import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-candidat-create',
  templateUrl: './candidat-create.component.html',
  styleUrls: ['./candidat-create.component.css'],
  moduleId: module.id,
})
export class CandidatCreateComponent implements OnInit {

  constructor(private routerExtensions : RouterExtensions) { }

  ngOnInit() {
  }

  onNavBtnTap(){
    this.routerExtensions.backToPreviousPage();
  }

  onValidate(){
    this.routerExtensions.navigate(['mobility']);
  }

}
