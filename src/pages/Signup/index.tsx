import React from 'react';
import * as Yup from 'yup';

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LogoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  async function submitHandler(data: any): Promise<void> {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório.'),
        email: Yup.string()
          .required('E-mail é obrigatório.')
          .email('Deve ser um E-mail válido'),
        password: Yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt="GoBaber" />

        <Form onSubmit={submitHandler}>
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
