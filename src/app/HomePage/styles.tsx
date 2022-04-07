import styled from 'styled-components';

export const CovidBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  padding: 5px 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  letter-spacing: 0.1rem;

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
