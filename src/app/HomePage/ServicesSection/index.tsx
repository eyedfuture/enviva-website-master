import Link from 'next/link';
import React from 'react';
import theme from '../../../styles/theme';
import Col from '../../../ui-components/Col';
import Paragraph from '../../../ui-components/Paragraph';
import Row from '../../../ui-components/Row';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';
import { BigButton } from './styles';

const style = {
  content: {
    paddingTop: 'calc(80px + 1rem)',
    paddingBottom: '2rem',
  },
  col: {
    textAlign: 'center' as const,
  },
  title: {
    color: theme.colors.dark,
    letterSpacing: '.1rem',
  },
};

interface IProps {
  t: any;
}

const ServicesSection: React.FC<IProps> = ({ t }) => {
  return (
    <Section id="solutions">
      <Content style={style.content}>
        <Row colGap={16} rowGap={16}>
          <Col style={style.col} xs={12} sm={4}>
            <BigButton
              style={{
                backgroundImage: `url('static/assets/img/content/services/estetica-home.png')`,
              }}
            >
              <Link href="/solucoes/estetica">
                <a>
                  <Title style={style.title} level={2}>
                    {t.home.services.aesthetics}
                  </Title>
                  {/* <Paragraph>Ver Mais</Paragraph> */}
                </a>
              </Link>
            </BigButton>
          </Col>
          <Col style={style.col} xs={12} sm={4}>
            <BigButton
              style={{
                backgroundImage: `url('static/assets/img/content/services/clinico-home.png')`,
              }}
            >
              <Link href="/solucoes/clinico/produto/clinico">
                <a>
                  <Title style={style.title} level={2}>
                    {t.home.services.clinical}
                  </Title>
                  {/* <Paragraph>Ver Mais</Paragraph> */}
                </a>
              </Link>
            </BigButton>
          </Col>
          <Col style={style.col} xs={12} sm={4}>
            <BigButton
              style={{
                backgroundImage: `url('static/assets/img/content/services/cirurgico-home.png')`,
              }}
            >
              <Link href="/solucoes/cirurgico">
                <a>
                  <Title style={style.title} level={2}>
                    {t.home.services.surgical}
                  </Title>
                  {/* <Paragraph>Ver Mais</Paragraph> */}
                </a>
              </Link>
            </BigButton>
          </Col>
        </Row>
      </Content>
    </Section>
  );
};

export default ServicesSection;
