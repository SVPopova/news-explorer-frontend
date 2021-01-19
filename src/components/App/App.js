import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../../utils/ProtectedRoute";
import SavedNews from "../SavedNews/SavedNews";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function App() {
  const [userData, setUserData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
  }
  function handleRegisterPopupOpen() {
    closeAllPopups();
    setRegisterPopupOpen(true);
  }
  function handleLoginPopupOpen() {
    closeAllPopups();
    setLoginPopupOpen(true);
  }
  return (
    <div className="page">
      <Switch>
        <Route path="/saved-news">
          <SavedNewsHeader />
          <SavedNews />
        </Route>
        <Route path="/">
          <Header
            userData={userData}
            onLogin={handleLoginPopupOpen}
            registerOpen={isRegisterPopupOpen}
            loginOpen={isLoginPopupOpen}
          />
          <Main />
        </Route>
      </Switch>
      <Footer />
      <Register
        isOpen={isRegisterPopupOpen}
        onLogin={handleLoginPopupOpen}
        onClose={closeAllPopups}
      />
      <Login
        isOpen={isLoginPopupOpen}
        onRegister={handleRegisterPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
