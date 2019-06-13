import { Injectable } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";


@Injectable()
export class MobilityService{

    fetchMobilities(){
        return new ObservableArray<TokenModel>([
            new TokenModel("Strasbourg",undefined),
            new TokenModel("Metz",undefined),
            new TokenModel("Elsass",undefined),
            new TokenModel("Aubussargues",undefined),
            new TokenModel("Saint-Victor-de-Chrétienville",undefined),
            new TokenModel("Saint-Aubin-le-Vertueux",undefined),
            new TokenModel("Saint-Aubin-des-Isles",undefined),
            new TokenModel("Saint-Aubin-le-Gaillard",undefined),
            new TokenModel("Bitche",undefined)
        ]);
    }

}