import React, { useEffect, FunctionComponent } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

// Playroom 0.16.1 needs this to be a class component
export default class FrameComponent extends React.Component {
  componentDidMount() {
    document.getElementsByTagName('body')[0].style.margin = '0';
  }

  render() {
    const { children } = this.props;

    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
  }
}
