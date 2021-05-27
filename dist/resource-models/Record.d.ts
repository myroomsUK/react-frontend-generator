import { Model } from "./Model";
export declare class Record extends Map<string, any> {
    static createFromJson(jsonModel: any, model: Model): Record;
    static createFromJsonNoModel(jsonModel: any): Record;
    getPropertyRecord(name: string): any;
    static fromJson(jsonModel: any): any;
    toJson(): void;
}
