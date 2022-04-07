import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Content = styled.div`
  height: 100%;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const Picture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
