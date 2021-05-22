import { Model } from "./Model";
export declare class Record extends Map<string, any> {
    static createFromJson(jsonModel: any, model: Model): Record;
    getPropertyRecord(name: string): any;
    toJson(): void;
}
