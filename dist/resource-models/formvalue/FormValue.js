import _ from 'lodash';
export class FormValue extends Map {
    /**
     * Create a FormValue from a valid Record.
     * @param record
     * @param model
     */
    static createFromRecord(record, model) {
        const formValue = new FormValue();
        const entries = Array.from(record.entries());
        entries.forEach(([key, value], index) => {
            try {
                const propertyModel = model.getProperty(key);
                const propertyValue = propertyModel.getFormValue(value);
                formValue.set(key, propertyValue);
            }
            catch (error) {
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
        });
        return formValue;
    }
    updateFormValue(name, value) {
        const split = _.split(name, ".");
        const current = split.shift();
        if (split.length !== 0) {
            // @ts-ignore
            const currentFormValue = this.get(current);
            const result = currentFormValue.updateFormValue(split.join("."), value);
            const newFormValue = _.cloneDeep(this);
            // @ts-ignore
            newFormValue.set(current, result);
            return newFormValue;
        }
        else {
            const newFormValue = _.cloneDeep(this);
            // @ts-ignore
            newFormValue.set(current, value);
            return newFormValue;
        }
    }
    accessPropertyFormValue(name) {
        const split = _.split(name, ".");
        const reducer = (accumulator, value) => {
            return accumulator.get(value);
        };
        return split.reduce(reducer, this);
    }
    getPropertyFormValue(name) {
        const split = _.split(name, ".");
        split.pop();
        const reducerModel = (accumulator, value) => {
            if (accumulator instanceof FormValue) {
                return accumulator.get(value);
            }
            else if (accumulator instanceof Map) {
            }
            else
                return accumulator;
        };
        // @ts-ignore
        return split.reduce(reducerModel, this);
    }
    toJson(model) {
        const json = {};
        const entries = Array.from(this.entries());
        entries.forEach(([key, value], index) => {
            const propertyModel = model.getProperty(key);
            const propertyJsonValue = propertyModel.getJsonFormValue(value);
            // @ts-ignore
            json[key] = propertyJsonValue;
        });
        return json;
    }
    toJsonNoModel() {
        const json = {};
        const entries = Array.from(this.entries());
        entries.forEach(([key, value], index) => {
            if (value instanceof Map) {
                // @ts-ignore
                json[key] = Array.from(value.values()).map(item => item.toJsonNoModel());
            }
            else if (value instanceof FormValue) {
                // @ts-ignore
                json[key] = value.toJsonNoModel();
            }
            else {
                // @ts-ignore
                json[key] = value;
            }
        });
        return json;
    }
}
