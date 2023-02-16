export class Validations {
    constructor(input, errorMsg) {
        this.input = input;
        this.errorMsg = errorMsg;
    }

    run() {
        for (let i = 0; i < this.input.length; i++) {
            this.input[i].addEventListener('input', () => {
                if (this.input[i].validity.valid) {
                    this.errorMsg[i].style.display = "none";
                } else {
                    Validations.inputValidation(this.input[i], this.errorMsg[i]);
                }
            });
            
        }
    }

    static inputValidation(currInput, currMsg) {

    }
}