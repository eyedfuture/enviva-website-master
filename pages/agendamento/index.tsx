import SchedulePage from '../../src/app/SchedulePage';
import Head from '../../src/components/Head';

export default function Team({ t }) {
  return (
    <>
      <Head title="Agendamento" />
      <SchedulePage t={t} />
    </>
  );
}
