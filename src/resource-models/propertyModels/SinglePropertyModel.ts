import {InputFields, OutputFields, PropertyModel} from "../PropertyModel";
import {Error, Errors} from "../../generators/errors/Errors";

interface SingleErrors{
    hasError:boolean,
    errorMessage?: string
}

export interface SinglePropertyInputFields extends SingleInputFields{
    hasError:boolean,
    errorMessage?: string
}

export abstract class SinglePropertyModel extends PropertyModel{

    manipulateErrors(errors:Errors): SingleErrors {
        const errorMessage = errors.returnMessageByName(this.id);
        const hasError = errors.containsError(this.id);
        return {errorMessage, hasError};
    }

    getInputField(props: InputFields): React.ReactElement<any, any> | null {
        const {errors, formValue, setFormValue} = props;
        const {hasError, errorMessage} = this.manipulateErrors(errors);
        const inputHandler = this.getInputOnChangeHandler({formValue, setFormValue});
        const newProps:SinglePropertyInputFields = {...props, hasError, errorMessage, inputHandler:inputHandler, value:formValue[this.id], model:this}
        return this.setInputField(newProps);
    }

    getOutputField(props:OutputFields): React.ReactElement<any, any> | null {
        console.log("props for ",this.id, props)
        const {record} = props;
        const newProps:SingleOutputFields = {...props,  propertyRecord:record[this.id]}
        return this.setOutputField(newProps);
    }
}

interface SingleInputFields extends InputFields{
    inputHandler: (vars:any) => void,
    value: any,
    model: SinglePropertyModel
}

interface SingleOutputFields{
    propertyRecord: any,
}