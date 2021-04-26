import React from "react";
import { Model } from "../../resource-models/Model";
export interface ShowContent {
    record: any;
    model: Model | undefined;
    showElement: any;
    resourceName: string;
}
export declare const ShowContent: React.FC<ShowContent>;
