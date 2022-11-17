const notSamePasswordMsg = "Passwords do not match.";
const invalidEmailMsg = "Invalid email.";
const invalidPasswordMsg = "Invalid password.";

const incorrectEmailMsg = "Incorrect email.";
const incorrectPasswordMsg = "Incorrect password.";

//found on google ofc...on mozila dev form validation page
const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
//found on google ofc...on w3school How TO - Password Validation page
const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

function errorManager(condition, props, errorMsg){
    if(condition){
        props.removeErrorFromList(errorMsg);
    } else {
        props.addErrorToList(errorMsg);
    }
}

function verifyFormData(props) {

    const formData = props.singinData;

    if(emailReg.test(formData.singinEmail) && passwordReg.test(formData.singinPassword) && passwordReg.test(formData.passwordConfirmation)){
        props.clearErrors();
        return true;
    }

    errorManager(emailReg.test(formData.singinEmail), props, invalidEmailMsg);
    errorManager(passwordReg.test(formData.singinPassword), props, invalidPasswordMsg);
    errorManager(passwordReg.test(formData.passwordConfirmation), props, invalidPasswordMsg);
    
    return false;
}

function verifyJustPasswords(passwordOne, passwordTwo, clearFunction, props) {
    if(passwordReg.test(passwordOne) && passwordReg.test(passwordTwo)){
        clearFunction;
        return true;
    }

    errorManager(passwordReg.test(passwordOne), props, invalidPasswordMsg);
    errorManager(passwordReg.test(passwordTwo), props, invalidPasswordMsg);

    return false;
}

function checkIfPasswordsMatch(passwordOne, passwordTwo) {
    return passwordOne === passwordTwo;
}

function createUserAccount(email, password){
    return {
        userEmail: email,
        userPassword: password
    }
}

export function saveUserAccount(props) {

    const singinEmail = props.singinData.singinEmail;
    const singinPassword = props.singinData.singinPassword;
    const singinPasswordConfirmation = props.singinData.passwordConfirmation;

    if(verifyFormData(props)){
        if(checkIfPasswordsMatch(singinPassword, singinPasswordConfirmation)){
            props.removeErrorFromList(notSamePasswordMsg);
            localStorage.setItem("userAccount", JSON.stringify(createUserAccount(singinEmail, singinPassword)));
            props.goToLogin();
        } else {
            props.addErrorToList(notSamePasswordMsg);
        }
    }
}

export function updatePassword(props) {
    const passwordOne = props.newPasswordData.newPassword;
    const passwordTwo = props.newPasswordData.newPasswordConfirmation;

    const oldUserAccount = JSON.parse(localStorage.getItem('userAccount'));

    if(verifyJustPasswords(passwordOne, passwordTwo, props.clearErrors(), props)){
        if(checkIfPasswordsMatch(passwordOne, passwordTwo)){
            props.removeErrorFromList(notSamePasswordMsg);
            localStorage.setItem("userAccount", JSON.stringify(createUserAccount(oldUserAccount.userEmail, passwordOne)));
            props.goToLogin();
        } else {
            props.addErrorToList(notSamePasswordMsg);
        }
    }
}

export function handleLogin(props) {
    if(localStorage.getItem('userAccount') !== null){
        const accountDetails = JSON.parse(localStorage.getItem('userAccount')); 

        if(props.loginData.loginEmail === accountDetails.userEmail && props.loginData.loginPassword === accountDetails.userPassword){
            props.clearErrors();
            props.goMainPage();
        } else {
            errorManager(props.loginData.loginEmail === accountDetails.userEmail, props, incorrectEmailMsg);
            errorManager(props.loginData.loginPassword === accountDetails.userPassword, props, incorrectPasswordMsg)
        }
    }
}
