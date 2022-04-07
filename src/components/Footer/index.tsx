import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDown, FaFacebookF, FaInstagram } from 'react-icons/fa';
import theme from '../../styles/theme';
import Col from '../../ui-components/Col';
import Paragraph from '../../ui-components/Paragraph';
import Row from '../../ui-components/Row';
import Section, { Content } from '../../ui-components/Section';
import { whatsapp } from '../../utils/constants/index';
import {
  Container,
  List,
  ListItem,
  SocialList,
  SocialListItem,
  ImageBox,
  Banner,
} from './styles';

const style = {
  paragraph: {
    color: theme.colors.white,
    fontWeight: 'bold' as const,
  },
  powered: {
    color: theme.colors.white,
    fontSize: '.8rem',
    textAlign: 'center' as const,
    marginTop: '1rem',
  },
  poweredLink: {
    textDecoration: 'underline' as const,
  },
};

interface IProps {
  t: any;
}

const Footer: React.FC<IProps> = ({ t }) => {
  const [hide, setHide] = useState<boolean>(true);

  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <Container>
      <Banner>
        <Content>
          <p>{t?.footer?.responsible}</p>
          <p>{`${t?.footer?.pronoun} Andrea Sayaka Masada - CRM-SP 92464 - RQE 17830`}</p>
        </Content>
      </Banner>

      <Section>
        <Content>
          <Row colGap={16} rowGap={16}>
            <Col xs={12} sm={6} md={3}>
              <Paragraph style={style.paragraph}>
                {t?.footer?.siteMap}
              </Paragraph>
              <List>
                <ListItem>
                  <Link href="/">
                    <a>{t?.navbar?.menu?.home}</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/#solutions">
                    <a>{t.navbar.menu.solutions}</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/equipe">
                    <a>{t.navbar.menu.team}</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/sobre-nos">
                    <a>{t.navbar.menu.about}</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/blog">
                    <a>{t.navbar.menu.blog}</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/contato">
                    <a>{t.navbar.menu.contact}</a>
                  </Link>
                </ListItem>
              </List>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Paragraph style={style.paragraph}>
                {t?.contactPage?.address}
              </Paragraph>
              <Paragraph
                style={{
                  ...style.paragraph,
                  marginBottom: '1rem',
                  fontWeight: 'normal',
                }}
              >
                Av. das Nações Unidas, 14.401 - Setor C Torre Tarumã - Conjunto
                1607 - Chácara Santo Antônio | São Paulo - SP | 04794-000 |
                Brasil
              </Paragraph>
              <Paragraph style={style.paragraph}>
                {t?.contactPage?.phone}
              </Paragraph>
              <Paragraph
                style={{
                  ...style.paragraph,
                  marginBottom: '1.5rem',
                  fontWeight: 'normal',
                }}
              >
                +55 (11) 2362-0094
              </Paragraph>
              <Paragraph
                style={{
                  ...style.paragraph,
                  marginBottom: '1.5rem',
                  fontWeight: 'normal',
                }}
              >
                +55 (11) 2362-0095
              </Paragraph>
              <Paragraph style={style.paragraph}>Whatsapp</Paragraph>
              <Paragraph
                style={{
                  ...style.paragraph,
                  marginBottom: '1.5rem',
                  fontWeight: 'normal',
                }}
              >
                {whatsapp}
              </Paragraph>
              <Paragraph style={style.paragraph}>Email</Paragraph>
              <Paragraph
                style={{
                  ...style.paragraph,
                  marginBottom: '1.5rem',
                  fontWeight: 'normal',
                }}
              >
                contato@enviva.me
              </Paragraph>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4267742030293!2d-46.70658048502101!3d-23.62488253465136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51b4c6d16553%3A0xd9a79a95dc83a511!2senviva.me!5e0!3m2!1spt-BR!2sbr!4v1626891248749!5m2!1spt-BR!2sbr"
                width="100%"
                height="150"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />

              <Paragraph
                style={{
                  ...style.paragraph,
                  cursor: 'pointer',
                  paddingTop: '.5rem',
                }}
              >
                <div onClick={toggleHide}>
                  {`Colaboradores `}
                  <FaAngleDown style={{ paddingTop: '4px' }} />
                </div>
              </Paragraph>
              <List className={hide && 'hide'}>
                <ListItem>
                  Estudo da marca: Objeto Dinâmico (@objeto_dinamico)
                </ListItem>
                <ListItem>
                  Projeto de arquitetura e design de interiores: Michelle de
                  Albuquerque (@michelle_de_albuquerque)
                </ListItem>
                <ListItem>Fotografia: Renato Aoki (@renatoaoki)</ListItem>
                <ListItem>Filmagem: Porangaba (@porangaba_)</ListItem>
                <ListItem>Paisagismo: Quarto Chakra (@quarto_chakra)</ListItem>
              </List>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <ImageBox>
                <Image
                  src="/static/assets/img/logo-w.png"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </ImageBox>
              <SocialList>
                <SocialListItem>
                  <a
                    href="https://m.facebook.com/envivame-108471014792713/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </SocialListItem>
                <SocialListItem>
                  <a
                    href="https://instagram.com/enviva.me?utm_medium=copy_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </SocialListItem>
              </SocialList>
            </Col>
          </Row>
          <Paragraph style={style.powered}>
            enviva.me © all rights reserved
          </Paragraph>
          <Paragraph style={style.powered}>
            powered by
            <a href="https://bitspace.solutions/" style={style.poweredLink}>
              {'  Bitspace Solutions '}
            </a>
            and
            <a href="https://agenciabait.com/" style={style.poweredLink}>
              {'  Bait Digital Agency '}
            </a>
          </Paragraph>
        </Content>
      </Section>
    </Container>
  );
};

export default Footer;
