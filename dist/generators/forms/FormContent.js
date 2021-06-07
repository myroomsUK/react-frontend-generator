import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Grid } from "@material-ui/core";
import { InputProps } from "../../resource-models/models/InputProps";
/**
 *
 * @constructor
 *
 * FormContent component is responsible for overriding the form, passing all the required props
 * @param props
 */
export const FormContent = (props) => {
    const { partialSubmitHandler, submitHandler, model, referencesMap, refreshReferencesMap, formValue, lockedFormValue, setFormValue, errors, formContent, record, refresh } = props;
    if (formContent) {
        return React.cloneElement(formContent, props);
    }
    return _jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: model.properties //TODO va reso indipendente da material ui nel rendering
            .filter((propertyModel) => propertyModel.write === true)
            .map((propertyModel, index) => {
            const { xs, md } = propertyModel;
            const props = new InputProps({ model: propertyModel, partialSubmitHandler, submitHandler, referencesMap, refreshReferencesMap, formValue, record: record === null || record === void 0 ? void 0 : record.getPropertyRecord(propertyModel.id), lockedFormValue, setFormValue, errors, refresh });
            return _jsx(Grid, Object.assign({ item: true, xs: xs, md: md }, { children: !lockedFormValue.has(propertyModel.id) && propertyModel.getInputField(props) }), index);
        }) }), void 0);
};
