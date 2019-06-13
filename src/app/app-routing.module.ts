import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeForumComponent } from "./forum/components/HomeForumComponent/home-forum.component";
import { InformationsCompComponent } from "./forum/components/informations-comp/informations-comp.component";

const routes: Routes = [
    { path: "", redirectTo: "/infocomp", pathMatch: "full" },
    { path: "home", component: HomeForumComponent },
    { path: "infocomp", component: InformationsCompComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
