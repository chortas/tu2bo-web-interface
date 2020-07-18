import React, { useState, useCallback } from 'react';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import { ROUTES } from 'constants/routes';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('isLoggedIn'));

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
        {Object.values(ROUTES).map((route) => {
          return (
            <PrivateRoute
              key={route.path}
              path={route.path}
              component={() => Home({ onLogout, itemSelected: route.component })}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
