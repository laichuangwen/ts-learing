namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s)
        }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let lettersOnlyValidator = new Validation.LettersOnlyValidator();
console.log(lettersOnlyValidator.isAcceptable('Hello'));
console.log(lettersOnlyValidator.isAcceptable('1'));
console.log(lettersOnlyValidator.isAcceptable('2'));
let zipCodeValidator = new Validation.ZipCodeValidator();
console.log(zipCodeValidator.isAcceptable('12345'));


