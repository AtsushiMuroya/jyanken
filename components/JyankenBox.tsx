import { Button } from "@mui/material";
import { Te } from "@/libs/jyanken";

type JyankenBoxProps = {
  actionPon: (te: Te) => void
}
export default function JyankenBox({actionPon}: JyankenBoxProps) {
  const style = {marginLeft: 20};
  return (
    <div style={{marginTop: 40, marginBottom: 30, marginLeft: 50}}>
      <Button variant="contained" id="btn-guu"
        onClick={() => actionPon(Te.Guu)} style={style}>グー</Button>
      <Button variant="contained" id="btn-choki"
        onClick={() => actionPon(Te.Choki)} style={style}>チョキ</Button>
      <Button variant="contained" id="btn-paa"
        onClick={() => actionPon(Te.Paa)} style={style}>パー</Button>
    </div>
  );
}