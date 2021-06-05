import React from "react";
interface EditFormGeneratorProps {
    propResourceName: string;
    propId: number;
    record: object;
    propEditPage?: any;
    thenFunction?: any;
    catchfunction?: any;
    refresh: () => void;
}
/**
 *
 * @param record
 * @param propId
 * @param propResourceName
 * @param propEditPage
 * @param catchfunction
 * @param thenFunction
 * @constructor
 *
 * This function returns a react component with the edit form. This component is not responsible for fetching previous data.
 */
export declare const EditForm: React.FC<EditFormGeneratorProps>;
export {};
