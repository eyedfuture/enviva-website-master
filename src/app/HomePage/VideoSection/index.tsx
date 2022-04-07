import Link from 'next/link';
import React from 'react';
import theme from '../../../styles/theme';
import Button from '../../../ui-components/Button';
import Col from '../../../ui-components/Col';
import Paragraph from '../../../ui-components/Paragraph';
import Row from '../../../ui-components/Row';
import { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';
import { Section, ButtonBox } from './styles';
import Video from '../../../ui-components/Video';

const style = {
  content: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  title: {
    color: theme.colors.dark,
    fontSize: '2rem',
    textAlign: 'center' as const,
    marginBottom: '1rem',
    letterSpacing: '.1rem',
  },
  description: {
    marginBottom: '1rem',
    padding: '0 1rem',
    textAlign: 'justify' as const,
    textIndent: '2rem',
    letterSpacing: '.1rem',
    lineHeight: '2rem',
  },
  button: {
    letterSpacing: '.1rem',
  },
};

interface IProps {
  t: any;
}

const VideoSection: React.FC<IProps> = ({ t }) => {
  return (
    <Section>
      <Content style={style.content}>
        <Row colGap={16} rowGap={16}>
          <Col xs={16} lg={6}>
            <Video src="https://www.youtube.com/embed/zX8BD_FcnSU" />
          </Col>
          <Col xs={16} lg={6}>
            <Title level={2} style={style.title}>
              {t.home.videoSection.title}
            </Title>
            <Paragraph style={style.description}>
              {t.home.videoSection.description}
            </Paragraph>
            <ButtonBox>
              <Button cta style={style.button}>
                <Link href="/sobre-nos">
                  <a>{t.home.healthSection.callToAction}</a>
                </Link>
              </Button>
            </ButtonBox>
          </Col>
        </Row>
      </Content>
    </Section>
  );
};

export default VideoSection;
