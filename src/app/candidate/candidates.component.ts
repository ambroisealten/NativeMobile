import { Component, OnInit } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field"

import { SearchBar } from "tns-core-modules/ui/search-bar";

import { Candidate } from "../shared/candidate/candidate.model";
import { CandidateService } from "./candidate.service";

@Component({
  selector: 'ns-candidate',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  moduleId: module.id,
})
export class CandidatesComponent implements OnInit {
  candidates: Array<Candidate>;

//  filter: string = "" ; 

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.candidates = this.candidateService.getCandidates();
    this.candidates.forEach(candidat => {
      candidat['forum avis'] = candidat.name + ' – << ' + candidat.note + ' >>' ;   
    })
  }

  public onItemTap(args) {
    console.log("tap");
  }

  public onTextChanged(args) {
    let searchBar = <SearchBar>args.object;
    let searchValue = searchBar.text.toLowerCase();
    console.log(searchValue);
    this.candidateService.getCandidateByName(searchValue);
    // this.candidates = this.candidateService.getCandidateByName(searchValue);
  }
  
  public onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    let searchValue = searchBar.text.toLowerCase();

    // this.candidates = this.candidateService.getCandidateByName(searchValue);
  }

  applySearch(args){
    let filter = (<TextField>args.object).text;

    this.candidates = this.candidateService.getCandidateByName(filter);
    console.log(this.candidates);
    // this.index.forEach(index => {
    //     index.forumList = [];
    // })
    // this.forum.forEach(forum => {
    //     if(forum.name.toLowerCase().includes(this.filter.toLowerCase()) && this.filter != ""){
    //         let i = this.index.findIndex(index => forum.name.substr(0, 1).toUpperCase() == index.name);
    //         this.index[i].forumList.push(forum);
    //         this.index[i].forumList.sort((a, b) => a.name < b.name ? -1 : 1)
    //     }
    // })
  }
}
