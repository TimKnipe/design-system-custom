import React, { useEffect, FunctionComponent } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005bab',
    },
  },
});

const FrameComponent: FunctionComponent<{}> = ({ children }) => {
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.margin = '0';
  }, []);
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
export default FrameComponent;
