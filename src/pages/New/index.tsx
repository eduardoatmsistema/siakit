import { Card, Flex, Grid } from "@atmoutsourcing/siakit";
import { MenuSideBar } from "../../components/MenuSideBar";

export function New(){
  return (
    <Grid columns="240px 1fr">
      <MenuSideBar />
      <Flex>
        <Flex margin>
          <Card width="500px">
            <p>teste</p>
          </Card>
        </Flex>
      </Flex>
    </Grid>
  )
}