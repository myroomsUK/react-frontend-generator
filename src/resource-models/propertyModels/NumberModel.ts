import {PropertyModel} from "../PropertyModel";
import {PropertyModelCore} from "../PropertyModelCore";

export class NumberModel extends PropertyModel{
    uselessNumber?:number;

    constructor(id:string, other:PropertyModelCore) {
        super(id, other);
        this.uselessNumber = 4;
        console.log("Number model");
    }

}