import { Button } from "@siakit/button";
import { Flex } from "@siakit/layout";
import { Card } from "@siakit/card";
import { Form, FormHandles, PasswordInput, TextInput } from "@siakit/form-unform";
import {  } from '@siakit/form-components'
import { Text } from "@siakit/text";


import img1  from '../../assets/img1.webp';
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/apiClient";
import { AuthContext } from "../../contexts/AuthContext";

type IUser = {
  name: String;
  email: String;
  password: String;
}

export function SignUp(){

  const { signUp } = useContext(AuthContext);
  const history = useNavigate();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any) {
    await signUp(data)

  }

  return (
    <div style={{ backgroundImage: `url(${img1})`}}>
      <Flex 
        height="100vh" 
        width="100vw" 
        align="center" 
        justify="center"
        >
        <Card 
          height={350} 
          width={400} 
          align="center" 
          justify="center" 
          direction="column" 
          gap
          >
          <Form 
            ref={formRef} 
            onSubmit={ handleSubmit }
            >
            <TextInput 
              name="name" 
              label="Nome" 
              placeholder="Digite seu nome" 
            />
            <TextInput name="email" label="Email" placeholder="Digite seu email" />
            <PasswordInput name="password" label="Senha" placeholder="Digite sua senha" />
            
            <Button type="submit">
              Cadastrar
            </Button>
          </Form>
          <Flex direction="column">
              <Text onClick={() => history('/')} style={{ cursor: 'pointer' }}>
                Já possui conta? Faça o login
              </Text>
          </Flex>
        </Card>
      </Flex>
    </div>
  )
}