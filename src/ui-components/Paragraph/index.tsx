import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSProperties } from 'styled-components';

import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

const variants = {
  hidden: {
    opacity: 0,
    translateX: -20,
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Paragraph: React.FC<IProps> = ({ children, style }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      style={style}
    >
      {children}
    </Container>
  );
};

export default Paragraph;
