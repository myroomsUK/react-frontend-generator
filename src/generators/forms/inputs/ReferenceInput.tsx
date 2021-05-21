import React, {useEffect, useMemo, useState} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {TextValidator} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeResourceBuffer} from "../../../redux/actions/app/actions";
import {ReferenceModel} from "../../../resource-models/propertyModels/ReferenceModel";
import {Listing, ListingOption} from "../../../resource-models/listings/Listing";
import ReferenceInputModal from "./ReferenceInputModal/ReferenceInputModal";

interface ReferenceInput{
    model: ReferenceModel,
    refreshReferencesMap: any,
    inheritedValue:ListingOption|undefined,
    createNew?:boolean,
    onChange:any
}

class ReferenceInputOption{
    id:number
    label:string
    button?:any

    constructor(id:number,label:string, button?:any) {
        this.id= id;
        this.label = label;
        this.button = button
    }

    static createFromListingOption(listingOption:ListingOption){
        return new ReferenceInputOption(listingOption.id,listingOption.label);
    }
    toMap(){
        return new Map().set('id',this.id).set('label', this.label);
    }
}

export default function ({model, refreshReferencesMap, inheritedValue, createNew=true, onChange}:ReferenceInput){

    const {id, label, resourceName:modalResourceName} = useMemo(()=>{return model},[model]);
    const [open, setOpen] = React.useState(false);
    const [localOptions, setLocalOptions] = useState<ReferenceInputOption[]>( []);
    // @ts-ignore
    const [value, setValue] = useState<ReferenceInputOption>(null);
    const [inputValue, setInputValue] = useState("");
    // @ts-ignore
    const {listings} = useSelector(({appReducer})=>appReducer);

    const dispatch = useDispatch();
    useEffect(()=>{
        if(modalResourceName){
            dispatch(changeResourceBuffer(modalResourceName))
        }
    },[])




    const handleOpen = (e:any) => {
        e.stopPropagation();
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        refreshReferencesMap()
    };

    useEffect(()=>{
        const options  = listings.get(model.resourceName)?.options ?? [];
        const referenceOptions = options.map((option:ListingOption) => ReferenceInputOption.createFromListingOption(option))
        setLocalOptions((value)=> (createNew)? [new ReferenceInputOption(0,"",<Button style={{width:"100%"}} onClick={handleOpen}>Add a new one</Button>), ...referenceOptions] : [...referenceOptions] )
    }, [listings])

    useEffect(()=>{
        const valuePositionInOptions = getAutocompleteValuePosition(inheritedValue, localOptions);
        const localOptionsLengthCondition = (createNew) ? localOptions.length!==1 : localOptions.length!==0;
        const truePosition = (createNew) ? valuePositionInOptions : valuePositionInOptions-1;

        if(valuePositionInOptions!==-1 && localOptionsLengthCondition){
            setValue(localOptions[truePosition]);
        }
        }, [localOptions, inheritedValue, createNew])


    const autocompleteOnChange = (item:any) => onChange([id, item])
    return <>
        <Autocomplete
            value={value}
            inputValue={inputValue}
            disableClearable
            options={localOptions}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            onChange={(event, newInputvalue) => autocompleteOnChange(newInputvalue)}
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (option.button) ? option.button :  <div>{option.label}</div>}
            style={{ width: "100%" }}
            //TODO addlabel
            renderInput={({...params}) =>
                <TextValidator {...params}
                               id={model.id}
                               name={model.id}
                               variant="outlined" value={value}
                               label={label}
                               style={{width: "100%"}}
                               autoComplete="nope"
                />
            }
        />
        <ReferenceInputModal open={open} handleClose={handleClose} resourceName={modalResourceName} />
    </>

}






/**
 * @param {int} value
 * @param {array} options
 * @returns {int}
 */
export function getAutocompleteValuePosition(value:ListingOption|undefined,options:ReferenceInputOption[]){
    if(value){
        // @ts-ignore
        const correctOption = options.find((option) => option.id === value.id)
        return (correctOption) ? options.indexOf(correctOption): -1;
    }else{
        return -1
    }

}