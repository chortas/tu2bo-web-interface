import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useStyles from './styles';
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core';
import {
  getUsers,
  blockUser as blockUserAuthServer,
  unblockUser as unblockUserAuthServer,
} from 'services/AuthServerService';
import { deleteUser as deleteUserAppServer } from 'services/AppServerService';
import UserView from 'components/UserView';
import { getProfilePic } from 'utils/profilePic';
import { filterUsers } from 'utils/filterUsers';
import SearchBar from 'components/SearchBar';
import ChipFilterBlocked from 'components/ChipFilterBlocked';

export default function UserEdit() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const [selectedBlocked, setSelectedBlocked] = useState(true);
  const [selectedNotBlocked, setSelectedNotBlocked] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getUsers();
    if (response.ok) {
      setUsers(response.data);
    }
    setLoading(false);
  }, []);

  const fetchDataFiltered = useCallback(async (searchQuery) => {
    setSearch(searchQuery);
  }, []);

  const deleteUser = useCallback(
    async (id) => {
      const response = await deleteUserAppServer(id);
      if (response.ok) {
        fetchData();
      }
    },
    [fetchData]
  );

  const blockUser = useCallback(
    async (id) => {
      const response = await blockUserAuthServer(id);
      if (response.ok) {
        fetchData();
      }
    },
    [fetchData]
  );

  const unblockUser = useCallback(
    async (id) => {
      const response = await unblockUserAuthServer(id);
      if (response.ok) {
        fetchData();
      }
    },
    [fetchData]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const usersFiltered = useMemo(() => filterUsers(users, search), [users, search]);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Administrar usuarios
      </Typography>
      <SearchBar fetchData={fetchDataFiltered} searchValue="nombre" />
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
          {usersFiltered.map(
            (user) =>
              ((user.is_blocked && selectedBlocked) || (!user.is_blocked && selectedNotBlocked)) && (
                <UserView
                  key={user.id}
                  username={user.username}
                  email={user.email}
                  id={user.id}
                  profilePic={getProfilePic(user.profile.picture)}
                  deleteUser={deleteUser}
                  blockUser={blockUser}
                  unblockUser={unblockUser}
                  isBlocked={user.is_blocked}
                />
              )
          )}
        </Grid>
      )}
    </Container>
  );
}
