import _ from "lodash";
export class PropertyProps {
    constructor({ model, record, formValue, setFormValue, lockedFormValue, errors, submitHandler, partialSubmitHandler, referencesMap, refreshReferencesMap, showLabel = true }) {
        this.model = model;
        this.record = record;
        this.formValue = formValue;
        this.setFormValue = setFormValue;
        this.lockedFormValue = lockedFormValue;
        this.errors = errors;
        this.submitHandler = submitHandler;
        this.partialSubmitHandler = partialSubmitHandler;
        this.referencesMap = referencesMap;
        this.refreshReferencesMap = refreshReferencesMap;
        this.showlabel = showLabel;
    }
    static createFromFieldProps(requestedName, props) {
        const { formValue, record, setFormValue, model } = props;
        const localFormValue = (formvalue) => {
            const split = _.split(requestedName, ".");
            split.pop();
            const reqName = split.join(".");
            const newFormValue = split.length === 0 ? formvalue : formValue.updateFormValue(reqName, formvalue);
            setFormValue(newFormValue);
        };
        const propertyProps = new PropertyProps(Object.assign(Object.assign({}, props), { model: model.getProperty(requestedName) }));
        propertyProps.formValue = formValue.getPropertyFormValue(requestedName);
        propertyProps.record = record.getPropertyRecord(requestedName);
        propertyProps.setFormValue = localFormValue;
        console.log("formValue", formValue.getPropertyFormValue(requestedName));
        return propertyProps;
    }
}
