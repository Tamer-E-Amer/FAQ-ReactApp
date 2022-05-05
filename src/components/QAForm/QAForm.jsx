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

const QAForm = () => {
  return (
    <form style={{ width: "70%", height: "auto", margin: "auto" }}>
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
        />
        {/* answer */}
        <TextField
          variant="outlined"
          label="Answer"
          color="secondary"
          fullWidth
          multiline
          rows={4}
        />
        {/* submit Button */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddCircleOutlineIcon />}
          sx={{ textTransform: "none" }}
          fullWidth
        >
          Add question
        </Button>
      </Stack>
    </form>
  );
};

export default QAForm;
