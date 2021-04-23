import {Resource} from "./Resource";
import {ResourceRegistry} from "./ResourceRegistry";

const totalModel = {}
const overrideRegistry = {}; //TODO

export const registry:object = {...totalModel, ...overrideRegistry};

export function getResourceModel(resourceName:string): Resource{
    const classRegistry = ResourceRegistry.get();
    const resource = classRegistry.getResource(resourceName);
    if(resource){
        return resource;
    }
    throw Error(`Resource ${resourceName} does not exist.`)

}
