import React from 'react';
import SectionBanner from './SectionBanner';

import AboutSection from './AboutSection/index';
import VideoSection from './VideoSection';
import CarouselSection from './CarouselSection/index';

interface IProps {
  t: any;
}

const AboutPage: React.FC<IProps> = ({ t }) => {
  return (
    <>
      <SectionBanner t={t} />
      <AboutSection t={t} />
      <VideoSection t={t} />
      <CarouselSection />
    </>
  );
};

export default AboutPage;
