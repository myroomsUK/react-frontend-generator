import React, {ChangeEventHandler} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import BooleanFilter from "./inputs/BooleanFilter";
import ReferenceFilter from "./inputs/ReferenceFilter";
import TextFilter from "./inputs/TextFilter";
import {AutoCompleteFilter} from "./inputs/AutoCompleteFilter";
import {Model} from "../../resource-models/Model";
import ReferenceMultipleFilter from "./inputs/ReferenceMultipleFilter";


interface Props{
    model:Model;
    modelFilters: any;

    inputFieldOnChange:(e:any)=>ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
    referencesMap: any;
    filterValue: any;
}

export const GenericFilterArray = ({model, modelFilters, inputFieldOnChange, referencesMap, filterValue}:Props) => {

        const getFilter = (name:string, type: string) => {
            switch (type) {
                case "boolean": {
                        return {
                            name: name,
                            type: "boolean",
                            component: <BooleanFilter value={filterValue[name]} key={name} name={name} type={type}
                                                      inputFieldOnChange={inputFieldOnChange}/>
                        }
                }
                case "text": {
                        const propertyModel = model.getProperty(name);
                        if (propertyModel.type === "reference") {
                            const options = referencesMap.get(propertyModel.resourceName);
                            return {
                                name: name,
                                component: <ReferenceFilter key={name} inputFieldOnChange={inputFieldOnChange}
                                                            text={name} modelItem={propertyModel} options={options}
                                                            inheritedValue={filterValue[name]}/>
                            }
                        } else {
                            return {
                                name: name,
                                component: <TextFilter label={propertyModel.label} key={name} name={name} type={type}
                                                       inputFieldOnChange={inputFieldOnChange}
                                                       value={filterValue[name]}/>
                            }
                        }
                }
                case "enum": {
                         const propertyModel = model.getProperty(name);
                        const {options} = propertyModel;
                        return {
                            name: name,
                            component: <AutoCompleteFilter key={name} name={name}
                                                           inputFieldOnChange={inputFieldOnChange} options={options}
                                                           value={filterValue[name]}/>
                        }
                }
                case "enum_multiple": {

                        const propertyModel = model.getProperty(name);
                        const {options} = propertyModel;
                        return {
                            name: name,
                            component: <ReferenceMultipleFilter  key={name} text={name} modelItem={propertyModel}
                                                                 inputFieldOnChange={inputFieldOnChange} options={options}
                                                                 inheritedValue={filterValue[name]}/>
                        }

                }
                default: {
                    return  <React.Fragment key={name}>
                        <ListItem button>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText primary={name}/>
                        </ListItem>
                        <ListItem>
                            <TextField id={name} name={name} onChange={inputFieldOnChange} value={filterValue[name]}>
                            </TextField>
                        </ListItem>
                    </React.Fragment>
                }
            }
        }

    return (Object.keys(modelFilters).length!==0) ? Object.keys(modelFilters).map(filterKey => getFilter(filterKey, modelFilters[filterKey])) : [];

};

