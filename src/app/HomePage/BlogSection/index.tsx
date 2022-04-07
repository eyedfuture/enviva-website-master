import React from 'react';
import Link from 'next/link';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';

// import { Container } from './styles';
import theme from '../../../styles/theme';
import Button from '../../../ui-components/Button';
import Row from '../../../ui-components/Row';
import Col from '../../../ui-components/Col';
import RelatedArticle from '../../../components/RelatedArticle';

interface IProps {
  t: any;
  articles: any;
}

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
  button: {
    margin: 'auto',
    display: 'block' as const,
  },
};

const BlogSection: React.FC<IProps> = ({ t, articles }) => {
  return (
    <Section>
      <Content style={style.content}>
        <Title style={style.title} level={2}>
          {t?.home?.blogSection?.title}
        </Title>

        <Row colGap={16} rowGap={16}>
          {articles?.map(item => (
            <Col xs={12} sm={6} lg={4} key={item?.id}>
              <RelatedArticle
                article={item}
                link={`/blog/${item?.category?.slug}/${item?.slug}`}
              />
            </Col>
          ))}
          <Col xs={12}>
            <Button style={style.button} cta>
              <Link href="/blog">
                <a>{t?.home?.blogSection?.button}</a>
              </Link>
            </Button>
          </Col>
        </Row>
      </Content>
    </Section>
  );
};

export default BlogSection;
