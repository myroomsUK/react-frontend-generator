export class ListingOption {
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }
    static createFromJson(json) {
        return new ListingOption(parseInt(json.id), json.label);
    }
}
export class Listing {
    constructor(options) {
        this.options = options;
    }
    static createFromJson(array) {
        return new Listing(array.map((item) => ListingOption.createFromJson(item)));
    }
}
