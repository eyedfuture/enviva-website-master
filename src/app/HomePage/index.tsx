import React from 'react';
import { CovidBanner } from './styles';
import CarouselBanners from './CarouselBanners';
import ServicesSection from './ServicesSection';
import HealthSection from './HealthSection';
import VideoSection from './VideoSection/index';
import BlogSection from './BlogSection';

interface IProps {
  t: any;
  articles: any;
}

const HomePage: React.FC<IProps> = ({ t, articles }) => {
  return (
    <>
      <CovidBanner>{t.home.covidBanner}</CovidBanner>
      <CarouselBanners t={t} />
      <ServicesSection t={t} />
      <HealthSection t={t} />
      <VideoSection t={t} />
      <BlogSection t={t} articles={articles} />
    </>
  );
};

export default HomePage;
