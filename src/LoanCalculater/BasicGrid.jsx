import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SpanningTable from "./SpanningTable";
import DateComponent from "./Component/Input/DateComponent";
import SelectLabels from "./Component/Input/SelectLabels";
import InputLabel from "@mui/material/InputLabel";

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
      <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} textAlign="right">
              <Item>
                <InputLabel>Date:</InputLabel>
                <DateComponent />
              </Item>
            </Grid>
            <Grid item xs={6} textAlign="left">
              <Item>
                <InputLabel>Text:</InputLabel>
                <TextField id="filled-basic" label="Filled" variant="filled" />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid  item xs={12}>
          <Item>
            <DateComponent />
          </Item>
          <Item>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </Item>
          <Item>
            <SelectLabels />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <SpanningTable rows={rows} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
