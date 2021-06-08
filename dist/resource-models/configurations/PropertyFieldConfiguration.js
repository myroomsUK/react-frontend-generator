export class PropertyFieldConfiguration {
    constructor({ viewElement, showLabel = true, isEdit = true }) {
        this.viewElement = viewElement;
        this.showLabel = showLabel;
        this.isEdit = isEdit;
    }
}
