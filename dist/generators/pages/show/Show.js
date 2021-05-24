import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useMemo, useState } from "react";
import { useGetResourceModel } from "../../../resource-models/modelsRegistry";
import Grid from "@material-ui/core/Grid";
import { ShowContent } from "../../fields/ShowContent";
import { Record } from "../../../resource-models/Record";
export const Show = ({ propResourceName, propId: id, record: recordJson, propShowPage }) => {
    const resourceModel = useGetResourceModel(propResourceName);
    const { model, showPage } = resourceModel;
    const showPageToUse = useMemo(() => propShowPage ? propShowPage : showPage, [propShowPage, showPage]);
    const [genericShowRender, setGenericShowRender] = useState(_jsx("div", {}, void 0));
    const record = useMemo(() => Record.createFromJson(recordJson, model), [recordJson, model]);
    const showFormProps = useMemo(() => {
        return {
            model: model,
            resourceName: propResourceName,
            record: record
        };
    }, [model, record, propResourceName]);
    useEffect(() => {
        if (showPageToUse) {
            // @ts-ignore
            setGenericShowRender(React.cloneElement(showPageToUse, showFormProps));
        }
        else {
            setGenericShowRender(_jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: _jsx(ShowContent, { record: record, model: model }, void 0) }), void 0));
        }
    }, [record]);
    return genericShowRender;
};
