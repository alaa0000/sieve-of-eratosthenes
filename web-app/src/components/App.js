import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import {
  isNil,
  size,
} from 'lodash';
import NumberFormatCustom from './NumberFormat';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[700] },
  },
});

class App extends Component {
  /**
   * Called immediately after a component is mounted.
   */
  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  /**
   * Handles the input value change.
   */
  handleChange = (event) => {
    this.props.setValue(event.target.value);
  }

  /**
   * Handles the cancel button click.
   */
  handleCancelClick = () => {
    this.props.cancel();

    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  /**
   * Handles the reset button click.
   */
  handleResetClick = () => {
    this.props.reset();

    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  /**
   * Sets the inputRef.
   */
  handleInputRef = (ref) => {
    this.inputRef = ref;
  }

  /**
   * Renders the component.
   */
  render() {
    const {
      error,
      loading,
      result,
      value,
    } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">

          {/* App bar */}
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
              TouchBistro Full Stack Challenge
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="App-intro">

            {/* Input field */}
            <TextField
              id="value"
              label="Enter a value"
              value={value}
              onChange={this.handleChange}
              margin="normal"
              error={!isNil(error)}
              helperText={error}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
              inputRef={this.handleInputRef}
            />

            {/* Cancel button */}
            <Button
              id="cancel"
              color="primary"
              onClick={this.handleCancelClick}
              disabled={!loading}
            >
            Cancel
            </Button>

            {/* Reset button */}
            <Button
              id="reset"
              color="primary"
              onClick={this.handleResetClick}
            >
            Reset
            </Button>
          </div>

          {/* Result */}
          { !loading &&
          <ul className="App-result">
            {(size(result) === 1) && <p id="result-text-singular">The median prime number is: </p>}
            {(size(result) > 1) && <p id="result-text-plural">The median prime numbers are: </p>}
            {result.map(number => (<li key={String(number)}>{Number(number).toLocaleString()}</li>))}
          </ul>
        }
          { loading && <CircularProgress id="progress" color="primary" className="App-progress" /> }
        </div>
      </MuiThemeProvider>
    );
  }
}

// Type checking.
App.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  result: PropTypes.arrayOf(PropTypes.number).isRequired,
  loading: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

App.defaultProps = {
  error: null,
};

export default App;
