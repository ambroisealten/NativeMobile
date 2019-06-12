import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { HomeComponent } from "./home/home.component";
import { CandidatCreateComponent } from './candidat/candidat-create/candidat-create.component';
import { ForumComponent } from "./forum/forum.component";
import { CandidatFormComponent } from './candidat/candidat-form/candidat-form.component';


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
        HomeComponent,
        CandidatCreateComponent,
        ForumComponent,
        CandidatFormComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents:[
        ForumComponent
    ]
})
export class AppModule { }
