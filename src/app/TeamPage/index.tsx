import React from 'react';
import VideoSection from './VideoSection';
import SectionBanner from './SectionBanner';
import TeamSection from './TeamSection';

// import { Container } from './styles';

interface IProps {
  t: any;
}

const TeamPage: React.FC<IProps> = ({ t }) => {
  return (
    <>
      <SectionBanner t={t} />
      <TeamSection t={t} />
      <VideoSection t={t} />
    </>
  );
};

export default TeamPage;
