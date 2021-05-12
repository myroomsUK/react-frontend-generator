import { jsx as _jsx } from "react/jsx-runtime";
import { useSetResourceModel } from "./resource-models/modelsRegistry";
import { createServer } from "miragejs";
import { properties } from "./mock/properties";
import { listings } from "./mock/listings";
import { model } from "./mock/model";
import { overrideRegistry } from "./mock/overrideRegistry";
import { RouteFilterList } from "./generators/pages/ListPageGenerator";
export default function Test() {
    createServer({
        routes() {
            this.get("http://localhost:1000/api/properties", () => properties);
            this.post("http://localhost:1000/api/resources/listings", () => listings);
            this.get("http://localhost:1000/resources", () => model);
        },
    });
    const modelLoaded = useSetResourceModel(overrideRegistry, "http://localhost:1000/resources");
    const render = _jsx("div", { children: _jsx(RouteFilterList, { resourceName: "properties", filters: {} }, void 0) }, void 0);
    return modelLoaded ? render : _jsx("div", {}, void 0);
}
