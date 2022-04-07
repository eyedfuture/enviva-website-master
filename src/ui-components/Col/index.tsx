import styled from 'styled-components';

interface IProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const Col = styled.div<IProps>`
  position: relative;
  @media screen and (min-width: 0px) {
    grid-column-start: span ${({ xs }) => xs || 1};
  }

  @media screen and (min-width: 576px) {
    grid-column-start: span ${({ sm, xs }) => sm || xs || 1};
  }

  @media screen and (min-width: 768px) {
    grid-column-start: span ${({ md, sm, xs }) => md || sm || xs || 1};
  }

  @media screen and (min-width: 992px) {
    grid-column-start: span ${({ lg, md, sm, xs }) => lg || md || sm || xs || 1};
  }

  @media screen and (min-width: 1200px) {
    grid-column-start: span
      ${({ xl, lg, md, sm, xs }) => xl || lg || md || sm || xs || 1};
  }

  @media screen and (min-width: 1400px) {
    grid-column-start: span
      ${({ xxl, xl, lg, md, sm, xs }) => xxl || xl || lg || md || sm || xs || 1};
  }
`;

export default Col;
