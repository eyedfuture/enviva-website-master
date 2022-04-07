import styled from 'styled-components';

const Section = styled.section`
  padding-right: 2rem;
  padding-left: 2rem;
  position: relative;

  @media screen and (max-width: 700px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default Section;
