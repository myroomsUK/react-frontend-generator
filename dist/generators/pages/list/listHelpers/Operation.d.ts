import React from "react";
interface OperationProps {
    color: string;
    text: string;
    icon?: React.DetailedReactHTMLElement<any, any>;
    onClick: (arg: any) => void;
    visibility?: (arg: any) => boolean;
    requiresConfirmation?: boolean;
}
export declare class Operation {
    color: string;
    text: string;
    icon?: React.DetailedReactHTMLElement<any, any>;
    onClick: (arg: any) => void;
    visibility: (arg: any) => boolean;
    requiresConfirmation: boolean;
    constructor({ color, text, icon, onClick, visibility, requiresConfirmation }: OperationProps);
}
export {};
