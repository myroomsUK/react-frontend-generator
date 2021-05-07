import _ from "lodash";
import React from "react";
import {useSelector} from "react-redux";
import {
    BOOLEAN,TEXTAREA,
    DATE,
    EMBEDDED_MULTIPLE,
    EMBEDDED_SINGLE,
    ENUM,
    FILE_MULTIPLE,
    FILE_SINGLE,
    FLOAT,
    INTEGER,
    MONEY,
    PHONE,
    REFERENCE,
    STRING
} from "./inputs/InputTypes";
import {PropertyModel} from "../../resource-models/PropertyModel";
import {Errors} from "../errors/Errors";
import BooleanInput from "./inputs/BooleanInput";
import NumberInput from "./inputs/NumberInput";
import {FloatInput} from "./inputs/FloatInput";
import DateInput from "./inputs/DateInput";
import {AutocompleteInput, getAutocompleteValuePosition} from "./inputs/AutocompleteInput";
import IterableFormContent from "./IterableFormContent";
import NestedFormContent from "./NestedFormContent";
import SingleFileInput from "./inputs/SingleFileInput";
import FileListInput from "./inputs/FileListInput";
import PhoneInput from "./inputs/PhoneInput";
import MoneyInput from "./inputs/MoneyInput";
import {StringInput} from "./inputs/StringInput";
import {CustomTextValidator} from "./formHelpers";
import {TextareaInput} from "./inputs/TextareaInput";

export type InputType = "boolean" | "reference" | "embedded_single" | "embedded_multiple" | "file_single" | "file_multiple" | "integer" | "date" | "float" | "enum" | "string" | "phone" | "money" | "array" |"textarea";

interface InputField{

    type: InputType;
    model: PropertyModel;
    value: any;
    parentFormValue:any;
    setParentFormValue: (name:string)=>void;
    referencesMap: any;
    refreshReferencesMap: ()=>void;
    partialSubmitHandler: (formValue:any) => Promise<any>;
    onClick: (variables: any[])=>void;
    errors: Errors;
    requestedName:string;
    form?:React.DetailedReactHTMLElement<any, any>;
    errorMessage?: string;
    submitHandler: (e:any) => Promise<any>;
    hasError:boolean,
    resourceName:string,
    resourceId?:string,
    formValue?:object,
    setFormValue?:any

}

export const InputField: React.FC<InputField> = ({type, resourceName,resourceId, onClick, requestedName, model, value, form, referencesMap, parentFormValue, refreshReferencesMap, setParentFormValue, hasError=false, errorMessage, errors, partialSubmitHandler, submitHandler, formValue, setFormValue}) => {

    const label = _.startCase(model.label);
    const adornment = model.adornment;
    const {listings} = useSelector(({appReducer}:any)=>appReducer);
    const basicProps = {
        ...model,
        name: requestedName,
        onClick: onClick,
        label:label,
        hasError: hasError,
        errorMessage: errorMessage,
        InputProps: {startAdornment:adornment}
    }
    switch (type) {
        case BOOLEAN: {
            return <BooleanInput {...basicProps} name={model.id} checked={value}  />
        }
        case INTEGER: {
            return model.getInputField({
                formValue:formValue,
                setFormValue:setFormValue,
                hasError:hasError,
                errorMessage:errorMessage,
                value:value
            });
            return <NumberInput {...basicProps} value={value} />
        }
        case FLOAT: {
            return <FloatInput {...basicProps} value={value} />
        }
        case DATE: {
            return <DateInput {...basicProps} value={value}/>
        }
        case REFERENCE: {
            const options = listings.get(model.resourceName) ?? [];
            const valuePositionInOptions = getAutocompleteValuePosition(value, options);

            return <AutocompleteInput refreshReferencesMap={refreshReferencesMap} valuePositionInOptions={valuePositionInOptions} options={options} onChange={onClick} model={model}/>
        }

        case EMBEDDED_MULTIPLE:{
            return <IterableFormContent form={form} modifyOnlyLastElement={model.modifyOnlyLastElement} modifyRule={model.editabilityRule} parentFormValue={parentFormValue} label={label} setParentFormValue={setParentFormValue(requestedName)} formValueArray={value} resource={model.resource} errors={errors} single={model.single} partialSubmitHandler={partialSubmitHandler} submitHandler={submitHandler} referencesMap={referencesMap} refreshReferencesMap={refreshReferencesMap}/>
        }
        case EMBEDDED_SINGLE: {
            return <NestedFormContent
                model={model}
                form={form}
                setParentFormValue={setParentFormValue(requestedName)}
                refreshReferencesMap={refreshReferencesMap}
                referencesMap={referencesMap}
                formValue={value}
                errors={errors}
                partialSubmitHandler={partialSubmitHandler}
                submitHandler={submitHandler}/>
        }
        case FILE_SINGLE:{
            return <SingleFileInput
                file={value}
                id={model.id}
                label={label}
                onChange={onClick}
                resourceName={resourceName}
                resourceId={resourceId}
            />
        }
        case FILE_MULTIPLE:{
            return <FileListInput
                partialSubmitHandler={partialSubmitHandler}
                id={model.id}
                resourceName={resourceName}
                files={value}
                multiple
                label={label}
                onChange={onClick}
                resourceId={resourceId}
                areImages={model.areImages}
            />
        }
        case ENUM: {
            const options = model["options"];
            const valuePositionInOptions = getAutocompleteValuePosition(value, options);
            return <AutocompleteInput refreshReferencesMap={refreshReferencesMap} onChange={onClick} valuePositionInOptions={valuePositionInOptions} model={model} options={options} createNew={false}/>

        }
        case PHONE: {
            return <PhoneInput label={model.label} adornment={model.adornment} error={""} errorMessage={""} model={model}  value={value} onClick={onClick}/>
        }
        case MONEY: {
            return <MoneyInput {...model} value={value} onClick={onClick}/>
        }
        case STRING: {
            return model.getInputField({
                formValue:formValue,
                setFormValue:setFormValue,
                hasError:hasError,
                errorMessage:errorMessage,
                value:value
            });
            return <StringInput
                onClick={onClick}
                hasError={hasError}
                model={model}
                errorMessage={errorMessage}
                label={label}
                value={value ?? ""}
                adornment={adornment}

            />
        }

        case TEXTAREA: {
            return <TextareaInput
                onClick={onClick}
                hasError={hasError}
                model={model}
                errorMessage={errorMessage}
                label={label}
                value={value ?? ""}
                adornment={adornment}
                />
        }

        default: {
            return <CustomTextValidator
                autoComplete="nope"
                error={hasError}
                errorMessage={errorMessage}
                variant="outlined"
                label={label}
                name={model.id}
                id={model.id}
                onChange={onClick}
                value={value}
                style={{width: "100%"}}
                InputProps={{
                    startAdornment: adornment
                }}
            />
        }

    }

}

