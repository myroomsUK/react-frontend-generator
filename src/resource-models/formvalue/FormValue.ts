import _ from 'lodash';
import {Record} from "../Record";
import {Model} from "../Model";

export class FormValue extends Object{

    /**
     * Create a FormValue from a valid Record.
     * @param record
     * @param model
     */
    static createFromRecord(record:Record, model: Model): FormValue{
        const formValue = new FormValue();

        Object.keys(record).forEach(key =>{

            try{
                const propertyModel = model.getProperty(key);
                // @ts-ignore
                const propertyValue = propertyModel.getFormValue(record[key]);
                // @ts-ignore
                formValue[key] =  propertyValue;
            }catch(error){
            }
         /*
            if(value instanceof Record){
                formValue.set(key, FormValue.createFromRecord(value));
            }else if(value instanceof Map){
                const map = new Map();
                const nestedEntries = Array.from(value.entries());
                nestedEntries.forEach(([nestedKey, nestedValue], nestedIndex) =>{
                    map.set(nestedKey, FormValue.createFromRecord(nestedValue))
                })
                formValue.set(key, map);
            }else{
                formValue.set(key, value);
            }*/
        } )
        return formValue;
    }

    updateFormValue(name:string, value:any):FormValue{
        const split = _.split(name, ".");
        const current = split.shift();
            if (split.length!==0) {

                // @ts-ignore
                const currentFormValue = this.get(current);
                const result = currentFormValue.updateFormValue(split.join("."), value)
                const newFormValue = _.cloneDeep(this)
                // @ts-ignore
                newFormValue.set(current, result )
                return newFormValue;
            }else{
                const newFormValue = _.cloneDeep(this)
                // @ts-ignore
                newFormValue[current] = value;
                return newFormValue
            }


    }
    getPropertyFormValue(name:string): any{
        const split = _.split(name, ".");
        split.pop();
        const reducerModel = (accumulator:any, value:string):any |undefined => {
            if(accumulator instanceof FormValue) {
                // @ts-ignore
                const accumulatorElement :FormValue = accumulator[value];
                return accumulatorElement
            }else if(accumulator instanceof Map){
            }else
                return accumulator;
        }
        // @ts-ignore
        return split.reduce(reducerModel, this);
    }

    toJson(model:Model){
        return this;
        /*const json = {};
        const entries = Array.from(this.entries())
        entries.forEach(([key, value], index) =>{
            const propertyModel = model.getProperty(key)
            const propertyJsonValue = propertyModel.getJsonFormValue(value)

            // @ts-ignore
            json[key] = propertyJsonValue;
        })
        return json;*/
    }

    toJsonNoModel(){
        return this;
        const json = {};
        /*const entries = Array.from(this.entries())
        entries.forEach(([key, value], index) =>{
            if(value instanceof Map){
                // @ts-ignore
                json[key] = Array.from(value.values()).map(item => item.toJsonNoModel())
            }else if(value instanceof FormValue){
                // @ts-ignore
                json[key] = value.toJsonNoModel()
            }else{
                // @ts-ignore
                json[key] = value
            }
        })
        return json;*/
    }

}