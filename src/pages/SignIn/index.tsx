import { Card, Flex, Text, PasswordInput, Button, Form, Input, useLoading } from "@atmoutsourcing/siakit";
import img1 from '../../assets/img1.webp';
import { FormHandles } from "@unform/core";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/apiClient";

import { destroyCookie, setCookie, parseCookies } from 'nookies'

export function SignIn(){
  const formRef = useRef<FormHandles>(null);

  const { setLoading } = useLoading();
  const [user, setUser] = useState();

  async function handleSubmit(data: any) {

    const { email, password } = data;

    try {
      const response = await api.post('/session', {
        email,
        password
      })

      const { id, name, token } = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mes
        path: "/" // Quais caminhos terao acesso ao cookie
      })

      setUser({
        id,
        name,
        email,
      })

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }catch(err){
      console.log("ERRO AO ACESSAR ", err)
    }
  }


  return (
    <div style={{ backgroundImage: `url(${img1})`}}>
      <Flex
        height="100vh" 
        align="center" 
        justify="center"
        >
        <Card 
          height={250}
          width={300}
          justify="center" 
          align="center" 
          direction="column" 
          gap
          >
          <Form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            direction="column" 
            gap
            >
            <Input 
              name="email" 
              label="Email" 
              placeholder="Digite seu email" 
            />
            <PasswordInput 
              name="password" 
              label="Senha" 
              placeholder="Digite sua senha" 
            />
              <Button type="submit">
                Salvar
              </Button>
          </Form>

          <Flex>
            <Link 
              to="/register" 
              style={{ textDecoration: "none" }}
              >
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

function setUser(arg0: { id: any; name: any; email: any; }) {
  throw new Error("Function not implemented.");
}
