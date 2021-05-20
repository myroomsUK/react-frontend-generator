import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FormContent } from "./FormContent";
export default function NestedFormContent(props) {
    const { model, form, setParentFormValue, formValue, errors, referencesMap, refreshReferencesMap, partialSubmitHandler, submitHandler } = props;
    const [localFormValue, setLocalFormValue] = useState({});
    useEffect(() => {
        if (formValue !== undefined) {
            setLocalFormValue(formValue);
        }
    }, [formValue]);
    return _jsx(FormContent, { referencesMap: referencesMap, form: form, setFormValue: setParentFormValue, model: model, refreshReferencesMap: refreshReferencesMap, formValue: localFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler }, void 0);
}
