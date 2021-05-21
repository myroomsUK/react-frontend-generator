import _ from 'lodash';
import {EmbeddedMultiplePropertyRecord, EmbeddedSinglePropertyRecord, PropertyRecord} from "../PropertyRecord";
import {PropertyValue} from "./PropertyValue";
import {Record} from "../Record";
import {Form} from "redux-form";

export class FormValue extends Map<string, any>{
    constructor() {
        super();
    }

    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
    getPropertyValue(name:string): PropertyRecord | undefined{
        const split = _.split(name, ".");

        const reducerModel = (accumulator:PropertyRecord|Record, value:string):PropertyRecord |undefined => {
            if(accumulator instanceof Record) {
                return accumulator.properties.find((property) => property.name === value);
            }else if(accumulator instanceof EmbeddedMultiplePropertyRecord){
                debugger;
            }else if(accumulator instanceof EmbeddedSinglePropertyRecord){
                return accumulator.getPropertyRecord(value);
            }else if(accumulator===undefined){
                return undefined;
            }
        }


        // @ts-ignore
        return split.reduce(reducerModel, this);
    }


    /**
     * Create a FormValue from a valid Record.
     * @param record
     */
    static createFromRecord(record:Record):FormValue{
        const formValue = new FormValue();
        record.properties.forEach((propertyRecord:PropertyRecord)=>{
            formValue.set(propertyRecord.name, propertyRecord.generatePropertyValue())
        })
        return formValue;
    }

    updateFormValue(name:string, value:any):FormValue{
        const newFormValue = _.cloneDeep(this)
        newFormValue.set(name, value);
        return newFormValue;
    }


}