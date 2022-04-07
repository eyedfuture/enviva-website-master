import styled from 'styled-components';

interface IProps {
  colGap?: number;
  rowGap?: number;
}

const Row = styled.div<IProps>`
  display: grid;
  grid-row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : 0)};
  grid-column-gap: ${({ colGap }) => (colGap ? `${colGap}px` : 0)};
  grid-template-columns: repeat(12, 1fr);
`;

export default Row;
