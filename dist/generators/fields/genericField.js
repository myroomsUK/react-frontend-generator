import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { BOOLEAN, DATE, EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, ENUM, FILE_MULTIPLE, FILE_SINGLE, MONEY, REFERENCE } from "../forms/inputs/InputTypes";
import { push } from "connected-react-router";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { Link, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import chipGenerator from "./outputs/chips/chipGenerator";
import ShowFileList from "./ShowFileList";
import { ShowContent } from "./ShowContent";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
import { IterableShowContent } from "./IterableShowContent";
import { showDate } from "../../utils/timeUtils";
export const GenericField = ({ propertyRecord, propertyModel, resourceName: originalResourceName, originalId, table = false, showElement }) => {
    const dispatch = useDispatch();
    const { type, optionText, resourceName, label, options } = propertyModel;
    const embeddedResource = useGetResourceModel(resourceName);
    switch (type) {
        case REFERENCE: {
            const embResourceName = resourceName;
            if (!propertyRecord) {
                return _jsx("div", {}, void 0);
            }
            const value = propertyRecord[optionText];
            return _jsx(Link, Object.assign({ color: "secondary", href: `/${embResourceName}/${propertyRecord.id}/show` }, { children: value }), void 0);
        }
        case BOOLEAN: {
            return (propertyRecord) ? _jsx(CheckIcon, {}, void 0) : _jsx(CloseIcon, {}, void 0);
        }
        case DATE: {
            return _jsx(Typography, { children: showDate(propertyRecord) }, void 0);
        }
        case FILE_SINGLE: {
            if (propertyRecord) {
                return _jsxs("a", Object.assign({ href: propertyRecord.url, target: "_blank" }, { children: [" ", propertyRecord.filename, " "] }), void 0);
            }
            return _jsx("div", { children: "No file" }, void 0);
        }
        case FILE_MULTIPLE: {
            return _jsx(ShowFileList, { filesList: propertyRecord }, void 0);
        }
        case EMBEDDED_SINGLE: {
            if (table) {
                return _jsx("div", {}, void 0);
            }
            const embeddedModel = propertyModel.getResource().getModel();
            if (propertyRecord) {
                return _jsx(ShowContent, { record: propertyRecord, model: embeddedModel, resourceName: propertyModel.resourceName, showElement: showElement }, void 0);
            }
            return _jsx("div", {}, void 0);
        }
        case EMBEDDED_MULTIPLE: {
            if (table) {
                const embeddedPropertyModel = embeddedResource.model.getPropertyByResourceName(originalResourceName);
                const name = embeddedPropertyModel.id;
                return _jsx(Button, Object.assign({ variant: "contained", color: "primary", onClick: () => dispatch(push(`/${resourceName}?${name}=${originalId}`)) }, { children: `VIEW ${label}` }), void 0);
            }
            if (propertyRecord) {
                return _jsx(IterableShowContent, { record: propertyRecord, model: propertyModel, resourceName: propertyModel.resourceName, showElement: showElement }, void 0);
            }
            return _jsx("div", {}, void 0);
        }
        case ENUM: {
            const props = { propertyRecord, propertyModel, resourceName: originalResourceName, originalId, table, showElement };
            return chipGenerator(originalResourceName, props);
        }
        case MONEY: {
            return _jsx("div", { children: propertyRecord }, void 0);
        }
        default: {
            return _jsx(Typography, { children: propertyRecord }, void 0);
        }
    }
};
