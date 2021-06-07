import { Record } from "../../resource-models/Record";
export class FormGeneratorPropsObject {
    constructor({ submitHandler, partialSubmitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, text, errors, showButton, lockedFormValue, resourceId, record = new Record(), refresh, isEdit = true }) {
        this.submitHandler = submitHandler;
        this.partialSubmitHandler = partialSubmitHandler;
        this.model = model;
        this.referencesMap = referencesMap;
        this.refreshReferencesMap = refreshReferencesMap;
        this.formValue = formValue;
        this.record = record;
        this.lockedFormValue = lockedFormValue;
        this.setFormValue = setFormValue;
        this.text = text;
        this.errors = errors;
        this.showButton = showButton;
        this.resourceId = resourceId;
        this.refresh = refresh;
        this.isEdit = isEdit;
    }
}
