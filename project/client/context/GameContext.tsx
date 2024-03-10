import { createContext } from "react";

const maxGameCount = createContext({
  gameCount: 0,
  setGameCount: (count: number) => {},
  maxGameCount: 3,
  setMaxGameCount: (count: number) => {},
  sessionNumbers: [] as number[],
  setSessionNumbers: (numbers: number[]) => {},
  numberIndex: 0,
  setNumberIndex: (index: number) => {},
  correctAnswerCount: 0,
  setCorrectAnswerCount: (count: number) => {},
  resetData: () => {},
});

export default maxGameCount;
