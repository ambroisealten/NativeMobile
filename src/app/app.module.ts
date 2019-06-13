import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CandidatCreateComponent } from './forum/components/candidat-create/candidat-create.component';
import { FormationComponent } from './forum/components/candidat-form/formation/formation.component';
import { MobilityComponent } from "./forum/components/candidat-form/mobility/mobility.component";
import { ForumComponent } from "./forum/forum.component";
import { CandidatFormService } from "./forum/services/candidatForm.service";
import { DiplomaService } from "./forum/services/diploma.service";
import { HomeComponent } from "./home/home.component";
import { MobilityService } from "./forum/services/mobility.service";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
		NativeScriptFormsModule,
		NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUIAutoCompleteTextViewModule
    ],
    declarations: [
        AppComponent,
        FormationComponent,
        HomeComponent,
        CandidatCreateComponent,
        ForumComponent,
        MobilityComponent
    ],
    providers : [
        DiplomaService,
        CandidatFormService,
        MobilityService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents:[
        ForumComponent
    ]
})
export class AppModule { }
