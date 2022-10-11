import { Flex, Grid } from "@atmoutsourcing/siakit";
import { MenuSideBar } from "../../components/MenuSideBar";

export function Customers(){
  return (
    <Grid columns="240px 1fr">
      <MenuSideBar />
      <Flex>
        <Flex margin>
          <p>alo1</p>
        </Flex>
      </Flex>
    </Grid>
  )
}