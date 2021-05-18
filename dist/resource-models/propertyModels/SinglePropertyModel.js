import { PropertyModel } from "../PropertyModel";
export class SinglePropertyModel extends PropertyModel {
    manipulateErrors(errors) {
        const errorMessage = errors.returnMessageByName(this.id);
        const hasError = errors.containsError(this.id);
        return { errorMessage, hasError };
    }
    getInputField(props) {
        const { errors, formValue, setFormValue } = props;
        const { hasError, errorMessage } = this.manipulateErrors(errors);
        const inputHandler = this.getInputOnChangeHandler({ formValue, setFormValue });
        const newProps = Object.assign(Object.assign({}, props), { hasError, errorMessage, inputHandler: inputHandler, value: formValue[this.id], model: this });
        return this.setInputField(newProps);
    }
    getOutputField(props) {
        console.log("props for ", this.id, props);
        const { record } = props;
        const newProps = Object.assign(Object.assign({}, props), { propertyRecord: record[this.id] });
        return this.setOutputField(newProps);
    }
}
