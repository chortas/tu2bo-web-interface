import React, { useState, useEffect, useCallback } from 'react';
import useStyles from './styles';
import { Container, Grid, Typography } from '@material-ui/core';
import { getVideos, deleteVideo as deleteVideoMediaServer } from 'services/MediaServerService';
import VideoView from '../VideoView';

export default function VideoEdit() {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [loading] = useState(false);

  async function fetchData() {
    const response = await getVideos();
    if (response.ok) {
      setVideos(response.data);
    }
  }

  const deleteVideo = useCallback(async (id) => {
    const response = await deleteVideoMediaServer(id);
    if (response.ok) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Administrar videos
      </Typography>

      <Grid container direction="row" justify="space-between" alignItems="center" className={classes.grid}>
        {videos.map((video) => (
          // eslint-disable-next-line react/jsx-key
          <VideoView
            title={video.title}
            thumb={video.thumb}
            description={video.description}
            url={video.url}
            id={video.id}
            loading={loading}
            deleteVideo={deleteVideo}
            edit
            visibility={video.visibility}
          />
        ))}
      </Grid>
    </Container>
  );
}
