import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { HomeForumComponent } from "./forum/components/HomeForumComponent/home-forum.component";

import { CandidatesComponent } from "./candidate/components/candidates.component";
import { CandidateDetailComponent } from "./candidate/components/candidate-detail.component";

import { CandidateService } from "./candidate/components/candidate.service";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
		NativeScriptFormsModule,
		NativeScriptUISideDrawerModule,
		NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        HomeForumComponent,
        CandidatesComponent,
        CandidateDetailComponent
    ],
    providers: [
        CandidateService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
