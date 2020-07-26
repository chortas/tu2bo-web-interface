import React, { useState } from 'react';
import useStyles from './styles';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import ListItemDrawer from 'components/ListItemDrawer';
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
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

export default function Home({ onLogout, itemSelected }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.header}>
          <div className={classes.left}>
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
          </div>
          <div>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              component={Link}
              to={ROUTES.Home.path}
            >
              Inicio
            </Button>
            <Button variant="outlined" color="secondary" onClick={onLogout} className={classes.button}>
              Logout
            </Button>
          </div>
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
          <ListItemDrawer title="Estadísticas app server" path={ROUTES.StatsAppServer.path} />
          <ListItemDrawer title="Estadísticas auth server" path={ROUTES.StatsAuthServer.path} />
          <ListItemDrawer title="Estadísticas media server" path={ROUTES.StatsMediaServer.path} />
        </List>
        <Divider />
        <List>
          <ListItemDrawer title="Administrar usuarios" path={ROUTES.UserEdit.path} />
          <ListItemDrawer title="Administrar videos" path={ROUTES.VideoEdit.path} />
        </List>
        <List />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>{itemSelected}</Container>
      </main>
    </div>
  );
}
