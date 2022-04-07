import React from 'react';
import Link from 'next/link';
import theme from '../../styles/theme';
import Col from '../../ui-components/Col';
import IF from '../../ui-components/IF';
import Row from '../../ui-components/Row';
import Section, { Content } from '../../ui-components/Section';
import Title from '../../ui-components/Title';
import SolutionCard from './SolutionCard';

import { RelatedBox } from './styles';

const style = {
  section: {
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
  },
  title: {
    color: theme.colors.dark,
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
    fontSize: '2rem',
    marginBottom: '1.5rem',
    letterSpacing: '.1rem',
  },
  col: {
    textAlign: 'center' as const,
    letterSpacing: '.1rem',
  },
};

interface IProps {
  t: any;
  solution: any;
}
const SolutionPage: React.FC<IProps> = ({ t, solution }) => {
  return (
    <IF condition={!!solution}>
      <Section style={style.section}>
        <Content>
          <Title style={style.title}>
            {t?.solutions[solution?.title]?.title}
          </Title>
          <Row colGap={16} rowGap={24}>
            {solution?.products.map(item => (
              <Col xs={12} key={item.title}>
                <SolutionCard
                  title={
                    t?.solutions[solution?.title]?.products[item.title]?.title
                  }
                  description={
                    t?.solutions[solution?.title]?.products[item.title]
                      ?.description
                  }
                  img={item.img}
                  link={item.link}
                  buttonLabel={t?.solutions.callToAction}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Section>
      <Section style={style.section}>
        <Content>
          <Row colGap={16} rowGap={24}>
            {solution?.related.map(item => (
              <Col xs={6} key={item.title} style={style.col}>
                <Link href={item.link}>
                  <a>
                    <RelatedBox
                      style={{ backgroundImage: `url('${item.img}')` }}
                    >
                      {t.home.services[item.title]}
                    </RelatedBox>
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
        </Content>
      </Section>
    </IF>
  );
};

export default SolutionPage;
