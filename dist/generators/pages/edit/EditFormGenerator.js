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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGetResourceModel } from "../../../resource-models/modelsRegistry";
import { UpdateListings } from "../../../utils/referenceFieldUtils";
import { useEdit } from "../../../redux/actions/verbs/edit";
import { FormGenerator } from "../../forms/FormGenerator";
import { Error as CustomError, Errors } from "../../errors/Errors";
import { FormValue } from "../../../resource-models/formvalue/FormValue";
import { Record } from "../../../resource-models/Record";
/**
 *
 * @param record
 * @param propId
 * @param propResourceName
 * @param propEditPage
 * @constructor
 *
 * This function returns a react component with the edit form. This component is not responsible for fetching previous data.
 */
export const EditForm = ({ record: recordJson, propId, propResourceName, propEditPage, refresh, isEdit = true }) => {
    const { model, resourceName, editPage } = useGetResourceModel(propResourceName);
    const createEditPageToUse = useMemo(() => propEditPage ? propEditPage : editPage, [propEditPage, editPage]);
    const initialValue = useRef(new FormValue());
    const initialValueRecord = useRef(new Record());
    const [formValue, setFormValue] = useState(initialValue.current);
    const [record, setRecord] = useState(initialValueRecord.current);
    const [errors, setErrors] = useState(new Errors([]));
    const { listings: referencesMap, updateListings: refreshReferencesMap } = UpdateListings();
    const { edit, errors: responseErrors, loading } = useEdit();
    useEffect(() => {
        // @ts-ignore
        const { _error } = responseErrors, errorFields = __rest(responseErrors, ["_error"]);
        // @ts-ignore
        const newErrors = new Errors(Object.keys(errorFields).map((field) => new CustomError(field, errorFields[field])));
        setErrors(newErrors);
    }, [responseErrors]);
    useEffect(() => { setGenericEditRender(_jsx("div", {}, void 0)); }, [resourceName]);
    useEffect(() => {
        const record = Record.createFromJson(recordJson, model);
        setRecord(record);
        setFormValue(FormValue.createFromRecord(record, model));
    }, [recordJson]);
    const [genericEditRender, setGenericEditRender] = useState(_jsx("div", {}, void 0));
    const submitHandler = (formValue) => __awaiter(void 0, void 0, void 0, function* () {
        return edit(resourceName, propId, FormValue.toJson(formValue)).then((response) => {
            refresh();
        });
    }); /*.then(response => {
        const record = Record.createFromJson(response, model)
        setRecord(record)
        setFormValue(FormValue.createFromRecord(record, model))
        return response;
    })*/
    const editFormProps = useMemo(() => {
        return {
            model: model,
            referencesMap: referencesMap,
            refreshReferencesMap: refreshReferencesMap,
            formValue: formValue,
            record: record,
            refresh: refresh,
            lockedFormValue: new FormValue(),
            loading: loading,
            setFormValue: setFormValue,
            submitHandler: () => submitHandler(formValue),
            partialSubmitHandler: submitHandler,
            resourceName: resourceName,
            resourceId: propId.toString()
        };
    }, [model, loading, referencesMap, formValue, record, resourceName, propId, refresh]);
    useEffect(() => {
        if (formValue !== initialValue.current) {
            setGenericEditRender(_jsx(FormGenerator, Object.assign({}, editFormProps, { formContent: createEditPageToUse, isEdit: isEdit, errors: errors, text: "Save" }), void 0));
        }
    }, [formValue, errors]);
    return genericEditRender;
};
