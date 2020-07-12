import React, { useState, useCallback } from 'react';
import useStyles from './styles';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Pings from './components/Pings';
import AuthLinePlot from './components/AuthLinePlot';
import AppServerStats from './components/AppServerStats';
import ListItemDrawer from './components/ListItemDrawer';
import {
  Button,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  Container,
  Typography,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MediaServerStats from './components/MediaServerStats';

export default function Home({ onLogout }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(<Pings />);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onClickHome = useCallback(async () => {
    setItemSelected(<Pings />);
  }, []);  

  const onClickAppServerStats = useCallback(async () => {
    setItemSelected(<AppServerStats />);
  }, []);

  const onClickAuthServerStats = useCallback(async () => {
    setItemSelected(<AuthLinePlot />);
  }, []);

  const onClickMediaServerStats = useCallback(async () => {
    setItemSelected(<MediaServerStats />);
  }, []);

  const onClickUserAdmin = useCallback(async () => {
    // TODO: Add user admin
    setItemSelected(null);
  }, []);

  const onClickVideoAdmin = useCallback(async () => {
    // TODO: Add video admin
    setItemSelected(null);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Tutubo Backoffice
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemDrawer title="Estadísticas app server" onClick={onClickAppServerStats} />
          <ListItemDrawer title="Estadísticas auth server" onClick={onClickAuthServerStats} />
          <ListItemDrawer title="Estadísticas media server" onClick={onClickMediaServerStats} />
        </List>
        <Divider />
        <List>
          <ListItemDrawer title="Administrar usuarios" onClick={onClickUserAdmin} />
          <ListItemDrawer title="Administrar videos" onClick={onClickVideoAdmin} />
        </List>
        <Button variant="outlined" color="secondary" onClick={onLogout} className={classes.button}>
          Logout
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClickHome} className={classes.button}>
          Inicio Tutubo Backoffice
        </Button>
        <List />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>{itemSelected != null ? itemSelected : <div> </div>}</Container>
      </main>
    </div>
  );
}
