import React from "react";
import {useSetResourceModel} from "./resource-models/modelsRegistry";
import {createServer} from "miragejs"
import {properties} from "./mock/properties";
import {listings} from "./mock/listings";
import {model} from "./mock/model";
import {overrideRegistry} from "./mock/overrideRegistry";
import {Create} from "./generators/pages/CreatePageGenerator";
import {RouteFilterList} from "./generators/pages/ListPageGenerator";

export default function Test(){

    createServer({
        routes() {
            this.get("http://localhost:1000/api/properties", () => properties);
            this.post("http://localhost:1000/api/resources/listings", ()=> listings)
            this.get("http://localhost:1000/resources", ()=> model)
        },
    })

    const modelLoaded = useSetResourceModel(overrideRegistry,"http://localhost:1000/resources" );


    const render = <div>
        <RouteFilterList resourceName={"properties"} filters={{}}/>
        {/*<Create propResourceName={"properties"}/>*/}
    </div>
    return modelLoaded ? render : <div></div>;
}
