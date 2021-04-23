import {registryArray} from './RegistryArray';
import {Resource} from "./Resource";


export class ResourceRegistry{
    registry: Resource[];

    constructor() {
        this.registry = registryArray.map(({ resource }) => new Resource(resource));
    }

    getResource(resourceName:string): Resource|undefined{
        return this.registry.find(resource => resource.resourceName===resourceName);
    }

    static get(): ResourceRegistry{
        return new ResourceRegistry();
    }

}

