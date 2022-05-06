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
  const updateQuestionArray = () => {
    // add questions to Local storage
    localStorage.setItem("questions",JSON.stringify([...questionsData]))
    
    setQuestionsData([...questionsData]);
  };
  // update array after delete
  const updateQuestionArrayAfterDelete = (items) => {
    setQuestionsData(items);
    localStorage.setItem("questions",JSON.stringify(items))
  };
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          {/* form to input question */}
          <QAForm
            updateQuestionArray={updateQuestionArray}
            questionsData={questionsData}
          />
          {/* list ofquestions and their answers in an accordion */}
          <QuestionsList
            questionsData={questionsData}
            updateQuestionArray={updateQuestionArray}
            updateQuestionArrayAfterDelete={updateQuestionArrayAfterDelete}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
