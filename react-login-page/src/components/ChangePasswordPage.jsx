import React from "react";
import { updatePassword } from "../functions/form_related_functions";
import { invalidPasswordMsg, notSamePasswordMsg } from "../functions/form_related_functions";

export default function ChangePasswordPage(props) {

    function onSubmit(event) {
        event.preventDefault();
        updatePassword(props);
    }

    return(
        <form className="form container change-password-form">

            <h1 className="centered-text container-main-header">Change Password</h1>

            <label htmlFor="new-password">New password</label>
            <input 
                id="new-password"
                type="password" 
                placeholder="E.g: SomeSuperPassword342"
                onChange={props.handleChange}
                name="newPassword"
                value={props.newPasswordData.newPassword}
            />
            <p className="error-msg">{props.errorList.includes(invalidPasswordMsg) ? invalidPasswordMsg : ""}</p>

            <label htmlFor="new-password-confirmation">New password confirm</label>
            <input 
                id="new-password-confirmation"
                type="password" 
                placeholder="E.g: SomeSuperPassword342"
                onChange={props.handleChange}
                name="newPasswordConfirmation"
                value={props.newPasswordData.newPasswordConfirmation}
            />
            <p className="error-msg">{props.errorList.includes(invalidPasswordMsg) ? invalidPasswordMsg : ""}</p>
            <p className="error-msg">{props.errorList.includes(notSamePasswordMsg) ? notSamePasswordMsg : ""}</p>

            <button className="change-password-btn" onClick={onSubmit}>Change Password</button>

            <button className="go-back-btn">Go Back</button>

        </form>
    )
}