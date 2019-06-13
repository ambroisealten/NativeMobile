import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { CandidatFormService } from '../../services/candidatForm.service';

@Component({
  selector: 'ns-candidat-create',
  templateUrl: './candidat-create.component.html',
  styleUrls: ['./candidat-create.component.css'],
  moduleId: module.id,
})
export class CandidatCreateComponent implements OnInit {

  candidatFormService: CandidatFormService;

  constructor(private routerExtensions : RouterExtensions) { 
    this.candidatFormService = CandidatFormService.getInstance("{{Nom a injecter}}","{{Année à injecter}}");
  }

  ngOnInit() {
    this.candidatFormService.resetCandidat();
  }

  onNavBtnTap(){
    this.routerExtensions.backToPreviousPage();
  }

  onValidate(){
    this.routerExtensions.navigate(['mobility']);
  }

}
