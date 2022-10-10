import { Button, Card, Flex, Form, Input, PasswordInput, Text } from "@atmoutsourcing/siakit";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignIn(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(){

    const data = {
      email,
      password
    }

    alert(`suas credenciais email: ${data.email}, senha: ${data.password}`)
  }

  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)"}}>
      <Flex height="100vh" width="100vw" align="center" justify="center">
        <Card height={300} width={500} align="center" justify="center" direction="column" gap>
          <Form onSubmit={ handleSubmit } direction="column" gap>
            <Input name="email" label="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="digite seu email"/>
            <PasswordInput name="password" label="senha" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="digite sua senha"/>
            <Button type="submit">
              Logar
            </Button>
          </Form>
          <Flex direction="column">
            <Link to="/register">
              <Text>
                Não possui conta? Cadastre-se
              </Text>
            </Link>
          </Flex>
        </Card>
      </Flex>
    </div>
  )
}