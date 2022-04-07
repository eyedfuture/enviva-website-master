import React from 'react';
import Link from 'next/link';
import Paragraph from '../../ui-components/Paragraph';
import Section, { Content } from '../../ui-components/Section';
import Title from '../../ui-components/Title';

import { Container, CategoryList, CategoryListItem } from './styles';
import theme from '../../styles/theme';
import Row from '../../ui-components/Row';
import Col from '../../ui-components/Col';
import ArticleCard from '../../components/ArticleCard';
import IF from '../../ui-components/IF/index';

interface IProps {
  category: any;
  categories: any;
  t: any;
}

const style = {
  section: {
    backgroundImage:
      'url(https://img.freepik.com/fotos-gratis/mesa-plana-leiga-com-laptop-e-oculos_23-2148284275.jpg?size=626&ext=jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
  categorySection: {
    background: theme.colors.white,
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

const CategoryPage: React.FC<IProps> = ({ t, category, categories }) => {
  return (
    <IF condition={!!category && !!categories}>
      <Section style={style.section}>
        <Content style={style.content}>
          <Title style={style.title}>{category?.name}</Title>
        </Content>
      </Section>
      <Section style={style.categorySection}>
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
                  {categories?.map(item => (
                    <CategoryListItem key={item.id}>
                      <Link href={`/blog/${item.slug}`}>
                        <a>{item.name}</a>
                      </Link>
                    </CategoryListItem>
                  ))}
                </CategoryList>
              </Col>
              <Col xs={12} md={9}>
                {category?.articles.map(article => (
                  <ArticleCard
                    key={article.id}
                    link={`/blog/${category?.slug}/${article?.slug}`}
                    article={article}
                  />
                ))}
                <IF
                  condition={
                    !category?.articles || category?.articles.length === 0
                  }
                >
                  <Paragraph style={{ textAlign: 'center', padding: '2rem 0' }}>
                    Ops! Não existem artigos nessa categoria :(
                  </Paragraph>
                </IF>
              </Col>
            </Row>
          </Container>
        </Content>
      </Section>
    </IF>
  );
};

export default CategoryPage;
