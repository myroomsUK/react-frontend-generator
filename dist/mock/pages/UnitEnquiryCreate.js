import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from "@material-ui/core/Grid";
export default function (props) {
    const { model } = props;
    return _jsx("div", { children: _jsx("div", Object.assign({ title: "Unit Details" }, { children: _jsxs(Grid, Object.assign({ container: true, spacing: 2 }, { children: [_jsx(Grid, Object.assign({ xs: 12, md: 4, item: true }, { children: model.getInputField("unitLetter", props) }), void 0),
                    _jsx(Grid, Object.assign({ xs: 12, md: 4, item: true }, { children: model.getInputField("type", props) }), void 0),
                    _jsx(Grid, Object.assign({ xs: 12, md: 4, item: true }, { children: model.getInputField("weeklyPrice", props) }), void 0)] }), void 0) }), void 0) }, void 0);
}
