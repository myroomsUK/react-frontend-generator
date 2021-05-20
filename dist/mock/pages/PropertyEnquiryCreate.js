import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
export default function PropertyCreate(props) {
    const { model } = props;
    return _jsx("div", { children: _jsxs(Grid, Object.assign({ container: true, spacing: 2 }, { children: [_jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("propertyName", props) }), void 0),
                _jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("type", props) }), void 0),
                _jsx(Divider, {}, void 0),
                _jsx(Grid, Object.assign({ xs: 12, md: 6, item: true }, { children: model.getInputField("address", props) }), void 0),
                _jsx(Grid, Object.assign({ xs: 12, md: 6, item: true }, { children: model.getInputField("city", props) }), void 0),
                _jsx(Grid, Object.assign({ xs: 12, md: 6, item: true }, { children: model.getInputField("country", props) }), void 0),
                _jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("county", props) }), void 0),
                _jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("area", props) }), void 0),
                _jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("postcode", props) }), void 0),
                _jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("neighborhood", props) }), void 0),
                _jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("askedPrice", props) }), void 0),
                _jsx(Grid, Object.assign({ md: 6, xs: 12, item: true }, { children: model.getInputField("units", Object.assign({}, props)) }), void 0)] }), void 0) }, void 0);
}
function MarginCalculator(props) {
    var _a;
    const askedPrice = props.formValue.askedPrice;
    const sumUnitsPrices = (accumulator, unit) => accumulator + unit.price;
    const roomsEstimatedPrices = (_a = props.formValue.units) === null || _a === void 0 ? void 0 : _a.reduce(sumUnitsPrices, 0);
    return _jsxs("div", { children: [_jsxs("div", { children: ["Asked price: ", askedPrice] }, void 0),
            _jsxs("div", { children: ["Rooms estimated cumulative prices: ", roomsEstimatedPrices] }, void 0),
            _jsxs("div", { children: ["Margin: ", roomsEstimatedPrices - askedPrice] }, void 0)] }, void 0);
}
