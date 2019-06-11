import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Candidate } from "../shared/candidate/candidate.model";
import { CandidateService } from "./candidate.service";

@Component({
  selector: 'ns-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css'],
  moduleId: module.id,
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;

  constructor(
      private candidateService: CandidateService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      const id = +this.route.snapshot.params.id;
      this.candidate = this.candidateService.getCandidate(id);
  }
}
