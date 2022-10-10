import { Accordion, AccordionItem, Card, Flex, Grid, Select } from "@atmoutsourcing/siakit";
import { query } from "firebase/firestore";
import { Header } from "../../components/Header";

export function Maintenance(){


  const opcoes = [
    {nome: "eduardo", titulo: "admin", id: "1"},
    {nome: "josé", titulo: "usuário", id: "2"},
    {nome: "cleber", titulo: "admin", id: "3"},
    {nome: "claudio", titulo: "usuário", id: "4"},
    {nome: "joão", titulo: "usuário", id: "5"},
    {nome: "pedro", titulo: "admin", id: "6"},
  ]

  return (
      <Flex>
        <Header/>
        <Flex gap margin flex direction="column">
          <Card flex height="15vh" padding>
              <p>teste1</p>
          </Card>
          <Card flex height="75vh" padding>
            <>
            <Accordion>
            {opcoes.map((pessoa) => {
              return (
                <>
                <AccordionItem value={pessoa.id} title={`${pessoa.id} - ${pessoa.titulo} `}>
                  <Flex height={40} padding={10}>
                    {pessoa.nome}
                  </Flex>
                </AccordionItem>
                </>
                )
              })}
              </Accordion> 
            </>
          </Card>
        </Flex>
      </Flex>
  )
}