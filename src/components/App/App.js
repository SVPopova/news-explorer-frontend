import React, { useCallback } from "react";
import "./App.css";
import { CurrentUserContext } from "../../utils/CurrentUserContext";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../../utils/ProtectedRoute";
import SavedNews from "../SavedNews/SavedNews";
import api from "../../utils/Api";
import * as auth from "../../utils/auth";
import mainApi from "../../utils/MainApi";
import { getToken, removeToken, setToken } from "../../utils/token";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
  const [newsCards, setNewsCards] = React.useState([]);
  const [saveNewsCards, setSaveNewsCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);
  const [isPreloader, setPreloader] = React.useState(false);
  const [isNoResults, setNoResults] = React.useState(false);
  const [isErrorResuts, setErrorResults] = React.useState(false);
  const [request, setRequest] = React.useState(``);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  function getNews(keyWords) {
    console.log(keyWords);
    setPreloader(true);
    api
      .getNews(keyWords)
      .then((data) => {
        if (!data) {
          setErrorResults(true);
        }
        console.log(data);
        if (data.totalResults === 0) {
          setNoResults(true);
        }
        if (data) {
          setPreloader(false);
          setNewsCards(data.articles);
          setSuccess(true);
          setRequest(keyWords);
          localStorage.setItem("search", keyWords);
        }
      })
      .catch((err) => console.log(err));
  }
  function getSavedArticles() {
    mainApi.getSavedArticles().then((news) => {
      setSaveNewsCards(news);
    });
  }
  function handleDeleteClick(id) {
    mainApi.deleteNews(id).then((data) => {
      setSaveNewsCards(
        saveNewsCards.filter((item) => (item._id === id ? !data : item))
      );
    });
  }
  function handleSaveDeleteClick(news) {
    const isSaved = saveNewsCards.find(
      (i) => i.url === news.link && i.title === news.title
    );
    if (!isSaved) {
      mainApi.saveNews(news, request).then((data) => {
        if (data) {
          setSaveNewsCards([data, ...saveNewsCards]);
        }
      });
    } else {
      handleDeleteClick(isSaved._id);
    }
  }

  function closeAllPopups() {
    setRegisterPopupOpen(false);
    setLoginPopupOpen(false);
    setInfoTooltipOpen(false);
  }
  function handleRegisterPopupOpen() {
    closeAllPopups();
    history.push("/sign-up");
    setRegisterPopupOpen(true);
  }
  function handleLoginPopupOpen() {
    closeAllPopups();
    setLoginPopupOpen(true);
    history.push("/sign-in");
  }

  const onLogin = (email, password) => {
    auth
      .authorize(email, password)
      .then((data) => {
        const userData = {
          email: email,
          token: data,
        };
        if (!data.token) {
          setInfoTooltipOpen(true);
        }
        if (data.token) {
          mainApi.getMe(data.token).then((user) => {
            setCurrentUser(user);
          });
          setLoginPopupOpen(false);
          setLoggedIn(true);
          setToken(data.token);
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  const onRegister = (email, password, name) => {
    auth
      .register(email, password, name)
      .then((res) => {
        console.log(res);
        setRegisterPopupOpen(false);
        if (res.status !== 400) {
          setInfoTooltipOpen(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function onSignOut() {
    const jwt = getToken();
    if (jwt) {
      removeToken();
      setLoggedIn(false);
      history.push("/");
    }
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    const search = localStorage.getItem("search");
    setSuccess(false);
    if (jwt) {
      mainApi
        .getMe(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          getSavedArticles();
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("jwt");
        });
    }
    if (search) {
      getNews(search);
    }
  }, []);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute
            path="/saved-news"
            onSignOut={onSignOut}
            pathname={pathname}
            saveNewsCards={saveNewsCards}
            loggedIn={loggedIn}
            keyWords={request}
            isSuccess={isSuccess}
            newsCards={newsCards}
            handleSaveDeleteClick={handleDeleteClick}
            component={SavedNews}
          />

          <Route path="/">
            <Header
              onLogin={handleLoginPopupOpen}
              registerOpen={isRegisterPopupOpen}
              loginOpen={isLoginPopupOpen}
              loggedIn={loggedIn}
              onSignOut={onSignOut}
            />
            <Main
              pathname={pathname}
              isErrorResuts={isErrorResuts}
              isPreloader={isPreloader}
              isNoResults={isNoResults}
              getNews={getNews}
              newsCards={newsCards}
              isSuccess={isSuccess}
              keyWords={request}
              loggedIn={loggedIn}
              handleSaveDeleteClick={handleSaveDeleteClick}
              saveNewsCards={saveNewsCards}
            />
          </Route>
          <Footer />
        </Switch>
        <Register
          isOpen={isRegisterPopupOpen}
          handleLogin={handleLoginPopupOpen}
          onRegister={onRegister}
          onClose={closeAllPopups}
        />
        <Login
          isOpen={isLoginPopupOpen}
          handleRegister={handleRegisterPopupOpen}
          onClose={closeAllPopups}
          onLogin={onLogin}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          handleLogin={handleLoginPopupOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
