import React from 'react';
import { getStats as getAuthStats } from 'services/AuthServerService';
import StatisticsLinePlot from 'components/StatisticsLinePlot';
import useStyles from './styles';
import { Typography, Container } from '@material-ui/core';

export default function AuthLinePlot() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Estadísticas del Auth Server
      </Typography>
      <StatisticsLinePlot
        getStats={getAuthStats}
        statisticsTitle="Cantidad de usuarios - histórico"
        title="Cantidad de usuarios en el tiempo"
        label="Usuarios"
      />
    </Container>
  );
}
