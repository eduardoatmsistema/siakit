import { Flex, Grid, Heading, Text, Button } from "@atmoutsourcing/siakit";
import { Link } from "react-router-dom";

export function Erro(){
  return (
    <>
      <Grid  columns={"1fr"} height={500} margin="50px 200px" >
        <Flex direction="column" align="center" justify="center">
          
          <Heading size="5xl">
            404
          </Heading>
          
          <Text>
            Página não encontrada.
          </Text>

          <Link style={{ textDecoration: 'none', padding: "10px"}} to="/">
            <Button  type="button">
              Voltar para página Home
            </Button>    
          </Link>

        </Flex>
      </Grid>
    </>
  )
}