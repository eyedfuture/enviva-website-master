/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

interface IStyledInput {
  [string: string]: any;
}

export const InputLabel = styled.label`
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
  padding: 7px 15px;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 3px;
  border: 1px solid transparent;
  font-size: 1rem;
  display: flex;


  &.error {
    border: 1px solid ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledInput = styled.textarea<IStyledInput>`
 font-size: 1rem;
 background: transparent;
 -webkit-appearance: none;
 border: 0;
 width: 100%;
 padding: 0 5px;
 resize: none;

 &:disabled{
   cursor: not-allowed;
 }
`;

interface ILabel {
  htmlFor: string;
}

export const Label = styled.span<ILabel>`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.9rem;
  display: block;
  margin-bottom: .5rem;
`;

const fadeError = keyframes`
  from{
    opacity: 0;
    transform: translateY(-5px);
  }

  to{
    opacity: 1;
    transform: translateY(0);
  }
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 0.9rem;
  font-weight: 400;
  transition: .2s;
  animation: ${fadeError} linear 500ms;
  display: block;
  margin-bottom: 0.5rem;

  span{
    color: transparent;
  }
`;
