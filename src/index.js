import React from "react";
import ReactDom from "react-dom";
// App
import App from "./App";
// noti snakbar for confirmation messages
import { SnackbarProvider } from "notistack";
ReactDom.render(
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>,

  document.getElementById("root")
);
