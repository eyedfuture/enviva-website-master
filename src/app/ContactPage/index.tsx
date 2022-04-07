import React from 'react';
import theme from '../../styles/theme';
import Col from '../../ui-components/Col';
import Paragraph from '../../ui-components/Paragraph';
import Row from '../../ui-components/Row';
import Section, { Content } from '../../ui-components/Section';
import Title from '../../ui-components/Title';
import Form from './Form';
import { whatsapp } from '../../utils/constants/index';

interface IProps {
  t: any;
}

const style = {
  content: {
    paddingTop: '2rem',
    paddingBottom: '1.5rem',
  },
  title: {
    letterSpacing: '.1rem',
    color: theme.colors.dark,
    marginBottom: '1rem',
  },
  paragraph: {
    letterSpacing: '.1rem',
    color: theme.colors.dark,
  },
};

const ContactPage: React.FC<IProps> = ({ t }) => {
  return (
    <Section>
      <Content style={style.content}>
        <Row colGap={16} rowGap={16}>
          <Col xs={12} md={6}>
            <Title style={style.title}>{t?.contactPage?.title}</Title>
            <Form t={t} />
          </Col>
          <Col xs={12} md={6}>
            <Paragraph style={{ ...style.paragraph, fontWeight: 'bold' }}>
              {t?.contactPage?.address}
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, marginBottom: '1rem' }}>
              Av. das Nações Unidas, 14.401 - Setor C Torre Tarumã - Conjunto
              1607 - Chácara Santo Antônio | São Paulo - SP | 04794-000 | Brasil
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, fontWeight: 'bold' }}>
              {t?.contactPage?.phone}
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, marginBottom: '1.5rem' }}>
              +55 (11) 2362-0094
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, marginBottom: '1.5rem' }}>
              +55 (11) 2362-0095
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, fontWeight: 'bold' }}>
              Whatsapp
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, marginBottom: '1.5rem' }}>
              {whatsapp}
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, fontWeight: 'bold' }}>
              Email
            </Paragraph>
            <Paragraph style={{ ...style.paragraph, marginBottom: '1.5rem' }}>
              contato@enviva.me
            </Paragraph>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4267742030293!2d-46.70658048502101!3d-23.62488253465136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51b4c6d16553%3A0xd9a79a95dc83a511!2senviva.me!5e0!3m2!1spt-BR!2sbr!4v1626891248749!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </Col>
        </Row>
      </Content>
    </Section>
  );
};

export default ContactPage;
