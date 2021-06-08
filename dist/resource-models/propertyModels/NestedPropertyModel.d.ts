import { PropertyModel } from "../PropertyModel";
import { Resource } from "../Resource";
import { Errors } from "../../generators/errors/Errors";
import { PropertyModelCore } from "../PropertyModelCore";
export declare abstract class EmbeddedPropertyModel extends PropertyModel {
    resourceName: string;
    resource: Resource;
    constructor(id: string, others: PropertyModelCore);
    getResource(): Resource;
    manipulateErrors(fetchErrors?: Errors): Errors;
}
