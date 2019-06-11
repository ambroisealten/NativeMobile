import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field"
import { Forum } from "../../models/forum";
import { Index } from "../../models";
import * as utils from "tns-core-modules/utils/utils";
import { isIOS, isAndroid } from "tns-core-modules/platform";
import * as frame from "tns-core-modules/ui/frame";


@Component({
    selector: "ns-app-home-forum",
    moduleId: module.id,
    templateUrl: "./home-forum.component.html"
})
export class HomeForumComponent implements OnInit {

    showed: boolean = false;

    filter: string = "" ; 
    index: Index[] = [];
    forum: Forum[] = [
        { name: "Epitech" },
        { name: "Ep" },
        { name: "Ensise" },
        { name: "Albataga" },
        { name: "Telecom" },
        { name: "Ensisa" },
        { name: "Albb" },
        { name: "Albaa" },
        { name: "Elbow" },
        { name: "Backar" },
        { name: "Cacahuete" },
        { name: "Daddy" },
        { name: "Frite" },
        { name: "Hijack" },
        { name: "Inouit" },
        { name: "Jackass" },
        { name: "Kartoffel" },
        { name: "Linguiste" },
        { name: "Mamamia" },
        { name: "Zaza" },
        { name: "Sachet" },
        { name: "Yo-yo" },
        { name: "xoxo" },
    ];

    ngOnInit() {
        this.forum.forEach(forum => {
            let letterForum = forum.name.substr(0, 1).toUpperCase();
            if (this.index.find(index => index.name === letterForum) == undefined) {
                let tmpLetter = new Index();
                tmpLetter.name = letterForum;
                tmpLetter.forumList = [];
                this.index.push(tmpLetter);
            }
        })
        this.index.sort((a, b) => a.name < b.name ? -1 : 1)
    }


    isLast(i: number, length: number): boolean {
        return i < length - 1 ? true : false;
    }

    isBordered(item: Index): boolean {
        if (item.forumList.length > 0 || this.index.findIndex(index => index.name == item.name) == this.index.length - 1) {
            return false;
        }
        return true;
    }

    setData(letterName) {
        let i = this.index.findIndex(index => letterName == index.name);
        if (i != -1) {
            if (this.index[i].forumList.length > 0) {
                this.index[i].forumList = [];
            } else {
                this.forum.forEach(forum => {
                    if (forum.name.substr(0, 1).toUpperCase() == letterName && forum.name.toUpperCase().includes(this.filter.toUpperCase())) {
                        this.index[i].forumList.push(forum);
                    }
                })
            }
        }
        this.index[i].forumList.sort((a, b) => a.name < b.name ? -1 : 1)
    }

    search(){

    }

    isShowed() {
        return this.showed;
    }

    show(show: boolean) {
        this.showed = show;
        if (show) {
            this.forum.forEach(forum => {
                let i = this.index.findIndex(index => forum.name.substr(0, 1).toUpperCase() == index.name);
                this.index[i].forumList.push(forum);
            })
        } else {
            this.index.forEach(index => {
                index.forumList = [];
            })
        }
    }

    loseFocus(args) {
        let textField = <TextField>args.object;
        this.index.forEach(index => {
            index.forumList = [];
        })
        this.forum.forEach(forum => {
            if(forum.name.includes(this.filter) && forum.name.substr(0, 1).toUpperCase() == this.filter.substr(0,1).toUpperCase()){
                let i = this.index.findIndex(index => forum.name.substr(0, 1).toUpperCase() == index.name);
                this.index[i].forumList.push(forum);
                this.index[i].forumList.sort((a, b) => a.name < b.name ? -1 : 1)
            }
        })
        if (textField != undefined) {
            textField.dismissSoftInput();
        }
    }

    clearFocus() {
        if (isIOS) {
            frame.topmost().nativeView.endEditing(true);
         }
         if (isAndroid) {
           utils.ad.dismissSoftInput();
         }
    }

    applySearch(args){
        this.filter = (<TextField>args.object).text;
        this.index.forEach(index => {
            index.forumList = [];
        })
        this.forum.forEach(forum => {
            if(forum.name.toLowerCase().includes(this.filter.toLowerCase()) && this.filter != ""){
                let i = this.index.findIndex(index => forum.name.substr(0, 1).toUpperCase() == index.name);
                this.index[i].forumList.push(forum);
                this.index[i].forumList.sort((a, b) => a.name < b.name ? -1 : 1)
            }
        })
    }

}