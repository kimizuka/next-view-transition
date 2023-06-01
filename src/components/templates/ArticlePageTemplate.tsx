'use client';

import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HistoryContext } from '@/contexts/HistoryContext';

export function ArticlePageTemplate() {
  const { history } = useContext(HistoryContext);
  const [ isSelect, setIsSelect ] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsSelect(true);
  }, [history]);


  function handleClickBtnClose() {
    router.push('/');
  }

  return (
    <Wrapper>
      <a
        data-is-show={ String(isSelect) }
        onClick={ handleClickBtnClose }
        className="btn-close"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .btn-close {
    position: fixed;
    top: 16px; right: 16px;
    width: 44px; height: 44px;
    opacity: 0;
    transition: opacity .2s ease-in-out;
    cursor: pointer;

    &:before {
      display: block;
      position: absolute;
      top: 0; bottom: 0;
      margin: auto;
      width: 100%; height: 1px;
      content: '';
      background: black;
      transform: rotate(45deg);
    }

    &:after {
      display: block;
      position: absolute;
      top: 0; bottom: 0;
      margin: auto;
      width: 100%; height: 1px;
      content: '';
      background: black;
      transform: rotate(-45deg);
    }

    &[data-is-show='true'] {
      opacity: 1;
    }
  }
`;