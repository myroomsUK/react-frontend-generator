import React, {useEffect, useMemo, useRef, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Divider, Typography} from "@material-ui/core";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import {getFormValueFromRecord} from "./formHelpers";
import {useDelete} from "../../redux/actions/verbs/delete";
import {createArrayFromMap, createMapFromArray} from "../../utils/mapUtils";
import CustomDeleteButton from "../../rendering/components/buttons/CustomDeleteButton";
import {FormContent} from "./FormContent";
import {Errors} from "../errors/Errors";



export default function IterableFormContent({model:embeddableModel, resourceName,resource, parentFormValue,  partialSubmitHandler, setParentFormValue, formValueArray, label, errors, single=false, submitHandler, form, referencesMap, refreshReferencesMap, modifyOnlyLastElement=false, modifyRule= ()=>{return true;}}){

    const {remove} = useDelete(resourceName);
    const creationTime = useRef(Date.now());
    const localPartialSubmitHandler = () => partialSubmitHandler(parentFormValue);

    //local map with formvalues: if is edit, I have values from db, otherwise it is a map with no elements.
    const [localFormValueMap, setLocalFormValueMap] = useState(new Map());
    useEffect(()=>{
        if(formValueArray!==undefined){
            const newFormValueArray = formValueArray.map(item => getFormValueFromRecord(item, embeddableModel) );
            const formValueMap = createMapFromArray(newFormValueArray);
            setLocalFormValueMap(new Map(formValueMap));
        }
    },[formValueArray])

    const addForm = () => {
        const date = Date.now();
        const newMap = new Map(localFormValueMap).set(date, {} )
        const newArray = createArrayFromMap(newMap);
        console.log(newArray)
        setParentFormValue(newArray);
    }

    const deleteForm = (key)=>{
        const deleted = localFormValueMap.delete(key);
        if(key < creationTime.current){
            remove(key);
        }
       setParentFormValue(createArrayFromMap(new Map(localFormValueMap)));
    }

    const localSetFormValue = (key) => {
        return (value) => {
            setParentFormValue(createArrayFromMap(new Map(localFormValueMap.set(key, value))));
        }
    }

    const classes = useStyles();

    const entries = Array.from(localFormValueMap.entries());
    const hasNewEntry = entries.map(([key, formValue] )=> formValue).some((item)=> {
        return item.fid > creationTime.current
    });

    const basicButton = <IconButton variant="contained" color="primary" onClick={addForm}><AddOutlinedIcon/></IconButton>
    const button = modifyOnlyLastElement ?  (!hasNewEntry && basicButton) : basicButton

    const forms = entries.map(([key, formValue], index) =>{
        const isEditable = modifyRule(formValue);


        //const fields = embeddableModel.properties.map((property)=> <GenericShowField model={property} resourceName={resourceName} record={formValue}/>)
        const formElement = <FormContent form={form} referencesMap={referencesMap} resource={resource} setFormValue={localSetFormValue(key)} model={embeddableModel} resourceName={resourceName} refreshReferencesMap={refreshReferencesMap}  partialSubmitHandler={partialSubmitHandler} key={index} formValue={formValue} errors={errors} submitHandler={submitHandler}/>;
        const formFinal = modifyOnlyLastElement ? ((isEditable) ? formElement  : formElement ) : formElement;

        return <React.Fragment key={index}>
            <Grid item xs={1}>
                <Typography>{index+1}</Typography>
            </Grid>
            <Grid item xs={10}>{formFinal}</Grid>
            <Grid item xs={1}>
                {isEditable && <CustomDeleteButton icon={true} message={"Delete Item?"} onClick={() => deleteForm(formValue.fid)}/>}
            </Grid>
            <Grid item xs={12} style={{marginTop: 15, marginBottom: 15}}>
                <Divider/>
            </Grid>
        </React.Fragment>;
    })

    return <Grid container>
        <Grid item xs={12} className={classes.embeddedTitle}>
            {label}
            {button}
        </Grid>
        {forms}
    </Grid>
}

const useStyles = makeStyles((theme) => ({
    embeddedTitle:{
        backgroundColor: theme.palette.secondary
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
