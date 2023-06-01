'use client';

import styled from 'styled-components';

export function Card({
  onClick = function() {},
  isSelect = false
}: {
  onClick?: () => void;
  isSelect?: boolean;
}) {
  return (
    <Wrapper
      data-is-select={ String(isSelect) }
      onClick={ onClick }
    >
      <div className="inner">
        <img
          width={ 300 }
          height={ 169 }
          src={ '/images/counterattack-of-the-timer.jpg' }
        />
        <div className="body">
          <h2>タイマーの逆襲</h2>
          <h3>逆にスマートスピーカーから指定された時間に「時間です」と応えてあげるアプリケーションです。</h3>
          <p>いつもタイマーで時間を教えてくれるスマートスピーカー。感謝の気持ちを込めて、逆にタイマーになってあげましょう。<br />スマートスピーカー側から「ねえ人間、5秒経ったら教えて」といった感じでリクエストがくるので、指定された時間になったら「時間です」と教えてあげてください。</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border: 1px solid #eee;
  border-radius: 16px;
  width: 300px; height: 300px;
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, .2);
  overflow: hidden;
  transition: transform .2s ease-in-out;
  cursor: pointer;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  img {
    flex-shrink: 0;
    object-fit: cover;
  }

  .body {
    padding: 16px;
    height: 100%;
    overflow: hidden;
  }

  h2 {
    font-size: 12px;
  }

  h3 {
    margin-top: 8px;
    font-size: 10px;
    line-height: 2em;
  }

  p {
    margin-top: 8px;
    font-size: 10px;
    line-height: 2em;
    opacity: 0;
    transition: opacity .2s ease-in-out;
  }

  &[data-is-select='true'] {
    height: 400px;
    transform: scale(1.2);

    p {
      opacity: 1;
    }
  }
`;