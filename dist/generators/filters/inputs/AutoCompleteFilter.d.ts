import React, { ChangeEventHandler } from "react";
interface Props {
    name: string;
    inputFieldOnChange: (e: any) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
    value: any;
    options: any;
}
export declare const AutoCompleteFilter: React.FC<Props>;
export {};
