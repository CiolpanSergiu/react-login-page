function singinFormValidation(formData) {
    //found on google ofc...on mozila dev form validation page
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    //found on google ofc...on w3school How TO - Password Validation page
    const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

    if(emailReg.test(formData.singinEmail) && passwordReg.test(formData.singinPassword) && passwordReg.test(formData.passwordConfirmation)){
        return true;
    }
    
    return false;
}

export function saveUserAccount(props) {

    if(singinFormValidation(props.singinData)){
        localStorage.setItem("userAccount", JSON.stringify(props.singinData));

        const accountDetails = JSON.parse(localStorage.getItem('userAccount'));

        if(accountDetails.singinPassword === accountDetails.passwordConfirmation){
            props.goToLogin();
        } 
    }
}

export function handleLogin(props) {
    if(localStorage.getItem('userAccount') !== null){
        const accountDetails = JSON.parse(localStorage.getItem('userAccount')); 

        if(props.loginData.loginEmail === accountDetails.singinEmail && props.loginData.loginPassword === accountDetails.singinPassword){
            props.goToAfterLogin();
        }
    }
}