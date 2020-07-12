import React from 'react';
import useStyles from './styles';
import { Typography, Container } from '@material-ui/core';
import PieStatistics from 'components/PieStatistics';
import MediaLinePlot from '../MediaLinePlot';

export default function AuthLinePlot() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Estadísticas del Media Server
      </Typography>
      <MediaLinePlot />
      <PieStatistics />
    </Container>
  );
}
