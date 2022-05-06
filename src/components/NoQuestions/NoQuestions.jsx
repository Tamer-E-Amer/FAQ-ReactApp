/**
 * @description this is a message that show that there is no question in our question list
 */
import React from "react";
// mui components
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// mui icons
import InfoIcon from "@mui/icons-material/Info";

const NoQuestions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        "& > :not(style)": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 100,
          color: "red",
          backgroundColor: "#E1DCDC",
          textAlign: "center",
          fontWeight: 500,
        },
      }}
    >
      <Paper variant="outlined">
        There are no Questions !!
        <InfoIcon sx={{ fontSize: 30, margin: "0 10px" }} color="primary" />
      </Paper>
    </Box>
  );
};

export default NoQuestions;
