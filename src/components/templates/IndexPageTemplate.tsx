'use client';

import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { HistoryContext } from '@/contexts/HistoryContext';

export function IndexPageTemplate() {
  const { history } = useContext(HistoryContext);
  const [ isInit, setIsInit ] = useState(1 < history.length);

  useEffect(() => {
    if (!isInit) {
      setIsInit(true);
    }
  }, [isInit]);

  return (
    <Wrapper data-is-init={ isInit } />
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background: white;
  opacity: 1;
  transition: opacity .4s .4s ease-in-out;

  &[data-is-init='true'] {
    opacity: 0;
    pointer-events: none;
  }
`;