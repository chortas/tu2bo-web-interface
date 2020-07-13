import React, { useState, useEffect, useCallback } from 'react';
import useStyles from './styles';
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core';
import { getVideos, deleteVideo as deleteVideoMediaServer } from 'services/MediaServerService';
import VideoView from 'components/VideoView';

export default function VideoEdit() {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await getVideos();
    if (response.ok) {
      setVideos(response.data);
    }
    setLoading(false);
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
      {loading ? (
        <CircularProgress size={40} className={classes.circularProgress} />
      ) : (
        <Grid container direction="row" alignItems="center" className={classes.grid}>
          {videos.map((video) => (
            <VideoView
              key={video.id}
              title={video.title}
              thumb={video.thumb}
              description={video.description}
              url={video.url}
              id={video.id}
              deleteVideo={deleteVideo}
              edit
              visibility={video.visibility}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
}
