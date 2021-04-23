import {PropertyModel} from "./PropertyModel";
import _ from 'lodash';

export interface Model{
    properties: PropertyModel[]
}

export class Model{
    constructor(properties: PropertyModel[]) {
        this.properties = properties;
    }

    getProperty(name:string): PropertyModel {

        const split = _.split(name, ".");

        const reducerModel = (accumulator:PropertyModel|Model, value:string):PropertyModel => {
            if(accumulator instanceof Model){
                const propertyModel = accumulator.properties.find((property)=> property.id === value);
                if(propertyModel) return propertyModel;
                throw new Error(`Undefined model for ${value} and name was ${name}`);
            }else{
                if(accumulator.getResource()){
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
        const properties =  Object.keys(jsonModel).map(key =>  PropertyModel.get(key, jsonModel[key]));
        return new Model(properties);
    }

}





