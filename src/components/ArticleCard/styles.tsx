import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: ${({ theme }) => theme.colors.beige};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Image = styled.div`
  padding-top: 300px;
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  background-size: cover;
  background-position: center;
`;

export const ContentBox = styled.div`
  margin: auto;
  background: ${({ theme }) => theme.colors.orange};
  width: 95%;
  padding: 1rem;
  margin-top: -20px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
