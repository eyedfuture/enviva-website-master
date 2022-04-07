import AboutPage from '../../src/app/AboutPage';
import Head from '../../src/components/Head/index';

export default function About({ t }) {
  return (
    <>
      <Head title={t?.aboutPage?.main?.title} />
      <AboutPage t={t} />
    </>
  );
}
