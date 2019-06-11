import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ForumComponent } from "./forum/forum.component";
import { CandidatCreateComponent } from "./candidat-create/candidat-create.component";
import { CandidatComponent } from "./candidat/candidat.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "forum", component: ForumComponent},
    { path: "candidatCreate", component: CandidatCreateComponent},
    { path: "candidat", component: CandidatComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
