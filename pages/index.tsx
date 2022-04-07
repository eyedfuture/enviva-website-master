import HomePage from '../src/app/HomePage/index';
import { getArticles } from '../src/services/api/endpoints';

export default function Home({ t, articles }) {
  return <HomePage articles={articles} t={t} />;
}

export async function getStaticProps({ locale }) {
  let allArticles = await getArticles(locale);

  const articles = [];
  allArticles = allArticles.reverse();

  for (let i = 0; i < allArticles.length; i += 1) {
    if (articles.length === 8) {
      break;
    }
    if (allArticles[i]?.status === 'published') {
      articles.push(allArticles[i]);
    }
  }

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
}
