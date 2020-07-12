import React from 'react';
import useStyles from './styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  Container,
  Tooltip,
} from '@material-ui/core';
import DeleteButton from 'components/DeleteButton';
import { getDescription } from 'utils/description';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function VideoView({
  title,
  thumb,
  description,
  url,
  id,
  loading,
  edit,
  deleteVideo,
  visibility,
}) {
  const classes = useStyles();

  return loading ? (
    <CircularProgress size={20} color="secondary" className={classes.circularProgress} />
  ) : (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.cardMedia} image={thumb} title="Video" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {getDescription(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" href={url} variant="outlined" color="secondary" className={classes.button}>
          Ver video
        </Button>
        {edit ? <DeleteButton deleteVideo={deleteVideo} id={id} title={title} /> : <div> </div>}
        {visibility === 'private' ? (
          <Container className={classes.container}>
            <Tooltip title="Video privado">
              <LockOutlinedIcon className={classes.icon} />
            </Tooltip>
          </Container>
        ) : (
          <Container className={classes.container}>
            <Tooltip title="Video público">
              <LockOpenIcon className={classes.icon} />
            </Tooltip>
          </Container>
        )}
      </CardActions>
    </Card>
  );
}
