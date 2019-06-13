import { Component, OnInit } from '@angular/core';
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { GestureTypes, SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { Page } from 'tns-core-modules/ui/page/page';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { ActivatedRoute } from '@angular/router';
import {NativeScriptFormsModule} from "nativescript-angular/forms"

@Component({
	moduleId: module.id,
	selector: 'forum',
	templateUrl: './forum.component.html',
	styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {

	forumName: string;
	forumPlace: string;
	forumDate: string;

	public direction: number;

	constructor(private routerExtensions: RouterExtensions, private _page: Page, private _params: ModalDialogParams,
		private route: ActivatedRoute) { }

	ngOnInit() {
		const id = +this.route.snapshot.params.id;
	}


	onTap($event){
	}

	onSwipe(args: SwipeGestureEventData) {
		console.log(args);
		/*
		this.direction = args.direction;
		this._params.closeCallback();

		switch (this.direction) {
			case 1:
				this.routerExtensions.back();
				break;
			case 2:
				console.log("d'acccord")
				break;
		}*/
	}
	
	goBack() {
		this.routerExtensions.back();
	}

	Back() {
		this._params.closeCallback("retour");
	}

	onClose(): void {
		console.log(this.forumName);
		console.log(this.forumPlace);
		console.log(this.forumDate);
		/*this.item.name = this.forumName;
		this.item.role = this.forumPlace;
		this.item.id = 6;
		this.itemService.setItems(this.item);*/
		this._params.closeCallback("retour");
	}
	
}