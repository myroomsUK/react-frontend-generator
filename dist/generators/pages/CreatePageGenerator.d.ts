import React from "react";
import { Errors } from "../errors/Errors";
import { FormValue } from "../../resource-models/formvalue/FormValue";
import { Model } from "../../resource-models/Model";
interface Props {
    propResourceName: string;
    propCreatePage?: any;
    lockedFormValue?: FormValue;
}
interface GenericProps {
    model: Model;
    errors?: Errors;
    propCreatePage?: any;
    submitHandler: (formValue: FormValue) => Promise<any>;
    lockedFormValue?: FormValue;
}
export declare const Create: React.FC<Props>;
export declare const GenericCreate: React.FC<GenericProps>;
export declare const CreateResource: React.FC<Props>;
export {};
