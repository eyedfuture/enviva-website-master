import styled from 'styled-components';

export const Container = styled.ul`
  color: ${({ theme }) => theme.colors.dark};
  letter-spacing: 0.1rem;
`;
export const Item = styled.li`
  margin-bottom: 1rem;
  line-height: 2rem;
  margin-left: 1rem;
`;
