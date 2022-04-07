import React from 'react';
import Link from 'next/link';
import theme from '../../../styles/theme';
import Paragraph from '../../../ui-components/Paragraph';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';
import Video from '../../../ui-components/Video';

import { Container, Anchor } from './styles';

const style = {
  section: {
    background: `${theme.colors.green.three} url('/static/assets/img/logo-pattern.svg')`,
    backgroundAttachment: 'fixed',
    position: 'relative' as const,
  },
  content: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
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
    marginTop: '1rem',
    textAlign: 'justify' as const,
  },
  link: {
    textDecoration: 'underline' as const,
  },
};

interface IProps {
  t: any;
}

const VideoSection: React.FC<IProps> = ({ t }) => {
  return (
    <Section style={style.section}>
      <Anchor id="video" />
      <Content style={style.content}>
        <Title style={style.title}>{t?.aboutPage?.healthSection?.title}</Title>
        <Container>
          <Video src="https://www.youtube.com/embed/QcQo6c_xZ5E" />
          <Paragraph style={style.description}>
            {t?.aboutPage?.healthSection?.description}
            <Link href="">
              <a style={style.link}>
                {t?.aboutPage?.healthSection?.callToAction}
              </a>
            </Link>
          </Paragraph>
        </Container>
      </Content>
    </Section>
  );
};

export default VideoSection;
