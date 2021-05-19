import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useMemo, useState } from "react";
import { useGetResourceModel } from "../../../resource-models/modelsRegistry";
import Grid from "@material-ui/core/Grid";
import { ShowContent } from "../../fields/ShowContent";
export const Show = ({ propResourceName, propId: id, record, propShowPage }) => {
    const resourceModel = useGetResourceModel(propResourceName);
    const { model, showPage } = resourceModel;
    const [genericShowRender, setGenericShowRender] = useState(_jsx("div", {}, void 0));
    const showFormProps = useMemo(() => {
        return {
            model: model,
            resourceName: propResourceName,
            record: record
        };
    }, [model, record, propResourceName]);
    useEffect(() => {
        if (propShowPage) {
            // @ts-ignore
            setGenericShowRender(React.cloneElement(propShowPage, showFormProps));
        }
        else {
            setGenericShowRender(_jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: _jsx(ShowContent, { record: record, resourceName: propResourceName, model: model }, void 0) }), void 0));
        }
    }, [record]);
    return genericShowRender;
};
