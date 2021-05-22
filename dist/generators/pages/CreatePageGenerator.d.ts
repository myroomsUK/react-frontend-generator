import React from "react";
import { FormValue } from "../../resource-models/formvalue/FormValue";
interface Props {
    propResourceName: string;
    propCreatePage?: any;
    lockedFormValue?: FormValue;
    thenFunction?: any;
    catchFunction?: any;
}
export declare const Create: React.FC<Props>;
export {};
