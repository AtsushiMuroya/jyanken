import React, { useState } from "react";
import { Box } from "@mui/material";
import { Te, Score, randomHand, judge } from "@/libs/jyanken";
import JyankenBox from "@/components/JyankenBox";
import ScoreList from "@/components/ScoreList";
import ApplicationBar from "@/components/ApplicationBar";


export default function Home() {
  const [scores, setScores] = useState<Score[]>([]);

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

  return (
    <Box>
      <ApplicationBar />
      <Box style={{width: 400}}>
        <h3>対戦結果</h3>
        <JyankenBox actionPon={pon} />
        <ScoreList scores={scores} />
      </Box>
    </Box>
  )
}