import React from "react";
import {Grid} from "@material-ui/core";
import {PropertyModel} from "../../resource-models/PropertyModel";
import {Model} from "../../resource-models/Model";
import {Errors} from "../errors/Errors";

interface FormContentProps {
    submitHandler: (e:any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: any;
    refreshReferencesMap: () => void;
    formValue: object;
    lockedFormValue:object;
    errors: Errors;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
    formContent?:React.DetailedReactHTMLElement<any, any>;
}

/**
 *
 * @constructor
 *
 * FormContent component is responsible for overriding the form, passing all the required props
 * @param props
 */
export const FormContent: React.FC<FormContentProps> = (props) => {

    const {partialSubmitHandler, submitHandler, model, referencesMap ,refreshReferencesMap, formValue, lockedFormValue={}, setFormValue, errors, formContent}=props;
    if(formContent){
        return React.cloneElement(formContent, props);
    }

    return <Grid container spacing={2}>
        {model.properties //TODO va reso indipendente da material ui nel rendering
            .filter((propertyModel:PropertyModel) => propertyModel.write === true)
            .map((propertyModel:PropertyModel, index:number) => {
                const {xs,md} = propertyModel;
                const props = {model:propertyModel,partialSubmitHandler, submitHandler, referencesMap ,refreshReferencesMap, formValue, lockedFormValue, setFormValue, errors};
                return <Grid item xs={xs} md={md} key={index}>
                    {propertyModel.getInputField(props)}
                </Grid>
            }
        )}
    </Grid>
}









