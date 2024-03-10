import { createContext } from "react";

const sessionContext = createContext({
  sessionCount: 0,
  setSessionCount: (count: number) => {},
  maxSessionCount: 3,
  setMaxSessionCount: (count: number) => {},
  sessionNumbers: [] as number[],
  setSessionNumbers: (numbers: number[]) => {},
  numberIndex: 0,
  setNumberIndex: (index: number) => {},
  correctAnswerCount: 0,
  setCorrectAnswerCount: (count: number) => {},
  resetData: () => {},
});

export default sessionContext;
