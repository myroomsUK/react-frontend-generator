export declare class ListingOption {
    id: number;
    label: string;
    constructor(id: number, label: string);
    static createFromJson(json: any): ListingOption;
}
export declare class Listing {
    options: ListingOption[];
    constructor(options: ListingOption[]);
    static createFromJson(array: any[]): Listing;
}
