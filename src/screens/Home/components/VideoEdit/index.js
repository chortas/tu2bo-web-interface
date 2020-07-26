import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useStyles from './styles';
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core';
import {
  getVideos,
  deleteVideo as deleteVideoMediaServer,
  blockVideo as blockVideoMediaServer,
  unblockVideo as unblockVideoMediaServer,
} from 'services/MediaServerService';
import VideoView from 'components/VideoView';
import { filterVideos } from 'utils/filterVideos';
import SearchBar from 'components/SearchBar';
import ChipFilterBlocked from 'components/ChipFilterBlocked';

export default function VideoEdit() {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const [selectedBlocked, setSelectedBlocked] = useState(true);
  const [selectedNotBlocked, setSelectedNotBlocked] = useState(true);

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

  const blockVideo = useCallback(
    async (id) => {
      const response = await blockVideoMediaServer(id);
      if (response.ok) {
        fetchData();
      }
    },
    [fetchData]
  );

  const unblockVideo = useCallback(
    async (id) => {
      const response = await unblockVideoMediaServer(id);
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
      <ChipFilterBlocked
        selectedBlocked={selectedBlocked}
        selectedNotBlocked={selectedNotBlocked}
        setSelectedBlocked={setSelectedBlocked}
        setSelectedNotBlocked={setSelectedNotBlocked}
      />

      {loading ? (
        <CircularProgress size={40} className={classes.circularProgress} />
      ) : (
        <Grid container direction="row" alignItems="center" className={classes.grid}>
          {videosFiltered.map(
            (video) =>
              ((video.is_blocked && selectedBlocked) || (!video.is_blocked && selectedNotBlocked)) && (
                <VideoView
                  key={video.id}
                  title={video.title}
                  url={video.url}
                  id={video.id}
                  thumb={video.thumb}
                  description={video.description}
                  deleteVideo={deleteVideo}
                  edit
                  visibility={video.visibility}
                  blockVideo={blockVideo}
                  unblockVideo={unblockVideo}
                  isBlocked={video.is_blocked}
                />
              )
          )}
        </Grid>
      )}
    </Container>
  );
}
