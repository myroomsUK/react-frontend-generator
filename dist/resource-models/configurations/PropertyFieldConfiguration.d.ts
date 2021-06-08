/// <reference types="react" />
export interface PropertyFieldConfigurationInterface {
    viewElement?: React.DetailedReactHTMLElement<any, any>;
    showLabel?: boolean;
    isEdit?: boolean;
}
export declare class PropertyFieldConfiguration {
    viewElement?: React.DetailedReactHTMLElement<any, any>;
    showLabel: boolean;
    isEdit: boolean;
    constructor({ viewElement, showLabel, isEdit }: PropertyFieldConfigurationInterface);
}
