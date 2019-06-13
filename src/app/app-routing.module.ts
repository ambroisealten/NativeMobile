import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { ForumComponent } from "./forum/forum.component";
import { CandidatCreateComponent } from "./forum/components/candidat-create/candidat-create.component";
import { MobilityComponent } from "./forum/components/candidat-form/mobility/mobility.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "forum", component: ForumComponent},
    { path: "candidatCreate", component: CandidatCreateComponent},
    { path: "mobility", component: MobilityComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
