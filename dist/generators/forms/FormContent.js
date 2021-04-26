import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Grid } from "@material-ui/core";
import { GenericInput } from "./genericInput";
export const FormContent = ({ partialSubmitHandler, resourceName, resourceId, submitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, errors, form }) => {
    if (form) {
        const props = { model: model, formValue: formValue, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap, setFormValue: setFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler };
        return React.cloneElement(form, props);
    }
    return _jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: model.properties.filter((propertyModel) => propertyModel.write === true).map((propertyModel, index) => {
            const { xs, md } = propertyModel;
            const props = { partialSubmitHandler, submitHandler, model, referencesMap, refreshReferencesMap, formValue, setFormValue, errors, form };
            return _jsx(Grid, Object.assign({ item: true, xs: xs, md: md }, { children: _jsx(GenericInput, Object.assign({}, props, { resourceName: resourceName, resourceId: resourceId, requestedName: propertyModel.id }), void 0) }), index);
        }) }), void 0);
    return _jsx("div", {}, void 0);
};
