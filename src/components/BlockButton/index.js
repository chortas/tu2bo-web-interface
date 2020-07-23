import React, { useState, useCallback } from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function BlockButton({ blockCallback, unblockCallback, identifier, title, id, isBlocked }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [block, setBlock] = useState(isBlocked);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onClickAgree = useCallback(async () => {
    if (block) {
      unblockCallback(id);
      setBlock(false);
    } else {
      blockCallback(id);
      setBlock(true);
    }
    setOpen(false);
  }, [block, blockCallback, unblockCallback, id]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={classes.button}>
        {block ? 'Desbloquear' : 'Bloquear'}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {block
            ? `¿Desea desbloquear el ${identifier} "${title}"?`
            : `¿Desea bloquear el ${identifier} "${title}"?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {block
              ? `El ${identifier} se desbloqueará pero luego podrá ser bloqueado`
              : `El ${identifier} se bloqueará pero luego podrá ser desbloqueado`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.option}>
            Cancelar
          </Button>
          <Button onClick={onClickAgree} className={classes.option}>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
