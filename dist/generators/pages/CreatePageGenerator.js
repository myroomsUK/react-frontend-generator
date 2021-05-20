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
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
import { useCreate } from "../../redux/actions/verbs/create";
import { FormGeneratorPropsObject } from "../forms/FormGeneratorProps";
import { FormGenerator } from "../forms/FormGenerator";
import { UpdateListings } from "../../utils/referenceFieldUtils";
import { Error, Errors } from "../errors/Errors";
export const Create = ({ propResourceName: resourceName, propCreatePage, lockedFormValue = {}, thenFunction = () => { }, catchFunction = () => { } }) => {
    const { model, createPage } = useGetResourceModel(resourceName);
    const createPageToUse = useMemo(() => propCreatePage ? propCreatePage : createPage, [createPage, propCreatePage]);
    const { listings: referencesMap, updateListings: refreshReferencesMap } = UpdateListings();
    const [formValue, setFormValue] = useState(lockedFormValue);
    const { create, errors: responseErrors } = useCreate();
    const location = useLocation();
    const [errors, setErrors] = useState(new Errors([]));
    useEffect(() => {
        // @ts-ignore
        const { _error } = responseErrors, errorFields = __rest(responseErrors, ["_error"]);
        // @ts-ignore
        const newErrors = new Errors(Object.keys(errorFields).map((field) => new Error(field, errorFields[field])));
        setErrors(newErrors);
    }, [responseErrors]);
    /*const changeFromLocation = useCallback(()=>{

        if(resourceName===urlResourceName){ // Serve per evitare di propagare le modifiche su create innestati
            setFormValue({...formValue, ...location.state})
            if(location.state){
                Object.keys(location.state).forEach((key:string) => {
                    // @ts-ignore
                    model[key] = {...model[key], disabled: true}
                })
            }
        }

    },[location, model,formValue, urlResourceName])*/
    /*useEffect(()=>{
        changeFromLocation()
    },[referencesMap])*/
    const [genericCreateRender, setGenericCreateRender] = useState(_jsx("div", {}, void 0));
    useEffect(() => { setGenericCreateRender(_jsx("div", {}, void 0)); }, [resourceName]);
    const submitHandler = () => __awaiter(void 0, void 0, void 0, function* () { return create(resourceName, formValue).then(thenFunction).catch(catchFunction); });
    const createFormProps = useMemo(() => new FormGeneratorPropsObject({ model: model, formContent: createPageToUse, referencesMap: referencesMap, refreshReferencesMap: refreshReferencesMap, formValue: formValue, setFormValue: setFormValue, submitHandler: submitHandler, partialSubmitHandler: submitHandler, resourceName: resourceName, errors: errors, lockedFormValue: lockedFormValue }), [model, referencesMap, formValue, resourceName, errors, lockedFormValue]);
    useEffect(() => {
        setGenericCreateRender(_jsx(FormGenerator, Object.assign({ formContent: createPageToUse }, createFormProps, { errors: errors }), void 0));
    }, [model, referencesMap, formValue, resourceName, errors, resourceName]);
    return genericCreateRender;
};
