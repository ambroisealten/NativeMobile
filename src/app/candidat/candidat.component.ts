import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css'],
  moduleId: module.id,
})
export class CandidatComponent implements OnInit {

  constructor(private routerExtensions : RouterExtensions) { }

  ngOnInit() {
  }

  onCreateTap(){
    this.routerExtensions.navigate(['candidatCreate']);
}

}
