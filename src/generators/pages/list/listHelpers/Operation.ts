import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import React from "react";

export class Operation{
    color:string;
    text:string;
    icon:React.DetailedReactHTMLElement<any, any>;
    onClick: (arg: any)=> void

    constructor(color:string, text: string, icon: React.DetailedReactHTMLElement<any, any>, onClick: (arg:any)=>void) {
        this.color = color;
        this.text = text;
        this.icon = icon;
        this.onClick = onClick;
    }



}