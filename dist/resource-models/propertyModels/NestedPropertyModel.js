import { PropertyModel } from "../PropertyModel";
import { Resource } from "../Resource";
export class EmbeddedPropertyModel extends PropertyModel {
    constructor(id, others) {
        super(id, others);
        this.resourceName = others.resourceName;
        this.resource = new Resource(others.resource);
    }
    getResource() {
        return this.resource;
        throw new Error(`Accessing inexistent resource for ${this.resourceName}`);
    }
    manipulateErrors(fetchErrors) {
        return fetchErrors.nestedSingleErrorExtrapolator(this.id);
    }
}
