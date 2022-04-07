import TeamPage from '../../src/app/TeamPage';
import Head from '../../src/components/Head';

export default function Team({ t }) {
  return (
    <>
      <Head title={t?.teamPage?.title} />
      <TeamPage t={t} />
    </>
  );
}
