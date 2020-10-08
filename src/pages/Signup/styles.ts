import styled from 'styled-components';
import { shade } from 'polished';

import BackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  button {
    background: #ff9000;
    height: 56px;
    width: 100%;
    border: 0;
    border-radius: 10px;
    color: #312e38;
    font-weight: 500;
    padding: 0 16px;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  > a {
    color: #f4ede8;

    display: flex;
    align-items: center;

    transition: color 0.5s;

    &:hover {
      svg {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`;
