/// <reference types="react" />
import { ReferenceModel } from "../../../resource-models/propertyModels/ReferenceModel";
import { ListingOption } from "../../../resource-models/listings/Listing";
interface ReferenceInput {
    model: ReferenceModel;
    refreshReferencesMap: any;
    inheritedValue: ListingOption | undefined;
    hasError?: boolean;
    errorMessage?: string;
    createNew?: boolean;
    onChange: any;
}
declare class ReferenceInputOption {
    id: number;
    label: string;
    button?: any;
    constructor(id: number, label: string, button?: any);
    static createFromListingOption(listingOption: ListingOption): ReferenceInputOption;
    toMap(): Map<any, any>;
}
export default function ({ model, refreshReferencesMap, inheritedValue, createNew, onChange, hasError, errorMessage }: ReferenceInput): JSX.Element;
/**
 * @param {int} value
 * @param {array} options
 * @returns {int}
 */
export declare function getAutocompleteValuePosition(value: ListingOption | undefined, options: ReferenceInputOption[]): number;
export {};
