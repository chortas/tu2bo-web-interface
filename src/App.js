import React, { useState, useCallback, useEffect } from 'react';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('isLoggedIn'));
  }, []);

  const loginSuccess = useCallback(() => {
    window.localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  }, []);

  const onLogout = useCallback(() => {
    window.localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={() => SignIn({ loginSuccess })} isLoggedIn={isLoggedIn} />
        <PrivateRoute path="/home" component={() => Home({ onLogout })} isLoggedIn={isLoggedIn} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}
