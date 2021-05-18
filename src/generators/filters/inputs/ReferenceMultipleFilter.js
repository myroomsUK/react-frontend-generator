import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {MyAutocomplete} from "./MyAutocomplete";


export default function ReferenceMultipleFilter({text, options, modelItem, inputFieldOnChange, inheritedValue}){
    const valuePositionInOptions = getAutocompleteMultipleValuePosition(inheritedValue ?? [], options);
    console.log(valuePositionInOptions);
    return <React.Fragment key={text}>
        <ListItem>
            <MyAutocomplete multiple size="small" onChange={inputFieldOnChange("reference")} modelItem={modelItem} inheritedOptions={options} inheritedValue={valuePositionInOptions}/>
        </ListItem>
    </React.Fragment>
}

export function getAutocompleteMultipleValuePosition(values,options){
    const reducer = (accumulator, value) => {

        const index = options.indexOf(options.find(option => option.id === value));
        return [...accumulator, index];
    }
    return values.reduce(reducer, []);
}