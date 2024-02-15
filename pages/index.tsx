import { Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Te, Score, randomHand, judge, calcStatus } from "@/libs/jyanken";
import StatusBox from "@/components/StatusBox";
import JyankenBox from "@/components/JyankenBox";
import ScoreList from "@/components/ScoreList";
import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Home() {
  const [scores, setScores] = useState<Score[]>([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(panel);
    };

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
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>対戦結果</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ScoreList scores={scores}/>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>対戦成績</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StatusBox status={calcStatus(scores)} />
            </AccordionDetails>
          </Accordion>
        </Paper>
      </div>
  );
}