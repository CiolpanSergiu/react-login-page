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

  // function goToLoginPage() {
  //   setCurrentPage(prevState => {...prevState, })
  // }

  // function goToSinginPage() {
  //   setCurrentPage(prevState => {...prevState, })    
  // }

  // function goToAfterLoginPage() {
  //   setCurrentPage(prevState => {...prevState, })    
  // }

  return(
    <div>
      {
        currentPage.singinPage &&
          <CreateAccountPage 
            handleChange={handleSinginFormChange}
            singinData={createAccountData}
          />
      }
      {
        currentPage.loginPage &&
        <LoginPage 
          handleChange={handleLoginFormChange}
          loginData={loginFormData}
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