import React from "react";
import { Model } from "./Model";
export interface PropResource {
    model: Model;
    title: string;
    resourceName: string;
    filters: object[];
    createPage: React.FC;
    editPage: React.FC;
    showPage: React.FC;
    table: string[];
}
export declare class Resource {
    model: Model;
    title: string;
    resourceName: string;
    filters: object[];
    createPage: React.FC;
    editPage: React.FC;
    showPage: React.FC;
    table: string[];
    constructor({ model, title, resourceName, filters, createPage, editPage, showPage, table }: PropResource);
    getModel(): Model;
}
