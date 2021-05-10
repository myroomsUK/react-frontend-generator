import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
export const FormContent = ({ partialSubmitHandler, resourceName, resourceId, submitHandler, model, referencesMap, refreshReferencesMap, formValue, lockedFormValue = {}, setFormValue, errors, form }) => {
    useEffect(() => { console.log("references map", referencesMap); }, [referencesMap]);
    if (form) {
        const props = { model: model, formValue: formValue, lockedFormValue: lockedFormValue, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap, setFormValue: setFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler };
        return React.cloneElement(form, props);
    }
    return _jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: model.properties.filter((propertyModel) => propertyModel.write === true).map((propertyModel, index) => {
            const { xs, md } = propertyModel;
            const props = { model: propertyModel, partialSubmitHandler, submitHandler, referencesMap, refreshReferencesMap, formValue, lockedFormValue, setFormValue, errors, form };
            return _jsx(Grid, Object.assign({ item: true, xs: xs, md: md }, { children: propertyModel.getInputField(props) }), index);
        }) }), void 0);
    return _jsx("div", {}, void 0);
};
