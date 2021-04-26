import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import _ from "lodash";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { GenericField } from "./genericField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Model } from "../../resource-models/Model";
import { EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, ENUM } from "../forms/inputs/InputTypes";
import TransparentPaper from "../../rendering/components/papers/TransparentPaper";
const paperStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[0],
        padding: theme.spacing(1, 1, 1),
    },
    smallPaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[0],
        padding: theme.spacing(1, 1, 1),
    },
    form: {
        width: "100%"
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold"
    }
}));
export const GenericShowField = ({ requestedName, noLabel = false, record: firstRecord, model: firstModel, resourceName, showElement }) => {
    const { record, propertyModel } = splitRequestedName(requestedName, firstRecord, firstModel);
    const classes = paperStyles();
    console.log("resourceName", resourceName);
    const genericFieldProps = {
        propertyRecord: record,
        propertyModel: propertyModel,
        resourceName: resourceName,
        showElement: showElement
    };
    switch (propertyModel.type) {
        case EMBEDDED_SINGLE: {
            return _jsx(Paper, Object.assign({ elevation: 0 }, { children: _jsx(GenericField, Object.assign({}, genericFieldProps, { originalId: record === null || record === void 0 ? void 0 : record.id }), void 0) }), void 0);
        }
        case EMBEDDED_MULTIPLE: {
            return _jsx(Paper, Object.assign({ style: { width: "100%" }, elevation: 0 }, { children: _jsx(GenericField, Object.assign({}, genericFieldProps), void 0) }), void 0);
        }
        case ENUM: {
            return _jsx(TransparentPaper, Object.assign({ className: classes.smallPaper, elevation: 0 }, { children: _jsx(GenericField, Object.assign({}, genericFieldProps), void 0) }), void 0);
        }
        default: {
            return (noLabel) ?
                _jsx(TransparentPaper, Object.assign({ className: classes.smallPaper, elevation: 0 }, { children: _jsx(GenericField, Object.assign({}, genericFieldProps), void 0) }), void 0) :
                _jsxs(TransparentPaper, Object.assign({ className: classes.paper, elevation: 0 }, { children: [_jsx(Typography, Object.assign({ className: classes.label }, { children: _.startCase(propertyModel.label) }), void 0),
                        _jsx(GenericField, Object.assign({}, genericFieldProps), void 0)] }), void 0);
        }
    }
};
function splitRequestedName(requestedName, record, model) {
    const split = _.split(requestedName, ".");
    const reducerRecord = (start, value) => start[value];
    const reducerModel = (accumulator, value) => {
        if (accumulator instanceof Model) {
            return accumulator.getProperty(value);
        }
        else {
            if (accumulator.resource) {
                const model = accumulator.resource.model.getProperty(value);
                if (model)
                    return model;
                throw new Error(`Undefined model for ${value}`);
            }
            else {
                throw new Error(`Undefined resource in ${accumulator}`);
            }
        }
    };
    const reducedRecord = split.reduce(reducerRecord, record);
    // @ts-ignore
    const reducedModel = split.reduce(reducerModel, model);
    return { record: reducedRecord, propertyModel: reducedModel };
}
