import { Injectable } from "@angular/core";

import { Candidate } from "../shared/candidate/candidate.model";

@Injectable({
    providedIn: "root"
})
export class CandidateService {
    private candidates = new Array<Candidate>(
        { id: 1, name: "Ter Stegen", note: "+", diploma: "Goalkeeper 2021", contract: "Stage" },
        { id: 3, name: "Piqué", note: "++", diploma: "Defender 2019", contract: "Stage" },
        { id: 4, name: "I. Rakitic", note: "+++", diploma: "Midfielder 2022", contract: "Stage" },
        { id: 5, name: "Sergio", note: "+++", diploma: "Midfielder 2019", contract: "Stage" },
        { id: 6, name: "Denis Suárez", note: "+", diploma: "Midfielder 2019", contract: "Stage" },
        { id: 7, name: "Arda", note: "++", diploma: "Midfielder 2019", contract: "Stage" },
        { id: 8, name: "A. Iniesta", note: "++", diploma: "Midfielder 2019", contract: "Stage" },
        { id: 9, name: "Suárez", note: "+", diploma: "Forward 2019", contract: "Stage" },
        { id: 10, name: "Messi", note: "+++", diploma: "Forward 2018", contract: "Stage" },
        { id: 11, name: "Neymar", note: "+", diploma: "Forward 2019", contract: "Stage" },
        { id: 12, name: "Rafinha", note: "++", diploma: "Midfielder 2019", contract: "Stage" },
        { id: 13, name: "Cillessen", note: "--", diploma: "Goalkeeper 2019", contract: "Stage" },
        { id: 14, name: "Mascherano", note: "---", diploma: "Defender 2017", contract: "Stage" },
        { id: 17, name: "Paco Alcácer", note: "++", diploma: "Forward 2019", contract: "Stage" },
        { id: 18, name: "Jordi Alba", note: "+++", diploma: "Defender 2019", contract: "Stage" },
        { id: 19, name: "Digne", note: "+++", diploma: "Defender 2019", contract: "Stage" },
        { id: 20, name: "Sergi Roberto", note: "+", diploma: "Midfielder 2019", contract: "Stage" },
        { id: 21, name: "André Gomes", note: "+++", diploma: "Midfielder 2020", contract: "Stage" },
        { id: 22, name: "Aleix Vidal", note: "+++", diploma: "Midfielder 2019", contract: "Stage" },
        { id: 23, name: "Umtiti", note: "+++", diploma: "Defender 2020", contract: "Stage" },
        { id: 24, name: "Mathieu", note: "+++", diploma: "Defender 2019", contract: "Stage" },
        { id: 25, name: "Masip", note: "+", diploma: "Goalkeeper 2019", contract: "Stage" }
    );

    getCandidates(): Array<Candidate> {
        return this.candidates;
    }

    getCandidateById(id: number): Candidate {
        return this.candidates.filter((candidate) => candidate.id === id)[0];
    }

    // getCandidateByName(name: string): Array<Candidate> {
    getCandidateByName(name: string) {
        console.log(name);
        // console.log(this.candidates.filter((candidate) => candidate.name.toLowerCase() === name)[0]);
        // return this.candidates.filter((candidate) => candidate.name.toLowerCase() === name)[0];
    }
}
