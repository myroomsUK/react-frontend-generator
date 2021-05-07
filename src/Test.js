import React from "react";
import {useSetRegistry} from "./resource-models/modelsRegistry";
import {EditPage} from "./generators/pages/EditPageGenerator";
import { createServer } from "miragejs"

export default function Test(){
    console.log(process.env);

    const record = {
        "id": 1,
        "title": "Corso prova",
        "description": "Descrizione",
        "published": false,
        "courseImages": [],
        "lessons": [],
        "days": 0,
        "months": 1
    };

    createServer({
        routes() {
            this.get("http://localhost:1000/api/courses/1", () => record)
        },
    })

    const modelLoaded = useSetRegistry({"courses":{"filters":{"text":["title"]},"model":{"id":{"id":"id","label":"id"},
                "title":{"type":"string","nullable":false,"write":true,"read":true,"validators":["required"],"errorMessages":["This field is required"],"id":"title","label":"title"},"description":{"type":"string","nullable":false,"write":true,"read":true,"validators":["required"],"errorMessages":["This field is required"],"id":"description","label":"description"},"published":{"id":"published","label":"published"},"courseImages":{"id":"courseImages","label":"courseImages"},"lessons":{"id":"lessons","label":"lessons"},"days":{"id":"days","label":"days", "write":true, type:"integer"},
                "months":{"id":"months","label":"months", "write":true, type:"integer"}},"title":"Courses","resourceName":"courses"}});


    const render = <div>
        <EditPage propResourceName={"courses"} propId={1}/>
    </div>

    return modelLoaded ? render : <div></div>;
}