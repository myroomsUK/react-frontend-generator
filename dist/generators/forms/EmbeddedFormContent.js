import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FormContent } from "./FormContent";
export const EmbeddedFormContent = ({ model, setParentFormValue, formContent, referencesMap, refreshReferencesMap, formValue, partialSubmitHandler, submitHandler, errors }) => {
    const [localFormValue, setLocalFormValue] = useState({});
    useEffect(() => {
        if (formValue !== undefined) {
            setLocalFormValue(formValue);
        }
    }, [formValue]);
    return _jsx(FormContent, { referencesMap: referencesMap, formContent: formContent, setFormValue: setParentFormValue, model: model, refreshReferencesMap: refreshReferencesMap, formValue: localFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler, lockedFormValue: {} }, void 0);
};
