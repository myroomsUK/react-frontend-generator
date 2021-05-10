import {PropertyModel} from "../PropertyModel";
import {Resource} from "../Resource";
import {Errors} from "../../generators/errors/Errors";
import {PropertyModelCore} from "../PropertyModelCore";

export interface NestedPropertyModelInterface extends NestedPropertyModel{

}

export abstract class NestedPropertyModel extends PropertyModel{
    resourceName:string;
    resource:Resource;

    constructor(id:string, others:PropertyModelCore ) {
        super(id, others);
        this.resourceName = others.resourceName;
        this.resource = new Resource(others.resource);
    }
    getResource(): Resource {
        if (this.resource !== undefined) return this.resource;
        throw new Error(`Accessing inexistent resource for ${this.resourceName}`);
    }

    manipulateErrors(fetchErrors:Errors): any {
        return fetchErrors.nestedSingleErrorExtrapolator(this.id);
    }

}