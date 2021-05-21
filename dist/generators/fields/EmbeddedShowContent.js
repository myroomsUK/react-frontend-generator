import { jsx as _jsx } from "react/jsx-runtime";
import { ShowContent } from "./ShowContent";
export const EmbeddedShowContent = ({ model, record, showElement }) => {
    return _jsx(ShowContent, { model: model, record: record.value, showElement: showElement }, void 0);
};
