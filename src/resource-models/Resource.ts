
import React from "react";
import {Model} from "./Model";

export interface PropResource{
    model: Model;
    title: string;
    resourceName: string;
    filters: object[];
    createPage: React.FC;
    editPage: React.FC;
    showPage: React.FC;
    table: string[];
}

export class Resource{
    model: Model;
    title: string;
    resourceName: string;
    filters: object[];
    createPage: React.FC;
    editPage: React.FC;
    showPage: React.FC;
    table: string[];

    constructor({model, title, resourceName, filters, createPage, editPage, showPage, table=[]}:PropResource) {
        this.model = Model.createFromJson(model, resourceName)
        this.title = title;
        this.resourceName = resourceName;
        this.filters = filters;
        this.createPage = createPage;
        this.editPage = editPage;
        this.showPage = showPage;
        this.table = table;
    }

    getModel():Model{
        return this.model;
    }

}