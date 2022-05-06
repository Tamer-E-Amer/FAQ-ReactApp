import React from "react";
// App Components
import { Navbar, QAForm, NoQuestions, QuestionsList } from "./components";
// mui components
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { ThemeProvider } from "@mui/material/styles";
// theme
import theme from "./themes/appTheme";
import { questions } from "./data/questions";
const App = () => {
  const [questionsData, setQuestionsData] = React.useState(questions);

  // function to update the state when adding question on the form
  const updateQuestionArray =()=>{
    setQuestionsData([...questions])
  }
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <QAForm updateQuestionArray ={updateQuestionArray}/>
          <QuestionsList questionsData={questionsData} updateQuestionArray ={updateQuestionArray} />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
