import { Flex, Grid } from "@atmoutsourcing/siakit";
import { MenuSideBar } from "../../components/MenuSideBar";

export function Profile(){
  return (
    <Grid columns="240px 1fr">
      <MenuSideBar />
      <Flex>
        <Flex margin>
          <p>página profile</p>
        </Flex>
      </Flex>
      </Grid>
  )
}