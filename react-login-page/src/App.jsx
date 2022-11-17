import React from "react";
import MainPage from "./components/MainPage";
import CreateAccountPage from "./components/CreateAccountPage";
import LoginPage from "./components/LoginPage";
import ChangePasswordPage from "./components/ChangePasswordPage";

export default function App() {

  const [currentPage, setCurrentPage] = React.useState(
    {
      singinPage: false,
      loginPage: true,
      mainPage: false,
      changePasswordPage: false
    }
  )

  const [createAccountData, setCreateAccountData] = React.useState(
    {
      singinEmail: '',
      singinPassword: '',
      passwordConfirmation: ''
    }
  )

  const [loginFormData, setLoginFormData] = React.useState(
    {
      loginEmail: '',
      loginPassword: ''
    }
  )

  const [newPasswordFormData, setnewPasswordFormData] = React.useState(
    {
      newPassword: "",
      newPasswordConfirmation: ""
    }
  )

  const [errors, setErrors] = React.useState('');


  function clearInputBoxes() {
    setCreateAccountData(
      {
        singinEmail: '',
        singinPassword: '',
        passwordConfirmation: ''
      }
    )

    setLoginFormData(
      {
        loginEmail: '',
        loginPassword: ''
      }
    )
    setnewPasswordFormData(
      {
        newPassword: "",
        newPasswordConfirmation: ""
      }
    )
  }

  function addError(msg) {
    setErrors(prevState => prevState.includes(msg) ? prevState + '' : prevState + msg)
  }

  function removeError(error) {
    setErrors(prevState => prevState.replace(error, ''));
  }

  function clearAllErrors() {
    setErrors('');
  }

  function handleDataChange(prevState, event) {
    return {
      ...prevState,
        [event.target.name]: event.target.value
    }
  }

  function handleSinginFormChange(event) {
    setCreateAccountData(prevState => handleDataChange(prevState, event))
  }

  function handleLoginFormChange(event) {
    setLoginFormData(prevState => handleDataChange(prevState, event))
  }

  function handleChangePasswordChange(event) {
    setnewPasswordFormData(prevState => handleDataChange(prevState, event))
  }

  function changeCurrentPage(singin, login, main, changePassword) {
    setCurrentPage(
      {
        singinPage: singin,
        loginPage: login,
        mainPage: main,
        changePasswordPage: changePassword
      }
    )
  }

  function goToSinginPage() {
    clearAllErrors();
    changeCurrentPage(true, false, false, false)
    clearInputBoxes();
  }

  function goToLoginPage() {
    clearAllErrors();
    changeCurrentPage(false, true, false, false)
    clearInputBoxes();
  }

  function goToMainPage() {
    changeCurrentPage(false, false, true, false)
  }

  function goToChangePasswordPage() {
    changeCurrentPage(false, false, false, true)
  }

  return(
    <div>
      {
        currentPage.singinPage &&
          <CreateAccountPage 
            handleChange={handleSinginFormChange}
            singinData={createAccountData}
            goToLogin={goToLoginPage}
            errorList={errors}
            addErrorToList={addError}
            removeErrorFromList={removeError}
            clearErrors={clearAllErrors}
          />
      }
      {
        currentPage.loginPage &&
        <LoginPage 
          handleChange={handleLoginFormChange}
          loginData={loginFormData}
          goToSingin={goToSinginPage}
          goMainPage={goToMainPage}
          errorList={errors}
          addErrorToList={addError}
          removeErrorFromList={removeError}
          clearErrors={clearAllErrors}
          goToChangePassword={goToChangePasswordPage}
        />
      }
      {
        currentPage.mainPage &&
        <MainPage 
          goToLogin={goToLoginPage}
        />
      }
      {
        currentPage.changePasswordPage &&
        <ChangePasswordPage 
          goToLogin={goToLoginPage}
          newPasswordData={newPasswordFormData}
          handleChange={handleChangePasswordChange}
          errorList={errors}
          addErrorToList={addError}
          removeErrorFromList={removeError}
          clearErrors={clearAllErrors}
        />
      }
    </div>
  )
}