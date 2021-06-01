import { Model } from "./Model";
export declare class Record extends Object {
    /**
     * This method allows to create a Record object where each recognised property correctly gives its record value.
     * If the json record does not have a property listed within the model, that property won't be mapped by means of the model
     * @param jsonModel
     * @param model
     */
    static createFromJson(jsonModel: any, model: Model): Record;
    static createFromJsonNoModel(jsonModel: any): any;
    getPropertyRecord(name: string): any;
    toJson(): this;
}
