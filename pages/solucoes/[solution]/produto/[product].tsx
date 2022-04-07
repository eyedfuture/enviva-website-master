import solutions from '../../../../src/utils/solutions';
import ProductPage from '../../../../src/app/ProductPage/index';
import Head from '../../../../src/components/Head/index';

export default function Home({ t, solution, product }) {
  return (
    <>
      <Head
        title={product?.title.charAt(0).toUpperCase() + product?.title.slice(1)}
      />
      <ProductPage product={product} solution={solution} t={t} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { solution, product } = params;
  const findProduct = solutions[solution].products.find(
    item => item.title === product,
  );

  if (!findProduct) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      product: findProduct,
      solution: solutions[solution],
    },
    revalidate: 1,
  };
}
