import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Typography, Container } from '@material-ui/core';
import PieStatistics from 'components/PieStatistics';
import MediaLinePlot from '../MediaLinePlot';
import { getVisibilityStats as getMediaStats } from 'services/MediaServerService';

export default function MediaServerStats() {
  const classes = useStyles();

  const [infoPrivatePublic, setInfoPrivatePublic] = useState([1, 1]);
  const labelsPrivatePublic = ['Videos públicos', 'Videos privados'];
  const [infoBlockedNotBlocked, setInfoBlockedNotBlocked] = useState([1, 1]);
  const labelsBlockedNotBlocked = ['Videos bloqueados', 'Videos no bloqueados'];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getMediaStats();
      setLoading(false);

      if (response.ok) {
        setInfoPrivatePublic([response.data.public, response.data.private]);
        setInfoBlockedNotBlocked([
          response.data.blocked,
          response.data.public + response.data.private - response.data.blocked,
        ]);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Estadísticas del Media Server
      </Typography>
      <MediaLinePlot />
      <PieStatistics labelsGraph={labelsPrivatePublic} dataGraph={infoPrivatePublic} loading={loading} />
      <PieStatistics
        labelsGraph={labelsBlockedNotBlocked}
        dataGraph={infoBlockedNotBlocked}
        loading={loading}
      />
    </Container>
  );
}
