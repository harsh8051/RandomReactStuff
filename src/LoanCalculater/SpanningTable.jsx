import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export default function SpanningTable(props) {
  const invoiceSubtotal = subtotal(props.rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Details
            </TableCell>
            <TableCell align="right">Debit</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Interest</TableCell>
            <TableCell align="right">Installment</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.interest}</TableCell>
              <TableCell align="right">{row.installment}</TableCell>
              <TableCell align="right">{ccyFormat(row.sum)}</TableCell>
            </TableRow>
          ))}

          <TableRow>  
            <TableCell rowSpan={3} colSpan={3} />
            <TableCell ></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>  
            <TableCell >Interest Paid</TableCell>
            <TableCell align="right">1000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell >Total</TableCell>
            <TableCell align="right">1200</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
