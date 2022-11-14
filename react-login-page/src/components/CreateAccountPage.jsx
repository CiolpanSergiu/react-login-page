import React from "react";

export default function CreateAccountPage() {
    return(
        <form action="" method="POST" className="form container">

            <h2 className="centered-text">Create Account</h2>

            <label htmlFor="singin-email">Email</label>
            <input 
                type="email" 
                id="singin-email" 
                placeholder="test.email@gmail.com" 
                name="singin-email"
                required 
            />

            <label htmlFor="singin-password">Password</label>
            <input 
                type="password" 
                id="singin-password" 
                placeholder="Password123"
                minLength={8}
                maxLength={20}
                name="singin-password"
                required
            />

            <label htmlFor="singin-password-confirm">Password</label>
            <input 
                type="password" 
                id="singin-password-confirm" 
                placeholder="Password123"
                minLength={8}
                maxLength={20}
                name="password-confirmation"
                required
            />

            <button className="create-account-singin-bnt">Sing In</button>

            <p className="helper-paragraph centered-text">Have an account ?</p>

            <button className="create-account-login-bnt">Log In</button>

        </form>
    )
}