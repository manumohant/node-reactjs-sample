import React, { Component  } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

class App extends Component {
  render() {
    return (<div>
    <CssBaseline />
    <AppHeader />
    <main className={styles.main}>
      <Home />
    </main>
  </div>
    );
  }
}


export default withStyles(styles)(App);