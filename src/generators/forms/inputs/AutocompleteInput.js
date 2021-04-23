import React, {useEffect, useMemo, useState} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextValidator} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {changeResourceBuffer} from "../../../redux/actions/app/actions";
import {Create} from "../../pages/CreatePageGenerator";


export function AutocompleteInput({model, options, refreshReferencesMap, valuePositionInOptions, createNew=true, onChange}){

    const {id, label, resourceName:modalResourceName, optionText:optionTextModelItem} = useMemo(()=>{return model},[model]);
    const [open, setOpen] = React.useState(false);
    const [localOptions, setLocalOptions] = useState( []);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();
    useEffect(()=>{
        if(modalResourceName){
            dispatch(changeResourceBuffer(modalResourceName))
        }
    },[])


    const handleOpen = (e) => {
        e.stopPropagation();
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        refreshReferencesMap()
    };

    useEffect(()=>{setLocalOptions((value)=> (createNew)? [{button: <Button style={{width:"100%"}} onClick={handleOpen}>Add a new one</Button>, label:""}, ...options] : [...options] )}, [options])

    useEffect(()=>{
        const localOptionsLengthCondition = (createNew) ? localOptions.length!==1 : localOptions.length!==0;
        const truePosition = (createNew) ? valuePositionInOptions+1 : valuePositionInOptions;

        if(valuePositionInOptions!==-1 && localOptionsLengthCondition){
            setValue(localOptions[truePosition]);
        }}, [valuePositionInOptions, localOptions, createNew])

    //const autocompleteOnChange = (item)=> onChange(id, (cardinality ===1 ) ?  parseInt(item.id) : item.map(singleItem => singleItem.id))
    const autocompleteOnChange = (item)=> onChange(id,parseInt(item.id))

    return <>
        <Autocomplete
            value={value}
            //multiple={!(cardinality===1)}
            inputValue={inputValue}
            disableClearable
            options={localOptions}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            onChange={(event,value)=>autocompleteOnChange(value)}
            getOptionLabel={(option) => option["label"]}
            renderOption={(option) => (option.button) ? option.button :  <div>{option.label}</div>}
            style={{ width: "100%" }}
            label={label}
            renderInput={({...params}) =>
                <TextValidator {...params}
                    variant="outlined" value={value}
                    label={label}
                    style={{width: "100%"}}
                    autoComplete="nope"
                />
            }
        />
        <SimpleModal open={open} handleClose={handleClose} resourceName={modalResourceName} />
    </>

}


const useDialogStyle = makeStyles((theme)=> ({
    root:{
        minWidth: "40vw"
    }
}))


export default function SimpleModal({open, handleClose,resourceName}) {

    // getModalStyle is not a pure function, we roll the style only on the first render;

    const body = useMemo(()=>{
        if(resourceName){
            return <Create propResourceName={resourceName}/>

        }

    },[resourceName])

    const classes = useDialogStyle();

    return (
        <Dialog className={classes.root} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Create new</DialogTitle>
            <DialogContent>
                {body}
            </DialogContent>
            <DialogActions>
            </DialogActions>

        </Dialog>
    );
}

/**
 * @param {int} value
 * @param {array} options
 * @returns {int}
 */
export function getAutocompleteValuePosition(value,options){
    return options.indexOf(options.find(option => parseInt(option.id) === value));
}