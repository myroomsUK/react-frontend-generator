import {InputField, PropertyModel} from "../PropertyModel";
import {Errors} from "../../generators/errors/Errors";

export class IdModel extends PropertyModel{
    getInputField(props: InputField): React.ReactElement<any, any> | null {
        return <></>
    }

    getInputOnChangeHandler({formValue, setFormValue}: any): (vars: any) => void {
        return function (p1: any) {
        };
    }

    getOutputField(props: any): React.ReactElement<any, any> | null {
        return <></>;
    }

    manipulateErrors(errors: Errors): any {
    }

}