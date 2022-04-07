import styled from 'styled-components';

export const ImageBox = styled.div`
  margin-bottom: 1rem;

  div {
    max-width: 400px;
    margin: auto;
  }
`;

export const ContentBox = styled.div`
  white-space: pre-line;
`;

export const Container = styled.div`
  .hide-mobile {
    display: none;
  }
  .hide-desktop {
    display: block;
  }

  @media screen and (max-width: 991px) {
    .hide-mobile {
      display: block;
    }
    .hide-desktop {
      display: none;
    }
  }
`;

export const Divisor = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.beige};
  margin: 4rem 0;
  opacity: 0.8;
`;
