import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
`;

export const CategoryList = styled.ul`
  list-style: none;
`;

export const CategoryListItem = styled.li`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;
