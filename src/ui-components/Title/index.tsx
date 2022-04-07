import React, { useEffect } from 'react';
import CSS from 'csstype';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// import { Container } from './styles';

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

interface IProps {
  level?: number;
  children: React.ReactNode;
  style?: CSS.Properties;
  isAnimated?: boolean;
}
const Title: React.FC<IProps> = ({
  level = 1,
  children,
  style,
  isAnimated = true,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!isAnimated) {
      controls.start('visible');
    } else if (inView && isAnimated) {
      controls.start('visible');
    }
  }, [controls, inView, isAnimated]);

  switch (level) {
    case 1:
      return (
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{ ...style }}
        >
          {children}
        </motion.h1>
      );
    case 2:
      return (
        <motion.h2
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{ ...style }}
        >
          {children}
        </motion.h2>
      );
    case 3:
      return (
        <motion.h3
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{ ...style }}
        >
          {children}
        </motion.h3>
      );
    case 4:
      return (
        <motion.h4
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{ ...style }}
        >
          {children}
        </motion.h4>
      );
    case 5:
      return (
        <motion.h5
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{ ...style }}
        >
          {children}
        </motion.h5>
      );
    case 6:
      return (
        <motion.h6
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{ ...style }}
        >
          {children}
        </motion.h6>
      );
    default:
      return (
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          style={{ ...style }}
        >
          {children}
        </motion.h1>
      );
  }
};

export default Title;
