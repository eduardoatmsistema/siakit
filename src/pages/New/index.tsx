import { Card, Flex } from "@atmoutsourcing/siakit";
import { Header } from "../../components/Header";

export function New(){
  return (
    <Flex>
      <Header/>
      <Flex margin>
        <Card width="86vw">
          <p>teste</p>
        </Card>
      </Flex>
    </Flex>
  )
}