import Image from 'next/image';
import React from 'react';
import theme from '../../../styles/theme';
import Paragraph from '../../../ui-components/Paragraph';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';

import { ImageBox } from './styles';
import BrandBanner from '../BrandBanner/index';

const style = {
  content: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  title: {
    textAlign: 'center' as const,
    letterSpacing: '0.1rem',
    color: theme.colors.dark,
    marginBottom: '1rem',
    fontSize: '2rem',
  },
  description: {
    letterSpacing: '0.1rem',
    color: theme.colors.dark,
    lineHeight: '2rem',
    textIndent: '2rem',
    marginBottom: '1rem',
    textAlign: 'justify' as const,
  },
};

interface IProps {
  t: any;
}

const AboutSection: React.FC<IProps> = ({ t }) => {
  return (
    <>
      <Section>
        <Content style={style.content}>
          <Title style={style.title}>{t?.aboutPage?.main?.title}</Title>
          {t?.aboutPage?.main?.description.map(item => (
            <Paragraph key={item} style={style.description}>
              {item}
            </Paragraph>
          ))}
        </Content>
      </Section>
      <BrandBanner />
      <Section>
        <Content style={style.content}>
          <ImageBox>
            <Image
              src={`/static/assets/img/content/Envivame_Banner_SaudeCircular_1050x200px_${t.locale}.jpg`}
              layout="responsive"
              width={1050}
              height={200}
            />
          </ImageBox>
        </Content>
      </Section>
    </>
  );
};

export default AboutSection;
