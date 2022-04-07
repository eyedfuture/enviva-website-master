import styled from 'styled-components';

export const RelatedBox = styled.div`
  width: 100%;
  padding: 15% 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }
`;
