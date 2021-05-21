export class ListingOption {
    id: number;
    label:string;

    constructor(id:number, label:string) {
        this.id = id;
        this.label = label;
    }
    static createFromJson(json:any){
        return new ListingOption(parseInt(json.id), json.label)
    }
}

export class Listing{
    options:ListingOption[]
    constructor(options: ListingOption[]) {
        this.options = options;
    }

    static createFromJson(array: any[]){
        return new Listing(array.map((item)=>ListingOption.createFromJson(item)));
    }
}