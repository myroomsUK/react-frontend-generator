import React from "react";
import {EmbeddedInputFields, NestedPropertyModel} from "./NestedPropertyModel";
import IterableFormContent from "../../generators/forms/IterableFormContent";
import {IterableShowContent} from "../../generators/fields/IterableShowContent";


export class EmbeddedMultipleModel extends NestedPropertyModel{


    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, form, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, single, modifyOnlyLastElement, modifyRule} =  props;
        const setParentFormValue = (values:any) => setFormValue({...formValue, [props.model.id] : values });
        const newErrors = this.manipulateErrors(errors);

        return IterableFormContent({
            model:this.getResource().getModel(),
            resourceName:this.resourceName,
            form:form,
            setParentFormValue:setParentFormValue,
            refreshReferencesMap:refreshReferencesMap,
            referencesMap:referencesMap,
            errors:newErrors,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler,
            formValueArray:formValue[this.id],
            single:single,
            resource:this.getResource(),
            label:this.label,
            modifyOnlyLastElement: modifyOnlyLastElement,
            modifyRule,
            parentFormValue:formValue

        })
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }

    setOutputField(props: any): React.ReactElement<any, any> | null {
        const {record} = props;
        return IterableShowContent({
            model:this.getResource().getModel(),
            record:record[this.id],
            resourceName: this.resourceName,
            showElement:this.showElement
        });
    }
}