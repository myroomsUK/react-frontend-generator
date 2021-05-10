import {PropertyModel} from "../PropertyModel";
import {Error, Errors} from "../../generators/errors/Errors";

export abstract class SinglePropertyModel extends PropertyModel{

    manipulateErrors(errors:Errors): any {
        const errorMessage = errors.returnMessageByName(this.id);
        const hasError = errors.containsError(this.id);
        return {errorMessage, hasError};
    }
}
