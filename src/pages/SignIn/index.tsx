import { Card, Flex, Text, PasswordInput, Button, Form, Input } from "@atmoutsourcing/siakit";
import img1 from '../../assets/img1.webp';
import { FormHandles } from "@unform/core";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function SignIn(){
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {
    console.log(data);
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