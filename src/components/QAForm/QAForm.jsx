/**
 * @description this component contains the form in which we can add questions and thier answers. It has only to fields: one for the question and the other for the answer and then submit button
 */
import React from "react";
// mui Components
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// questions array
import { questions } from "../../data/questions";
const QAForm = ({ updateQuestionArray }) => {
  // state form the form data
  const [formData, setFormData] = React.useState({
    id: Math.random(),
    question: "",
    answer: "",
  });

  // change handler form form inputes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // submit form function
  const submitQuestion = (e) => {
    e.preventDefault();
  };

  const addQuestion = () => {
    questions.push(formData);
    // make form empty after submition
    setFormData({
      question: "",
      answer: "",
    });
    updateQuestionArray();
  };

  return (
    <form
      style={{ width: "70%", height: "auto", margin: "auto" }}
      onSubmit={submitQuestion}
    >
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "250px" }}
        my={4}
      >
        {/* question */}
        <TextField
          variant="outlined"
          label="Question"
          color="secondary"
          fullWidth
          name="question"
          value={formData.question}
          onChange={onChangeHandler}
        />
        {/* answer */}
        <TextField
          variant="outlined"
          label="Answer"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          name="answer"
          value={formData.answer}
          onChange={onChangeHandler}
        />
        {/* submit Button */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddCircleOutlineIcon />}
          sx={{ textTransform: "none" }}
          fullWidth
          type="submit"
          onClick={addQuestion}
        >
          Add question
        </Button>
      </Stack>
    </form>
  );
};

export default QAForm;
