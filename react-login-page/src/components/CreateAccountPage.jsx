import React from "react";
import { saveUserAccount, invalidEmailMsg, invalidPasswordMsg, notSamePasswordMsg } from "../functions/form_related_functions";

export default function CreateAccountPage(props) {

    function handleSingin(event) {
        event.preventDefault();
        saveUserAccount(props);
    }

    return(
        <form className="form container create-account-form">

            <h1 className="centered-text">Create Account</h1>

            <label htmlFor="singin-email">Email</label>
            <input 
                type="email" 
                id="singin-email" 
                placeholder="E.g: test.email@gmail.com" 
                name="singinEmail"
                onChange={props.handleChange}
                value={props.singinData.singinEmail}
            />
            <p className="error-msg">{props.errorList.includes(invalidEmailMsg) ? invalidEmailMsg : ""}</p>


            <label htmlFor="singin-password">Password</label>
            <input 
                type="password" 
                id="singin-password" 
                placeholder="E.g: Password123"
                name="singinPassword"
                onChange={props.handleChange}
                value={props.singinData.singinPassword}
            />
            <p className="error-msg">{props.errorList.includes(invalidPasswordMsg) ? invalidPasswordMsg : ""}</p>

            <label htmlFor="singin-password-confirm">Password</label>
            <input 
                type="password" 
                id="password-confirmation" 
                placeholder="E.g: Password123"
                name="passwordConfirmation"
                onChange={props.handleChange}
                value={props.singinData.passwordConfirmation}
            />
            <p className="error-msg">{props.errorList.includes(invalidPasswordMsg) ? invalidPasswordMsg : ""}</p>
            <p className="error-msg">{props.errorList.includes(notSamePasswordMsg) ? notSamePasswordMsg : ""}</p>

            <button 
                className="create-account-singin-bnt"
                onClick={handleSingin}
            >
                Sing In
            </button>

            <p className="helper-paragraph centered-text">Have an account ?</p>

            <button 
                className="create-account-login-bnt"
                onClick={props.goToLogin}
            >
                Log In
            </button>

        </form>
    )
}