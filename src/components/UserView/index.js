import React from 'react';
import useStyles from './styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import DeleteButton from 'components/DeleteButton';

export default function UserView({ username, email, id, profilePic, loading, deleteUser }) {
  const classes = useStyles();

  return loading ? (
    <CircularProgress size={20} color="secondary" className={classes.circularProgress} />
  ) : (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.cardMedia} image={profilePic} title="Video" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <DeleteButton deleteCallback={deleteUser} id={id} title={username} identifier="usuario" />
      </CardActions>
    </Card>
  );
}
