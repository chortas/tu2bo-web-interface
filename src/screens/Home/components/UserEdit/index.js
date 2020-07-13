import React, { useState, useEffect, useCallback } from 'react';
import useStyles from './styles';
import { Container, Grid, Typography, CircularProgress } from '@material-ui/core';
import { getUsers } from 'services/AuthServerService';
import { deleteUser as deleteUserAppServer } from 'services/AppServerService';
import UserView from 'components/UserView';
import { getProfilePic } from 'utils/profilePic';

export default function UserEdit() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await getUsers();
    if (response.ok) {
      setUsers(response.data);
    }
    setLoading(false);
  }

  const deleteUser = useCallback(async (id) => {
    const response = await deleteUserAppServer(id);
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
        Administrar usuarios
      </Typography>
      {loading ? (
        <CircularProgress size={40} className={classes.circularProgress} />
      ) : (
        <Grid container direction="row" alignItems="center" className={classes.grid}>
          {users.map((user) => (
            <UserView
              key={user.id}
              username={user.username}
              email={user.email}
              id={user.id}
              profilePic={getProfilePic(user.profile.picture)}
              deleteUser={deleteUser}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
}
