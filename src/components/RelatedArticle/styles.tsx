import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    text-align: center;
    height: 100%;
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContentBox = styled.div`
  p {
    margin-bottom: 0;

    &:first-child {
      font-weight: bold;
    }
  }
`;
