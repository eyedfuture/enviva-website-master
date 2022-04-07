import React, { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import ReactInputMask from 'react-input-mask';
import { Container } from './styles';
import Input from '../../../ui-components/Input';
import Button from '../../../ui-components/Button';
import Textarea from '../../../ui-components/Textarea';
import schema from './validation';
import Paragraph from '../../../ui-components/Paragraph';
import theme from '../../../styles/theme';
import IF from '../../../ui-components/IF';
import { whatsappLink } from '../../../utils/constants';

interface IProps {
  t: any;
}

const style = {
  whatsapp: {
    background: '#128C7E',
    marginBottom: '1rem',
  },
  paragraph: {
    textAlign: 'center' as const,
    margin: '1rem 0',
  },
};

const FormContainer: React.FC<IProps> = ({ t }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>({});
  const formRef = useRef<FormHandles>(null);
  const maskProps = { maskChar: '' };

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      await axios.post('/api/mail', data);

      formRef.current.reset();
      setResponse({ message: 'Success!' });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      } else {
        setResponse({ message: 'Ops! Something went wrong.', error: true });
      }
    }
    setLoading(false);
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="name"
          label={t?.contactPage?.form?.name?.label}
          placeholder={t?.contactPage?.form?.name?.placeholder}
        />
        <Input
          name="email"
          label={t?.contactPage?.form?.email?.label}
          placeholder={t?.contactPage?.form?.email?.placeholder}
        />
        <ReactInputMask mask="(99) 99999-9999" type="text" {...maskProps}>
          {() => (
            <Input
              name="phone"
              label={t?.contactPage?.form?.phone?.label}
              placeholder={t?.contactPage?.form?.phone?.placeholder}
            />
          )}
        </ReactInputMask>
        <Textarea name="message" label={t?.contactPage?.form?.message?.label} />
        <IF condition={!!response}>
          <Paragraph
            style={{
              color: response.error ? theme.colors.orange : theme.colors.dark,
            }}
          >
            {response?.message}
          </Paragraph>
        </IF>
        <Button block type="submit" loading={loading}>
          {t?.contactPage?.form?.button?.label}
        </Button>
      </Form>
      <Paragraph style={style.paragraph}>ou</Paragraph>
      <a href={whatsappLink} target="_blank" rel="noreferrer">
        <Button block style={style.whatsapp}>
          <FaWhatsapp />
          {` ${t?.productPage?.contact?.whatsapp}`}
        </Button>
      </a>
      <Link href="/agendamento">
        <a>
          <Button block>{t?.productPage?.contact?.online}</Button>
        </a>
      </Link>
    </Container>
  );
};

export default FormContainer;
