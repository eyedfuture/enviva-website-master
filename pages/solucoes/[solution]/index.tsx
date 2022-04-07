import SolutionPage from '../../../src/app/SolutionPage';
import solutions from '../../../src/utils/solutions/index';
import Head from '../../../src/components/Head/index';

export default function Solution({ t, solution }) {
  return (
    <>
      <Head
        title={
          solution?.title.charAt(0).toUpperCase() + solution?.title.slice(1)
        }
      />
      <SolutionPage t={t} solution={solution} />
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
  const { solution } = params;

  return {
    props: {
      solution: solutions[solution],
    },
    revalidate: 1,
  };
}
