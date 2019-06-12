import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ForumComponent } from "../forum/forum.component";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions, private _modalService: ModalDialogService,  private _vcRef: ViewContainerRef) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onTap(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: false
        };
    
        this._modalService.showModal(ForumComponent, options)
            .then((result: string) => {
                console.log(result);
            });
    }

    onRedirectCandidate(){
        this.routerExtensions.navigate(['candidatCreate']);
    }
}
