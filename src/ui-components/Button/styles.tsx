import styled, { css, keyframes } from 'styled-components';

interface IProps {
  cta?: boolean;
  block?: boolean;
}

export const Container = styled.button<IProps>`
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }

  ${({ cta }) =>
    cta &&
    css`
      padding: 0.7rem 2rem;
      font-weight: bolder;
      font-size: 1.2rem;
    `}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
`;

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  animation: 1s infinite ${spin} linear;
  height: 20px;
`;
