import {PropertyModel} from "./PropertyModel";
import _ from 'lodash';
import {PropertyModelRegistry} from "./PropertyModelRegistry";
import {EmbeddedPropertyModel} from "./propertyModels/NestedPropertyModel";
import React, {ReactElement} from "react";
import {Errors} from "../generators/errors/Errors";

export interface Model{
    properties: PropertyModel[]
}

export class Model{
    constructor(properties: PropertyModel[]) {
        this.properties = properties;
    }


    /**
     * This method allows to fetch the property Model from the Model. It accepts a dotted name, as it can get inside nested properties.
     * @param name
     */
    getProperty(name:string): PropertyModel {
        const split = _.split(name, ".");
        const reducerModel = (accumulator:PropertyModel|Model, value:string):PropertyModel => {
            if(accumulator instanceof Model){
                const propertyModel = accumulator.properties.find((property)=> property.id === value);
                if(propertyModel) return propertyModel;
                throw new Error(`Undefined model for ${value} and name was ${name}`);
            }else{
                if(accumulator instanceof EmbeddedPropertyModel){
                    const propertyModel = accumulator.getResource().getModel().getProperty(value);
                    if(propertyModel) return propertyModel;
                    throw new Error(`Undefined model for ${value}`);
                }else{
                    throw new Error(`Undefined resource in ${accumulator}`);
                }
            }
        }
        // @ts-ignore
        return split.reduce(reducerModel, this);

    }

    getRecord(name:string, formValue:any){
        const split = _.split(name, ".");
        split.pop();
        const reducer = (start:any, value:any) => (start) ? start[value] : undefined;
        const record = split.reduce(reducer, formValue);
        const propertyModel = this.getProperty(name);
        return {propertyModel: propertyModel, record: record}
    }

    getElement(name:string, formValue:any){
        const split = _.split(name, ".");
        split.pop();
        const reducer = (start:any, value:any) => (start) ? start[value] : undefined;
        const record = split.reduce(reducer, formValue);
        const propertyModel = this.getProperty(name);
        return {propertyModel: propertyModel, record: record}
    }

    /**
     * Create a Model from a valid json Model.
     * @param jsonModel
     */
    static createFromJson(jsonModel:any):Model{
        const properties =  Object.keys(jsonModel).map(key =>  PropertyModelRegistry.get(key, jsonModel[key]));
        return new Model(properties);
    }

    getInputField(requestedName:string, props:ModelGetInputFieldProps): ReactElement<any, any>|null{
        return this.getProperty(requestedName).getInputField({...props, model:this.getProperty(requestedName)});
    }

    getOutputField(requestedName:string, props: OutputPropertyProps, showLabel:boolean = true): ReactElement<any, any>|null{
        /*const {record:formvalue} = props;
        const {propertyModel, record} = this.getElement(requestedName, formvalue);
        return propertyModel.getOutputField({...props, model:propertyModel, record:record, showLabel:showLabel })*/
        return this.getProperty(requestedName).getOutputField({...props, showLabel:showLabel});
    }

    getAllPropertiesReadableNames(){
        return this.properties.filter((propertyModel)=> propertyModel.read===true).map((propertyModel) => {
            return {
                id: propertyModel.id,
                label:propertyModel.label
            }
        } );
    }
}

interface OutputPropertyProps{
    model: Model,
    record: any
}

export interface ModelGetInputFieldProps{
    model: Model,
    formValue: any,
    setFormValue:  React.Dispatch<React.SetStateAction<{}>>,
    lockedFormValue: any,
    errors: Errors,
    submitHandler: (e: any) => Promise<any>;
    partialSubmitHandler: (e: any) => Promise<any>;
    referencesMap: Map<string, any>;
    refreshReferencesMap:()=>void;
}





