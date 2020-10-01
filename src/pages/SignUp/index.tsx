import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />

        <Content>
          <img src={logoImg} alt="GoBarber" />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" type="text" />
            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              type="email"
            />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
            />

            <Button type="submit" onClick={() => console.log('clicado')}>
              Cadastrar
            </Button>
          </Form>

          <a href="login">
            <FiArrowLeft />
            Voltar para Login
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
