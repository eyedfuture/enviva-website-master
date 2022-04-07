import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  padding: 0 6rem 0 3rem;

  @media screen and (max-width: 766px) {
    padding: 0;
  }
`;
export const ButtonBox = styled.div`
  @media screen and (max-width: 766px) {
    text-align: center;
  }
`;
