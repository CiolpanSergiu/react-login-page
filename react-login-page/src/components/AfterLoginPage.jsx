import React from "react";

export default function AfterLoginPage(props) {

    function deleteAccount() {
        localStorage.removeItem("userAccount");
        props.goToLogin();
    }

    return(
        <div className="after-login-page">
            <h2 className="centered-text container-main-header">Welcome to AfterLoginPage!</h2>
            <button className="prev-page-btn" onClick={props.goToLogin}>Back</button>
            <button className="delete-account-btn" onClick={deleteAccount}>Delete Account</button>
        </div>
    )
}