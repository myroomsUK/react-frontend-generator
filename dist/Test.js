import { jsx as _jsx } from "react/jsx-runtime";
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
import { ShowPage } from "./generators/pages/ShowPageGenerator";
import { landlordRelationship } from "./mock/landlordRelationship";
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
        },
    });
    const modelLoaded = useSetResourceModel(overrideRegistry, "http://localhost:1000/resources");
    const [resourceName, setResourceName] = useState(true);
    const render = _jsx("div", { children: _jsx(ShowPage, { propResourceName: "landlord_relationships", propId: 1 }, void 0) }, void 0);
    return modelLoaded ? render : _jsx("div", {}, void 0);
}
function ShowPageCustom(props) {
    const { model } = props;
    return _jsx("div", { children: model.outputProperty("kitchen", props) }, void 0);
}
