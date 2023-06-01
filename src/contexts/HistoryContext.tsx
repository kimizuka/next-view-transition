'use client';

import { createContext, ReactElement, useState } from 'react';

export type typeState = {
  history: string[];
  setNewPathName: (pathName: string) => void;
};

const initState: typeState = {
  history: [],
  setNewPathName: () => {}
};

const HistoryContext = createContext(initState);
const maxLength = 9;

function HistoryProvider({ children }: { children: ReactElement }) {
  const [ history, setHistory ] = useState(initState.history);

  function setNewPathName(pathName: string) {
    const tmp = [pathName];

    for (let i = 0; i < maxLength - 1; ++i) {
      if (history[i]) {
        tmp.push(history[i]);
      }
    }

    setHistory(tmp);
  }

  const useContext = () => {
    return {
      history,
      setNewPathName,
    };
  };

  return (
    <HistoryContext.Provider value={ useContext() }>
      { children }
    </HistoryContext.Provider>
  );
}

export { HistoryContext, HistoryProvider };