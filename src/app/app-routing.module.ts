import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeForumComponent } from "./forum/components/HomeForumComponent/home-forum.component";

import { CandidatesComponent } from "./candidate/candidates.component";
import { CandidateDetailComponent } from "./candidate/candidate-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeForumComponent },
    { path: "candidates", component: CandidatesComponent },
    { path: "candidate/:id", component: CandidateDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
