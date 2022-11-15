import React from "react";
import AfterLoginPage from "./components/AfterLoginPage";
import CreateAccountPage from "./components/CreateAccountPage";
import LoginPage from "./components/LoginPage";

export default function App() {

  const [currentPage, setCurrentPage] = React.useState(
    {
      singinPage: true,
      loginPage: false,
      afterLoginPage: false
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

  function goToLoginPage(event) {
    setCurrentPage(
      {
        singinPage: false,
        loginPage: true,
        afterLoginPage: false
      }
    )
    setCreateAccountData(
      {
        singinEmail: '',
        singinPassword: '',
        passwordConfirmation: ''
      }
    )
  }

  function goToSinginPage(event) {
    event.preventDefault();
    setCurrentPage(
      {
        singinPage: true,
        loginPage: false,
        afterLoginPage: false
      }
    )    
  }

  function goToAfterLoginPage(event) {
    event.preventDefault();
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
          />
      }
      {
        currentPage.loginPage &&
        <LoginPage 
          handleChange={handleLoginFormChange}
          loginData={loginFormData}
          goToSingin={goToSinginPage}
          goToAfterLogin={goToAfterLoginPage}
        />
      }
      {
        currentPage.afterLoginPage &&
        <AfterLoginPage 

        />
      }
    </div>
  )
}