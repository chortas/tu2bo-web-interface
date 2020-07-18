import React from 'react';
import AuthLinePlot from 'screens/Home/components/AuthLinePlot';
import AppServerStats from 'screens/Home/components/AppServerStats';
import MediaServerStats from 'screens/Home/components/MediaServerStats';
import VideoEdit from 'screens/Home/components/VideoEdit';
import UserEdit from 'screens/Home/components/UserEdit';
import Pings from 'screens/Home/components/Pings';

export const ROUTES = {
  Home: {
    path: '/home',
    component: <Pings />,
  },
  StatsAppServer: {
    path: '/stats/appServer',
    component: <AppServerStats />,
  },
  StatsAuthServer: {
    path: '/stats/authServer',
    component: <AuthLinePlot />,
  },
  StatsMediaServer: {
    path: '/stats/mediaServer',
    component: <MediaServerStats />,
  },
  UserEdit: {
    path: '/admin/users',
    component: <UserEdit />,
  },
  VideoEdit: {
    path: '/admin/videos',
    component: <VideoEdit />,
  },
};
