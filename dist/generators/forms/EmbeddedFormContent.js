import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FormContent } from "./FormContent";
import { FormValue } from "../../resource-models/formvalue/FormValue";
export const EmbeddedFormContent = ({ model, setParentFormValue, formContent, referencesMap, refreshReferencesMap, formValue, partialSubmitHandler, submitHandler, errors, record }) => {
    const [localFormValue, setLocalFormValue] = useState(new FormValue());
    useEffect(() => {
        if (formValue !== undefined) {
            setLocalFormValue(formValue);
        }
    }, [formValue]);
    return _jsx(FormContent, { record: record, referencesMap: referencesMap, formContent: formContent, setFormValue: setParentFormValue, model: model, refreshReferencesMap: refreshReferencesMap, formValue: localFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler, lockedFormValue: new FormValue() }, void 0);
};
