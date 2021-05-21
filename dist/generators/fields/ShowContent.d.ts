import React from "react";
import { Model } from "../../resource-models/Model";
import { Record } from "../../resource-models/Record";
import { EmbeddedPropertyRecord } from "../../resource-models/PropertyRecord";
export interface ShowContent {
    record: Record | EmbeddedPropertyRecord;
    model: Model | undefined;
    showElement?: any;
}
export declare const ShowContent: React.FC<ShowContent>;
