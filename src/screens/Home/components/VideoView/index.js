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
} from '@material-ui/core';

export default function VideoView({ title, thumb, description, url, loading }) {
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
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" href={url} variant="outlined" color="secondary" className={classes.button}>
          Ver video
        </Button>
      </CardActions>
    </Card>
  );
}
