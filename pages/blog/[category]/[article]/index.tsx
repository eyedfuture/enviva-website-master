import matter from 'gray-matter';
import Head from '../../../../src/components/Head';
import ArticlePage from '../../../../src/app/ArticlePage/index';
import {
  getArticles,
  getArticle,
} from '../../../../src/services/api/endpoints';

export default function About({ articles, article, content }) {
  return (
    <>
      <Head title={article?.title} description={article?.description} />
      <ArticlePage articles={articles} article={article} content={content} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params, locale }) {
  const { article } = params;
  let allArticles = await getArticles(locale);
  const data = await getArticle({ article, locale });

  const { content } = matter(data.content);

  const articles = [];
  allArticles = allArticles.reverse();

  for (let i = 0; i < allArticles.length; i += 1) {
    if (articles.length === 12) {
      break;
    }
    if (allArticles[i]?.status === 'published') {
      articles.push(allArticles[i]);
    }
  }

  return {
    props: {
      articles,
      article: data,
      content: content
        .split('](/')
        .join(`](${process.env.NEXT_PUBLIC_BASE_URL}/`),
    },
    revalidate: 1,
  };
}
