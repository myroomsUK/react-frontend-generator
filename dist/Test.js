import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
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
import { tenancies } from "./mock/tenancies";
import { EditPage } from "./generators/pages/EditPageGenerator";
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
    const render = _jsx("div", { children: _jsx(EditPage, { propResourceName: "landlord_relationships", propId: 1, propEditPage: _jsx(Property, {}, void 0) }, void 0) }, void 0);
    return modelLoaded ? _jsx("div", Object.assign({ style: { padding: 30 } }, { children: render }), void 0) : _jsx("div", {}, void 0);
}
function Property(props) {
    const { model, formValue, record } = props;
    return _jsx(_Fragment, { children: model.getInputField("firstLandlordTenancy.landlordContract.payments", props) }, void 0);
}
