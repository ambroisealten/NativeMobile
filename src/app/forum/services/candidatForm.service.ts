import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable()
export class CandidatFormService {
    private static instance: CandidatFormService = null;

    // Return the instance of the service
    public static getInstance(forumName: string,forumYear: string): CandidatFormService {
        if (CandidatFormService.instance === null) {
            CandidatFormService.instance = new CandidatFormService(forumName,forumYear);
        }
        return CandidatFormService.instance;
    }

    candidat: Candidat;
    forumName: string;
    forumYear: string;
    constructor(forumName: string,forumYear: string) {
        this.candidat = new Candidat();
        this.forumName = forumName;
        this.forumYear = forumYear;
    }

    resetCandidat() {
        this.candidat = new Candidat();
    }
}
