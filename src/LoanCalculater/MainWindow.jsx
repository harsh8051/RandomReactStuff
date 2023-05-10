import React from "react";
import Container from "@mui/material/Container";
import BasicGrid from "./BasicGrid";

export default function MainWindow() {
  return (
    <Container 
    sx={{
      color: 'success.dark',
      display: 'inline',
      fontWeight: 'bold',
      m: 1,
      fontSize: 14,
    }}
    fixed>
      <BasicGrid/>
    </Container>
  );
}
