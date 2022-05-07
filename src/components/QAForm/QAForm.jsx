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
// noti snackbar
import { useSnackbar } from "notistack";
//////////////////////////////////////////////////////////////////////////////////////
const QAForm = ({ updateQuestionArray, questionsData }) => {
  // using snack bar for message confirmation
  const { enqueueSnackbar } = useSnackbar();
  // form data state
  const [formData, setFormData] = React.useState({
    question: "",
    answer: "",
  });
  // state for error handling
  const [errorMsgs, setErrorMsg] = React.useState({});
  // state for submitting
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // change handler form form inputes
  const onChangeHandler = (e) => {
    e.persist();
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
    if (e) e.preventDefault();
    // validate formData
    setErrorMsg(validate(formData));
    // change submitting state
    setIsSubmitting(true);
  };

  React.useEffect(() => {
    if (isSubmitting && Object.keys(errorMsgs).length === 0 && isSubmitting) {
      addQuestion("success");
    }
  }, [errorMsgs]);

  /**
   * @description this function is used to validate the form inputs
   * @param {object} : form data state object
   */
  const validate = (values) => {
    const errors = {};
    // test quesion is empty
    if (values.question == "") {
      errors.questionMsg = "Question is required";
    }
    // test answer is empty
    if (!values.answer) {
      errors.answerMsg = "Answer is required";
    }
    return errors;
  };

  const addQuestion = (variant) => {
    questionsData.push(formData);
    // make form empty after submition
    setFormData({
      question: "",
      answer: "",
    });
    updateQuestionArray();
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <form
      style={{ width: "70%", height: "auto", margin: "auto" }}
      onSubmit={submitQuestion}
      noValidate
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
          // validation
          required
          error={!!errorMsgs.questionMsg}
          helperText={errorMsgs.questionMsg}
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
          // validation
          required
          error={!!errorMsgs.answerMsg}
          helperText={errorMsgs.answerMsg}
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
          // onClick={submitQuestion}
        >
          Add question
        </Button>
      </Stack>
    </form>
  );
};

export default QAForm;
