import React, { useState, useCallback } from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteButton({ id, deleteCallback, title, identifier }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onClickAgree = useCallback(() => {
    deleteCallback(id);
    setOpen(false);
  }, [deleteCallback, id]);

  return (
    <div>
      <Button variant="outlined" onClick={() => handleClickOpen()} className={classes.button}>
        {`Borrar ${identifier}`}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`¿Desea borrar el ${identifier} "${title}"?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`El ${identifier} se borrará permanentemente`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} className={classes.option}>
            Cancelar
          </Button>
          <Button onClick={() => onClickAgree()} className={classes.option}>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
