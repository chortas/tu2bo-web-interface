import React, { useCallback } from 'react';
import useStyles from './styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import red from '@material-ui/core/colors/red';

export default function ChipFilterBlocked({
  selectedBlocked,
  setSelectedBlocked,
  selectedNotBlocked,
  setSelectedNotBlocked,
}) {
  const classes = useStyles();

  const handleDelete = useCallback((setSelected) => {
    setSelected(false);
  }, []);

  const handleClick = useCallback((setSelected) => {
    setSelected(true);
  }, []);

  return (
    <div className={classes.root}>
      <Chip
        className={selectedBlocked ? classes.chipSelected : classes.chipNotSelected}
        label="Bloqueados"
        variant="outlined"
        onClick={() => {
          handleClick(setSelectedBlocked);
        }}
        onDelete={() => {
          handleDelete(setSelectedBlocked);
        }}
        deleteIcon={!selectedBlocked && <DoneIcon style={{ color: red[500] }} />}
      />

      <Chip
        className={selectedNotBlocked ? classes.chipSelected : classes.chipNotSelected}
        label="No bloqueados"
        variant="outlined"
        onClick={() => {
          handleClick(setSelectedNotBlocked);
        }}
        onDelete={() => {
          handleDelete(setSelectedNotBlocked);
        }}
        deleteIcon={!selectedNotBlocked && <DoneIcon style={{ color: red[500] }} />}
      />
    </div>
  );
}
