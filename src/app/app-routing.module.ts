import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeForumComponent } from "./forum/components/HomeForumComponent/home-forum.component";

import { CandidatesComponent } from "./candidate/components/candidates.component";
import { CandidateDetailComponent } from "./candidate/components/candidate-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/candidates", pathMatch: "full" },
    { path: "home", component: HomeForumComponent },
    { path: "candidates", component: CandidatesComponent },
    { path: "candidate/:id", component: CandidateDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
