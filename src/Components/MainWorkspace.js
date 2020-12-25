import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainPanel from './MainPanel';
import MainTable from './MainTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#0a1018",
    width: "100vw",
    height: "100vh"
  },
}));

export default function MainWorkspace() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={3}>
          <MainPanel />
        </Grid>
        <Grid container item xs={8}>
          <MainTable />
        </Grid>
      </Grid>
    </div>
  );
}