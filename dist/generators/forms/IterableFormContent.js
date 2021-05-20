import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Divider, Typography } from "@material-ui/core";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { getFormValueFromRecord } from "./formHelpers";
import { useDelete } from "../../redux/actions/verbs/delete";
import { createArrayFromMap, createMapFromArray } from "../../utils/mapUtils";
import CustomDeleteButton from "../../rendering/components/buttons/CustomDeleteButton";
import { FormContent } from "./FormContent";
// @ts-ignore
const useStyles = makeStyles((theme) => ({
    embeddedTitle: {
        backgroundColor: theme.palette.secondary
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
export const IterableFormContent = ({ model, resourceName, setParentFormValue, formContent, referencesMap, refreshReferencesMap, formValueArray, label, partialSubmitHandler, submitHandler, errors, modifyOnlyLastElement = false, modifyRule = (formvalue) => true }) => {
    /*export default function IterableFormContent({model, resourceName,resource, parentFormValue,  partialSubmitHandler, setParentFormValue, formValueArray, label, errors, single=false, submitHandler, form, referencesMap, refreshReferencesMap, modifyOnlyLastElement=false, modifyRule= ()=>{return true;}}){*/
    const { remove } = useDelete(resourceName);
    const creationTime = useRef(Date.now());
    //local map with formvalues: if is edit, I have values from db, otherwise it is a map with no elements.
    const [localFormValueMap, setLocalFormValueMap] = useState(new Map());
    useEffect(() => {
        if (formValueArray !== undefined) {
            const newFormValueArray = formValueArray.map(item => getFormValueFromRecord(item, model));
            const formValueMap = createMapFromArray(newFormValueArray);
            setLocalFormValueMap(new Map(formValueMap));
        }
    }, [formValueArray]);
    const addForm = () => {
        const date = Date.now();
        const newMap = new Map(localFormValueMap).set(date, {});
        const newArray = createArrayFromMap(newMap);
        setParentFormValue(newArray);
    };
    const deleteForm = (key) => {
        localFormValueMap.delete(key);
        if (key < creationTime.current) {
            remove(key);
        }
        setParentFormValue(createArrayFromMap(new Map(localFormValueMap)));
    };
    const localSetFormValue = (key) => {
        return (value) => {
            setParentFormValue(createArrayFromMap(new Map(localFormValueMap.set(key, value))));
        };
    };
    const classes = useStyles();
    const entries = Array.from(localFormValueMap.entries());
    const hasNewEntry = entries.map(([key, formValue]) => formValue).some((item) => {
        return item.fid > creationTime.current;
    });
    // @ts-ignore
    const basicButton = _jsx(IconButton, Object.assign({ variant: "contained", color: "primary", onClick: addForm }, { children: _jsx(AddOutlinedIcon, {}, void 0) }), void 0);
    const button = modifyOnlyLastElement ? (!hasNewEntry && basicButton) : basicButton;
    const forms = entries.map(([key, formValue], index) => {
        const isEditable = modifyRule(formValue);
        const formElement = _jsx(FormContent, { lockedFormValue: {}, formContent: formContent, referencesMap: referencesMap, setFormValue: localSetFormValue(key), model: model, refreshReferencesMap: refreshReferencesMap, partialSubmitHandler: partialSubmitHandler, formValue: formValue, errors: errors, submitHandler: submitHandler }, index);
        const formFinal = modifyOnlyLastElement ? ((isEditable) ? formElement : formElement) : formElement;
        return _jsxs(React.Fragment, { children: [_jsx(Grid, Object.assign({ item: true, xs: 1 }, { children: _jsx(Typography, { children: index + 1 }, void 0) }), void 0),
                _jsx(Grid, Object.assign({ item: true, xs: 10 }, { children: formFinal }), void 0),
                _jsx(Grid, Object.assign({ item: true, xs: 1 }, { children: isEditable && _jsx(CustomDeleteButton, { icon: true, message: "Delete Item?", onClick: () => deleteForm(formValue.fid) }, void 0) }), void 0),
                _jsx(Grid, Object.assign({ item: true, xs: 12, style: { marginTop: 15, marginBottom: 15 } }, { children: _jsx(Divider, {}, void 0) }), void 0)] }, index);
    });
    // @ts-ignore
    const classEmbeddedTitle = classes.embeddedTitle;
    return _jsxs(Grid, Object.assign({ container: true }, { children: [_jsxs(Grid, Object.assign({ item: true, xs: 12, className: classEmbeddedTitle }, { children: [label, button] }), void 0), forms] }), void 0);
};
