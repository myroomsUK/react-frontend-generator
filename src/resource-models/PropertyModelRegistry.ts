import {Resource} from "./Resource";
import _ from "lodash";
import React from "react";
import {PropertyModelCore} from "./PropertyModelCore";
import {InputType} from "../generators/forms/genericInputField";
import {EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, INTEGER, REFERENCE, STRING} from "../generators/forms/inputs/InputTypes";
import {PropertyModel} from "./PropertyModel";
import {StringModel} from "./propertyModels/StringModel";
import {NumberModel} from "./propertyModels/NumberModel";

/**
 * @Property {id} - Name of the property
 */
export class PropertyModelRegistry{

    static get(id:string,others:PropertyModelCore):PropertyModel{
        switch (others.type){
            case STRING:{
                return new StringModel(id, others);
            }
            case INTEGER:{
                return new NumberModel(id, others);
            }
            default:{
                throw new Error();
            }
        }

    }
}