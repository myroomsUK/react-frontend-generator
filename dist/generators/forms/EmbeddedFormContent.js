import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FormContent } from "./FormContent";
import { FormValue } from "../../resource-models/formvalue/FormValue";
import { PropertyFieldConfiguration } from "../../resource-models/configurations/PropertyFieldConfiguration";
export const EmbeddedFormContent = ({ model, refresh, setParentFormValue, formContent, referencesMap, refreshReferencesMap, formValue, partialSubmitHandler, submitHandler, errors, record }) => {
    const [localFormValue, setLocalFormValue] = useState(new FormValue());
    useEffect(() => {
        if (formValue !== undefined) {
            setLocalFormValue(formValue);
        }
    }, [formValue]);
    const configuration = new PropertyFieldConfiguration({ viewElement: formContent });
    return _jsx(FormContent, { refresh: refresh, record: record, referencesMap: referencesMap, configuration: configuration, setFormValue: setParentFormValue, model: model, refreshReferencesMap: refreshReferencesMap, formValue: localFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler, lockedFormValue: new FormValue() }, void 0);
};
