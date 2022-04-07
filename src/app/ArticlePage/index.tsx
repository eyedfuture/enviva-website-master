import React from 'react';
import MarkdownIt from 'markdown-it';
import Section, { Content } from '../../ui-components/Section';
import Title from '../../ui-components/Title';

import { Container, BlogPost, Image, Divisor } from './styles';
import theme from '../../styles/theme';
import IF from '../../ui-components/IF';
import AuthorCard from './AuthorCard/index';
import Row from '../../ui-components/Row';
import Col from '../../ui-components/Col';
import RelatedArticle from '../../components/RelatedArticle';

interface IProps {
  articles: any;
  article: any;
  content: any;
}

const style = {
  section: {
    background: theme.colors.white,
  },
  content: {
    maxWidth: 650,
  },
  title: {
    color: theme.colors.dark,
    fontSize: '2rem',
  },
  subtitle: {
    color: theme.colors.dark,
    fontWeight: 'normal' as const,
    fontSize: '1rem',
  },
};

const md = new MarkdownIt({ html: true });

const ArticlePage: React.FC<IProps> = ({ article, articles, content }) => {
  return (
    <IF condition={!!article && !!content && !!articles}>
      <Section style={style.section}>
        <Content style={style.content}>
          <Container>
            <Title style={style.title}>{article?.title}</Title>
            <Title level={2} style={style.subtitle}>
              {article?.description}
            </Title>
            <AuthorCard
              author={article?.author}
              publishedAt={article?.publishedAt}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${article?.image?.formats?.large?.url}`}
              alt={article?.title}
            />
            <BlogPost
              dangerouslySetInnerHTML={{
                __html: md.render(`${content}`),
              }}
            />
          </Container>
        </Content>
        <Content>
          <Container>
            <Title style={style.title} level={2}>
              Veja Também
            </Title>
            <Divisor />
            <Row colGap={16} rowGap={16}>
              {articles?.map(item => (
                <Col xs={12} sm={6} lg={4} key={item?.id}>
                  <RelatedArticle
                    article={item}
                    link={`/blog/${item?.category?.slug}/${item?.slug}`}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Content>
      </Section>
    </IF>
  );
};

export default ArticlePage;
