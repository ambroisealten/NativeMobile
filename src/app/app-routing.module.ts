import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CandidatesComponent } from "./candidate/candidates.component";
import { CandidateDetailComponent } from "./candidate/candidate-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/candidates", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "candidates", component: CandidatesComponent },
    { path: "candidate/:id", component: CandidateDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
