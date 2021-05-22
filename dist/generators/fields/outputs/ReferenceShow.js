import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "@material-ui/core";
export default function ReferenceShow({ propertyModel, propertyRecord }) {
    const id = propertyRecord.get("id");
    const value = propertyRecord.get(propertyModel.optionText);
    return propertyRecord ? _jsx(Link, Object.assign({ color: "secondary", href: `/${propertyModel.resourceName}/${id}/show` }, { children: value }), void 0) : _jsx(_Fragment, {}, void 0);
}
