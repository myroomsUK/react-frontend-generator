import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import BooleanFilter from "./inputs/BooleanFilter";
import ReferenceFilter from "./inputs/ReferenceFilter";
import TextFilter from "./inputs/TextFilter";
import { AutoCompleteFilter } from "./inputs/AutoCompleteFilter";
import ReferenceMultipleFilter from "./inputs/ReferenceMultipleFilter";
export const GenericFilterArray = ({ model, modelFilters, inputFieldOnChange, referencesMap, filterValue }) => {
    const getFilter = (name, type) => {
        switch (type) {
            case "boolean": {
                return {
                    name: name,
                    type: "boolean",
                    component: _jsx(BooleanFilter, { value: filterValue[name], name: name, type: type, inputFieldOnChange: inputFieldOnChange }, name)
                };
            }
            case "text": {
                const propertyModel = model.getProperty(name);
                if (propertyModel.type === "reference") {
                    const options = referencesMap.get(propertyModel.resourceName);
                    return {
                        name: name,
                        component: _jsx(ReferenceFilter, { inputFieldOnChange: inputFieldOnChange, text: name, modelItem: propertyModel, options: options, inheritedValue: filterValue[name] }, name)
                    };
                }
                else {
                    return {
                        name: name,
                        component: _jsx(TextFilter, { label: propertyModel.label, name: name, type: type, inputFieldOnChange: inputFieldOnChange, value: filterValue[name] }, name)
                    };
                }
            }
            case "enum": {
                const propertyModel = model.getProperty(name);
                const { options } = propertyModel;
                return {
                    name: name,
                    component: _jsx(AutoCompleteFilter, { name: name, inputFieldOnChange: inputFieldOnChange, options: options, value: filterValue[name] }, name)
                };
            }
            case "enum_multiple": {
                return modelFilters[type].map((name, index) => {
                    const propertyModel = model.getProperty(name);
                    const { options } = propertyModel;
                    return {
                        name: name,
                        component: _jsx(ReferenceMultipleFilter, { text: name, modelItem: propertyModel, inputFieldOnChange: inputFieldOnChange, options: options, inheritedValue: filterValue[name] }, name)
                    };
                });
            }
            default: {
                return _jsxs(React.Fragment, { children: [_jsxs(ListItem, Object.assign({ button: true }, { children: [_jsx(ListItemIcon, { children: _jsx(InboxIcon, {}, void 0) }, void 0),
                                _jsx(ListItemText, { primary: name }, void 0)] }), void 0),
                        _jsx(ListItem, { children: _jsx(TextField, { id: name, name: name, onChange: inputFieldOnChange, value: filterValue[name] }, void 0) }, void 0)] }, name);
            }
        }
    };
    return (Object.keys(modelFilters).length !== 0) ? Object.keys(modelFilters).map(filterKey => getFilter(filterKey, modelFilters[filterKey])) : [];
};
