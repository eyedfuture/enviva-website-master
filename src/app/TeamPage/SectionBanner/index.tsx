import Image from 'next/image';
import React from 'react';

import { Container } from './styles';

interface IProps {
  t: any;
}

const SectionBanner: React.FC<IProps> = ({ t }) => {
  return (
    <Container>
      <Image
        src={`/static/assets/img/content/Envivame_Banner_Equipe_SemFlores_1500x350px_${t.locale}.jpg`}
        width={1500}
        height={350}
        layout="responsive"
      />
    </Container>
  );
};

export default SectionBanner;
