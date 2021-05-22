import _ from 'lodash';
import {Model} from "./Model";


export class Record extends Map<string,any>{

    static createFromJson(jsonModel:any, model: Model):Record{
        const record = new Record();
        Object.keys(jsonModel).forEach(key =>  {
            try{
                const propertyModel = model.getProperty(key);
                const recordValue = propertyModel.getRecord(jsonModel[key]);
                record.set(key, recordValue);
            }catch(error){
                record.set(key, jsonModel[key])
            }

        });
        return record;
    }



    getPropertyRecord(name:string): any{
        const split = _.split(name, ".");
        const reducerModel = (accumulator:any, value:string):any |undefined => {
            if(accumulator instanceof Record) {
               return accumulator.get(value)
            }else if(accumulator instanceof Map){

            }else

                return accumulator;
        }
        console.log("name", name)
        // @ts-ignore
        return split.reduce(reducerModel, this);
    }

    static fromJson(jsonModel:any):any{
        if(Array.isArray(jsonModel)){
            const map = new Map();
            jsonModel.forEach((element:any, index:number) => {
                map.set(index,Record.fromJson(element));
            } )
            return map;
        }else if(typeof jsonModel === "object"){
            const record =  new Record();
            Object.keys(jsonModel).forEach(key => {
                record.set(key, Record.fromJson(jsonModel[key]))
            } )
            return record
        }else{
            return jsonModel
        }
    }

    toJson(){
        const json = {};
        const entries = Array.from(this.entries())
        entries.forEach(([key, value], index) =>{
            if(value instanceof Record){
                // @ts-ignore
                json[key] = value.toJson();
            }else if(value instanceof Map){
                // @ts-ignore
                json[key] = Array.from(value.values()).map((item:Record) => item.toJson())
            }else{
                // @ts-ignore
                json[key] = value;
            }
        })
    }
}
