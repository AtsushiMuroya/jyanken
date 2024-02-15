import { Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Te, Score, randomHand, judge, calcStatus } from "@/libs/jyanken";
import StatusBox from "@/components/StatusBox";
import JyankenBox from "@/components/JyankenBox";
import ScoreList from "@/components/ScoreList";

export default function Home() {
  const [scores, setScores] = useState<Score[]>([]);
  const [tabIndex, setTabIndex] = useState(0);

  const pon = (humanHand: Te) => {
    const computerHand = randomHand();
    const score: Score = {
      human: humanHand,
      computer: computerHand,
      judgment: judge(humanHand, computerHand),
      matchDate: new Date()
    };
    setScores([score, ...scores]);
  };

  const tabStyle = {width: 200, height: 50, color: '#fff', backgroundColor: '#01bcd4'};
  return (
      <div style={{marginLeft: 30}}>
        <h1>じゃんけん ポン！</h1>
        <JyankenBox actionPon={pon} />
        <Paper style={{width: 400}}>
          <Tabs value={tabIndex} onChange={(_, ix) => setTabIndex(ix)}>
            <Tab label="対戦結果" value={0} style={tabStyle}/>
            <Tab label="対戦成績" value={1} style={tabStyle} />
          </Tabs>
          { tabIndex === 0 ? <ScoreList scores={scores} /> : null}
          { tabIndex === 1 ? <StatusBox status={calcStatus(scores)} /> : null}
        </Paper>
      </div>
  );
}