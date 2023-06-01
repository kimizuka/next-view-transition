'use client';

import styled from 'styled-components';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HistoryContext } from '@/contexts/HistoryContext';
import { Card } from '@/components/organisms/Card';

export function AllPageLayout({ children }: {
  children: ReactNode
}) {
  const { history } = useContext(HistoryContext);
  const [ isSelect, setIsSelect ] = useState(getIsSelect(history[0]));
  const router = useRouter();

  useEffect(() => {
    setIsSelect(getIsSelect(history[0]));
  }, [history]);

  function getIsSelect(pathName: string) {
    return pathName !== '/';
  }

  function handleClickCard() {
    router.push('/articles/counterattack-of-the-timer');
  }

  return (
    <Wrapper>
      <main>
        <Card
          onClick={ handleClickCard }
          isSelect={ isSelect }
        />
      </main>
      <div>{ children }</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  > main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
`;