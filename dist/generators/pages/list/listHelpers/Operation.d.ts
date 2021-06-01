import React from "react";
export declare class Operation {
    color: string;
    text: string;
    icon: React.DetailedReactHTMLElement<any, any>;
    onClick: (arg: any) => void;
    constructor(color: string, text: string, icon: React.DetailedReactHTMLElement<any, any>, onClick: (arg: any) => void);
}
