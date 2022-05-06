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
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

// mui icons
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
// question array
import { questions } from "../../data/questions";

const QuestionsList = ({
  questionsData,
  updateQuestionArray,
  updateQuestionArrayAfterDelete,
}) => {
  //  delete all questions
  const dellAllQuestions = () => {
    //dell questions
    questionsData.splice(0, questionsData.length);
    // update the array state
    updateQuestionArray();
  };

  /**
   *
   * @description this function is used to delete one question.
   * it accept the id of the question as a parameter and get the question from the questions array that its id equals to the passed id in the loop of the map function. The delete operation is performed by splice method
   *
   * 1- get the index of the question of the array
   * 2- use this index to be deleted by splice method
   * 3- update the state that holds the questions array
   */

  const dellOneQuestion = (id) => {
    // test if the array has values and then do the logic
    console.log(questionsData);
    if (questionsData.length >= 1) {
      const index = questionsData.findIndex((item, index) => index === id);
      questionsData.splice(index, 1);
      updateQuestionArrayAfterDelete([...questionsData]);
    }
  };
  /**
   * another way to delete one item in the question array by using filter method
   */
  const delItemUsingFilter = (id) => {
    if (questionsData.length >= 1) {
      let filteredQuestions = questionsData.filter(
        (item, index) => index !== id
      );
      updateQuestionArrayAfterDelete(filteredQuestions);
    }
  };
  // get the questions list using map method and put it in an accordion
  const questionsList =
    questionsData.length >= 1 ? (
      questionsData.map((item, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                px={1}
              >
                <Typography>{item.answer}</Typography>
                <IconButton
                  color="error"
                  /**
                   * here we can delete each item either by filter method or by splice method. we comment one and activate the other to check booth
                   *  */

                  // onClick={() => {
                  //   dellOneQuestion(index);
                  // }}
                  onClick={() => {
                    delItemUsingFilter(index);
                  }}
                >
                  <BackspaceIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Stack>
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
