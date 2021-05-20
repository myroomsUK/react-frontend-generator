import { jsx as _jsx } from "react/jsx-runtime";
import Grid from "@material-ui/core/Grid";
export const ShowContent = ({ record, model }) => {
    return _jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: model === null || model === void 0 ? void 0 : model.properties.filter(propertyModel => propertyModel.read === true).map((propertyModel, index) => {
            const { xs, md, id } = propertyModel;
            return _jsx(Grid, Object.assign({ item: true, xs: xs, md: md }, { children: propertyModel.getOutputField({ model: propertyModel, record: record, showLabel: true }) }), index);
        }) }), void 0);
};
