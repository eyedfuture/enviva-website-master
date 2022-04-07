import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

interface IIFrame {
  [key: string]: string;
}
export const IFrame = styled.iframe<IIFrame>`
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
