import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Container = styled.div`
  position: relative;
  padding: 2rem 0;
`;

export const StyledCarousel = styled(Carousel)`
  max-width: 900px;
  margin: auto;
  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 3px solid var(--primary-color);
  }

  .carousel .control-dots .dot {
    box-shadow: none;
  }

  .carousel .thumbs {
    text-align: center;
  }
`;

export const CaoruselContent = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-top: calc(1067 / 1600 * 100%);

  /* &:after {
    content: '';
    display: block;
    padding-bottom: 50%;
  } */
`;
