import React from 'react';

import { Container, IFrame } from './styles';

interface IProps {
  src: string;
}

const Video: React.FC<IProps> = ({ src }) => {
  return (
    <Container>
      <IFrame
        frameborder="0"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Container>
  );
};

export default Video;
