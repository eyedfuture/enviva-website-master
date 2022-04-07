import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMapPin } from 'react-icons/fi';
import Button from '../../ui-components/Button';

import {
  Container,
  AddressBox,
  Address,
  Phone,
  Content,
  Logo,
  Nav,
  Menu,
  MenuItem,
  Locale,
  MenuButton,
  Hamburguer,
  LocationIcon,
} from './styles';

interface IProps {
  t: any;
}

const Navbar: React.FC<IProps> = ({ t }) => {
  const [hide, setHide] = useState<boolean>(true);
  const router = useRouter();
  const { locale } = router;

  const changeLocale = (loc?: string) => {
    router.push('/', '/', { locale: loc });
  };

  const toggleMenu = () => {
    setHide(!hide);
  };

  return (
    <>
      <AddressBox>
        <Address>
          Av. das Nações Unidas, 14.401 - Setor C Torre Tarumã - Conjunto 1607 -
          Chácara Santo Antônio | São Paulo - SP | 04794-000 | Brasil
        </Address>
        <Phone> +55 (11) 2362-0094 | 2362-0095 | 94737-7337</Phone>
      </AddressBox>
      <Container>
        <Content className="container">
          <MenuButton onClick={toggleMenu}>
            <Hamburguer />
          </MenuButton>
          <Link href="/">
            <a>
              <Logo src="/static/assets/img/logo-enviva.svg" />
            </a>
          </Link>
          <LocationIcon>
            <a
              href="https://goo.gl/maps/dNcpVvTf8ETRizMb9"
              target="_blank"
              rel="noreferrer"
            >
              <FiMapPin size={24} />
            </a>
          </LocationIcon>
          <Nav className={hide && 'hide'}>
            <Menu>
              <MenuItem onClick={toggleMenu}>
                <Link href="/">
                  <a>{t.navbar.menu.home}</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={toggleMenu}>
                <Link href="/#solutions">
                  <a>{t.navbar.menu.solutions}</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={toggleMenu}>
                <Link href="/equipe">
                  <a>{t.navbar.menu.team}</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={toggleMenu}>
                <Link href="/sobre-nos">
                  <a>{t.navbar.menu.about}</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={toggleMenu}>
                <Link href="/blog">
                  <a>{t.navbar.menu.blog}</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={toggleMenu}>
                <Link href="/contato">
                  <a>{t.navbar.menu.contact}</a>
                </Link>
              </MenuItem>
              <MenuItem borderEffect="none" onClick={toggleMenu}>
                <Link href="https://api.whatsapp.com/send?phone=5511947377337">
                  <a target="_blank" rel="noreferrer">
                    <Button>{t.navbar.menu.schedule}</Button>
                  </a>
                </Link>
              </MenuItem>
              <MenuItem borderEffect="none">
                <p>
                  <Locale
                    onClick={() => {
                      changeLocale('pt-BR');
                    }}
                    className={locale === 'pt-BR' && 'active'}
                  >
                    pt
                  </Locale>
                  <span> | </span>
                  <Locale
                    onClick={() => {
                      changeLocale('en');
                    }}
                    className={locale === 'en' && 'active'}
                  >
                    en
                  </Locale>
                </p>
              </MenuItem>
            </Menu>
          </Nav>
        </Content>
      </Container>
    </>
  );
};

export default Navbar;
