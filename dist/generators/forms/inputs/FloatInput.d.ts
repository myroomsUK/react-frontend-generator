import React from "react";
interface Props {
    hasError: boolean;
    errorMessage?: string;
    label: string;
    onClick: (variables: any[]) => void;
    value: number;
}
export declare const FloatInput: React.FC<Props>;
export {};
