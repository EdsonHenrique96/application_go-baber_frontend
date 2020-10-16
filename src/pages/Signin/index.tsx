import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LogoImg from '../../assets/logo.svg';

import getFormattedValidationError from '../../utils/getFormattedValidationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const submitHandler = useCallback(async (data: any): Promise<void> => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório.')
          .email('Deve ser um E-mail válido'),
        password: Yup.string().required('Senha é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const formattedErrors = getFormattedValidationError(error);
      formRef.current?.setErrors(formattedErrors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBaber" />

        <Form ref={formRef} onSubmit={submitHandler}>
          <h1>Faça seu login</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="/">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
