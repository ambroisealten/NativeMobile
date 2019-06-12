import { Component, OnInit } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field"

import { Candidate } from "../models/candidate";
import { CandidateService } from "./candidate.service";
import * as utils from "tns-core-modules/utils/utils";
import { isIOS, isAndroid } from "tns-core-modules/platform";
import * as frame from "tns-core-modules/ui/frame";

@Component({
  selector: 'ns-candidate',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  moduleId: module.id,
})
export class CandidatesComponent implements OnInit {
  filterCandidates: Array<Candidate>;
  candidates: Array<Candidate>;

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
    this.candidates.forEach(candidat => {
      candidat['forum avis'] = candidat.name + ' – << ' + candidat.note + ' >>' ;   
    })
    this.filterCandidates = this.candidates;
  }

  public onItemTap(args) {
    console.log("tap");
  }

  clearFocus() {
    if (isIOS) {
        frame.topmost().nativeView.endEditing(true);
     }
     if (isAndroid) {
       utils.ad.dismissSoftInput();
     }
}

  applySearch(args){
    let filter = (<TextField>args.object).text;

    this.filterCandidates = [];
    if (filter != "") {
      this.candidates.forEach(candidates => {
        if(candidates.name.toLowerCase().includes(filter.toLowerCase())){
          this.filterCandidates.push(candidates);
        }
        else if(candidates.note.toLowerCase().includes(filter.toLowerCase())){
          this.filterCandidates.push(candidates);
        }
        else if(candidates.contract.toLowerCase().includes(filter.toLowerCase())){
          this.filterCandidates.push(candidates);
        }
      })
    }
    else
      this.filterCandidates = this.candidates;
  }
}
