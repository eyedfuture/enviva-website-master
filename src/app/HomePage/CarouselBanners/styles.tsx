import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Container = styled.div`
  position: relative;
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black};
  position: relative;
  z-index: 0;

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 3px solid var(--primary-color);
  }

  .carousel .control-dots .dot {
    box-shadow: none;
    background: #dfa982;
  }

  .carousel .thumbs {
    text-align: center;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: none;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid ${({ theme }) => theme.colors.orange};
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid ${({ theme }) => theme.colors.orange};
  }
`;

export const Content = styled.div`
  width: 100%;
  padding-top: calc(500 / 1500 * 100%);
  background-size: cover;
  background-position: center;
  text-align: center;

  button {
    position: absolute;
    z-index: 1;
    bottom: 3rem;
    left: 26%;
  }

  @media screen and (max-width: 750px) {
    padding-top: calc(100%);
    padding-top: calc(600 / 375 * 100%);

    button {
      bottom: 6%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Large = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const Small = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 750px) {
    display: block;
  }
`;
