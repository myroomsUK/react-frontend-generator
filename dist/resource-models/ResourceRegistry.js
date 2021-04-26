import { registryArray } from './RegistryArray';
import { Resource } from "./Resource";
export class ResourceRegistry {
    constructor() {
        this.registry = registryArray.map(({ resource }) => new Resource(resource));
    }
    getResource(resourceName) {
        return this.registry.find(resource => resource.resourceName === resourceName);
    }
    static get() {
        return new ResourceRegistry();
    }
}
