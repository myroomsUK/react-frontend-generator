export interface PropertyFieldConfigurationInterface{
    viewElement?: React.DetailedReactHTMLElement<any, any>
    showLabel?: boolean,
    isEdit?: boolean
}

export class PropertyFieldConfiguration{
    viewElement?: React.DetailedReactHTMLElement<any, any>
    showLabel: boolean
    isEdit: boolean

    constructor({viewElement, showLabel = true, isEdit=true}:PropertyFieldConfigurationInterface) {
        this.viewElement = viewElement;
        this.showLabel = showLabel
        this.isEdit = isEdit
    }
}

