import styled from 'styled-components';

export const BreadCrumbContainer = styled.div`
  margin-bottom: 1rem;
`;
export const BreadCrumb = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  letter-spacing: 0.1rem;

  &:after {
    content: '/';
    position: relative;
    margin: 0 0.5rem;
  }

  &:last-child {
    font-weight: bolder;
    &:after {
      display: none;
    }
  }
`;
