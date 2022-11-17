import React from "react";

export default function AfterLoginPage(props) {

    function deleteAccount() {
        localStorage.removeItem("userAccount");
        props.goToLogin();
    }

    return(
        <div className="main-page">
            <h1 className="centered-text container-main-header">Welcome to your Main Page!</h1>
            <button className="prev-page-btn" onClick={props.goToLogin}>Go Back</button>
            <button className="delete-account-btn" onClick={deleteAccount}>Delete Account</button>
        </div>
    )
}