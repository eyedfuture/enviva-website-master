/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { CSSProperties } from 'styled-components';
import { Container, Error, Label, StyledInput, InputLabel } from './styles';
import IF from '../IF';

interface Props {
  name: string;
  label?: string;
  prefix?: string;
  style?: {
    input?: CSSProperties;
    label?: CSSProperties;
  };
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({
  name,
  label,
  prefix,
  style,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <IF condition={!!label}>
        <Label htmlFor={fieldName}>{label}</Label>
      </IF>
      <InputLabel className={error ? 'error' : ''} style={style?.label}>
        <IF condition={!!prefix}>{prefix}</IF>
        <StyledInput
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          style={style?.input}
          {...rest}
        />
      </InputLabel>

      <IF condition={!!error}>
        <Error>{error}</Error>
      </IF>
      <IF condition={!error}>
        <Error>
          <span>.</span>
        </Error>
      </IF>
    </Container>
  );
};

export default Input;
