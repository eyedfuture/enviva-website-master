import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.orange};
  padding: 0 0 2rem 0;
`;

export const Banner = styled.div`
  background: ${({ theme }) => theme.colors.beige};
  padding: 1rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 2rem;
  p:first-child {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-bottom: 0.1rem;

  &.hide {
    overflow-y: hidden;
    max-height: 0;
    padding-bottom: 0;
  }
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const SocialListItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 1rem 0 0;
`;

export const ImageBox = styled.div`
  max-width: 70px;
  margin-left: auto;
  margin-bottom: 1rem;

  @media screen and (max-width: 767px) {
    margin: auto;
    margin-bottom: 1rem;
  }
`;
