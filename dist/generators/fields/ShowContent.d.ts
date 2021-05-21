import React from "react";
import { Model } from "../../resource-models/Model";
import { Record } from "../../resource-models/Record";
export interface ShowContent {
    record: Record;
    model: Model | undefined;
    showElement?: any;
}
export declare const ShowContent: React.FC<ShowContent>;
