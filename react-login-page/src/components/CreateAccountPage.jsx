import React from "react";
import { saveUserAccount } from "../functions";

export default function CreateAccountPage(props) {

    function handleSingin(event) {
        event.preventDefault();
        saveUserAccount(props);
    }

    return(
        <form className="form container">

            <h2 className="centered-text">Create Account</h2>

            <label htmlFor="singin-email">Email</label>
            <input 
                type="email" 
                id="singin-email" 
                placeholder="test.email@gmail.com" 
                name="singinEmail"
                onChange={props.handleChange}
                value={props.singinData.singinEmail}
                required 
            />

            <label htmlFor="singin-password">Password</label>
            <input 
                type="password" 
                id="singin-password" 
                placeholder="Password123"
                minLength={8}
                maxLength={20}
                name="singinPassword"
                onChange={props.handleChange}
                value={props.singinData.singinPassword}
                required
            />

            <label htmlFor="singin-password-confirm">Password</label>
            <input 
                type="password" 
                id="password-confirmation" 
                placeholder="Password123"
                minLength={8}
                maxLength={20}
                name="passwordConfirmation"
                onChange={props.handleChange}
                value={props.singinData.passwordConfirmation}
                required
            />

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