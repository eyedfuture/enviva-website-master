import React from 'react';
import { CSSProperties } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';
import IF from '../IF';

import { Container, Loader } from './styles';

interface IProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  cta?: boolean;
  block?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

const Button: React.FC<IProps> = ({
  children,
  style,
  cta = false,
  block = false,
  type = 'button',
  loading = false,
  ...props
}) => {
  return (
    <Container
      type={type}
      style={style}
      cta={cta || undefined}
      block={block || undefined}
      {...props}
    >
      <IF condition={!loading}>{children}</IF>
      <IF condition={loading}>
        <Loader>
          <FaSpinner />
        </Loader>
      </IF>
    </Container>
  );
};

export default Button;
