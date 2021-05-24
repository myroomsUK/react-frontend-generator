import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSetResourceModel } from "./resource-models/modelsRegistry";
import { createServer } from "miragejs";
import { properties } from "./mock/properties";
import { listings } from "./mock/listings";
import { model } from "./mock/model";
import { overrideRegistry } from "./mock/overrideRegistry";
import { landlords } from "./mock/landlords";
import { propertyShow } from "./mock/propertyShow";
import { units } from "./mock/units";
import { landlordRelationship } from "./mock/landlordRelationship";
import { landlord } from "./mock/landlord";
import { Create } from "./generators/pages/CreatePageGenerator";
import { tenancies } from "./mock/tenancies";
export default function Test() {
    createServer({
        routes() {
            this.get("http://localhost:1000/api/properties/1", () => propertyShow);
            this.get("http://localhost:1000/api/properties", () => properties);
            this.get("http://localhost:1000/api/landlords", () => landlords);
            this.get("http://localhost:1000/api/landlord_relationships/1", () => landlordRelationship);
            this.post("http://localhost:1000/api/resources/listings", () => listings);
            this.get("http://localhost:1000/resources", () => model);
            this.get("http://localhost:1000/api/units", () => units);
            this.get("http://localhost:1000/api/landlords/1", () => landlord);
            this.get("http://localhost:1000/api/landlord_relationships", () => tenancies);
        },
    });
    const modelLoaded = useSetResourceModel(overrideRegistry, "http://localhost:1000/resources");
    const [resourceName, setResourceName] = useState(true);
    const render = _jsxs("div", { children: [_jsx("button", Object.assign({ onClick: () => setResourceName(!resourceName) }, { children: "SWITCHA" }), void 0),
            _jsx(Create, { propResourceName: "landlord_tenancy_payments", propCreatePage: _jsx(LandlordTenancy, {}, void 0) }, void 0)] }, void 0);
    return modelLoaded ? render : _jsx("div", {}, void 0);
}
function LandlordTenancy(props) {
    const { model } = props;
    return _jsx("div", { children: model.getInputField("paymentItems", props, _jsx(PaymentItem, {}, void 0)) }, void 0);
}
function PaymentItem(props) {
    const { model } = props;
    return _jsx("div", { children: model.getInputField("description", props) }, void 0);
}
function ShowPageCustom(props) {
    const { model } = props;
    return _jsx("div", { children: model.getOutputField("postcode", props) }, void 0);
}
