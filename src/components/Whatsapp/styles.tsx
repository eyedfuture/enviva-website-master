import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 998;
  a {
    background: #128c7e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    font-size: 1.7rem;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
