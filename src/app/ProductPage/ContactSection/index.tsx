import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import theme from '../../../styles/theme';
import Button from '../../../ui-components/Button';
import Col from '../../../ui-components/Col';
import Row from '../../../ui-components/Row';
import Section, { Content } from '../../../ui-components/Section';
import Title from '../../../ui-components/Title';
import { whatsappLink } from '../../../utils/constants';

import { ContactBox } from './styles';

const style = {
  section: {
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
  },
  title: {
    color: theme.colors.dark,
    textAlign: 'center' as const,
    marginBottom: '1rem',
  },
  whatsapp: {
    background: '#128C7E',
    marginBottom: '1rem',
  },
};

interface IProps {
  t: any;
}

const ContactSection: React.FC<IProps> = ({ t }) => {
  return (
    <Section style={style.section}>
      <Content>
        <Row colGap={16} rowGap={16}>
          <Col xs={12} sm={6}>
            <Image
              layout="responsive"
              width="600"
              height="400"
              src="/static/assets/img/content/services/agendamento.png"
              alt={t?.productPage?.contact?.title}
            />
          </Col>
          <Col xs={12} sm={6}>
            <ContactBox>
              <Title level={2} style={style.title}>
                {t?.productPage?.contact?.title}
              </Title>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button block cta style={style.whatsapp}>
                  <FaWhatsapp />
                  {` ${t?.productPage?.contact?.whatsapp}`}
                </Button>
              </a>
              <Link href="https://api.whatsapp.com/send?phone=5511947377337">
                <a target="_blank" rel="noreferrer">
                  <Button block cta>
                    {t?.productPage?.contact?.online}
                  </Button>
                </a>
              </Link>
            </ContactBox>
          </Col>
        </Row>
      </Content>
    </Section>
  );
};

export default ContactSection;
