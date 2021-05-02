var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { InputField } from "./genericInputField";
import { Model } from "../../resource-models/Model";
import { Errors, Error } from "../errors/Errors";
import { onChangeHandler } from "./inputHandlers";
import { EMBEDDED_MULTIPLE, EMBEDDED_SINGLE } from "./inputs/InputTypes";
import { useEdit } from "../../redux/actions/verbs/edit";
export const GenericInput = ({ requestedName, resourceName, resourceId, setFormValue, model, formValue, lockedFormValue, referencesMap, refreshReferencesMap, errors, partialSubmitHandler, submitHandler, form }) => {
    const inputOnChangeHandler = (type) => { return (...vars) => onChangeHandler({ type: type, setFormValue: setFormValue, formValue: formValue, vars: vars }); };
    const { _error } = errors, errorFields = __rest(errors, ["_error"]);
    const newErrors = (errors instanceof Errors) ? errors : new Errors(Object.keys(errorFields).map((field) => new Error(field, errorFields[field])));
    const setParentFormValue = (resourceName) => (values) => setFormValue(Object.assign(Object.assign({}, formValue), { [resourceName]: values }));
    const { edit } = useEdit(); // FOR NESTED ELEMENTS ONLY
    const propertyModel = useMemo(() => (model instanceof Model) ? model.getProperty(requestedName) : model, [model, requestedName]);
    if (propertyModel) {
        const type = propertyModel.type;
        const usedForm = form !== null && form !== void 0 ? form : propertyModel.form;
        if (requestedName in lockedFormValue)
            return _jsx(_Fragment, {}, void 0);
        if (type === EMBEDDED_MULTIPLE) {
            const nestedErrors = newErrors.nestedErrorExtrapolator(formValue, requestedName);
            return _jsx(InputField, { type: type, requestedName: requestedName, onClick: inputOnChangeHandler(type), model: propertyModel, value: formValue[requestedName], parentFormValue: formValue, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap, setParentFormValue: setParentFormValue, errors: nestedErrors, partialSubmitHandler: partialSubmitHandler, form: usedForm, submitHandler: submitHandler, hasError: false, resourceName: resourceName, resourceId: resourceId }, void 0);
        }
        if (type === EMBEDDED_SINGLE) {
            const errors = newErrors.nestedSingleErrorExtrapolator(requestedName);
            const partialSubmitHandler = (formValue) => __awaiter(void 0, void 0, void 0, function* () { var _a; return edit((_a = propertyModel.getResource()) === null || _a === void 0 ? void 0 : _a.resourceName, formValue.get('id'), formValue); });
            return _jsx(InputField, { type: type, requestedName: requestedName, onClick: inputOnChangeHandler(type), model: propertyModel, value: formValue[requestedName], parentFormValue: formValue, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap, setParentFormValue: setParentFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, form: usedForm, submitHandler: submitHandler, hasError: false, resourceName: resourceName, resourceId: resourceId }, void 0);
        }
        const errorMessage = newErrors.returnMessageByName(requestedName);
        const hasError = newErrors.containsError(requestedName);
        return _jsx(InputField, { type: type, requestedName: requestedName, onClick: inputOnChangeHandler(type), model: propertyModel, value: formValue[requestedName], parentFormValue: formValue, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap, setParentFormValue: setParentFormValue, errors: errors, partialSubmitHandler: partialSubmitHandler, form: usedForm, submitHandler: submitHandler, hasError: hasError, errorMessage: errorMessage, resourceName: resourceName, resourceId: resourceId }, void 0);
    }
    else {
        return _jsx("div", { children: requestedName }, void 0);
    }
};
