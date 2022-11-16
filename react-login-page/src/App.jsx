import React from "react";
import AfterLoginPage from "./components/AfterLoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import LoginPage from "./components/LoginPage";

export default function App() {

  const [currentPage, setCurrentPage] = React.useState(
    {
      singinPage: false,
      loginPage: true,
      afterLoginPage: false
    }
  )

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
  }

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

  const [errors, setErrors] = React.useState('');

  function addError(msg) {
    setErrors(prevState => prevState.includes(msg) ? prevState + '' : prevState + msg)
  }

  function removeError(error) {
    setErrors(prevState => prevState.replace(error, ''));
  }

  function clearAllErrors() {
    setErrors('');
  }

  function handleSinginFormChange(event) {
    setCreateAccountData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleLoginFormChange(event) {
    
    setLoginFormData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  function goToLoginPage() {
    clearAllErrors();
    setCurrentPage(
      {
        singinPage: false,
        loginPage: true,
        afterLoginPage: false
      }
    )
    clearInputBoxes();
  }

  function goToSinginPage() {
    clearAllErrors();
    setCurrentPage(
      {
        singinPage: true,
        loginPage: false,
        afterLoginPage: false
      }
    )    
    clearInputBoxes();
  }

  function goToAfterLoginPage() {
    setCurrentPage(
      {
        singinPage: false,
        loginPage: false,
        afterLoginPage: true
      }
    )    
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
          goToAfterLogin={goToAfterLoginPage}
          errorList={errors}
          addErrorToList={addError}
          removeErrorFromList={removeError}
          clearErrors={clearAllErrors}
        />
      }
      {
        currentPage.afterLoginPage &&
        <AfterLoginPage 
          goToLogin={goToLoginPage}
        />
      }
    </div>
  )
}