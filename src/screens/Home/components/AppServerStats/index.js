import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Input, Container, Grid, Typography, CircularProgress } from '@material-ui/core';
import { getStats as getAppServerStats } from 'services/AppServerService';
import VideoView from 'components/VideoView';
import { getTitle } from 'utils/title';

export default function AppServerStats() {
  const classes = useStyles();
  const [mostLikedVideos, setMostLikedVideos] = useState([]);
  const [mostCommentedVideos, setMostCommentedVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numVideos, setNumVideos] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getAppServerStats(numVideos);
      setLoading(false);
      if (response.ok) {
        setMostLikedVideos(response.data.most_liked_videos);
        setMostCommentedVideos(response.data.most_commented_videos);
      }
    }
    fetchData();
  }, [numVideos]);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Estadísticas del App Server
      </Typography>
      <Typography variant="h6" gutterBottom>
        Cantidad requerida de videos
      </Typography>
      <Input
        className={classes.titleParams}
        native
        type="number"
        inputProps={{ min: 1 }}
        value={numVideos}
        onChange={(event) => {
          setNumVideos(event.target.value);
        }}
      />

      <Typography variant="h6" color="secondary" className={classes.titleVideos}>
        {getTitle(numVideos, 'likeado')}
      </Typography>
      {loading && <CircularProgress size={30} className={classes.circularProgress} />}

      <Grid container direction="row" alignItems="center" className={classes.grid}>
        {mostLikedVideos.map((video) => (
          <VideoView
            key={video.id}
            title={video.title}
            thumb={video.thumb}
            description={video.description}
            url={video.url}
            loading={loading}
            visibility={video.visibility}
          />
        ))}
      </Grid>

      <Typography variant="h6" color="secondary" className={classes.titleVideos}>
        {getTitle(numVideos, 'comentado')}
      </Typography>
      {loading && <CircularProgress size={30} className={classes.circularProgress} />}

      <Grid container direction="row" alignItems="center" className={classes.grid}>
        {mostCommentedVideos.map((video) => (
          <VideoView
            key={video.id}
            title={video.title}
            thumb={video.thumb}
            description={video.description}
            url={video.url}
            loading={loading}
            visibility={video.visiblity}
          />
        ))}
      </Grid>
    </Container>
  );
}
