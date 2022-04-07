import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Container } from './styles';

const Whatsapp: React.FC = () => {
  return (
    <Container>
      <a
        href="https://api.whatsapp.com/send?phone=5511947377337"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </Container>
  );
};

export default Whatsapp;
