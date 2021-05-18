import {InputFields, PropertyModel} from "./PropertyModel";
import _ from 'lodash';
import {PropertyModelRegistry} from "./PropertyModelRegistry";
import {NestedPropertyModel} from "./propertyModels/NestedPropertyModel";
import {InputProps} from "@material-ui/core";
import {ReactElement} from "react";
import {properties} from "../mock/properties";

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
                if(accumulator instanceof NestedPropertyModel){
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

    getPropertyByResourceName(resourceName:string):PropertyModel{
        const propertyModel = this.properties.find(property => property.resourceName===resourceName);
        if(propertyModel) return propertyModel;
        throw new Error("Property by resource name not found");
    }

    addPropertiesToRequestedElement(propertiesObject:any, resourceName:string){
        this.properties.find(property => {
            if(property.resourceName ===resourceName){
                property = _.merge(property, propertiesObject);
            }
            return property.resourceName ===resourceName;
        })
        return this;

    }

    static createFromJson(jsonModel:any):Model{
        const properties =  Object.keys(jsonModel).map(key =>  PropertyModelRegistry.get(key, jsonModel[key]));
        return new Model(properties);
    }

    inputProperty(requestedName:string, props:InputFields): ReactElement<any, any>|null{
        return this.getProperty(requestedName).getInputField(props);
    }

    outputProperty(requestedName:string, props:any, showLabel:boolean = true): ReactElement<any, any>|null{
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





