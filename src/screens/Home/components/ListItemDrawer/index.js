import React from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core/';
import useStyles from './styles';

export default function ListItemDrawer({ title, onClick }) {
  const classes = useStyles();

  return (
    <ListItem button onClick={onClick}>
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
