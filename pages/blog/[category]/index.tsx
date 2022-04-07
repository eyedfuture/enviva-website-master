import Head from '../../../src/components/Head';
import {
  getCategoryArticles,
  getCategories,
} from '../../../src/services/api/endpoints';
import CategoryPage from '../../../src/app/CategoryPage';

export default function About({ t, category, categories }) {
  return (
    <>
      <Head title={category?.name} />
      <CategoryPage category={category} categories={categories} t={t} />
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
  const { category } = params;
  const data = await getCategoryArticles({ category, locale });
  const categories = await getCategories(locale);

  const articles = [];
  const allArticles = data.articles.reverse();

  for (let i = 0; i < allArticles.length; i += 1) {
    if (allArticles[i]?.status === 'published') {
      articles.push(allArticles[i]);
    }
  }

  data.articles = articles;

  return {
    props: {
      category: data,
      categories,
    },
    revalidate: 1,
  };
}
