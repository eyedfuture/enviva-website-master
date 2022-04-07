import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Paragraph from '../../ui-components/Paragraph';
import Section, { Content } from '../../ui-components/Section';
import Title from '../../ui-components/Title';

import { Container, CategoryList, CategoryListItem } from './styles';
import theme from '../../styles/theme';
import Row from '../../ui-components/Row';
import Col from '../../ui-components/Col';
import ArticleCard from '../../components/ArticleCard';
import IF from '../../ui-components/IF';

interface IProps {
  articles: any;
  categories: any;
  t: any;
}

const style = {
  section: {
    padding: 0,
  },
  content: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  title: {
    color: theme.colors.dark,
  },
  categoriesTitle: {
    color: theme.colors.dark,
    paddingBottom: '.5rem',
  },
  description: {
    color: theme.colors.dark,
    fontSize: '1.2rem',
  },
};

const BlogPage: React.FC<IProps> = ({ articles, categories, t }) => {
  return (
    <>
      <Section style={style.section}>
        <Image
          src="/static/assets/img/content/Envivame_Banner_Blog_1500x200px.jpg"
          width={1500}
          height={200}
          layout="responsive"
        />
      </Section>
      <Section style={{ background: '#fff' }}>
        <Content>
          <Container>
            <Row colGap={16} rowGap={16}>
              <Col xs={12} md={3}>
                <Title level={3} style={style.categoriesTitle}>
                  {t?.blog?.categories}
                </Title>
                <IF condition={!categories || categories.length === 0}>
                  <Paragraph style={{ padding: '2rem 0' }}>
                    {t?.blog?.empty}
                  </Paragraph>
                </IF>
                <CategoryList>
                  {categories.map(item => (
                    <CategoryListItem key={item.id}>
                      <Link href={`/blog/${item.slug}`}>
                        <a>{item.name}</a>
                      </Link>
                    </CategoryListItem>
                  ))}
                </CategoryList>
              </Col>
              <Col xs={12} md={9}>
                {articles.map(article => (
                  <ArticleCard
                    key={article.id}
                    link={`/blog/${article?.category?.slug}/${article?.slug}`}
                    article={article}
                  />
                ))}
                <IF condition={!articles || articles.length === 0}>
                  <Paragraph style={{ textAlign: 'center', padding: '2rem 0' }}>
                    Ops! Não existem artigos ainda :(
                  </Paragraph>
                </IF>
              </Col>
            </Row>
          </Container>
        </Content>
      </Section>
    </>
  );
};

export default BlogPage;
