import React from "react";
import {EmbeddedInputFields, EmbeddedMultipleOutputFields, EmbeddedPropertyModel} from "./NestedPropertyModel";
import {IterableFormContent} from "../../generators/forms/IterableFormContent";
import {IterableShowContent} from "../../generators/fields/IterableShowContent";
import {Record} from "../Record";
import {FormValue} from "../formvalue/FormValue";


export class EmbeddedMultipleModel extends EmbeddedPropertyModel{

    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null {
        const {formValue, inputElement, setFormValue, refreshReferencesMap, referencesMap, errors, partialSubmitHandler, submitHandler, modifyOnlyLastElement, modifyRule} =  props;
        const setParentFormValue = (values:any) => setFormValue( formValue.updateFormValue(props.model.id, values));
        const newErrors = this.manipulateErrors(errors);

        return IterableFormContent({
            model:this.getResource().getModel(),
            resourceName:this.resourceName,
            setParentFormValue:setParentFormValue,
            formContent: this.form,
            referencesMap:referencesMap,
            refreshReferencesMap:refreshReferencesMap,
            errors:newErrors,
            formValueArray:formValue.get(this.id),
            label:this.label,
            partialSubmitHandler:partialSubmitHandler,
            submitHandler:submitHandler,
            modifyOnlyLastElement: modifyOnlyLastElement,
            modifyRule,
            inputElement
        })
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }

    setOutputField(props: EmbeddedMultipleOutputFields): React.ReactElement<any, any> | null {
        const {record, model, showElement} = props;
        return IterableShowContent({
            model:model,
            record:record ?? new Map(),
            resourceName: this.resourceName,
            showElement:showElement
        });
    }

    getRecord(jsonValue: any[]): Map<number, Record> {
        Array.isArray(jsonValue);
        const map = new Map<number,Record>();
        jsonValue.forEach((element:any, index:number) => {
            if(typeof element === "object"){
                return map.set(index, Record.createFromJson(element,this.getResource().getModel()))
            }else{
                map.set(index, element)
            }
        })
        return map;
    }

    getFormValue(value: Map<string, Record>): any {
        const map = new Map();
        const nestedEntries = Array.from(value.entries());
        nestedEntries.forEach(([nestedKey, nestedValue], nestedIndex) =>{
            if(typeof nestedValue === "object"){
                map.set(nestedKey, FormValue.createFromRecord(nestedValue, this.getResource().getModel()))
            }else{
                map.set(nestedKey, nestedValue)
            }
        })
        return map;
    }

    getJsonFormValue(value: Map<string,any>): any {
        return Array.from(value.values()).map((item) => {
            if(item instanceof FormValue){
                item.toJson(this.getResource().getModel())
            }else{
                return item;
            }

        })
    }
}