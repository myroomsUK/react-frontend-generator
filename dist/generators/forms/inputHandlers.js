import { BOOLEAN, DATE, EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, ENUM, FILE_MULTIPLE, FILE_SINGLE, FLOAT, INTEGER, MONEY, PHONE, REFERENCE } from "./inputs/InputTypes";
const fileOnChange = ({ formValue, setFormValue, vars }) => {
    const [name, value] = vars;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
};
const controlledOnChange = ({ formValue, setFormValue, vars }) => {
    const [event] = vars;
    const target = event.target;
    let value = target.value;
    const name = target.id;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
};
const numberOnChange = ({ formValue, setFormValue, vars }) => {
    const [event] = vars;
    const target = event.target;
    let value = target.value;
    const name = target.id;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: parseInt(value) }));
};
const floatOnChange = ({ formValue, setFormValue, vars }) => {
    const [event] = vars;
    const target = event.target;
    let value = target.value;
    const name = target.id;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: parseFloat(value) }));
};
const phoneOnChange = ({ formValue, setFormValue, vars }) => {
    const [name, value] = vars;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
};
const moneyOnChange = ({ formValue, setFormValue, vars }) => {
    const [name, value] = vars;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
};
const checkboxOnChange = ({ formValue, setFormValue, vars }) => {
    const [event] = vars;
    const target = event.target;
    console.log(target.checked);
    console.log(target.id);
    console.log(target.name);
    let value = target.checked;
    const name = target.id;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
};
const autoCompleteOnchange = ({ formValue, setFormValue, vars }) => {
    const [name, value] = vars;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
};
const dateOnChange = ({ formValue, setFormValue, vars }) => {
    const [name, value] = vars;
    setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
};
const embeddedOnChange = (vars) => { };
export function onChangeHandler({ type, formValue, setFormValue, vars }) {
    const props = { vars: vars, formValue: formValue, setFormValue: setFormValue };
    switch (type) {
        case REFERENCE: {
            return autoCompleteOnchange(props);
        }
        case ENUM: {
            return autoCompleteOnchange(props);
        }
        case EMBEDDED_SINGLE: {
            return embeddedOnChange(props);
        }
        case EMBEDDED_MULTIPLE: {
            return embeddedOnChange(props);
        }
        case FILE_SINGLE: {
            return fileOnChange(props);
        }
        case FILE_MULTIPLE: {
            return fileOnChange(props);
        }
        case BOOLEAN: {
            return checkboxOnChange(props);
        }
        case INTEGER: {
            return numberOnChange(props);
        }
        case FLOAT: {
            return floatOnChange(props);
        }
        case DATE: {
            return dateOnChange(props);
        }
        case PHONE: {
            return phoneOnChange(props);
        }
        case MONEY: {
            return moneyOnChange(props);
        }
        default: {
            return controlledOnChange(props);
        }
    }
}
