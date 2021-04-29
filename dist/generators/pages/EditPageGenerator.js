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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
import { useGetOne } from "../../redux/actions/verbs/get_one";
import { useEdit } from "../../redux/actions/verbs/edit";
import { getFormValueFromRecord } from "../forms/formHelpers";
import { FormGenerator } from "../forms/FormGenerator";
import GenericForm from "../forms/genericForm";
import { UpdateListings } from "../../utils/referenceFieldUtils";
export const Edit = ({ propResourceName, propId, propEditPage }) => {
    const { urlResourceName, id } = useParams();
    const resourceNameToUse = useMemo(() => propResourceName ? propResourceName : urlResourceName, [urlResourceName, propResourceName]);
    const { model, resourceName, editPage } = useGetResourceModel(resourceNameToUse);
    const createEditPageToUse = useMemo(() => propEditPage ? propEditPage : editPage, [propEditPage, editPage]);
    const idToUse = useMemo(() => propId ? propId : id, [propId, id]);
    const initialValue = useRef({});
    const [formValue, setFormValue] = useState(initialValue.current);
    const [record, setRecord] = useState(initialValue.current);
    const { data: downloadedRecord, getOne } = useGetOne();
    const { listings: referencesMap, updateListings: refreshReferencesMap } = UpdateListings();
    const { edit, errors } = useEdit();
    const getNewResource = useCallback(() => {
        getOne(resourceName, idToUse);
    }, [resourceName, idToUse]);
    useEffect(() => { setGenericEditRender(_jsx("div", {}, void 0)); }, [resourceName]);
    useEffect(() => getNewResource(), []);
    useEffect(() => {
        if (downloadedRecord !== undefined) {
            // @ts-ignore
            setRecord(downloadedRecord);
        }
    }, [downloadedRecord]);
    useEffect(() => setFormValue(getFormValueFromRecord(record, model)), [record]);
    const [genericEditRender, setGenericEditRender] = useState(_jsx("div", {}, void 0));
    const submitHandler = (formValue) => __awaiter(void 0, void 0, void 0, function* () {
        return edit(resourceName, idToUse, formValue).then(response => {
            setFormValue(getFormValueFromRecord(response, model));
            return response;
        }).catch(response => {
            //throw new Error();
        });
    });
    const editFormProps = useMemo(() => {
        return {
            model: model,
            referencesMap: referencesMap,
            refreshReferencesMap: refreshReferencesMap,
            formValue: formValue,
            setFormValue: setFormValue,
            submitHandler: () => submitHandler(formValue),
            partialSubmitHandler: submitHandler,
            resourceName: resourceName,
            resourceId: idToUse.toString(),
        };
    }, [model, referencesMap, formValue, resourceName, idToUse]);
    useEffect(() => {
        if (formValue !== initialValue.current) {
            if (createEditPageToUse) {
                setGenericEditRender(_jsx(GenericForm, Object.assign({}, editFormProps, { page: editPage, errors: errors }), void 0));
            }
            else {
                setGenericEditRender(_jsx(FormGenerator, Object.assign({}, editFormProps, { errors: errors, text: "Save" }), void 0));
            }
        }
    }, [formValue, errors]);
    return genericEditRender;
};
