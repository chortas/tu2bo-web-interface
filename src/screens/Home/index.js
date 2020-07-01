import React from 'react';

import Navbar from 'components/Navbar';

import Pings from './components/Pings';
import AuthLinePlot from './components/AuthLinePlot';
import { Container } from '@material-ui/core';

export default function Home({ onLogout }) {
  return (
    <div>
      <Navbar onLogout={onLogout} />
      <Container>
        <Pings />
        <AuthLinePlot />
      </Container>
    </div>
  );
}
