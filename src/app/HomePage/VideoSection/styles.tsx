import styled from 'styled-components';

export const Section = styled.section`
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  background: ${({ theme }) => theme.colors.green.three}
    url('/static/assets/img/logo-pattern.svg');
  background-attachment: fixed;

  @media screen and (max-width: 700px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const ButtonBox = styled.div`
  text-align: center;
`;
