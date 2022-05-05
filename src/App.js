import React from "react";
// App Components
import { Navbar, QAForm,NoQuestions, QuestionsList } from "./components";
// mui components
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { ThemeProvider } from "@mui/material/styles";
// theme
import theme from "./themes/appTheme";
const App = () => {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>

      <Navbar />
      <Container>
      <QAForm/>
      <NoQuestions/>
      <QuestionsList/>
      </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
