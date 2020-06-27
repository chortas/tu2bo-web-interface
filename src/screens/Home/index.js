import React, { useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Request from '../../components/Request';
import { makePing as makePingAppServer } from '../../services/AppServerService';
import { makePing as makePingMediaServer } from '../../services/MediaServerService';
import { makePing as makePingAuthServer } from '../../services/AuthServerService';

export default function Home() {
  const classes = useStyles();

  const [AppServerIsUp, setAppServerIsUp] = useState('');
  const [MediaServerIsUp, setMediaServerIsUp] = useState('');
  const [AuthServerIsUp, setAuthServerIsUp] = useState('');

  const [LoadingAppServer, setLoadingAppServer] = useState(false);
  const [LoadingMediaServer, setLoadingMediaServer] = useState(false);
  const [LoadingAuthServer, setLoadingAuthServer] = useState(false);

  const onClickAppServer = useCallback(async () => {
    setLoadingAppServer(true);
    const response = await makePingAppServer();
    setAppServerIsUp(response);
    setLoadingAppServer(false);
  }, []);

  const onClickMediaServer = useCallback(async () => {
    setLoadingMediaServer(true);
    const response = await makePingMediaServer();
    setMediaServerIsUp(response);
    setLoadingMediaServer(false);
  }, []);

  const onClickAuthServer = useCallback(async () => {
    setLoadingAuthServer(true);
    const response = await makePingAuthServer();
    setAuthServerIsUp(response);
    setLoadingAuthServer(false);
  }, []);

  return (
    <Grid container direction="row" justify="space-between" alignItems="center" className={classes.grid}>
      <Request
        title="App Server"
        onClick={onClickAppServer}
        isUp={AppServerIsUp}
        loading={LoadingAppServer}
      />
      <Request
        title="Media Server"
        onClick={onClickMediaServer}
        isUp={MediaServerIsUp}
        loading={LoadingMediaServer}
      />
      <Request
        title="Auth Server"
        onClick={onClickAuthServer}
        isUp={AuthServerIsUp}
        loading={LoadingAuthServer}
      />
    </Grid>
  );
}
