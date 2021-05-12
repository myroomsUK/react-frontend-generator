import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ValidatorForm } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { goBack } from "connected-react-router";
import ButtonsHorizontalList from "../../rendering/components/buttons/ButtonsHorizontalList";
import { genericError } from "../../redux/actions/verbs/edit";
export default function GenericForm(props) {
    const { page, submitHandler, formValue, showButton = true, text = "Save" } = props;
    const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        form: {
            width: "100%"
        }
    }));
    const classes = useStyles();
    // validation use effect
    useEffect(() => {
        ValidatorForm.addValidationRule('not_null', (value) => {
            //console.log("VALIDATING NOT NULL",value);
            return value !== undefined;
        });
        ValidatorForm.addValidationRule('isUrl', (value) => {
            const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            return !!pattern.test(value);
        });
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            return value === formValue.password;
        });
        console.log("formvalue", formValue);
    }, [formValue]);
    const submitAndBack = () => {
        submitHandler().then(dispatch(goBack())).catch((error) => console.log("error"));
    };
    const clonedForm = React.cloneElement(page, props);
    return _jsxs(ValidatorForm, Object.assign({ className: classes.form, onSubmit: submitHandler, onError: () => dispatch(genericError("Validation Error")) }, { children: [clonedForm, showButton && _jsx("div", Object.assign({ style: { margin: "10px 0" } }, { children: _jsxs(ButtonsHorizontalList, { children: [_jsx(Button, Object.assign({ style: { float: "right" }, variant: "contained", color: "secondary", onClick: submitHandler }, { children: text }), void 0),
                        _jsxs(Button, Object.assign({ style: { float: "right" }, variant: "contained", color: "secondary", onClick: submitAndBack }, { children: [text, " and back"] }), void 0)] }, void 0) }), void 0)] }), void 0);
    return _jsx("div", { children: "generic form ma ho tanta altra rova" }, void 0);
}
