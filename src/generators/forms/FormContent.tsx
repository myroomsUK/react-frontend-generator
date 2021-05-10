import React, {useEffect} from "react";
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
    form?:React.DetailedReactHTMLElement<any, any>;
    resourceName: string;
    resourceId?: string;
}

export const FormContent: React.FC<FormContentProps> = ({partialSubmitHandler, resourceName, resourceId, submitHandler, model, referencesMap ,refreshReferencesMap, formValue, lockedFormValue={}, setFormValue, errors, form}) => {
    useEffect(()=>{console.log("references map", referencesMap)},[referencesMap])

    if(form){
        const props = {model:model, formValue:formValue, lockedFormValue:lockedFormValue, referencesMap:referencesMap, refreshReferencesMap:refreshReferencesMap, setFormValue:setFormValue, errors:errors, partialSubmitHandler:partialSubmitHandler, submitHandler:submitHandler}
        return React.cloneElement(form, props);
    }

    return <Grid container spacing={2}>
        {model.properties.filter((propertyModel:PropertyModel) => propertyModel.write === true).map((propertyModel:PropertyModel, index:number) => {
                const {xs,md} = propertyModel;
                const props = {model:propertyModel,partialSubmitHandler, submitHandler, referencesMap ,refreshReferencesMap, formValue, lockedFormValue, setFormValue, errors, form};
                return <Grid item xs={xs} md={md} key={index}>
                    {propertyModel.getInputField(props)}
                    {/*<GenericInput {...props} resourceName={resourceName} resourceId={resourceId} requestedName={propertyModel.id} />*/}
                </Grid>
            }
        )}
    </Grid>

    return <div></div>
}









