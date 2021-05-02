var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGetResourceModel } from "../../../resource-models/modelsRegistry";
import { UpdateListings } from "../../../utils/referenceFieldUtils";
import { useEdit } from "../../../redux/actions/verbs/edit";
import { getFormValueFromRecord } from "../../forms/formHelpers";
import GenericForm from "../../forms/genericForm";
import { FormGenerator } from "../../forms/FormGenerator";
/**
 *
 * @param record
 * @param propId
 * @param propResourceName
 * @param propEditPage
 * @param catchfunction
 * @param thenFunction
 * @constructor
 *
 * This function returns a react component with the edit form. This component is not responsible for fetching previous data.
 */
export const EditForm = ({ record, propId, propResourceName, propEditPage, catchfunction = () => { }, thenFunction = () => { } }) => {
    const { model, resourceName, editPage } = useGetResourceModel(propResourceName);
    const createEditPageToUse = useMemo(() => propEditPage ? propEditPage : editPage, [propEditPage, editPage]);
    const initialValue = useRef({});
    const [formValue, setFormValue] = useState(initialValue.current);
    const { listings: referencesMap, updateListings: refreshReferencesMap } = UpdateListings();
    const { edit, errors } = useEdit();
    useEffect(() => { setGenericEditRender(_jsx("div", {}, void 0)); }, [resourceName]);
    useEffect(() => setFormValue(getFormValueFromRecord(record, model)), [record]);
    const [genericEditRender, setGenericEditRender] = useState(_jsx("div", {}, void 0));
    const submitHandler = (formValue) => __awaiter(void 0, void 0, void 0, function* () {
        return edit(resourceName, propId, formValue).then(response => {
            setFormValue(getFormValueFromRecord(response, model));
            return response;
        }).then(thenFunction).catch(catchfunction);
    });
    const editFormProps = useMemo(() => {
        return {
            model: model,
            referencesMap: referencesMap,
            refreshReferencesMap: refreshReferencesMap,
            formValue: formValue,
            lockedFormValue: {},
            setFormValue: setFormValue,
            submitHandler: () => submitHandler(formValue),
            partialSubmitHandler: submitHandler,
            resourceName: resourceName,
            resourceId: propId.toString(),
        };
    }, [model, referencesMap, formValue, resourceName, propId]);
    useEffect(() => {
        if (formValue !== initialValue.current) {
            if (createEditPageToUse) {
                setGenericEditRender(_jsx(GenericForm, Object.assign({}, editFormProps, { page: createEditPageToUse, errors: errors }), void 0));
            }
            else {
                setGenericEditRender(_jsx(FormGenerator, Object.assign({}, editFormProps, { errors: errors, text: "Save" }), void 0));
            }
        }
    }, [formValue, errors]);
    return genericEditRender;
};
