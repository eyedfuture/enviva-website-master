import Link from 'next/link';
import React from 'react';
import Button from '../../../ui-components/Button';
import { whatsappLink } from '../../../utils/constants';

import { Container, Content, Large, Small, StyledCarousel } from './styles';

const images = {
  'pt-br': {
    large: [
      {
        link: 'https://api.whatsapp.com/send?phone=5511947377337',
        img:
          'static/assets/img/content/banner/pt-br/desktop/01B_Envivame_NovosBanners_Bemvindo_Alt02_1500x500px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/pt-br/desktop/Envivame_Banner_Home_02_1500x500px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/pt-br/desktop/Envivame_Banner_Home_03_1500x500px.jpg',
      },
      {
        link: '/solucoes/estetica/produto/laser-fracionado-ablativo',
        img:
          'static/assets/img/content/banner/pt-br/desktop/Envivame_Banner_Home_04_1500x500px.jpg',
      },
    ],
    small: [
      {
        link: 'https://api.whatsapp.com/send?phone=5511947377337',
        img:
          'static/assets/img/content/banner/pt-br/mobile/01B_Envivame_NovosBanners_Bemvindo_800x1200px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/pt-br/mobile/01A_Envivame_BannersSiteMobile_Home02_375x600px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/pt-br/mobile/01A_Envivame_BannersSiteMobile_Home03_375x600px.jpg',
      },
      {
        link: '/solucoes/estetica/produto/laser-fracionado-ablativo',
        img:
          'static/assets/img/content/banner/pt-br/mobile/01A_Envivame_BannersSiteMobile_Home04_375x600px.jpg',
      },
    ],
  },
  en: {
    large: [
      {
        link: 'https://api.whatsapp.com/send?phone=5511947377337',
        img:
          'static/assets/img/content/banner/en/desktop/Envivame_Banner_Home_01_1500x500px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/en/desktop/Envivame_Banner_Home_02_1500x500px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/en/desktop/Envivame_Banner_Home_03_1500x500px.jpg',
      },
      {
        link: '/solucoes/estetica/produto/laser-fracionado-ablativo',
        img:
          'static/assets/img/content/banner/en/desktop/Envivame_Banner_Home_04_1500x500px.jpg',
      },
    ],
    small: [
      {
        link: 'https://api.whatsapp.com/send?phone=5511947377337',
        img:
          'static/assets/img/content/banner/en/mobile/01A_Envivame_BannersSiteMobile_Home01_375x600px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/en/mobile/01A_Envivame_BannersSiteMobile_Home02_375x600px.jpg',
      },
      {
        link: whatsappLink,
        img:
          'static/assets/img/content/banner/en/mobile/01A_Envivame_BannersSiteMobile_Home03_375x600px.jpg',
      },
      {
        link: '/solucoes/estetica/produto/laser-fracionado-ablativo',
        img:
          'static/assets/img/content/banner/en/mobile/01A_Envivame_BannersSiteMobile_Home04_375x600px.jpg',
      },
    ],
  },
};

interface IProps {
  t: any;
}

const CarouselBanners: React.FC<IProps> = ({ t }) => {
  return (
    <Container>
      <Large>
        <StyledCarousel
          showIndicators={false}
          showArrows
          showStatus={false}
          showThumbs={false}
          autoPlay
          interval={8000}
          infiniteLoop
        >
          {images[t.locale].large.map(item => (
            <Content
              key={item.img}
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <Link href={item.link}>
                <a>
                  <Button cta>{t.home.callToAction}</Button>
                </a>
              </Link>
            </Content>
          ))}
        </StyledCarousel>
      </Large>
      <Small>
        <StyledCarousel
          showIndicators={false}
          showArrows
          showStatus={false}
          showThumbs={false}
          autoPlay
          interval={8000}
        >
          {images[t.locale].small.map(item => (
            <Content
              key={item.img}
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <Link href={item.link}>
                <a>
                  <Button cta>{t.home.callToAction}</Button>
                </a>
              </Link>
            </Content>
          ))}
        </StyledCarousel>
      </Small>
    </Container>
  );
};

export default CarouselBanners;
