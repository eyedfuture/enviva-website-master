import ContactPage from '../../src/app/ContactPage';
import Head from '../../src/components/Head';

export default function About({ t }) {
  return (
    <>
      <Head title={t?.contactPage?.title} />
      <ContactPage t={t} />
    </>
  );
}
