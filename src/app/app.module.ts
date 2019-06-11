import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { ForumComponent } from "./forum/forum.component";
import { CandidatCreateComponent } from "./candidat-create/candidat-create.component";
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatFormComponent } from './candidat-form/candidat-form.component';


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
        ForumComponent,
        CandidatCreateComponent,
        CandidatComponent,
        CandidatFormComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
