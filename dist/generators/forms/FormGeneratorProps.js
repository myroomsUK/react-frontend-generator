export class FormGeneratorPropsObject {
    constructor({ resourceName, submitHandler, partialSubmitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, text, errors, showButton }) {
        this.resourceName = resourceName;
        this.submitHandler = submitHandler;
        this.partialSubmitHandler = partialSubmitHandler;
        this.model = model;
        this.referencesMap = referencesMap;
        this.refreshReferencesMap = refreshReferencesMap;
        this.formValue = formValue;
        this.setFormValue = setFormValue;
        this.text = text;
        this.errors = errors;
        this.showButton = showButton;
    }
}
