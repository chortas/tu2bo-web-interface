import React from 'react';
import useStyles from './styles';
import { Card, Typography, Button, CircularProgress } from '@material-ui/core';

export default function Request({ title, onClick, isUp, loading }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant="overline" color="secondary" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="overline" display="block">
        {isUp}
      </Typography>
      <Button fullWidth variant="outlined" color="secondary" onClick={onClick} className={classes.button}>
        {loading ? (
          <CircularProgress size={20} color="secondary" className={classes.circularProgress} />
        ) : (
          'Ping'
        )}
      </Button>
    </Card>
  );
}
