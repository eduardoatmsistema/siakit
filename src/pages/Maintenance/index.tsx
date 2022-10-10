import { Card, Flex, Form, Select } from "@atmoutsourcing/siakit";
import { FormHandles } from "@unform/core";
import { useRef } from "react";

export function Maintenance(){
  const formRef = useRef<FormHandles>(null);

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

  return (
      <Flex overflow="auto" flexWrap="wrap">
        <Flex gap margin flex direction="column" overflow="auto">
          <Card padding>
              <p>teste1</p>
          </Card>
            <Form ref={formRef} onSubmit={() => undefined}>
              <Select name="teste" options={[
                { value: "teste", label: "teste"},
                { value: "teste1", label: "teste2"},
                { value: "teste2", label: "teste3"},
              ]} />
            </Form>

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
  )
}