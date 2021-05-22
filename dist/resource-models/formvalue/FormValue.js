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
            const propertyModel = model.getProperty(key);
            const propertyValue = propertyModel.getFormValue(value);
            formValue.set(key, propertyValue);
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
        const newFormValue = _.cloneDeep(this);
        newFormValue.set(name, value);
        return newFormValue;
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
}
