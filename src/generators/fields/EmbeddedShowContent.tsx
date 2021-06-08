import React, {DetailedReactHTMLElement} from "react";
import {Model} from "../../resource-models/Model";
import {ShowContent} from "./ShowContent";
import {Record} from "../../resource-models/Record";
import {FormValue} from "../../resource-models/formvalue/FormValue";
import {Errors} from "../errors/Errors";

interface EmbeddedShowContentProps{
    submitHandler: (e:any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    record?: Record;
    referencesMap: any;
    refreshReferencesMap: () => void;
    formValue: FormValue;
    lockedFormValue:FormValue;
    errors: Errors;
    setFormValue: React.Dispatch<React.SetStateAction<FormValue>>;
    formContent?:React.DetailedReactHTMLElement<any, any>;
    refresh?:()=>void;
    showElement?: React.DetailedReactHTMLElement<any, any>
}
export const EmbeddedShowContent: React.FC<EmbeddedShowContentProps> = (props) => {
    return <ShowContent {...props}/>
}