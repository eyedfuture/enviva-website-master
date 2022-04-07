import Link from 'next/link';
import React from 'react';
import theme from '../../../styles/theme';
import Button from '../../../ui-components/Button';
import Section, { Content } from '../../../ui-components/Section';
import Video from '../../../ui-components/Video';

import { Container, ButtonBox } from './styles';

const style = {
  section: {
    background: `${theme.colors.green.three} url('/static/assets/img/logo-pattern.svg')`,
    backgroundAttachment: 'fixed',
  },
  content: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
};

interface IProps {
  t: any;
}

const VideoSection: React.FC<IProps> = ({ t }) => {
  return (
    <Section style={style.section}>
      <Content style={style.content}>
        <Container>
          <Video src="https://www.youtube.com/embed/FcqpMNmAjrc" />
          <ButtonBox>
            <Link href="https://api.whatsapp.com/send?phone=5511947377337">
              <a target="_blank" rel="noreferrer">
                <Button>{t.teamPage.video.cta}</Button>
              </a>
            </Link>
          </ButtonBox>
        </Container>
      </Content>
    </Section>
  );
};

export default VideoSection;
