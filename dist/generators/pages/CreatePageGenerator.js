import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
import { useCreate } from "../../redux/actions/verbs/create";
import { FormGeneratorPropsObject } from "../forms/FormGeneratorProps";
import { FormGenerator } from "../forms/FormGenerator";
import GenericForm from "../forms/genericForm";
import { UpdateListings } from "../../utils/referenceFieldUtils";
export const Create = ({ propResourceName }) => {
    const { urlResourceName } = useParams();
    const resourceNameToUse = useMemo(() => propResourceName ? propResourceName : urlResourceName, [urlResourceName, propResourceName]);
    const { model, resourceName, createPage } = useGetResourceModel(resourceNameToUse);
    const { listings: referencesMap, updateListings: refreshReferencesMap } = UpdateListings();
    const [formValue, setFormValue] = useState({});
    const { create, errors } = useCreate();
    const location = useLocation();
    const changeFromLocation = useCallback(() => {
        if (resourceName === urlResourceName) { // Serve per evitare di propagare le modifiche su create innestati
            setFormValue(Object.assign(Object.assign({}, formValue), location.state));
            if (location.state) {
                Object.keys(location.state).forEach((key) => {
                    // @ts-ignore
                    model[key] = Object.assign(Object.assign({}, model[key]), { disabled: true });
                });
            }
        }
    }, [location, model, formValue, urlResourceName]);
    useEffect(() => {
        changeFromLocation();
    }, [referencesMap]);
    const [genericCreateRender, setGenericCreateRender] = useState(_jsx("div", {}, void 0));
    useEffect(() => { setGenericCreateRender(_jsx("div", {}, void 0)); }, [resourceName]);
    const submitHandler = () => create(resourceName, formValue);
    const createFormProps = useMemo(() => new FormGeneratorPropsObject({ model: model, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap, formValue: formValue, setFormValue: setFormValue, submitHandler: submitHandler, partialSubmitHandler: submitHandler, resourceName: resourceName, errors: errors }), [model, referencesMap, formValue, resourceName, errors]);
    useEffect(() => {
        if (createPage) {
            setGenericCreateRender(_jsx(GenericForm, Object.assign({}, createFormProps, { page: createPage, errors: errors }), void 0));
        }
        else {
            setGenericCreateRender(_jsx(FormGenerator, Object.assign({}, createFormProps), void 0));
        }
    }, [model, referencesMap, formValue, resourceName, errors, resourceName]);
    return genericCreateRender;
};
