import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          React Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
