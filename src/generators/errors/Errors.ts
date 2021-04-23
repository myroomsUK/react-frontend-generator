import _ from 'lodash';

export class Errors{
    _error?: string;
    errorFields: Array<Error>

    constructor(errorFields: Array<Error>) {
        this.errorFields = errorFields;
    }

    returnMessageByName(name: string):string|undefined {
        const error = this.errorFields.find((error:Error) => error.name === name)
        if(error){
            return error.message;
        }
        return;
    }

    containsError(name:string):boolean{
        return this.errorFields.find((error:Error) => error.name === name) instanceof Error
    }

    findErrorByName(name:string): Error|undefined{
        return this.errorFields.find((error:Error) => error.name === name)
    }

    findErrorsStartingWith(name:string):Array<Error>{
        return this.errorFields.filter((error) => _.startsWith(error.name, name)  );
    }

    nestedErrorExtrapolator(formValue:any, requestedName:string){
        return new Errors((formValue[requestedName] ?? []).map((item:any, index:number) => {

            const itemErrorName = `${requestedName}[${index}]`;
            return this.findErrorsStartingWith(itemErrorName).map((error: Error) => {
                const subKey = error.name.substring(itemErrorName.length + 1)
                return new Error(subKey, error.message)
            });

        }));
    }

    nestedSingleErrorExtrapolator(requestedName: string) {
        return new Errors(this.findErrorsStartingWith(requestedName).map((error:Error) => {
            const subKey = error.name.substring(requestedName.length +1);
            return new Error(subKey, error.message );
        } ));
    }
}

export class Error{
    name: string;
    message: string;

    constructor(name:string, message:string) {
        this.name = name;
        this.message = message;
    }
}