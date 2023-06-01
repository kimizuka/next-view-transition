'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/organisms/Card';

export function IndexPageTemplate() {
  const [ isSelect, setIsSelect ] = useState(false);
  const router = useRouter();

  function handleClickCard() {
    try {
      (document as any).startViewTransition(() => {
        setIsSelect(true);
        setTimeout(() => {
          router.push('/articles/counterattack-of-the-timer');
        }, 400);
      });
    } catch (err) {
      console.error(err);
      router.push('/articles/counterattack-of-the-timer');
    }
  }

  return (
    <Wrapper>
      <Card
        onClick={ handleClickCard }
        isSelect={ isSelect }
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
`;