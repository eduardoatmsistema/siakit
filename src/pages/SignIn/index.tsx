import img1 from '../../assets/img1.webp';
import { useContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { api } from "../../services/apiClient";
import { Flex } from "@siakit/layout";
import { Card } from "@siakit/card";
import { Form, TextInput, FormHandles, PasswordInput } from "@siakit/form-unform";
import { useLoading } from '@siakit/loading';
import { Button } from '@siakit/button';
import { Text } from '@siakit/text';
import { Heading } from '@siakit/heading';
import { AuthContext } from '../../contexts/AuthContext';
import { MenuSideBar } from '../../components/MenuSideBar';

export function SignIn(){
  const history = useNavigate();
  const { signIn } = useContext(AuthContext)
  const formRef = useRef<FormHandles>(null);

  const { setLoading } = useLoading();
  const [user, setUser] = useState();

  async function handleSubmit(data: any) {
    await signIn(data);
  }


  return (
    <div style={{ backgroundImage: `url(${img1})`}}>
      <MenuSideBar/>
      <Flex
        height="100vh" 
        align="center" 
        justify="center"
        >
        <Card 
          height={350}
          width={350}
          justify="center" 
          align="center" 
          direction="column" 
          gap
          >
          <Heading size="sm">Bem-vindo, faça seu login</Heading>
          <Form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            >
            <TextInput 
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
              <Text onClick={() => history('/register')} style={{ cursor: 'pointer' }}>
                Não possui conta? Cadastre-se
              </Text>
          </Flex>
        </Card>
      </Flex>
    </div>
  )
}

function setUser(arg0: { id: any; name: any; email: any; }) {
  throw new Error("Function not implemented.");
}
