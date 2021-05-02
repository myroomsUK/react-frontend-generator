import React from "react";
import {Grid} from "@material-ui/core";
import {PropertyModel} from "../../resource-models/PropertyModel";
import {GenericInput} from "./genericInput";
import {Model} from "../../resource-models/Model";

interface FormContentProps {
    submitHandler: (e:any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    model: Model;
    referencesMap: any;
    refreshReferencesMap: () => void;
    formValue: object;
    lockedFormValue:object;
    errors: object;
    setFormValue: React.Dispatch<React.SetStateAction<any>>;
    form?:React.DetailedReactHTMLElement<any, any>;
    resourceName: string;
    resourceId?: string;
}

export const FormContent: React.FC<FormContentProps> = ({partialSubmitHandler, resourceName, resourceId, submitHandler, model, referencesMap ,refreshReferencesMap, formValue, lockedFormValue, setFormValue, errors, form}) => {
    if(form){
        const props = {model:model, formValue:formValue, lockedFormValue:lockedFormValue, referencesMap:referencesMap, refreshReferencesMap:refreshReferencesMap, setFormValue:setFormValue, errors:errors, partialSubmitHandler:partialSubmitHandler, submitHandler:submitHandler}
        return React.cloneElement(form, props);
    }

    return <Grid container spacing={2}>
        {model.properties.filter((propertyModel:PropertyModel) => propertyModel.write === true).map((propertyModel:PropertyModel, index:number) => {
                const {xs,md} = propertyModel;
                const props = {partialSubmitHandler, submitHandler, model, referencesMap ,refreshReferencesMap, formValue, lockedFormValue, setFormValue, errors, form};
                return <Grid item xs={xs} md={md} key={index}>
                    <GenericInput {...props} resourceName={resourceName} resourceId={resourceId} requestedName={propertyModel.id} />
                </Grid>
            }
        )}
    </Grid>

    return <div></div>
}









