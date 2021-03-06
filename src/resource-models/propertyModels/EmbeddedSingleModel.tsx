import React from "react";
import {EmbeddedPropertyModel} from "./NestedPropertyModel";
import {EmbeddedFormContent} from "../../generators/forms/EmbeddedFormContent";
import {Record} from "../Record";
import {EmbeddedShowContent} from "../../generators/fields/EmbeddedShowContent";
import {FormValue} from "../formvalue/FormValue";
import {EmbeddedSingleSetInputFieldProps} from "../models/SetInputFieldProps";
import {EmbeddedSingleInputProps, EmbeddedSingleInputPropsInterface} from "../models/InputProps";
import {Typography} from "@material-ui/core";
import _ from "lodash";
import {PropertyFieldConfigurationInterface} from "../configurations/PropertyFieldConfiguration";

export class EmbeddedSingleModel extends EmbeddedPropertyModel{
    setInputField(props: EmbeddedSingleSetInputFieldProps, configuration?:PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, record, refresh, loading} =  props;
        const setParentFormValue = (values:any) => setFormValue( formValue.updateFormValue(props.model.id, values));

        // @ts-ignore
        const finalFormValue = (formValue) ? formValue[this.id] : new FormValue()

        return EmbeddedFormContent({
            model:this.getResource().getModel(),
            formContent: configuration?.viewElement,
            setParentFormValue:setParentFormValue,
            refreshReferencesMap:refreshReferencesMap,
            referencesMap:referencesMap,
            formValue:finalFormValue,
            errors:errors,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler,
            record: record ?? new Record(),
            refresh: refresh,
            loading:loading
        })
    }

    getInputField(props: EmbeddedSingleInputPropsInterface, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null {
        const newProps = new EmbeddedSingleInputProps(props)
        return this.setInputField(newProps.handleForSet(), configuration);
    }

    getOutputField(props:EmbeddedSingleInputPropsInterface, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null {
        const showLabel = configuration?.showLabel ?? true;
        const newProps = new EmbeddedSingleInputProps(props)
        return <>
            {showLabel && <Typography>{_.startCase(this.label)}</Typography>}
        {this.setOutputField(newProps, configuration)}
        </>
    }

    setOutputField(props: EmbeddedSingleSetInputFieldProps, configuration?:PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null {

        const {formValue, refreshReferencesMap, referencesMap,setFormValue, errors, lockedFormValue, partialSubmitHandler, submitHandler, record, refresh, loading} =  props;
        const setParentFormValue = (values:any) => setFormValue( formValue.updateFormValue(props.model.id, values));

        // @ts-ignore
        const finalFormValue = (formValue) ? formValue[this.id] : new FormValue()

        return<>
           {/* {(configuration?.showLabel?? true)  && <Typography>{_.startCase(this.label)}</Typography>}*/}
            {EmbeddedShowContent({
                model: this.getResource().getModel(),
                formContent: configuration?.viewElement,
                showElement: configuration?.viewElement,
                setFormValue: setParentFormValue,
                lockedFormValue: lockedFormValue,
                refreshReferencesMap: refreshReferencesMap,
                referencesMap: referencesMap,
                formValue: finalFormValue,
                errors: errors,
                partialSubmitHandler: partialSubmitHandler,
                submitHandler: submitHandler,
                record: record ?? new Record(),
                refresh: refresh,
                loading: loading
            })}
            </>
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }

    getRecord(jsonValue: object): Record {
        return Record.createFromJson(jsonValue, this.getResource().getModel())
    }

    getFormValue(value: Record): any {
        return FormValue.createFromRecord(value, this.getResource().getModel());
    }
}
