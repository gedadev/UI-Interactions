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
                    Validations.inputValidation(this.input[i], this.errorMsg[i], i);
                }
                if (i === 4) {
                    this.validPassword();
                }
            });
            this.input[i].addEventListener('focusout', () => {
                this.errorMsg[i].style.display = "none";
            });
            this.input[i].addEventListener('focusin', () => {
                Validations.inputValidation(this.input[i], this.errorMsg[i], i);
            });
        }
    }

    validPassword() {
        if (this.input[4].value !== this.input[3].value) {
            this.errorMsg[4].textContent = "Password doesn't match"
            this.errorMsg[4].style.display = "block";
        }
    }

    static inputValidation(currInput, currMsg, index) {
        if (currInput.validity.valueMissing) {
            currMsg.textContent = "You must fill this field to continue";
            currMsg.style.display = "block";
        } else if (currInput.validity.tooShort) {
            currMsg.textContent = `Password must be at least ${currInput.minLength} characters long`;
            currMsg.style.display = "block";
        }else if (currInput.validity.patternMismatch) {
            switch (index) {
                case 0:
                    currMsg.textContent = "Enter a valid email address";
                    currMsg.style.display = "block";
                    break;
                case 2:
                    currMsg.textContent = "Enter a valid zip code";
                    currMsg.style.display = "block";
                    break;
                case 3:
                    currMsg.textContent = "Password must contain an upper case letter, a lower case and a number";
                    currMsg.style.display = "block";
                    break;    
                default:
                    break;
            }
        }
    }
}