const notSamePasswordMsg = "Passwords do not match.";
const invalidEmailMsg = "Invalid email.";
const invalidPasswordMsg = "Invalid password.";

const incorrectEmailMsg = "Incorrect email.";
const incorrectPasswordMsg = "Incorrect password.";

function errorManager(condition, props, errorMsg){
    if(condition){
        props.removeErrorFromList(errorMsg);
    } else {
        props.addErrorToList(errorMsg);
    }
}

function singinFormValidation(props) {

    const formData = props.singinData;

    //found on google ofc...on mozila dev form validation page
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    //found on google ofc...on w3school How TO - Password Validation page
    const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

    if(emailReg.test(formData.singinEmail) && passwordReg.test(formData.singinPassword) && passwordReg.test(formData.passwordConfirmation)){
        props.clearErrors();
        return true;
    }

    errorManager(emailReg.test(formData.singinEmail), props, invalidEmailMsg);
    errorManager(passwordReg.test(formData.singinPassword), props, invalidPasswordMsg);
    errorManager(passwordReg.test(formData.passwordConfirmation), props, invalidPasswordMsg);
    
    return false;
}

function checkIfPasswordsMatch(singinData) {
    return singinData.singinPassword === singinData.passwordConfirmation;
}

export function saveUserAccount(props) {

    if(singinFormValidation(props)){
        if(checkIfPasswordsMatch(props.singinData)){
            props.removeErrorFromList(notSamePasswordMsg);
            localStorage.setItem("userAccount", JSON.stringify(props.singinData));
            props.goToLogin();
        } else {
            props.addErrorToList(notSamePasswordMsg);
        }
    }
}

export function handleLogin(props) {
    if(localStorage.getItem('userAccount') !== null){
        const accountDetails = JSON.parse(localStorage.getItem('userAccount')); 

        if(props.loginData.loginEmail === accountDetails.singinEmail && props.loginData.loginPassword === accountDetails.singinPassword){
            props.clearErrors();
            props.goToAfterLogin();
        } else {
            errorManager(props.loginData.loginEmail === accountDetails.singinEmail, props, incorrectEmailMsg);
            errorManager(props.loginData.loginPassword === accountDetails.singinPassword, props, incorrectPasswordMsg)
        }
    }
}
