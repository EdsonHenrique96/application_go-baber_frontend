import React, { useRef } from 'react';
import * as Yup from 'yup';

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LogoImg from '../../assets/logo.svg';

import getFormattedValidationError from '../../utils/getFormattedValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function submitHandler(data: any): Promise<void> {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório.'),
        email: Yup.string()
          .required('E-mail é obrigatório.')
          .email('Deve ser um E-mail válido'),
        password: Yup.string().min(6, 'Mínimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const formattedErrors = getFormattedValidationError(error);
      formRef.current?.setErrors(formattedErrors);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt="GoBaber" />

        <Form ref={formRef} onSubmit={submitHandler}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
