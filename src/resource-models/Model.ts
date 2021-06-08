import {PropertyModel} from "./PropertyModel";
import _ from 'lodash';
import {PropertyModelRegistry} from "./PropertyModelRegistry";
import {EmbeddedPropertyModel} from "./propertyModels/NestedPropertyModel";
import {DetailedReactHTMLElement, ReactElement} from "react";
import {FieldProps} from "./models/FieldProps";
import {PropertyProps} from "./models/PropertyProps";
import {PropertyFieldConfiguration} from "./configurations/PropertyFieldConfiguration";

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

    /**
     * Create a Model from a valid json Model.
     * @param jsonModel
     */
    static createFromJson(jsonModel:any):Model{
        const properties =  Object.keys(jsonModel).map(key =>  PropertyModelRegistry.get(key, jsonModel[key]));
        return new Model(properties);
    }

    setFieldProps(requestedName:string, props:FieldProps):PropertyProps{
        return PropertyProps.createFromFieldProps(requestedName,props);
    }

    getInputField(requestedName:string, props:FieldProps, viewElement: DetailedReactHTMLElement<any, any>): ReactElement<any, any>|null{
        const newProps = this.setFieldProps(requestedName, props)
        return this.getProperty(requestedName).getInputField(newProps, new PropertyFieldConfiguration({viewElement:viewElement}));
    }

    getOutputField(requestedName:string, props: FieldProps, viewElement:DetailedReactHTMLElement<any, any>, showLabel:boolean = true): ReactElement<any, any>|null{
        const newProps = this.setFieldProps(requestedName, props);
        return this.getProperty(requestedName).getOutputField(newProps,new PropertyFieldConfiguration({viewElement:viewElement, showLabel:showLabel}));
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





