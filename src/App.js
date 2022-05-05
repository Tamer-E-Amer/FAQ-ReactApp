import React from "react";
// App Components
import { Navbar, QAForm } from "./components";
// mui components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// theme
import theme from "./themes/appTheme";
const App = () => {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>

      <Navbar />
      <QAForm/>
      </ThemeProvider>
    </div>
  );
};

export default App;
