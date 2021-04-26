export declare class Errors {
    _error?: string;
    errorFields: Array<Error>;
    constructor(errorFields: Array<Error>);
    returnMessageByName(name: string): string | undefined;
    containsError(name: string): boolean;
    findErrorByName(name: string): Error | undefined;
    findErrorsStartingWith(name: string): Array<Error>;
    nestedErrorExtrapolator(formValue: any, requestedName: string): Errors;
    nestedSingleErrorExtrapolator(requestedName: string): Errors;
}
export declare class Error {
    name: string;
    message: string;
    constructor(name: string, message: string);
}
