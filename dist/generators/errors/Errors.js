import _ from 'lodash';
export class Errors {
    constructor(errorFields) {
        this.errorFields = errorFields;
    }
    returnMessageByName(name) {
        const error = this.errorFields.find((error) => error.name === name);
        if (error) {
            return error.message;
        }
        return;
    }
    containsError(name) {
        return this.errorFields.find((error) => error.name === name) instanceof Error;
    }
    findErrorByName(name) {
        return this.errorFields.find((error) => error.name === name);
    }
    findErrorsStartingWith(name) {
        return this.errorFields.filter((error) => _.startsWith(error.name, name));
    }
    nestedErrorExtrapolator(formValue, requestedName) {
        var _a;
        return new Errors(((_a = formValue[requestedName]) !== null && _a !== void 0 ? _a : []).map((item, index) => {
            const itemErrorName = `${requestedName}[${index}]`;
            return this.findErrorsStartingWith(itemErrorName).map((error) => {
                const subKey = error.name.substring(itemErrorName.length + 1);
                return new Error(subKey, error.message);
            });
        }));
    }
    nestedSingleErrorExtrapolator(requestedName) {
        return new Errors(this.findErrorsStartingWith(requestedName).map((error) => {
            const subKey = error.name.substring(requestedName.length + 1);
            return new Error(subKey, error.message);
        }));
    }
}
export class Error {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
}
