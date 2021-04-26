import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Divider, List, ListItem } from "@material-ui/core";
import { GenericShowField } from "./genericShowField";
export const IterableShowContent = ({ record, model, resourceName, showElement }) => {
    const embeddedModel = model.getResource().getModel();
    if (record.length === 0) {
        return _jsx("div", { children: "No elements found" }, void 0);
    }
    if (showElement) {
        return _jsx(List, Object.assign({ style: { width: "100%" } }, { children: record.map((singleRecord) => {
                return _jsxs(_Fragment, { children: [_jsx(ListItem, Object.assign({ alignItems: "center" }, { children: React.cloneElement(showElement, { record: singleRecord, model: embeddedModel }) }), void 0),
                        _jsx(Divider, { component: "li" }, void 0)] }, void 0);
            }) }), void 0);
    }
    else {
        return _jsx(Grid, Object.assign({ container: true }, { children: record.map(singleRecord => _jsx(Grid, Object.assign({ item: true, xs: 12, md: 12 }, { children: _jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: embeddedModel.properties.filter(propertyModel => propertyModel.read === true).map(propertyModel => {
                        const { xs, md, id } = propertyModel;
                        return _jsx(Grid, Object.assign({ item: true, xs: xs, md: md }, { children: _jsx(GenericShowField, { requestedName: id, record: singleRecord, resourceName: resourceName, model: embeddedModel }, void 0) }), void 0);
                    }) }), void 0) }), void 0)) }), void 0);
    }
    ;
};
