import styled, { css } from 'styled-components';

export const AddressBox = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0px;
  padding: 5px 15px;

  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.green.three};
  color: ${({ theme }) => theme.colors.gray};
  z-index: 1000;

  @media screen and (max-width: 1292px) {
    grid-gap: 16px;
  }

  @media screen and (max-width: 888px) {
    display: none;
  }
`;

export const Address = styled.p`
  grid-column: 2/3;

  @media screen and (max-width: 1292px) {
    grid-column: 1;
  }
`;

export const Phone = styled.p`
  text-align: right;
`;

export const Container = styled.header`
  z-index: 1000;
  width: 100%;
  position: sticky;
  top: 0;
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
  height: 60px;
`;

export const Nav = styled.nav`
  height: 100%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0.5rem;
    max-height: auto;

    &.hide {
      padding: 0 0.5rem;
      max-height: 0;
      overflow: hidden;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

interface IMenuItem {
  borderEffect?: 'none';
}

export const MenuItem = styled.li<IMenuItem>`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 300;
  text-transform: uppercase;
  font-size: 0.9rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 0px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.orange};
    transition: 0.3s;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  ${({ borderEffect }) =>
    borderEffect === 'none' &&
    css`
      &:before {
        display: none;
      }
    `}

  @media screen and (max-width: 1000px) {
    margin: 0.5rem 0 1rem;
  }
`;

export const Locale = styled.span`
  cursor: pointer;

  &.active {
    font-weight: bold;
  }
`;

export const MenuButton = styled.div`
  width: 25px;
  height: 20px;
  top: -2px;
  position: relative;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Hamburguer = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.orange};

  &:before {
    content: '';
    width: 75%;
    height: 100%;
    position: absolute;
    top: 5px;
    left: 0;
    background: ${({ theme }) => theme.colors.orange};
  }
`;

export const LocationIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.orange};
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
