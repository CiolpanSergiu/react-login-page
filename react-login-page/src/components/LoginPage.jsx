import React from "react";

export default function CreateAccountPage() {
    return(
        <form action="" method="POST" className="form container">

            <h2 className="centered-text">Log In</h2>

            <label htmlFor="login-email">Email</label>
            <input 
                type="email" 
                id="login-email" 
                placeholder="test.email@gmail.com" 
                name="login-email"
                required 
            />

            <label htmlFor="login-password">Password</label>
            <input 
                type="password" 
                id="login-password" 
                placeholder="Password123"
                minLength={8}
                maxLength={20}
                name="login-password"
                required
            />

            <button className="create-account-login-bnt">Log In</button>
            
            <p className="helper-paragraph centered-text">Don't have an account ?</p>

            <button className="create-account-singin-bnt">Sing In</button>

        </form>
    )
}