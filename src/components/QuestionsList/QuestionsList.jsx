/**
 * @description this components for listing the questions and thier answers
 */

import React from "react";
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

const QuestionsList = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "70%",
        height: "auto",
        margin: "1rem auto",
      }}
    >
      {/* accordion : list of questions */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is React?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* delete all  */}
      <Button
        variant="contained"
        color="error"
        size="large"
        startIcon={<DeleteIcon />}
        sx={{ textTransform: "none", margin: "1rem 0" }}
        fullWidth
      >
        Delete All Questions
      </Button>
    </Box>
  );
};

export default QuestionsList;
