import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
import { FormContent } from "./FormContent";
export default function NestedFormContent({ model, form, setParentFormValue, formValue, errors, referencesMap, refreshReferencesMap, partialSubmitHandler, submitHandler }) {
    const resourceFromRegistry = useGetResourceModel(model.resourceName);
    const resource = useMemo(() => { var _a; return (_a = model.resource) !== null && _a !== void 0 ? _a : resourceFromRegistry; }, [model]);
    const embModel = useMemo(() => resource.model, [resource]);
    const [localFormValue, setLocalFormValue] = useState({});
    useEffect(() => {
        if (formValue !== undefined) {
            setLocalFormValue(formValue);
        }
    }, [formValue]);
    return _jsx(FormContent, { referencesMap: referencesMap, form: form, setFormValue: setParentFormValue, model: embModel, refreshReferencesMap: refreshReferencesMap, formValue: localFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler }, void 0);
}
