import { PropertyProps } from "./PropertyProps";
import _ from "lodash";
import { EmbeddedMultipleSetInputFieldProps, EmbeddedSingleSetInputFieldProps, SingleSetInputFieldProps } from "./SetInputFieldProps";
export class InputProps extends PropertyProps {
    constructor(props) {
        super(props);
    }
}
export class SingleInputProps extends InputProps {
    constructor(props) {
        super(props);
        const { formValue, model } = props;
        this.formValue = formValue;
        this.model = model;
    }
    handleForSet() {
        const formValue = this.formValue;
        const setFormValue = this.setFormValue;
        const { hasError, errorMessage } = this.model.manipulateErrors(this.errors);
        const label = _.startCase(this.model.label);
        const inputHandler = this.model.getInputOnChangeHandler({ formValue, setFormValue });
        // @ts-ignore
        const value = (formValue) ? formValue[this.model.id] : undefined;
        console.log("single value", value);
        return new SingleSetInputFieldProps(Object.assign(Object.assign({}, this), { inputHandler, label, hasError, errorMessage, value }));
    }
}
export class EmbeddedSingleInputProps extends InputProps {
    constructor(props) {
        super(props);
        const { formValue, model } = props;
        this.formValue = formValue;
        this.model = model;
    }
    handleForSet() {
        const nestedErrors = this.model.manipulateErrors(this.errors);
        const label = _.startCase(this.model.label);
        return new EmbeddedSingleSetInputFieldProps(Object.assign(Object.assign({}, this), { label, errors: nestedErrors }));
    }
}
export class EmbeddedMultipleInputProps extends InputProps {
    constructor(props) {
        super(props);
        const { formValue, model, record } = props;
        this.formValue = formValue;
        this.model = model;
        this.record = record;
    }
    handleForSet() {
        const nestedErrors = this.model.manipulateErrors(this.errors);
        const label = _.startCase(this.model.label);
        return new EmbeddedMultipleSetInputFieldProps(Object.assign(Object.assign({}, this), { errors: nestedErrors, label }));
    }
}
