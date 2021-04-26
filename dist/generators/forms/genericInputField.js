import { jsx as _jsx } from "react/jsx-runtime";
import _ from "lodash";
import { useSelector } from "react-redux";
import { BOOLEAN, DATE, EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, ENUM, FILE_MULTIPLE, FILE_SINGLE, FLOAT, INTEGER, MONEY, PHONE, REFERENCE, STRING } from "./inputs/InputTypes";
import BooleanInput from "./inputs/BooleanInput";
import NumberInput from "./inputs/NumberInput";
import { FloatInput } from "./inputs/FloatInput";
import DateInput from "./inputs/DateInput";
import { AutocompleteInput, getAutocompleteValuePosition } from "./inputs/AutocompleteInput";
import IterableFormContent from "./IterableFormContent";
import NestedFormContent from "./NestedFormContent";
import SingleFileInput from "./inputs/SingleFileInput";
import FileListInput from "./inputs/FileListInput";
import PhoneInput from "./inputs/PhoneInput";
import MoneyInput from "./inputs/MoneyInput";
import { StringInput } from "./inputs/StringInput";
import { CustomTextValidator } from "./formHelpers";
export const InputField = ({ type, resourceName, resourceId, onClick, requestedName, model, value, form, referencesMap, parentFormValue, refreshReferencesMap, setParentFormValue, hasError = false, errorMessage, errors, partialSubmitHandler, submitHandler }) => {
    var _a;
    const label = _.startCase(model.label);
    const adornment = model.adornment;
    const { listings } = useSelector(({ appReducer }) => appReducer);
    const basicProps = Object.assign(Object.assign({}, model), { name: requestedName, onClick: onClick, label: label, hasError: hasError, errorMessage: errorMessage, InputProps: { startAdornment: adornment } });
    switch (type) {
        case BOOLEAN: {
            return _jsx(BooleanInput, Object.assign({}, basicProps, { name: model.id, checked: value }), void 0);
        }
        case INTEGER: {
            return _jsx(NumberInput, Object.assign({}, basicProps, { value: value }), void 0);
        }
        case FLOAT: {
            return _jsx(FloatInput, Object.assign({}, basicProps, { value: value }), void 0);
        }
        case DATE: {
            return _jsx(DateInput, Object.assign({}, basicProps, { value: value }), void 0);
        }
        case REFERENCE: {
            const options = (_a = listings.get(model.resourceName)) !== null && _a !== void 0 ? _a : [];
            const valuePositionInOptions = getAutocompleteValuePosition(value, options);
            return _jsx(AutocompleteInput, { refreshReferencesMap: refreshReferencesMap, valuePositionInOptions: valuePositionInOptions, options: options, onChange: onClick, model: model }, void 0);
        }
        case EMBEDDED_MULTIPLE: {
            return _jsx(IterableFormContent, { form: form, modifyOnlyLastElement: model.modifyOnlyLastElement, modifyRule: model.editabilityRule, parentFormValue: parentFormValue, label: label, setParentFormValue: setParentFormValue(requestedName), formValueArray: value, resource: model.resource, errors: errors, single: model.single, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap }, void 0);
        }
        case EMBEDDED_SINGLE: {
            return _jsx(NestedFormContent, { model: model, form: form, setParentFormValue: setParentFormValue(requestedName), refreshReferencesMap: refreshReferencesMap, referencesMap: referencesMap, formValue: value, errors: errors, partialSubmitHandler: partialSubmitHandler, submitHandler: submitHandler }, void 0);
        }
        case FILE_SINGLE: {
            return _jsx(SingleFileInput, { file: value, id: model.id, label: label, onChange: onClick, resourceName: resourceName, resourceId: resourceId }, void 0);
        }
        case FILE_MULTIPLE: {
            return _jsx(FileListInput, { partialSubmitHandler: partialSubmitHandler, id: model.id, resourceName: resourceName, files: value, multiple: true, label: label, onChange: onClick, resourceId: resourceId }, void 0);
        }
        case ENUM: {
            const options = model["options"];
            const valuePositionInOptions = getAutocompleteValuePosition(value, options);
            return _jsx(AutocompleteInput, { refreshReferencesMap: refreshReferencesMap, onChange: onClick, valuePositionInOptions: valuePositionInOptions, model: model, options: options, createNew: false }, void 0);
        }
        case PHONE: {
            return _jsx(PhoneInput, { label: model.label, adornment: model.adornment, error: "", errorMessage: "", model: model, value: value, onClick: onClick }, void 0);
        }
        case MONEY: {
            return _jsx(MoneyInput, Object.assign({}, model, { value: value, onClick: onClick }), void 0);
        }
        case STRING: {
            return _jsx(StringInput, { onClick: onClick, hasError: hasError, model: model, errorMessage: errorMessage, label: label, value: value, adornment: adornment }, void 0);
        }
        default: {
            return _jsx(CustomTextValidator, { autoComplete: "nope", error: hasError, errorMessage: errorMessage, variant: "outlined", label: label, name: model.id, id: model.id, onChange: onClick, value: value, style: { width: "100%" }, InputProps: {
                    startAdornment: adornment
                } }, void 0);
        }
    }
};
