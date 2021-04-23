import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {MyAutocomplete} from "./MyAutocomplete";

export default function ReferenceFilter({text, options, modelItem, inputFieldOnChange, inheritedValue}){
    const initialIndex = (options ?? []).indexOf((options ?? []).find(option => option.id === inheritedValue));
    const inheritedValuePosition = (initialIndex===-1) ? null : initialIndex;

    return <React.Fragment key={text}>
        <ListItem>
            <MyAutocomplete size="small" onChange={inputFieldOnChange("reference")} modelItem={modelItem} inheritedOptions={options} inheritedValue={inheritedValuePosition}/>
        </ListItem>
    </React.Fragment>
}