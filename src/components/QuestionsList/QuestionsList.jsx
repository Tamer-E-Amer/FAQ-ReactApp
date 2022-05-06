/**
 * @description this components for listing the questions and thier answers
 */

import React from "react";
// components
import { NoQuestions } from "../../components";
// mui components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// mui icons
import DeleteIcon from "@mui/icons-material/Delete";
import { questions } from "../../data/questions";

const QuestionsList = ({ questionsData, updateQuestionArray }) => {
  //  delete all questions
  const dellAllQuestions = () => {
    //dell questions
    questions.splice(0, questions.length);
    // update the array state
    updateQuestionArray();
  };
  // question list
  console.log("questionsData", questionsData);
  const questionsList =
    questionsData.length >= 1 ? (
      questionsData.map((item, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })
    ) : (
      <NoQuestions />
    );

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "70%",
        height: "auto",
        margin: " auto",
      }}
    >
      {/* accordion : list of questions */}
      {questionsList}
      {/* delete all  */}
      {/* show the button only when the array has items */}
      {questionsList.length >= 1 && (
        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<DeleteIcon />}
          sx={{ textTransform: "none", margin: "1rem 0" }}
          fullWidth
          onClick={dellAllQuestions}
        >
          Delete All Questions
        </Button>
      )}
    </Box>
  );
};

export default QuestionsList;
