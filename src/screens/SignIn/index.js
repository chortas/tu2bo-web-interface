import React, { useState, useCallback } from 'react';
import { Avatar, Button, CssBaseline, TextField, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import CustomSnackBar from '../../components/CustomSnackBar';
import { validateCredentials } from '../../utils/login';

export default function SignIn({ loginSuccess }) {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClick = useCallback(() => {
    const valid = validateCredentials(username, password);
    if (valid) {
      loginSuccess();
    }
    setOpenSnackBar(!valid);
  }, [loginSuccess, username, password]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Interfaz web
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onChange={(event) => setUsername(event.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.containedRed}
            onClick={handleClick}
          >
            Ingresar
          </Button>
          <CustomSnackBar
            open={openSnackBar}
            setOpenSnackBar={setOpenSnackBar}
            errorMessage="Credenciales inválidas"
            severity="error"
          />
        </form>
      </div>
    </Container>
  );
}
