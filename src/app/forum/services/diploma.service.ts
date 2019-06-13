import { Injectable } from "@angular/core";

import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

import { TokenModel } from "nativescript-ui-autocomplete";

@Injectable()
export class DiplomaService {

    fetchDiplomas() {
        return new ObservableArray<TokenModel>([
            new TokenModel("Epitech", undefined),
            new TokenModel("Ep", undefined),
            new TokenModel("Ensise", undefined),
            new TokenModel("Albataga", undefined),
            new TokenModel("Telecom", undefined),
            new TokenModel("Ensisa", undefined),
            new TokenModel("Albb", undefined),
            new TokenModel("Albaa", undefined),
            new TokenModel("Elbow", undefined),
            new TokenModel("Backar", undefined),
            new TokenModel("Cacahuete", undefined),
            new TokenModel("Daddy", undefined),
            new TokenModel("Frite", undefined),
            new TokenModel("Hijack", undefined),
            new TokenModel("Inouit", undefined),
            new TokenModel("Jackass", undefined),
            new TokenModel("Kartoffel", undefined),
            new TokenModel("Linguiste", undefined),
            new TokenModel("Mamamia", undefined),
            new TokenModel("Zaza", undefined),
            new TokenModel("Sachet", undefined),
            new TokenModel("Yo-yo", undefined),
            new TokenModel("xoxo", undefined),
        ]);
    }
}

