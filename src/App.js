import React, { useState, useCallback, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
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

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <BrowserRouter>
          <Switch>
            <PublicRoute path="/login" component={() => SignIn({ loginSuccess })} isLoggedIn={isLoggedIn} />
            <PrivateRoute path="/home" component={Home} isLoggedIn={isLoggedIn} />
          </Switch>
        </BrowserRouter>
      </Box>
    </Container>
  );
}
