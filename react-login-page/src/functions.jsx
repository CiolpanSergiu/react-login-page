export function saveUserAccount(props) {
    localStorage.setItem("userAccount", JSON.stringify(props.singinData));

    const jsonData = JSON.parse(localStorage.getItem('userAccount'));

    if(jsonData.singinPassword === jsonData.passwordConfirmation){
        props.goToLogin();
    }
}