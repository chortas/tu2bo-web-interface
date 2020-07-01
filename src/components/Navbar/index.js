import React from 'react';
import { Button } from '@material-ui/core';

import useStyles from './styles';

export default function Navbar({ onLogout }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.title}>Tutubo Backoffice</span>
      <Button variant="outlined" color="secondary" onClick={onLogout} className={classes.button}>
        Logout
      </Button>
    </div>
  );
}
