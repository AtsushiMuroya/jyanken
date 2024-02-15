import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { Judgment, Status } from "@/libs/jyanken";

type StatusBoxProps = {
  status: Status
}

export default function StatusBox({status}: StatusBoxProps) {
  const judgmentColor = (judgment: Judgment) => (
    {color: ["#000", "#2979FF", "#FF1744"][judgment]});
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell variant="head">勝ち</TableCell>
          <TableCell style={judgmentColor(Judgment.Win)}>{status.win}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">負け</TableCell>
          <TableCell style={judgmentColor(Judgment.Lose)}>{status.lose}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head">引き分け</TableCell>
          <TableCell style={judgmentColor(Judgment.Draw)}>{status.draw}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}