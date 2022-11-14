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

  return(
    <div>
      {
        currentPage.singinPage &&
          <CreateAccountPage />
      }
      {
        currentPage.loginPage &&
        <LoginPage />
      }
      {
        currentPage.afterLoginPage &&
        <AfterLoginPage />
      }
    </div>
  )
}