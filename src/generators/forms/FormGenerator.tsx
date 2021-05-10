import React, {useEffect, useRef} from "react";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {ValidatorForm} from "react-material-ui-form-validator";
import {FormGeneratorProps} from "./FormGeneratorProps";
import {FormContent} from "./FormContent";
import {goBack} from "connected-react-router";
import {useFormStyles} from "../../rendering/styles/formStyles";
import ButtonsHorizontalList from "../../rendering/components/buttons/ButtonsHorizontalList";
import {genericError} from "../../redux/actions/verbs/edit";


export const FormGenerator: React.FC<FormGeneratorProps> = ({submitHandler, resourceName,resourceId, partialSubmitHandler, model, referencesMap, refreshReferencesMap, formValue, lockedFormValue, setFormValue,  errors, text= "Salva", showButton=true }) => {

    const classes = useFormStyles();
    const dispatch = useDispatch();
    const ref= useRef(null);

    // validation use effect
    useEffect(()=>{
        ValidatorForm.addValidationRule('isUrl', (value:string) => {
            const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            return !!pattern.test(value);

        });

        console.log("formvalue", formValue);
        },[formValue])

    const validationSubmitHandler = (e:any) => {
        submitHandler(e)
    }

    const onClickHandler = (e: any) => {
        if(ref!==null && ref.current!==null){
            // @ts-ignore
            ref.current.submit(e);
        }
    }

    const onClickGoBackHandler = (e: any) => {
        onClickHandler(e);
        dispatch(goBack());
    }

    return <ValidatorForm ref={ref} className={classes.form} onSubmit={validationSubmitHandler} onError={()=>dispatch(genericError("Validation Error"))}>
        <FormContent model={model} resourceName={resourceName} resourceId={resourceId} referencesMap={referencesMap} refreshReferencesMap={refreshReferencesMap} setFormValue={setFormValue} formValue={formValue} lockedFormValue={lockedFormValue}  errors={errors} partialSubmitHandler={partialSubmitHandler} submitHandler={submitHandler}/>
        {showButton && <div style={{margin: "10px 0"}}>
            <ButtonsHorizontalList>
                <Button style={{float: "right"}} variant="contained" color="secondary" onClick={onClickHandler}>{text}</Button>
            </ButtonsHorizontalList>
        </div>}
    </ValidatorForm>

}