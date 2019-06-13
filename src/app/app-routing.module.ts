import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CandidatCreateComponent } from "./forum/components/candidat-create/candidat-create.component";
import { FormationComponent } from "./forum/components/candidat-form/formation/formation.component";
import { MobilityComponent } from "./forum/components/candidat-form/mobility/mobility.component";
import { ForumComponent } from "./forum/forum.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "formation", component: FormationComponent },
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
