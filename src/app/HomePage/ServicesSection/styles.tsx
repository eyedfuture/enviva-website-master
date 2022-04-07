import styled from 'styled-components';

export const BigButton = styled.div`
  cursor: pointer;
  width: 200px;
  height: 200px;
  /* background: ${({ theme }) => theme.colors.beige}; */
  position: relative;
  margin: auto;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-size: cover;
  background-position: center;

  a {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding-bottom: 2rem;
    h2 {
      color: #fff !important;
    }
    p {
      color: #fff;
      text-decoration: underline;
    }
  }

  &:hover {
    filter: brightness(1.02);
  }

  @media screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 575px) {
    width: 200px;
    height: 200px;
  }
`;
