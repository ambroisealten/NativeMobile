import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { ForumComponent } from "./forum/forum.component";
import { CandidatCreateComponent } from "./candidat/candidat-create/candidat-create.component";
import { CandidatFormComponent } from "./candidat/candidat-form/candidat-form.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "forum", component: ForumComponent},
    { path: "candidatCreate", component: CandidatCreateComponent},
    { path: "candidatForm", component: CandidatFormComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
