import _ from "lodash";
import { EmbeddedMultipleSetInputFieldProps, EmbeddedSingleSetInputFieldProps, SingleSetInputFieldProps } from "./SetInputFieldProps";
import { Errors } from "../../generators/errors/Errors";
import { PropertyModelInputProps } from "./PropertyModelInputProps";
export class InputProps extends PropertyModelInputProps {
    constructor(props) {
        super(props);
        this.refresh = props.refresh;
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
        var _a;
        const formValue = this.formValue;
        const record = this.record;
        const setFormValue = this.setFormValue;
        const { hasError, errorMessage } = this.model.manipulateErrors((_a = this.errors) !== null && _a !== void 0 ? _a : new Errors([]));
        const label = _.startCase(this.model.label);
        const inputHandler = this.model.getInputOnChangeHandler({ formValue, setFormValue });
        // @ts-ignore
        const value = (formValue) ? formValue[this.model.id] : undefined;
        // @ts-ignore
        const propertyRecord = (record) ? record[this.model.id] : undefined;
        return new SingleSetInputFieldProps(Object.assign(Object.assign({}, this), { inputHandler, label, hasError, errorMessage, value, propertyRecord }));
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
