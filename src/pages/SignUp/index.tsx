import { Button, Card, Flex, Form, Input, PasswordInput, Text } from "@atmoutsourcing/siakit";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignUp(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(){
    const data = {
      name,
      email,
      password
    }

    console.log(data)
  }

  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)"}}>
      <Flex height="100vh" width="100vw" align="center" justify="center">
        <Card height={350} width={500} align="center" justify="center" direction="column" gap>
          <Form onSubmit={ handleSubmit } direction="column" gap>
            <Input name="nome" label="nome" type="text" value={name} placeholder="digite seu nome" onChange={(name) => setName(name.target.value)}/>
            <Input name="email" label="email" type="email" value={email} placeholder="digite seu email" onChange={(email) => setEmail(email.target.value)}/>
            <PasswordInput name="password" label="senha" value={password} placeholder="digite sua senha" onChange={(password) => setPassword(password.target.value)}/>
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