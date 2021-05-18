import React, {useState} from "react";
import {useSetResourceModel} from "./resource-models/modelsRegistry";
import {createServer} from "miragejs"
import {properties} from "./mock/properties";
import {listings} from "./mock/listings";
import {model} from "./mock/model";
import {overrideRegistry} from "./mock/overrideRegistry";
import {RouteFilterList} from "./generators/pages/ListPageGenerator";
import {landlords} from "./mock/landlords";
import {ShowPage} from "./generators/pages/ShowPageGenerator";
import {propertyShow} from "./mock/propertyShow";

export default function Test(){

    createServer({
        routes() {
            this.get("http://localhost:1000/api/properties/1", ()=> propertyShow)
            this.get("http://localhost:1000/api/properties", () => properties);
            this.get("http://localhost:1000/api/landlords", () => landlords);
            this.post("http://localhost:1000/api/resources/listings", ()=> listings)
            this.get("http://localhost:1000/resources", ()=> model)
        },
    })

    const modelLoaded = useSetResourceModel(overrideRegistry,"http://localhost:1000/resources" );


    const [resourceName, setResourceName] = useState(true)

    const render = <div>

        <button onClick={()=>setResourceName(!resourceName)}>SWITCHA</button>
        {/*<RouteFilterList resourceName={"properties"} filters={{}}/>*/}
        <ShowPage propResourceName={"properties"} propId={1} propShowPage={<ShowPageCustom/>}/>
    </div>
    return modelLoaded ? render : <div></div>;
}

function ShowPageCustom(props){
    const {model} = props
    return <div>
        {model.outputProperty("images", props)}
    </div>
}