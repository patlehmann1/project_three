import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme= createMuiTheme({
    palette: {
        primary: {
          main: '#111111',
        },
        secondary: {
          main: '#448aff',
        },
      },
});

console.log(theme);

ReactDOM.render(
<MuiThemeProvider theme={theme}>
<App />
</MuiThemeProvider>, document.getElementById("root"));
registerServiceWorker();
