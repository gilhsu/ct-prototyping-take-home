import React, { useState } from "react";

import RootNavigator from "./client/navigation/RootNavigator";
import SessionContext from "./client/context/SessionContext";

export default function MainApp() {
  const [sessionCount, setSessionCount] = useState(0);
  const [maxSessionCount, setMaxSessionCount] = useState(2);
  const [sessionNumbers, setSessionNumbers] = useState<number[]>([]);
  const [numberIndex, setNumberIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const resetData = () => {
    setSessionCount(0);
    setMaxSessionCount(2);
    setSessionNumbers([]);
    setNumberIndex(0);
    setCorrectAnswerCount(0);
  };

  return (
    <SessionContext.Provider
      value={{
        sessionCount,
        setSessionCount,
        maxSessionCount,
        setMaxSessionCount,
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
    </SessionContext.Provider>
  );
}
