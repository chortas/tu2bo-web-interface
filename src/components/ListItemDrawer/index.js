import React from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function ListItemDrawer({ title, path }) {
  const classes = useStyles();

  return (
    <ListItem button component={Link} to={path}>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" className={classes.listItemText}>
            {title}
          </Typography>
        }
      />
    </ListItem>
  );
}
