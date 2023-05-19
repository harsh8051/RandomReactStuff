import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SpanningTable from "./SpanningTable";
import DateComponent from './Component/DateComponent'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function createRow(date, amount) {
  const interest = (amount * 12) / 100;
  const installment = 0;
  const sum = amount + interest;
  return { date, amount, interest, installment, sum };
}

export default function BasicGrid() {
  const rows = [createRow("10/03/2021", 100)];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Item><DateComponent/></Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </Item>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid xs={12}>
          <Item>
            <SpanningTable rows={rows} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
