import {PropertyModel} from "../PropertyModel";
import {Resource} from "../Resource";
import {Errors} from "../../generators/errors/Errors";
import {PropertyModelCore} from "../PropertyModelCore";
import React from "react";
import {Typography} from "@material-ui/core";
import _ from "lodash";


export abstract class EmbeddedPropertyModel extends PropertyModel{
    resourceName:string;
    resource:Resource;

    constructor(id:string, others:PropertyModelCore ) {
        super(id, others);
        this.resourceName = others.resourceName;
        this.resource = new Resource(others.resource);
    }
    getResource(): Resource {
        return this.resource;
        throw new Error(`Accessing inexistent resource for ${this.resourceName}`);
    }

    manipulateErrors(fetchErrors:Errors): Errors {
        return fetchErrors.nestedSingleErrorExtrapolator(this.id);
    }
}
