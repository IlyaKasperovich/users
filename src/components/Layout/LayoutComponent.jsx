import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Layout.sass';

import Navigation from 'src/components/Navigation';
import ToolBar from 'src/components/ToolBar';

const Layout = ({ children }) => (
  <Grid container className="gridContainer">
    <Grid direction="row-reverse" item sx={12} className="toolBar">
      <ToolBar />
    </Grid>
    <Grid container item sx={12}>
      <Grid item xs={2}>
        <Navigation />
      </Grid>
      <Grid item xs={10} className="mainContent">
        {children}
      </Grid>
    </Grid>
  </Grid>
);

export default Layout;
