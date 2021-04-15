import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Layout.sass';

import Navigation from 'src/components/Navigation';

const Layout = ({ children }) => (
  <Grid container>
    <Grid item xs={2}>
      <Navigation />
    </Grid>
    <Grid item xs={10}>
      <Paper style={{ height: '100vh', overflow: 'auto' }}>
        {children}
      </Paper>
    </Grid>
  </Grid>
);

export default Layout;
