import React from "react";
import {EmbeddedInputFields, EmbeddedOutputFields, EmbeddedPropertyModel} from "./NestedPropertyModel";
import {IterableFormContent} from "../../generators/forms/IterableFormContent";
import {IterableShowContent} from "../../generators/fields/IterableShowContent";


export class EmbeddedMultipleModel extends EmbeddedPropertyModel{

    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, modifyOnlyLastElement, modifyRule} =  props;
        const setParentFormValue = (values:any) => setFormValue({...formValue, [props.model.id] : values });
        const newErrors = this.manipulateErrors(errors);

        return IterableFormContent({
            model:this.getResource().getModel(),
            resourceName:this.resourceName,
            setParentFormValue:setParentFormValue,
            formContent: this.form,
            referencesMap:referencesMap,
            refreshReferencesMap:refreshReferencesMap,
            errors:newErrors,
            formValueArray:formValue[this.id],
            label:this.label,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler,
            modifyOnlyLastElement: modifyOnlyLastElement,
            modifyRule,
        })
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }

    setOutputField(props: EmbeddedOutputFields): React.ReactElement<any, any> | null {
        console.log("props", props, this.id)
        const {record, showElement} = props;
        return IterableShowContent({
            model:this.getResource().getModel(),
            record:record[this.id],
            resourceName: this.resourceName,
            showElement:showElement
        });
    }
}