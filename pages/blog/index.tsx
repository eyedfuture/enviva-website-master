import Head from '../../src/components/Head';
import { getArticles, getCategories } from '../../src/services/api/endpoints';
import BlogPage from '../../src/app/BlogPage/index';

export default function About({ t, articles, categories }) {
  return (
    <>
      <Head title="Blog" />
      <BlogPage articles={articles} categories={categories} t={t} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let allArticles = await getArticles(locale);
  const categories = await getCategories(locale);

  const articles = [];
  allArticles = allArticles.reverse();

  for (let i = 0; i < allArticles.length; i += 1) {
    if (allArticles[i]?.status === 'published') {
      articles.push(allArticles[i]);
    }
  }

  return {
    props: {
      articles,
      categories,
    },
    revalidate: 1,
  };
}
