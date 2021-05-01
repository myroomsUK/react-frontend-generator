import React from "react";
interface EditFormGeneratorProps {
    propResourceName: string;
    propId: number;
    record: any;
    propEditPage?: any;
}
/**
 *
 * @param record
 * @param propId
 * @param propResourceName
 * @param propEditPage
 * @constructor
 *
 * This function returns a react component with the edit form. This component is not responsible for fetching previous data.
 */
export declare const EditForm: React.FC<EditFormGeneratorProps>;
export {};
