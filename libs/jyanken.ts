export enum Te { Guu = 0, Choki, Paa }
export enum Judgment { Draw = 0, Win, Lose }
export type Score = {
  human: Te,
  computer: Te,
  judgment: Judgment,
  matchDate: Date
}
export type Status = {
  draw: number,
  win: number,
  lose: number
}

export const randomHand = (): Te => {
  return Math.floor(Math.random() * 3);
}

export const judge = (humanHand: Te, computerHand: Te): Judgment => {
  return (computerHand - humanHand + 3) % 3;
}

export const calcStatus = (scores: Score[]): Status => {
  const jugdeCount = (judge: Judgment) => {
    let count = 0;
    for (const score of scores) {
      if (score.judgment === judge) count++;
    }
    return count;
  }
  // よりスマートなjugdeCount関数
  // const jugdeCount = (judge: Judgment) =>
  //   scores.reduce((count, score) => score.judgment === judge ? count + 1 : count, 0);

  return {
    draw: jugdeCount(Judgment.Draw),
    win:  jugdeCount(Judgment.Win),
    lose: jugdeCount(Judgment.Lose)
  };
}