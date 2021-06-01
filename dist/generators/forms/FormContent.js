import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Grid } from "@material-ui/core";
/**
 *
 * @constructor
 *
 * FormContent component is responsible for overriding the form, passing all the required props
 * @param props
 */
export const FormContent = (props) => {
    const { partialSubmitHandler, submitHandler, model, referencesMap, refreshReferencesMap, formValue, lockedFormValue = {}, setFormValue, errors, formContent, record } = props;
    if (formContent) {
        return React.cloneElement(formContent, props);
    }
    return _jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: model.properties //TODO va reso indipendente da material ui nel rendering
            .filter((propertyModel) => propertyModel.write === true)
            .map((propertyModel, index) => {
            const { xs, md } = propertyModel;
            const props = { model: propertyModel, partialSubmitHandler, submitHandler, referencesMap, refreshReferencesMap, formValue, record, lockedFormValue, setFormValue, errors };
            return _jsx(Grid, Object.assign({ item: true, xs: xs, md: md }, { children: propertyModel.getInputField(props) }), index);
        }) }), void 0);
};
