import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "@material-ui/core";
export default function ReferenceShow({ propertyModel, propertyRecord }) {
    console.log("propertyRecord", propertyRecord);
    if (propertyRecord) {
        // @ts-ignore
        const id = (typeof propertyRecord === "number") ? propertyRecord : propertyRecord["id"];
        // @ts-ignore
        const name = (typeof propertyRecord === "number") ? propertyRecord : propertyRecord[propertyModel.optionText];
        return _jsx(Link, Object.assign({ color: "secondary", href: `/${propertyModel.resourceName}/${id}/show` }, { children: name }), void 0);
    }
    return _jsx(_Fragment, {}, void 0);
}
