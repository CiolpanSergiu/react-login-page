import React from "react";

export default function CreateAccountPage(props) {
    return(
        <form action="" method="POST" className="form container">

            <h2 className="centered-text">Log In</h2>

            <label htmlFor="login-email">Email</label>
            <input 
                type="email" 
                id="login-email" 
                placeholder="test.email@gmail.com" 
                name="loginEmail"
                onChange={props.handleChange}
                value={props.loginData.loginEmail}
                required 
            />

            <label htmlFor="login-password">Password</label>
            <input 
                type="password" 
                id="login-password" 
                placeholder="Password123"
                minLength={8}
                maxLength={20}
                name="loginPassword"
                onChange={props.handleChange}
                value={props.loginData.loginPassword}
                required
            />

            <button 
                className="create-account-login-bnt"
                onClick={props.goToAfterLogin}
            >
                Log In
            </button>
            
            <p className="helper-paragraph centered-text">Don't have an account ?</p>

            <button 
                className="create-account-singin-bnt"
                onClick={props.goToSingin}
            >
                Sing I
            n</button>

        </form>
    )
}