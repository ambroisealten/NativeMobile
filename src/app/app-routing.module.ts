import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeForumComponent } from "./forum/components/HomeForumComponent/home-forum.component";
import { FormationComponent } from "./forum/components/candidat-form/formation/formation.component";

const routes: Routes = [
    { path: "", redirectTo: "/formation", pathMatch: "full" },
    { path: "home", component: HomeForumComponent },
    { path: "formation", component: FormationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
