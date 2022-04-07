import { createPortal } from 'react-dom';
import { Container } from './styles';
import Title from '../../ui-components/Title/index';
import Paragraph from '../../ui-components/Paragraph';
import Button from '../../ui-components/Button';
import theme from '../../styles/theme';

type CookieModalProps = {
  isOpen: boolean;
  onAccept: () => void;
  onReject: () => void;
};

export default function CookieModal({
  isOpen,
  onAccept,
  onReject,
}: CookieModalProps): JSX.Element {
  if (!isOpen) {
    return <></>;
  }

  return createPortal(
    <Container>
      <div>
        <Title level={4} isAnimated={false}>
          Nós utilizamos cookies!
        </Title>
        <Paragraph style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
          {`Para melhorar a sua experiência e segurança, o site da enviva.me utiliza
          cookies. Confira nossa `}
          <a
            href="/static/assets/policies/politica-de-privacidade.pdf"
            download
            style={{ textDecoration: 'underline' }}
          >
            Política de Privacidade
          </a>
          {` e nossos `}
          <a
            href="/static/assets/policies/termos-de-uso.pdf"
            download
            style={{ textDecoration: 'underline' }}
          >
            Termos de Uso
          </a>
        </Paragraph>
      </div>
      <div>
        <Button
          onClick={onReject}
          style={{
            backgroundColor: '#fff',
            textDecoration: 'underline',
            color: theme.colors.gray,
            marginRight: '1rem',
          }}
        >
          Rejeitar
        </Button>
        <Button onClick={onAccept}>Aceitar</Button>
      </div>
      {/*
      <Flex align="center" gridGap="4">
        <Button variant="link" onClick={onReject}>
          Rejeitar
        </Button>
        <Button colorScheme="yellow" onClick={onAccept}>
          Aceitar
        </Button>
      </Flex> */}
    </Container>,
    document.getElementById('__next') as Element,
  );
}
