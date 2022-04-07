import React from 'react';
import theme from '../../../styles/theme';
import Col from '../../../ui-components/Col';
import IF from '../../../ui-components/IF';
import Row from '../../../ui-components/Row';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';

import { Container, Item } from './styles';

const style = {
  section: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    background: `${theme.colors.beige} url('/static/assets/img/logo-pattern.svg')`,
    backgroundAttachment: 'fixed',
  },
  title: {
    color: theme.colors.dark,
    letterSpacing: '.1rem',
    marginBottom: '1rem',
  },
  label: {
    color: theme.colors.dark,
    letterSpacing: '.1rem',
    textAlign: 'center' as const,
    fontSize: '2.2rem',
    fontStyle: 'italic' as const,
  },
  quote: {
    color: theme.colors.dark,
    letterSpacing: '.1rem',
    fontSize: '1.5rem',
    fontStyle: 'normal' as const,
  },
};

interface IProps {
  indications: any;
  t: any;
  solution: any;
}

const ProductIndication: React.FC<IProps> = ({ indications, t, solution }) => {
  return (
    <Section style={style.section}>
      <IF condition={!!indications}>
        <Content>
          <Title level={2} style={style.title}>
            {indications?.label}
          </Title>
          <Container>
            {solution.title !== 'clinical' &&
              indications?.items.map(item => <Item key={item}>{item}</Item>)}

            {solution.title === 'clinical' && (
              <Row>
                {indications?.items.map(item => (
                  <Col key={item} xs={12} sm={6} lg={3}>
                    <Item>{item}</Item>
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </Content>
      </IF>
      <IF condition={!indications}>
        <Content>
          <Title level={2} style={style.label}>
            {`"${t?.productPage?.label}"`}
            <p style={style.quote}>{t?.productPage?.quote}</p>
          </Title>
        </Content>
      </IF>
    </Section>
  );
};

export default ProductIndication;
