'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/organisms/Card';

export function ArticlePageTemplate() {
  const [ isSelect, setIsSelect ] = useState(true);
  const router = useRouter();

  function handleClickBtnClose() {
    try {
      (document as any).startViewTransition(() => {
        setIsSelect(false);
        setTimeout(() => {
          router.push('/');
        }, 400);
      });
    } catch (err) {
      console.error(err);
      router.push('/');
    }
  }

  return (
    <Wrapper>
      <Card
        isSelect={ isSelect }
      />
      <a
        data-is-show={ String(isSelect) }
        onClick={ handleClickBtnClose }
        className="btn-close"
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