import React from "react";
import {Grid} from "@material-ui/core";
import {PropertyModel} from "../../resource-models/PropertyModel";
import {Model} from "../../resource-models/Model";
import {Errors} from "../errors/Errors";
import {FormValue} from "../../resource-models/formvalue/FormValue";
import {Record} from "../../resource-models/Record";
import {InputProps} from "../../resource-models/models/InputProps";

interface FormContentProps {
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
    refresh?:()=>void
}

/**
 *
 * @constructor
 *
 * FormContent component is responsible for overriding the form, passing all the required props
 * @param props
 */
export const FormContent: React.FC<FormContentProps> = (props) => {

    const {partialSubmitHandler, submitHandler, model, referencesMap ,refreshReferencesMap, formValue, lockedFormValue, setFormValue, errors, formContent, record, refresh}=props;
    if(formContent){
        return React.cloneElement(formContent, props);
    }

    return <Grid container spacing={2}>
        {model.properties //TODO va reso indipendente da material ui nel rendering
            .filter((propertyModel:PropertyModel) => propertyModel.write === true)
            .map((propertyModel:PropertyModel, index:number) => {
                const {xs,md} = propertyModel;
                const props = new InputProps({model:propertyModel,partialSubmitHandler, submitHandler, referencesMap ,refreshReferencesMap, formValue, record:record?.getPropertyRecord(propertyModel.id), lockedFormValue, setFormValue, errors, refresh})
                return <Grid item xs={xs} md={md} key={index}>
                    {!lockedFormValue.has(propertyModel.id) && propertyModel.getInputField(props)}
                </Grid>
            }
        )}
    </Grid>
}









