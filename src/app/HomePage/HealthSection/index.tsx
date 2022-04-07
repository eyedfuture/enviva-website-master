import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import theme from '../../../styles/theme';
import Button from '../../../ui-components/Button';
import Col from '../../../ui-components/Col';
import Paragraph from '../../../ui-components/Paragraph';
import Row from '../../../ui-components/Row';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';
import { ButtonBox, ImageBox } from './styles';

const style = {
  content: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  col: {
    textAlign: 'center' as const,
    position: 'relative' as const,
  },
  title: {
    color: theme.colors.dark,
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
    fontSize: '2rem',
    letterSpacing: '.1rem',
  },
  subtitle: {
    color: theme.colors.dark,
    textAlign: 'center' as const,
    fontWeight: 'normal' as const,
    marginBottom: '1rem',
    letterSpacing: '.1rem',
  },
  description: {
    marginBottom: '1.5rem',
    textAlign: 'justify' as const,
    textIndent: '2rem',
    letterSpacing: '.1rem',
    lineHeight: '2rem',
    whiteSpace: 'pre-line' as const,
  },
  row: {
    marginBottom: '1.5rem',
  },
  button: {
    letterSpacing: '.1rem',
  },
};

interface IProps {
  t: any;
}

const HealthSection: React.FC<IProps> = ({ t }) => {
  return (
    <Section>
      <Content style={style.content}>
        <Title level={1} style={style.title}>
          {t.home.healthSection.title}
        </Title>
        <Title level={2} style={style.subtitle}>
          {t.home.healthSection.subtitle}
        </Title>
        <Paragraph style={style.description}>
          {t.home.healthSection.description}
        </Paragraph>
        <Row colGap={16} rowGap={16} style={style.row}>
          <Col style={style.col} xs={6}>
            <ImageBox>
              <Image
                src="/static/assets/img/content/dras/rosangela.png"
                alt="Rosangela"
                layout="responsive"
                width={100}
                height={100}
              />
            </ImageBox>
          </Col>
          <Col style={style.col} xs={6}>
            <ImageBox>
              <Image
                src="/static/assets/img/content/dras/andrea.png"
                alt="Andrea"
                layout="responsive"
                width={100}
                height={100}
              />
            </ImageBox>
          </Col>
        </Row>
        <ButtonBox>
          <Button cta style={style.button}>
            <Link href="/sobre-nos#video">
              <a>{t.home.healthSection.callToAction}</a>
            </Link>
          </Button>
        </ButtonBox>
      </Content>
    </Section>
  );
};

export default HealthSection;
