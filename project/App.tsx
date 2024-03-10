import React, { useState } from "react";

import RootNavigator from "./client/navigation/RootNavigator";
import GameContext from "./client/context/GameContext";

export default function MainApp() {
  const [gameCount, setGameCount] = useState(0);
  const [maxGameCount, setMaxGameCount] = useState(2);
  const [sessionNumbers, setSessionNumbers] = useState<number[]>([]);
  const [numberIndex, setNumberIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const resetData = () => {
    setGameCount(0);
    setMaxGameCount(2);
    setSessionNumbers([]);
    setNumberIndex(0);
    setCorrectAnswerCount(0);
  };

  return (
    <GameContext.Provider
      value={{
        gameCount,
        setGameCount,
        maxGameCount,
        setMaxGameCount,
        sessionNumbers,
        setSessionNumbers,
        numberIndex,
        setNumberIndex,
        correctAnswerCount,
        setCorrectAnswerCount,
        resetData,
      }}
    >
      <RootNavigator />
    </GameContext.Provider>
  );
}
