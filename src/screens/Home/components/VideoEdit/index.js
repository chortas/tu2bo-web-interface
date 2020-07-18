import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useStyles from './styles';
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core';
import { getVideos, deleteVideo as deleteVideoMediaServer } from 'services/MediaServerService';
import VideoView from 'components/VideoView';
import { filterVideos } from 'utils/filterVideos';
import SearchBar from 'components/SearchBar';

export default function VideoEdit() {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getVideos();
    if (response.ok) {
      setVideos(response.data);
    }
    setLoading(false);
  }, []);

  const fetchDataFiltered = useCallback(async (searchQuery) => {
    setSearch(searchQuery);
  }, []);

  const deleteVideo = useCallback(
    async (id) => {
      const response = await deleteVideoMediaServer(id);
      if (response.ok) {
        fetchData();
      }
    },
    [fetchData]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const videosFiltered = useMemo(() => filterVideos(videos, search), [videos, search]);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Administrar videos
      </Typography>
      <SearchBar fetchData={fetchDataFiltered} searchValue="título" />

      {loading ? (
        <CircularProgress size={40} className={classes.circularProgress} />
      ) : (
        <Grid container direction="row" alignItems="center" className={classes.grid}>
          {videosFiltered.map((video) => (
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
