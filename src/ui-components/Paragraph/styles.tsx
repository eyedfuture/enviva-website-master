import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.p)`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;
