import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
`;

export const Divisor = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
  margin: 0.5rem 0 1rem;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

export const BlogPost = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.dark};
  text-align: justify;

  ul,
  ol {
    padding-left: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 1rem;
  }

  iframe,
  img,
  video {
    text-align: center;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: underline;
  }
`;
