import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from "@material-ui/core/Grid";
export default function ({ banner, left, center, right }) {
    return _jsxs(Grid, Object.assign({ container: true }, { children: [banner && _jsx(Grid, Object.assign({ item: true, md: 12, xs: 12 }, { children: banner }), void 0),
            _jsx(Grid, Object.assign({ item: true, md: 12, xs: 12 }, { children: _jsxs(Grid, Object.assign({ container: true }, { children: [_jsx(Grid, Object.assign({ item: true, md: 3, xs: 3 }, { children: left }), void 0),
                        _jsx(Grid, Object.assign({ item: true, md: 6, xs: 6 }, { children: center }), void 0),
                        _jsx(Grid, Object.assign({ item: true, md: 3, xs: 3 }, { children: right }), void 0)] }), void 0) }), void 0)] }), void 0);
}
