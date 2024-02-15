import React, { useEffect, useState } from "react";
import styles from './index.module.css';

export default function Home() {
  const [human, setHuman] = useState<number>(0);
  const [computer, setComputer] = useState<number>(0);
  const [score, setScore] = useState<boolean>(false);

  const actionPon = (humanHand: number) => {
    const computerHand = Math.floor(Math.random() * 3);
    setHuman(humanHand);
    setComputer(computerHand);
    setScore(true);
  }


  const judge = ():number =>  (computer - human + 3) % 3;
  //ここに書くとエラーになる（無限ループ）
  // setHuman(humanHand);

  // 実行後に呼び出される
  // useEffect(() => {
  //   setTimeout(() => actionPon(2), 1000);
  // }, []);

  return (
    <div className={styles.jyanken}>
      <h1>じゃんけん ポン！</h1>
      <JyankenBox actionPon={actionPon} />
      {score ? <ScoreBox human={human} computer={computer} judgment={judge()}  /> : null}
    </div>
  );
}

type JyankenBoxProps = {
  actionPon: (humanHand: number) => void
}
function JyankenBox(props: JyankenBoxProps) {
  return (
    <div>
      <button onClick={() => props.actionPon(0)}>グー</button>
      <button onClick={() => props.actionPon(1)}>チョキ</button>
      <button onClick={() => props.actionPon(2)}>パー</button>
    </div>
  );
}

type ScoreBoxProps = {
  human: number,
  computer: number,
  judgment: number
}
function ScoreBox(props: ScoreBoxProps) {
  const teString = ["グー","チョキ", "パー"];
  const judgmentString = ["引き分け","勝ち", "負け"];

  return (
    <table>
      <tbody>
        <tr><th>あなた</th><td>{teString[props.human]}</td></tr>
        <tr><th>Computer</th><td>{teString[props.computer]}</td></tr>
        <tr><th>勝敗</th><td>{judgmentString[props.judgment]}</td></tr>
      </tbody>
    </table>
  );
}