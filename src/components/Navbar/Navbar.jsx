/**
 * @description application Navba component
 */
import React from "react";
// mui components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
// icon
import QuizIcon from "@mui/icons-material/Quiz";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={1}>
        <Container>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <QuizIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Typography variant="h6" color="inherit" component="div">
                FAQ Application
              </Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
