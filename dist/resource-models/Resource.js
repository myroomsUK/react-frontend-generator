import { Model } from "./Model";
export class Resource {
    constructor({ model, title, resourceName, filters, createPage, editPage, showPage, table = [] }) {
        this.model = Model.createFromJson(model, resourceName);
        this.title = title;
        this.resourceName = resourceName;
        this.filters = filters;
        this.createPage = createPage;
        this.editPage = editPage;
        this.showPage = showPage;
        this.table = table;
    }
    getModel() {
        return this.model;
    }
}
