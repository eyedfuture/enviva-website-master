import React from 'react';
import theme from '../../../styles/theme';
import Section from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';

import { Container, StyledCarousel, CaoruselContent } from './styles';

const gallery = [
  { src: `/static/assets/img/content/consultorio/1.jpg` },
  { src: `/static/assets/img/content/consultorio/2.jpg` },
  { src: `/static/assets/img/content/consultorio/3.jpg` },
  { src: `/static/assets/img/content/consultorio/4.jpg` },
  { src: `/static/assets/img/content/consultorio/5.jpg` },
  { src: `/static/assets/img/content/consultorio/6.jpg` },
  { src: `/static/assets/img/content/consultorio/7.jpg` },
  { src: `/static/assets/img/content/consultorio/8.jpg` },
  { src: `/static/assets/img/content/consultorio/9.jpg` },
  { src: `/static/assets/img/content/consultorio/10.jpg` },
  { src: `/static/assets/img/content/consultorio/11.jpg` },
  { src: `/static/assets/img/content/consultorio/12.jpg` },
  { src: `/static/assets/img/content/consultorio/13.jpg` },
  { src: `/static/assets/img/content/consultorio/14.jpg` },
  { src: `/static/assets/img/content/consultorio/15.jpg` },
  { src: `/static/assets/img/content/consultorio/16.jpg` },
  { src: `/static/assets/img/content/consultorio/17.jpg` },
  { src: `/static/assets/img/content/consultorio/18.jpg` },
  { src: `/static/assets/img/content/consultorio/19.jpg` },
  { src: `/static/assets/img/content/consultorio/20.jpg` },
];

const style = {
  title: {
    textAlign: 'center' as const,
    letterSpacing: '0.1rem',
    color: theme.colors.dark,
    marginBottom: '1rem',
    fontSize: '2rem',
  },
};

const CarouselSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title style={style.title}>enviva.me</Title>
        <StyledCarousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
        >
          {gallery.map(item => (
            <div key={item.src}>
              <CaoruselContent
                style={{ backgroundImage: `url('${item.src}')` }}
              />
            </div>
          ))}
        </StyledCarousel>
      </Container>
    </Section>
  );
};

export default CarouselSection;
