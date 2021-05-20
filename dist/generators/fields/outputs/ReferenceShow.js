import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "@material-ui/core";
export default function ReferenceShow({ propertyModel, propertyRecord }) {
    return propertyRecord ? _jsx(Link, Object.assign({ color: "secondary", href: `/${propertyModel.resourceName}/${propertyRecord.id}/show` }, { children: propertyRecord[propertyModel.optionText] }), void 0) : _jsx(_Fragment, {}, void 0);
}
