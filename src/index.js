import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { JssProvider } from "react-jss";
import { SheetsRegistry } from "jss";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";

import App from "./pages/app";

import theme from "./theme";

import "./index.scss";

toast.configure();

ReactDOM.render(
    <React.StrictMode>
        <JssProvider registry={SheetsRegistry}>
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </MuiThemeProvider>
        </JssProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
