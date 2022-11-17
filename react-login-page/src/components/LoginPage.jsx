import React from "react";
import { handleLogin } from "../functions/form_related_functions";

export default function CreateAccountPage(props) {

    function onLogin(event) {
        event.preventDefault();
        handleLogin(props);
    }

    return(
        <form className="form container login-form">

            <h1 className="centered-text">Log In</h1>

            <p className="error-msg centered-text">{props.errorList}</p>

            <label htmlFor="login-email">Email</label>
            <input 
                type="email" 
                id="login-email" 
                placeholder="test.email@gmail.com" 
                name="loginEmail"
                onChange={props.handleChange}
                value={props.loginData.loginEmail}
            />

            <label htmlFor="login-password">Password</label>
            <input 
                type="password" 
                id="login-password" 
                placeholder="Password123"
                name="loginPassword"
                onChange={props.handleChange}
                value={props.loginData.loginPassword}
            />

            <button 
                className="create-account-login-bnt"
                onClick={onLogin}
            >
                Log In
            </button>

            <a role="link" aria-disabled="true" className="password-forgot-link centered-text" onClick={props.goToChangePassword}>Forgot password?</a>
            
            <p className="helper-paragraph centered-text">Don't have an account ?</p>

            <button 
                className="create-account-singin-bnt"
                onClick={props.goToSingin}
            >
                Sing In
            </button>

        </form>
    )
}