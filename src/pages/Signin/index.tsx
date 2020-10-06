import React from 'react';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LogoImg from '../../assets/logo.svg';

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBaber" />

      <form>
        <h1>Faça seu login</h1>

        <Input icon={FiMail} name="E-mail" placeholder="E-mail" />
        <Input icon={FiLock} name="Senha" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="/">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SigIn;
