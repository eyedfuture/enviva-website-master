import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    max-width: 600px;
  }

  @media screen and (max-width: 790px) {
    div {
      max-width: 500px;
    }
  }
  @media screen and (max-width: 700px) {
    div {
      max-width: 300px;
    }
  }
  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    div {
      max-width: auto;
    }
  }
`;
