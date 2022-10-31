import { useLoading } from "@siakit/loading";
import { Card } from '@siakit/card';
import { Form } from '@siakit/form-unform';
import { Flex, Grid } from "@siakit/layout";
import { Select } from '@siakit/form-components';
import { Accordion, AccordionItem } from '@siakit/accordion';
import { Button } from "@siakit/button";
import { FormHandles } from "@unform/core";
import { useRef } from "react";
import { MenuSideBar } from "../../components/MenuSideBar";

export function Maintenance(){
  const formRef = useRef<FormHandles>(null);

  const { setLoading, clearLoading } = useLoading();

  const opcoes = [
    {nome: "eduardo", titulo: "admin", id: "1"},
    {nome: "josé", titulo: "usuário", id: "2"},
    {nome: "cleber", titulo: "admin", id: "3"},
    {nome: "claudio", titulo: "usuário", id: "4"},
    {nome: "joão", titulo: "usuário", id: "5"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
    {nome: "pedro", titulo: "admin", id: "6"},
  ]
  

  function handleLoading(){
    setLoading(true);
    console.log("clicou");
    setInterval(() => {
      clearLoading();
      console.log("terminou de carregar");
    }, 3000)
  }

  return (
    <Grid columns="240px 1fr">
      <MenuSideBar />
      <Flex overflow="auto" flexWrap="wrap">
        <Flex gap margin flex direction="column" overflow="auto">
          <Card padding direction="column" height={100}>
              <p>teste1</p>
              <Flex>
                <Button 
                  type="button" 
                  onClick={handleLoading} 
                  size="sm"
                >
                  Clique para ver o Loading
                </Button>
              </Flex>
          </Card>
          <Card direction="column" height={800}>
            <Form ref={formRef} onSubmit={() => undefined} margin>
                <Select name="teste" options={[
                  { value: "teste", label: "teste"},
                  { value: "teste1", label: "teste2"},
                  { value: "teste2", label: "teste3"},
                ]} />
            </Form>
            
            <Flex margin>  
              <Accordion>
                <AccordionItem value="1" title="teste1">
                  teste
                </AccordionItem>
                <AccordionItem value="2" title="teste2">
                  teste2
                </AccordionItem>
                <AccordionItem value="3" title="teste3">
                  teste3
                </AccordionItem>
              </Accordion>
            </Flex>
          </Card>

          {/* <Card flex padding flexWrap="wrap" overflow="auto">
            <Accordion>
            {opcoes.map((pessoa) => {
              return (
                <Flex flex overflow="auto">
                
                <AccordionItem value={pessoa.id} title={`${pessoa.id} - ${pessoa.titulo} `}>
                <Flex overflow="auto" height={60} padding={15}>
                {pessoa.nome}
                </Flex>
                </AccordionItem>
                
                </Flex>
                )
              })}
              </Accordion> 
            </Card> */}
        </Flex>
      </Flex>
    </Grid>
  )
}