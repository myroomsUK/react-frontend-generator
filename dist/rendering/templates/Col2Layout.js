import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from "@material-ui/core/Grid";
export default function ({ banner, left, right }) {
    return _jsxs(Grid, Object.assign({ container: true }, { children: [banner && _jsx(Grid, Object.assign({ item: true, md: 12, xs: 12 }, { children: banner }), void 0), _jsx(Grid, Object.assign({ item: true, md: 12, xs: 12 }, { children: _jsxs(Grid, Object.assign({ container: true, spacing: 1 }, { children: [_jsx(Grid, Object.assign({ item: true, md: 9, xs: 12 }, { children: left }), void 0), _jsx(Grid, Object.assign({ item: true, md: 3, xs: 12 }, { children: right }), void 0)] }), void 0) }), void 0)] }), void 0);
}
