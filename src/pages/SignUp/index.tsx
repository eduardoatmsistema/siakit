import { Button, Card, Flex, Form, Input, PasswordInput, Text } from "@atmoutsourcing/siakit";
import img1  from '../../assets/img1.webp';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FormHandles } from "@unform/core";

type IUser = {
  nome1: String;
  email: String;
  password: String;
}

export function SignUp(){
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: IUser){
    console.log(data)
  }

  return (
    <div style={{ backgroundImage: `url(${img1})`}}>
      <Flex height="100vh" width="100vw" align="center" justify="center">
        <Card height={350} width={400} align="center" justify="center" direction="column" gap>
          <Form ref={formRef} onSubmit={ handleSubmit } direction="column" gap>
            <Input name="nome" label="nome" type="text" placeholder="Digite seu nome" />
            <Input name="email" label="email" type="email" placeholder="Digite seu email" />
            <PasswordInput name="password" label="senha" placeholder="Digite sua senha" />
            <Button type="submit">
              Cadastrar
            </Button>
          </Form>
          <Flex direction="column">
            <Link to="/">
              <Text>
                Já possui conta? Faça o login
              </Text>
            </Link>
          </Flex>
        </Card>
      </Flex>
    </div>
  )
}