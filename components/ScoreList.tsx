import { Judgment, Score } from "@/libs/jyanken"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

type ScoreListProps = {
  scores: Score[]
}
export default function ScoreList({scores}: ScoreListProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>時間</TableCell><TableCell>人間</TableCell>
          <TableCell>コンピュータ</TableCell><TableCell>結果</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {scores.map((score, ix) => <ScoreListItem key={ix} score={score} />)}
      </TableBody>
    </Table>
  );
}

type ScoreListItemProps = {
  score: Score
}
function ScoreListItem({score}: ScoreListItemProps) {
  const teString = ["グー","チョキ", "パー"];
  const judgmentString = ["引き分け","勝ち", "負け"];
  const dateHHMMSS = (d: Date) => d.toTimeString().substring(0, 8);
  const judgmentColor = (judgment: Judgment) => (
    {color: ["#000", "#2979FF", "#FF1744"][judgment]});

  const judgment = score.judgment;

  return (
    <TableRow>
      <TableCell style={judgmentColor(judgment)}>{dateHHMMSS(score.matchDate)}</TableCell>
      <TableCell style={judgmentColor(judgment)}>{teString[score.human]}</TableCell>
      <TableCell style={judgmentColor(judgment)}>{teString[score.computer]}</TableCell>
      <TableCell style={judgmentColor(judgment)}>{judgmentString[judgment]}</TableCell>
    </TableRow>
  );
}