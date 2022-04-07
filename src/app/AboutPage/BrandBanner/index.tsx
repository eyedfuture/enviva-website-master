import React from 'react';

import { Container, GIF } from './styles';

const BrandBanner: React.FC = () => {
  return (
    <Container>
      <GIF
        alt="enviva.me gif"
        src="/static/assets/img/content/gif/04_Envivame_LogoAnimado_Branco_300x300px.gif"
      />
    </Container>
  );
};

export default BrandBanner;
